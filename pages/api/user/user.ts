// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User'
import { UserTypes } from '../../../types';


dbConnect();

type Data = {
  error?: string;
  msg?: string;
  users: UserTypes[];
  result: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //TODO: implement the right query param from front-end 
  const getQueryValue = req.query
  const query = Object.values(getQueryValue)

  const q = query[0]

  console.log(q);
  

  try {

    const users = await User.find( {name:{$regex: q}} ).select('-password')
   
    
  res.status(200).json({users, result: users.length})
  } catch (error: any) {
    return res.status(500).json(error)
  }
  
}

