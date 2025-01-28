import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
 export const connect_db = () => {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("connectedd");
  }).catch((error)=>{
    console.log(error);
    

  })
};


