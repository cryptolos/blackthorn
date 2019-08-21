import {Router} from 'express';
import logger from '../utils/logger';
import {ItemController} from '../controllers/item.controller';

const itemController: ItemController = new ItemController();

export class ItemRoutes {

    public static create(router: Router) {

        router.post('/api/v1/item/', itemController.create);
        router.put('/api/v1/item/:id', itemController.update);
        router.get('/api/v1/item/:id', itemController.get);
        router.get('/api/v1/item/', itemController.getAll);
    }
}