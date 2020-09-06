import {Entity, Column} from "typeorm";

@Entity()
export class Feed {

    @Column()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;
}
