import { CarRepository } from '../../../../infra/database/repository/car/car.repository';
import { CreateCarController } from '../../../../presentation/controllers/car/create-car.controller';
import { CreateCarUseCase } from './create-car.usecase';

const carsRepository = CarRepository.getInstance();
const createCarUseCase = new CreateCarUseCase(carsRepository);
const createCarController = new CreateCarController(createCarUseCase);

const res = createCarController.handle({ body: { brand: "some brand", model: "some model" } } as any, {} as any)
console.log(res);

export { createCarController };
