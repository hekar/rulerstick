import { NextApiRequest, NextApiResponse } from 'next'
import ItemService from '../../../../../../../services/item-service'

export default async (req: NextApiRequest, res: NextApiResponse<string>) => {
  const {
    query: { orgid, pid },
  } = req

  const itemService = new ItemService()
  const items = await itemService.list(Number(orgid), Number(pid))
  res.status(200).json({ items })
}
  