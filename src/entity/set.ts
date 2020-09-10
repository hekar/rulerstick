import {Entity, Column} from "typeorm";

@Entity()
export class Set {

    @Column()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;
}
