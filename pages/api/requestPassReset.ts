import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import crypto from "crypto";
import { resetPassEmailTemplate } from "../../lib/resetPassEmailTemp";
import sendMail from "../../lib/sendMail";


dbConnect();


type Data = {
    error?: string;
    msg?: string;
  };
  
  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
  
    const email = req.body;
  
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "There is no account associated with this email address." });
  
    const resetToken = crypto.randomBytes(32).toString('hex')
    const passwordResetToken  = crypto.createHash("sha256").update(resetToken).digest("hex");
    //Token Valid for 30 mins
    const passwordResetExpires = Date.now() + 30 *60 *1000
  
    user.passwordResetToken = passwordResetToken;
    user.passwordResetExpires = passwordResetExpires;

    await user.save();

    const resetURL = `${req.headers["x-forwarded-proto"] || "http"}://${req.headers.host}/reset-password/${resetToken}`;

    const html = resetPassEmailTemplate( resetURL)

    try {
        await sendMail({ 
            email: user.email,
            subject: "Reset your password within 30 mins",
            html,
        });
       
        res.status(200).json({ 
            msg: "Reset Token Sent to email!",
        });
    } catch (err) {
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save();
        return res.status(500).json({ error: 'Something Went wrong'});
    }
  }