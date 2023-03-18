import { CarRepository } from '../../../../infra/database/entities/car/car.repository';
import { RemoveCarController } from '../../../../presentation/controllers/car/remove-car.controller'
import { RemoveCarUseCase } from './remove-car.usecase';

const CarsRepository = CarRepository.getInstance();
const removeCarUseCase = new RemoveCarUseCase(CarsRepository);
const removeCarController = new RemoveCarController (removeCarUseCase);

export { removeCarController };
