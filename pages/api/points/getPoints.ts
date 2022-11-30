import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../lib/dbConnect';
import Point from '../../../models/Point'
import {PointTypes} from '../../../types'


dbConnect();

type Data = {
  error?: string;
  msg?: string;
  points?: PointTypes[]
  result?: number;
}


export default async function getPoints(req: NextApiRequest,
    res: NextApiResponse<Data>) {

      //TODO: implement the right query param from front-end 
      const getQueryValue = req.query
      const query = Object.values(getQueryValue)

      const q = query[0]

      
      
      
    try {
      const points = await Point.find(  {name:{$regex: q}}  )
      // console.log(points);
      
          res.json({
              msg: 'success',
              points,
              result: points.length
  
          })

      
    } catch (error: any) {
      return res.status(500).json({error: error.message})
    }
  }
  