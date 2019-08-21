import ItemService from '../services/item.service';
import { Request, Response } from 'express';

const itemService = new ItemService();

export class ItemController {

    async create(req: Request, res: Response) {
        try {
            const item = await itemService.create(req.body);
            return res.status(200).json({ status: 200, data: item });
        } catch (e) {
            return res.status(e.statusCode || 500).json({ status: e.statusCode || 500, message: e.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const item = await itemService.update(req.params.id, req.body);
            // item
            return res.status(200).json({ status: 200, data: item });
        } catch (e) {
            return res.status(e.statusCode || 500).json({ status: e.statusCode || 500, message: e.message });
        }
    }

    async get(req: Request, res: Response) {
        try {
            const item = await itemService.get(req.params.id);
            return res.status(200).json({ status: 200, data: item });
        } catch (e) {
            return res.status(e.statusCode || 500).json({ status: e.statusCode || 500, message: e.message });
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const item = await itemService.getAll();
            return res.status(200).json({ status: 200, data: item });
        } catch (e) {
            return res.status(e.statusCode || 500).json({ status: e.statusCode || 500, message: e.message });
        }
    }
}
