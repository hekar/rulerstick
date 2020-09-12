import { NextApiRequest, NextApiResponse } from 'next'
import { toPng } from 'jdenticon'

export default (req: NextApiRequest, res: NextApiResponse<string>) => {
  const {
    query: { hash },
  } = req
  res.statusCode = 200
  res.setHeader('Content-Type', 'image/png')
  res.end(toPng(hash, 512))
}
  