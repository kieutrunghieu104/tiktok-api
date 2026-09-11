import mongoose from "mongoose"
const Schema = mongoose.Schema;

const User = new Schema({
  full_name: { type: String, maxLength: 255 },
  nickname: { type: String, maxLength: 50 }
});

export default mongoose.model("User", User);