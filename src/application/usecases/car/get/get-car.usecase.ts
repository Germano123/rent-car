import { ICarRepository } from '../../../../domain/car/repositories/car-repository.interface';
import { CarDto } from '../dto/CarDto';

export class GetCarUseCase {
  constructor(private readonly carRepository: ICarRepository) {}

  async execute(id: string): Promise<CarDto> {
    const _car = await this.carRepository.findById(id);
    return _car;
  }
}