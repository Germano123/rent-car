import { Response, Request } from 'express';
import { RemoveCarUseCase } from '../../../application/usecases/car/remove/remove-car.usecase';

class RemoveCarController {
  constructor(private removeCarUseCase: RemoveCarUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;

    try {
      const car = this.removeCarUseCase.execute(id);
      return response.status(201).json(car);
    } catch (error) {
      return response.status(400).json({ error: "error.message" });
    }
  }
}

export { RemoveCarController };
