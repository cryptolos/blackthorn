import { Request, Response } from 'express';
import CartService from '../services/cart.service';

const cartService = new CartService();

export class CartController {

    async create(req: Request, res: Response) {
        try {
            const cart = await cartService.create();
            return res.status(200).json({ status: 200, data: cart });
        } catch (e) {
            return res.status(e.statusCode || 500).json({ status: e.statusCode || 500, message: e.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const item = await cartService.update(req.params.id, req.body);
            // item
            return res.status(200).json({ status: 200, data: item });
        } catch (e) {
            return res.status(e.statusCode || 500).json({ status: e.statusCode || 500, message: e.message });
        }
    }

    async get(req: Request, res: Response) {
        try {
            const item = await cartService.get(req.params.id);
            return res.status(200).json({ status: 200, data: item });
        } catch (e) {
            return res.status(e.statusCode || 500).json({ status: e.statusCode || 500, message: e.message });
        }
    }

    async addItem(req: Request, res: Response) {
        try {
            const cart = await cartService.addItem(req.params.id, req.body);
            return res.status(200).json({ status: 200, data: cart });
        } catch (e) {
            return res.status(e.statusCode || 500).json({ status: e.statusCode || 500, message: e.message });
        }
    }
}
