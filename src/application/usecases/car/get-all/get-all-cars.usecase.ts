import { ICarRepository } from '../../../../domain/car/repositories/car.repository';
import { CarDto } from '../dto/CarDto';

export class GetAllCarsUseCase {
  constructor(private readonly carRepository: ICarRepository) {}

  async execute(): Promise<CarDto[]> {
    // TODO: implementar a lógica de aluguel de carro

    const totalPrice = 0; // exemplo, implementar a lógica correta

    return [];
  }
}
