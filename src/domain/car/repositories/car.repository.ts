import { CarDto } from '../../../application/usecases/car/dto/CarDto';
import { CreateCarDto } from '../../../application/usecases/car/dto/CreateCarDto';
import { UpdateCarDto } from '../../../application/usecases/car/dto/UpdateCarDto';

export interface ICarRepository {
  findByUserId(userId: string): Promise<CarDto[]>;
  findById(id: string): Promise<CarDto>;
  create(carData: CreateCarDto): Promise<CarDto>;
  update(id: string, car: UpdateCarDto): Promise<CarDto>;
  delete(id: string): Promise<CarDto>;
}
