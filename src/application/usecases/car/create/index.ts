import { CarRepository } from '../../../../infra/database/entities/car/car.repository';
import { CreateCarController } from '../../../../presentation/controllers/car/create-car.controller';
import { CreateCarUseCase } from './create-car.usecase';

const CarsRepository = CarRepository.getInstance();
const createCarUseCase = new CreateCarUseCase(CarsRepository);
const createCarController = new CreateCarController(createCarUseCase);

export { createCarController };
