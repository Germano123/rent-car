import { Response, Request } from 'express';
import { GetAllCarsUseCase } from '../../../application/usecases/car/get-all/get-all-cars.usecase';

class GetAllCarsController {
  constructor(private getAllCarsUseCase: GetAllCarsUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const car = this.getAllCarsUseCase.execute();
      return response.status(201).json(car);
    } catch (error) {
      return response.status(400).json({ error: "error.message" });
    }
  }
}

export { GetAllCarsController };
