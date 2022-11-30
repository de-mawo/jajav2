/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../lib/dbConnect';
import Score from '../../../models/Score'


dbConnect();

type Data = {
  error?: string;
  msg?: string;
}




export default async function addPoints(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { name, surname, bizzName, country, Average } = req.body

    const newScore = new Score({ 
         name, surname, bizzName, country, Average
    })
    
    await newScore.save()
    res.json({msg: "Score Added Successfully"})
  } catch (error: any) {
    return res.status(500).json(error)
  }
  
}

