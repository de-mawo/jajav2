import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import bcrypt from "bcrypt";
import crypto from "crypto";
import sendMail from "../../lib/sendMail";
import { ActivateAccEmailTemplate } from "../../lib/activateAccEmailTemp";

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
  if (!validateEmail(email)) return "Email is invalid";

  const emailUser = await User.findOne({ email: email });

  if (emailUser) return "Email already exists";

  if (password.length < 5) return "Password must have 5 or more characters";
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  try {
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

  const activateToken = crypto.randomBytes(32).toString("hex");
  //  Generate an encrypted on to save into the DB
  const activateAccToken = crypto
    .createHash("sha256")
    .update(activateToken)
    .digest("hex");
  // Set expiration time for account activation in this case its 24hrs
  const activateAccTokenExpires = Date.now() + 1440 * 60 * 1000;

  const activateURL = `${req.headers["x-forwarded-proto"] || "http"}://${
    req.headers.host
  }/activate/${activateToken}`;

   
  
  const html = ActivateAccEmailTemplate(name, activateURL)

  // create new User on MongoDB
  const newUser = new User({
    name,
    surname,
    email,
    password: hashedPassword,
    activateAccToken,
    activateAccTokenExpires
  });
  await sendMail({
    email: email,
    subject: "Verify Your Email Address",
    html,
});

await newUser.save();
res.status(200).json({ msg: "Check your mail to activate your account: "  })
    
  } catch (error) {
    console.log(error);
    
    res.status(400).json({ error: "Error on registration" })
  }
 

}
