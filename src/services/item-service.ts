import { createConnection, Connection, Repository } from "typeorm";
import { Item } from "../entity/item";

export default class ItemService {
    constructor() {
    }

    async list(orgId: number, projectId: number): Promise<Item[]> {
        const repo = await this.repository()
        return repo.find({
            take: 10,
        })
    }

    private async repository(): Promise<Repository<Item>> {
        const connection = await createConnection()
        const manager = connection.createEntityManager()
        return manager.getRepository(Item)
    }
}
