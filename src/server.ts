import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import listRoutes from './interfaces/routes/ListRoutes';

export class Server {
    private app: express.Application;
    private PORT: number | string;

    constructor(){
        this.PORT = process.env.PORT || 3000;
        this.app = express();
        this.config();
        this.routes();
    }

    private config() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(cors())
    }

    private routes(){
        this.app.use('/', listRoutes);
    }

    public start(){
        this.app.listen(this.PORT, () => console.log('Server is running on port', this.PORT));
    }
}