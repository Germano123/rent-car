import { Response, Request } from 'express';
import { GetCarUseCase } from '../../../application/usecases/car/get/get-car.usecase';

class GetCarController {
  constructor(private getCarUseCase: GetCarUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;

    try {
      const car = this.getCarUseCase.execute(id);
      return response.status(201).json(car);
    } catch (error) {
      return response.status(400).json({ error: "error.message" });
    }
  }
}

export { GetCarController };
