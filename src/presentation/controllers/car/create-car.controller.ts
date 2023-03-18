import { Response, Request } from 'express';
import { CreateCarUseCase } from '../../../application/usecases/car/create/create-car.usecase';

class CreateCarController {
  constructor(private createCarUseCase: CreateCarUseCase) {}

  handle(request: Request, response: Response): Response {
    const { brand, model } = request.body;

    try {
      const car = this.createCarUseCase.execute({ brand, model });
      return response.status(201).json(car);
    } catch (error) {
      return response.status(400).json({ error: "Some error" });
    }
  }
}

export { CreateCarController };
