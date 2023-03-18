import { CarDto } from '../../../../application/usecases/car/dto/CarDto';
import { CreateCarDto } from '../../../../application/usecases/car/dto/CreateCarDto';
import { UpdateCarDto } from '../../../../application/usecases/car/dto/UpdateCarDto';
import { Car } from '../../../../domain/car/entities/car.entity';
import { CarMapper } from '../../../../domain/car/mappers/car.mapper';
import { ICarRepository } from '../../../../domain/car/repositories/car-repository.interface';

export class CarRepository implements ICarRepository {
    private cars: Car[];

    private static INSTANCE: CarRepository;

    private constructor() {
        this.cars = [];
    }

    public static getInstance(): CarRepository {
        if (!CarRepository.INSTANCE) {
            CarRepository.INSTANCE = new CarRepository();
        }

        return CarRepository.INSTANCE;
    }

    async findByUserId(userId: string): Promise<CarDto[]> {
        throw new Error('Method not implemented.');
    }
    
    async findById(id: string): Promise<CarDto> {
        throw new Error('Method not implemented.');
    }
    
    async create(car: CreateCarDto): Promise<CarDto> {
        const entity = Car.create({ 
            brand: car.brand,
            model: car.model,
            available: false,
        });
        this.cars.push(entity);
        return CarMapper.toDto(entity);
    }
    
    async update(id: string, car: UpdateCarDto): Promise<CarDto> {
        throw new Error('Method not implemented.');
    }
    
    async delete(id: string): Promise<CarDto> {
        throw new Error('Method not implemented.');
    }
}