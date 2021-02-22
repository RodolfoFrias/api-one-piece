import { Router } from 'express';
import listController from '../controllers/ListController';

class ListRoutes {
    router: Router;
    constructor(){
        this.router = Router();
        this.routes();
    }

    private routes(){
        this.router.get('/chapters', listController.getChapters);
        this.router.get('/chapter/:id', listController.getChapter)
    }

}
const listRoutes = new ListRoutes();
export default listRoutes.router;