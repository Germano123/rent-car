import { Response, Request } from 'express';
import { RentCarUseCase } from '../../../application/usecases/car/rentcar/rent-car.usecase';

class RentCarController {
  constructor(private rentCarUseCase: RentCarUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;

    try {
      const car = this.rentCarUseCase.execute(id);
      return response.status(201).json(car);
    } catch (error) {
      return response.status(400).json({ error: "error.message" });
    }
  }
}

export { RentCarController };
