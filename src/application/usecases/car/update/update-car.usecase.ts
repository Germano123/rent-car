import { ICarRepository } from '../../../../domain/car/repositories/car.repository';
import { CarDto } from '../dto/CarDto';
import { UpdateCarDto } from '../dto/UpdateCarDto';

export class UpdateCarUseCase {
  constructor(private readonly carRepository: ICarRepository) {}

  async execute(id: string, car: UpdateCarDto): Promise<CarDto> {
    const _car = await this.carRepository.update(id, car);
    return _car;
  }
}
