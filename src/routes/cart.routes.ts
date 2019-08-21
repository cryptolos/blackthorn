import {Router} from 'express';
import logger from '../utils/logger';
import {CartController} from '../controllers/cart.controller';

const cartController: CartController = new CartController();

export class CartRoutes {

    public static create(router: Router) {

        router.post('/api/v1/cart/', cartController.create);
        router.put('/api/v1/cart/:id', cartController.update);
        router.get('/api/v1/cart/:id', cartController.get);
        router.post('/api/v1/cart/:id/item', cartController.addItem);
    }
}