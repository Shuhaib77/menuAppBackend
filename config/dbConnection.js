import mongoose from "mongoose";

 export const connect_db = () => {
  mongoose.connect("mongodb://localhost:27017/menuList").then(() => {
    console.log("connectedd");
  }).catch((error)=>{
    console.log(error);
    

  })
};


