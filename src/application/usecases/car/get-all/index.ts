import { CarRepository } from '../../../../infra/database/entities/car/car.repository';
import { GetAllCarsController } from '../../../../presentation/controllers/car/get-all-cars.controller';
import { GetAllCarsUseCase } from './get-all-cars.usecase';

const CarsRepository = CarRepository.getInstance();
const getAllCarsUseCase = new GetAllCarsUseCase(CarsRepository);
const getAllCarsController = new GetAllCarsController(getAllCarsUseCase);

export { getAllCarsController };
