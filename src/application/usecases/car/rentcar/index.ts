import { CarRepository } from '../../../../infra/database/entities/car/car.repository';
import { RentCarController } from '../../../../presentation/controllers/car/Rent-car.controller';
import { RentCarUseCase } from './rent-car.usecase';

const CarsRepository = CarRepository.getInstance();
const rentCarUseCase = new RentCarUseCase(CarsRepository);
const rentCarController = new RentCarController(rentCarUseCase);

export { rentCarController };
