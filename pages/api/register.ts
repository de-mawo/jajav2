import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import bcrypt from "bcrypt";

interface ResponseData {
  error?: string;
  msg?: object | string;
}

dbConnect();

const validateEmail = (email: string): boolean => {
  const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regEx.test(email);
};

const validateFormData = async (email: string, password: string) => {
  if (!validateEmail(email)) return "Email is invalid" 
  

  const emailUser = await User.findOne({ email: email });

  if (emailUser)  return "Email already exists" 
  

  if (password.length < 5)  return "Password must have 5 or more characters" 
  
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  //Validate if its a POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: " HTTP Method not allowed " });
  }

  const { name, password, email, surname } = req.body;

  if (!name || !password || !email || !surname)
    return res.status(400).json({ error: "Please add all the fields." });

  const errMsg = await validateFormData(email, password);
  if (errMsg) {
    return res.status(400).json({ error: errMsg });
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 12);

  // create new User on MongoDB
  const newUser = new User({
    name,
    surname,
    email,
    password: hashedPassword,
  });

  await newUser
    .save()
    .then(() =>
      res.status(200).json({ msg: "Successfuly created new User: " + newUser })
    )
    .catch((err: string) =>
      //TODO: remove the text "Error on api/register" that should not be sent to the frontend
      res.status(400).json({ error: "Error on registration': " + err })
    );
  // console.log(newUser);
}
