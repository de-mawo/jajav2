/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt';
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
  // const token = await getToken({ req })

  // console.log(token);
  

  // console.log(token?.role);
  
  try {
   

    const { comment, name, surname, bizzName, country, totalPoints, judge,email } = req.body

    const newPoint = new Point({ 
        comment, name, surname, bizzName, country, totalPoints, judge, email
    })
    
    await newPoint.save()
    res.json({msg: "Grade Added Successfully"})
  } catch (error: any) {
    return res.status(500).json(error)
  }
  
}

