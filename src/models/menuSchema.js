import mongoose from "mongoose";

const menu_schema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    menuItems:{
        type:mongoose.Schema.ObjectId,
        ref:"MenuItem"

    }


})

const Menu=mongoose.model("Menu",menu_schema)
export default Menu