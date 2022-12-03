import mongoose from "mongoose"

const Schema = mongoose.Schema

const scoreSchema = new Schema({
  
  bizzName: String,
  name: String,
  surname: String,
  email: String,
  country: String,
  Average: Number,

     
},  )

const Score = mongoose.models.Score || mongoose.model("Score", scoreSchema)

export default Score;