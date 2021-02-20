import GetList from '../../application/use_cases/GetList';
import ListRepository from '../../infraestructure/repositories/ListRepository';
import { Request, Response } from 'express';

class ListController {

    async getList(req: Request, res: Response): Promise<void> {
        try {
            const list = await GetList(ListRepository);
            res.status(200).json(list);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
}

export default new ListController();