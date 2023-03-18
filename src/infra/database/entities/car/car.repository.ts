import { CarDto } from '../../../../application/usecases/car/dto/CarDto';
import { CreateCarDto } from '../../../../application/usecases/car/dto/CreateCarDto';
import { UpdateCarDto } from '../../../../application/usecases/car/dto/UpdateCarDto';
import { Car } from '../../../../domain/car/entities/car.entity';
import { ICarRepository } from '../../../../domain/car/repositories/car.repository';

export class CarRepository implements ICarRepository {
    private users: Car[];

    private static INSTANCE: CarRepository;

    private constructor() {
        this.users = [];
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
        
        throw new Error('Method not implemented.');
    }
    
    async update(id: string, car: UpdateCarDto): Promise<CarDto> {
        throw new Error('Method not implemented.');
    }
    
    async delete(id: string): Promise<CarDto> {
        throw new Error('Method not implemented.');
    }
}