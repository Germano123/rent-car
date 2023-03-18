import { ICarRepository } from '../../../../domain/car/repositories/car.repository';
import { CarDto } from '../dto/CarDto';

export class RemoveCarUseCase {
  constructor(private readonly carRepository: ICarRepository) {}

  async execute(id: string): Promise<CarDto> {
    const _car = await this.carRepository.delete(id);
    return _car;
  }
}
