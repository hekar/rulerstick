import { createConnection, Connection, Repository } from "typeorm";
import { Flow } from "../entity/flow";

export default class FlowService {
    constructor() {
    }

    async list(orgId: number, projectId: number): Promise<Flow[]> {
        const repo = await this.repository()
        return repo.find({
            take: 10,
        })
    }

    private async repository(): Promise<Repository<Flow>> {
        const connection = await createConnection()
        const manager = connection.createEntityManager()
        const flowRepository = manager.getRepository(Flow)
        return flowRepository
    }
}
