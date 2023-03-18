import { ICarRepository } from '../../../../domain/car/repositories/car.repository';
import { CarDto } from '../dto/CarDto';

export class RentCarUseCase {
  constructor(private readonly carRepository: ICarRepository) {}

  async execute(id: string): Promise<CarDto> {
    let _car = await this.carRepository.findById(id);
    let update = { ..._car, available: false };
    _car = await this.carRepository.update(id, update);
    return _car;
  }
}
