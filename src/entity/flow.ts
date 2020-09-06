import {Entity, Column} from "typeorm";

@Entity()
export class Flow {

    @Column()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;
}
