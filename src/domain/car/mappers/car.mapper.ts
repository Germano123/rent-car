import { CarDto } from '../dtos/CarDto';
import { Car } from '../entities/car.entity';

export class CarMapper {
    static toDto(entity: Car): CarDto {
        const { id } = entity;

        return { id };
    }

    static toDomain(entity: CarDto): Car {
        const { id, ...rest } = entity;
        return Car.create({ ...rest }, id);
    }
}
