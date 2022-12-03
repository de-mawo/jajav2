import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import crypto from "crypto";
import bcrypt from "bcrypt";

dbConnect();

type Data = {
  error?: string;
  msg?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //TODO: Check what is the correct http method and use it
  //TODO: Is this a good way of getting params from the client on nextjs-13 req.body or must use req.headers.auth?
  //get user based on the reset token
  //   console.log(req.body);

  const { reset: token, password } = req.body;

  //   console.log(token);

  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  try {
    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });

    if (!user)
      return res.status(400).json({ error: "Token is invalid or expired." });

    const passwordHash = await bcrypt.hash(password, 12);

    user.password = passwordHash;
    (user.passwordResetToken = undefined),
      (user.passwordResetExpires = undefined);

    await user.save();

    res.json({
      msg: " Password Reset Successful!",
    });
  } catch (error: any) {
    return res.status(500).json(error);
  }
}
