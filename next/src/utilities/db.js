import mongoose from "mongoose";
import {dotenv} from "dotenv"
// dotenv.config()
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
  } catch (error) {
    console.log(error.message)
    throw new Error("Connection failed");
  }
};

export default connect;