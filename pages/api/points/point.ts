/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../lib/dbConnect';
import Point from '../../../models/Point'


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
    const { comment, name, surname, bizzName, country, totalPoints, judge } = req.body

    const newPoint = new Point({ 
        comment, name, surname, bizzName, country, totalPoints, judge
    })
    
    await newPoint.save()
    res.json({msg: "Grade Added Successfully"})
  } catch (error: any) {
    return res.status(500).json(error)
  }
  
}

