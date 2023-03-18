import { Router } from 'express';
import { carRouter } from './car-routes';

const routes = Router();

routes.use('/', (req, res) => {
    res.send("Hello World!");
});

routes.use('/cars', carRouter);

export { routes };
