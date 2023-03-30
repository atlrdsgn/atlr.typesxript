/** @format */

import type {NextApiRequest, NextApiResponse} from 'next'
/**
 *
 * Next.js API routes provide an easy way to
 * build API endpoints with Serverless Functions.
 *
 * read more: https://nextjs.org/docs/api-routes/introduction
 */

type Data = {
  output: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  req.query
  res.status(200).json({output: 'This is your API response'})
}
