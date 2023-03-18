import { CarRepository } from '../../../../infra/database/entities/car/car.repository';
import { UpdateCarController } from '../../../../presentation/controllers/car/update-car.controller';
import { UpdateCarUseCase } from './update-car.usecase';

const CarsRepository = CarRepository.getInstance();
const updateCarUseCase = new UpdateCarUseCase(CarsRepository);
const updateCarController = new UpdateCarController(updateCarUseCase);

export { updateCarController };
