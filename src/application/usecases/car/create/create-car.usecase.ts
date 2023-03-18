import { ICarRepository } from '../../../../domain/car/repositories/car-repository.interface';
import { CarDto } from '../dto/CarDto';
import { CreateCarDto } from '../dto/CreateCarDto';

export class CreateCarUseCase {
  constructor(private readonly carRepository: ICarRepository) {}

  async execute(car: CreateCarDto): Promise<CarDto> {
    const _car = await this.carRepository.create(car);
    return _car;
  }
}
