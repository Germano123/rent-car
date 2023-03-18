import { RentCarUseCase } from './RentCarUseCase';
import { CarRepositoryMemory } from '../../infra/repositories/CarRepositoryMemory';

const carRepository = new CarRepositoryMemory();
const rentCarUseCase = new RentCarUseCase(carRepository);

export { rentCarUseCase };
