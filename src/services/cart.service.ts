import * as payload from 'payload-validator';
import { db } from '../utils/db';
import ItemService from './item.service';
import ApiError from '../utils/apiError';
const itemService = new ItemService();

export default class CartService {

    public async create(): Promise<any> {
        const result = await db.query(`INSERT INTO carts (total) VALUES (0)`);
        const cart = await this.get(result.insertId)
        return cart;
    }

    public async update(id: any, params: any): Promise<any> {

        const validate = payload.validator(params, {discount: '', tax: ''}, [], false);

        if (validate.success) {
            // Get Item to validate it exists
            await this.get(id);

            await db.query('UPDATE carts SET ? WHERE id = ?', [params, id]);
            await this.updateTotals(id);
            return await this.get(id);
        }
        throw new ApiError(validate.response.errorMessage );
    }

    public async addItem(id: any, params: any): Promise<any> {
        const validate = payload.validator(params, {item_id: '', quantity: ''}, ['item_id', 'quantity'], false);

        if (validate.success) {
            // Get cart and item to validate they exists
            await itemService.get(params.item_id);

            params.cart_id = id;

            await db.query('INSERT INTO cart_items SET ? ON DUPLICATE KEY UPDATE quantity = quantity + ?;', [params, params.quantity]);

            await this.updateTotals(id);
            const cart = await this.get(id);

            return cart;
        }
        throw new ApiError(validate.response.errorMessage );
    }

    public async get(id: any): Promise<any> {
        const cart = await db.query('SELECT *, null as items FROM carts WHERE id = ?', [id]);

        if (cart.length > 0) {
            const items = await this.getItems(id);
            cart[0].items = items;

            return cart[0];
        } else {
            throw new ApiError('Cart not found');
        }
    }

    public async getItems(id: any): Promise<any> {
        const items = await db.query('SELECT item_id, quantity FROM cart_items WHERE cart_id = ?', [id]);
        return items;
    }

    public async updateTotals(id: any): Promise<any> {
        await db.query('UPDATE carts SET total_net = (SELECT SUM(items.price*cart_items.quantity) ' +
                        'from cart_items LEFT JOIN items on cart_items.item_id = items.id WHERE cart_items.cart_id = carts.id) WHERE id = ?', [id]);
        await db.query('UPDATE carts SET total = total_net + (total_net * tax / 100) - (total_net * discount / 100) WHERE id = ?', [id]);
    }
}