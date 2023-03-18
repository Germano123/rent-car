import { CarRepository } from '../../../../infra/database/repository/car/car.repository';
import { GetCarController } from '../../../../presentation/controllers/car/get-car.controller';
import { GetCarUseCase } from './get-car.usecase';

const CarsRepository = CarRepository.getInstance();
const getCarUseCase = new GetCarUseCase(CarsRepository);
const getCarController = new GetCarController(getCarUseCase);

export { getCarController };
