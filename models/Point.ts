import mongoose from "mongoose"

const Schema = mongoose.Schema

const pointSchema = new Schema({
  
  bizzName: String,
  name: String,
  surname: String,
  judge: String,
  country: String,
  totalPoints: Number,
  comment: String,
  email: String,
     
},  )

const Point = mongoose.models.Point || mongoose.model("Point", pointSchema)

export default Point;