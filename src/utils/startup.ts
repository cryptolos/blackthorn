import * as dotenv from 'dotenv';
import * as express from 'express';
import IndexRoute from '../routes';
// import

class Startup {

    public app: express.Application;
    public router: express.Router;
    public routes: IndexRoute;

    constructor() {

        this.app = express();
        this.routes = new IndexRoute();
        this.router = express.Router();
        this.config();
    }

    private config(): void {

        // Initialize dotenv variables
        dotenv.config();

        // Initialize routes
        this.routes.create(this.router);
        this.app.use(this.router);
    }
}

export default new Startup();
