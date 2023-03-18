import { CarDto } from '../dtos/CarDto';
import { Car } from '../entities/car.entity';

export class CarMapper {
    static toDto(entity: Car): CarDto {
        const { id, brand, model, available } = entity;

        return { id, brand, model, available };
    }

    static toDomain(entity: CarDto): Car {
        const { id, ...rest } = entity;
        return Car.create({ ...rest }, id);
    }
}
