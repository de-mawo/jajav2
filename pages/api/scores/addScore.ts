/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt';
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
  const token = await getToken({ req })

  // console.log(token?.role);

  try {
    if (token?.role !== "admin" ) return res.status(400).json({ error: "You're  not authorized to award scores!" });
    const { email, name, surname, bizzName, country, Average } = req.body

    const newScore = new Score({ 
      email,  name, surname, bizzName, country, Average
    })
    
    await newScore.save()
    res.json({msg: "Score Added Successfully"})
  } catch (error: any) {
    return res.status(500).json(error)
  }
  
}

