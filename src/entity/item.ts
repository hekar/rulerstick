import {Entity, Column} from "typeorm";

@Entity()
export class Item {

    @Column()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;
}
