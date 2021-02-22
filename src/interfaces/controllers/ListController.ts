import GetList from '../../application/use_cases/GetList';
import ListRepository from '../../infraestructure/repositories/ListRepository';
import { Request, Response } from 'express';

class ListController {

    async getChapters(req: Request, res: Response): Promise<void> {
        try {
            const getList = new GetList();
            const list = await getList.getChapters(ListRepository);
            res.status(200).json(list);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }

    async getChapter(req: Request, res: Response): Promise<void> {
        try {
            const getList = new GetList();
            const { id } = req.params;
            const chapter = await getList.getChapter(id, ListRepository);
            res.status(200).json(chapter);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }

}

export default new ListController();