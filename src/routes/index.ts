import {Router} from 'express';
import { ItemRoutes } from './item.routes';
import { CartRoutes } from './cart.routes';
import { Cors } from '../middlewares/cors';
import { Authentication } from '../middlewares/authentication';
import * as bodyParser from 'body-parser';

export default class IndexRoute {

    public create(router: Router) {

        // Middleware cors
        router.use(Cors);

        // Authentication middleware
        router.all('/api/*', Authentication);

        // Support application/json type post data
        router.use(bodyParser.json());

        // Support application/x-www-form-urlencoded post data
        router.use(bodyParser.urlencoded({ extended: false }));

        // Add routes
        ItemRoutes.create(router);
        CartRoutes.create(router);
    }

}