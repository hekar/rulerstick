import { createConnection, Connection, Repository } from "typeorm";
import { Feed } from "../entity/feed";

export default class FeedService {
    constructor() {
    }

    async list(orgId: number, flowId: number): Promise<Feed[]> {
        const repo = await this.repository()
        return repo.find({
            take: 10,
        })
    }

    private async repository(): Promise<Repository<Feed>> {
        const connection = await createConnection()
        const manager = connection.createEntityManager()
        return manager.getRepository(Feed)
    }
}
