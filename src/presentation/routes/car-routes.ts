import { Router } from 'express';

import { createCarController } from '../../application/usecases/car/create/index';
import { updateCarController } from '../../application/usecases/car/update/index';
import { getAllCarsController } from '../../application/usecases/car/get-all/index';
import { getCarController } from '../../application/usecases/car/get/index';
import { removeCarController } from '../../application/usecases/car/remove/index';
import { rentCarController } from '../../application/usecases/car/rentcar/index';

const carRouter = Router();

carRouter.post('/create-car', (req, res) => {
    console.log("Wuz here");
    // createCarController.handle
    res.send("Been here");
});

carRouter.get('/get-car/:id', getCarController.handle);
carRouter.get('/get-all-cars', getAllCarsController.handle);
carRouter.patch('/update-car/:id', updateCarController.handle);
carRouter.delete('/remove-car/:id', removeCarController.handle);
carRouter.post('/rent-car', rentCarController.handle);

export { carRouter };
