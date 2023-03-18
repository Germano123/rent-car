import { Response, Request } from 'express';
import { UpdateCarUseCase } from '../../../application/usecases/car/update/update-car.usecase';

class UpdateCarController {
  constructor(private updateCarUseCase: UpdateCarUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;
    const { name, email } = request.body;

    try {
      const car = this.updateCarUseCase.execute(id, { name, email });
      return response.status(201).json(car);
    } catch (error) {
      return response.status(400).json({ error: "error.message" });
    }
  }
}

export { UpdateCarController };
