import * as payload from 'payload-validator';
import { db } from '../utils/db';
import ApiError from '../utils/apiError';

export default class ItemService {

    public async create(params: any): Promise<any> {

        const validate = payload.validator(params, {name: '', price: ''}, ['name', 'price'], false);

        if (validate.success) {
            const result = await db.query(`INSERT INTO items SET ?`, [params]);
            return this.get(result.insertId);
        }
        throw new ApiError(validate.response.errorMessage );
    }

    public async update(id: any, params: any): Promise<any> {

        const validate = payload.validator(params, {name: '', price: ''}, [], false);

        if (validate.success) {
            // Get Item to validate it exists
            await this.get(id);

            await db.query('UPDATE items SET ? WHERE id = ?', [params, id]);
            return await this.get(id);
        }
        throw new ApiError(validate.response.errorMessage );
    }

    public async get(id: any): Promise<any> {
        const item = await db.query('SELECT * FROM items WHERE id = ?', [id]);
        if (item.length > 0) {
            return item[0];
        }

        throw new ApiError('Item not found');
    }

    public async getAll(): Promise<any> {
        const items = await db.query('SELECT * FROM items');
        return items;
    }
}