import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import Score from "../../../models/Score";
import { ScoreTypes } from "../../../types";

dbConnect();

type Data = {
  error?: string;
  msg?: string;
  scores?: ScoreTypes[];
  result?: number;
};

export default async function getPoints(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const getQueryValue = req.query;
  const query = Object.values(getQueryValue);

  const q = query[0];
  try {
    const scores = await Score.find({ email: { $regex: q } });
    // console.log(points);

    res.json({
      msg: "success",
      scores,
      result: scores.length,
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
