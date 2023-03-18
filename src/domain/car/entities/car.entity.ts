import { Entity } from "../../../core/domain/entity";

type ICarProps = {
    brand: string;
    model: string;
    // year: string;
    // plate: string;
    // color: string;
    // mileage: string;
    // dailyPrice: string;
    available: boolean;
};

type ICarBody = {
    id: string;
    brand: string;
    model: string;
    // year: string;
    // plate: string;
    // color: string;
    // mileage: string;
    // dailyPrice: string;
    available: boolean;
};

export class Car extends Entity<ICarProps> {
    private constructor(props: ICarProps, id?: string) {
        props.available = false;
        super(props, id);
    }

    get brand() {
        return this.props.brand;
    }

    get model() {
        return this.props.model;
    }

    get available() {
        return this.props.available;
    }

    static create(props: ICarProps, id?: string) {
        const entity = new Car(props, id);
        return entity;
    }

    public update(body: ICarBody) {
        Object.assign(this.props, body);
    }
}
