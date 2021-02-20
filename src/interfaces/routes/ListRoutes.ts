import { Router } from 'express';
import listController from '../controllers/ListController';

class ListRoutes {
    router: Router;
    constructor(){
        this.router = Router();
        this.routes();
    }

    private routes(){
        this.router.get('/list', listController.getList);
    }

}
const listRoutes = new ListRoutes();
export default listRoutes.router;