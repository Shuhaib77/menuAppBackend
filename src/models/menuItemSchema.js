import mongoose from "mongoose";

const menu_item__schema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

const MenuItem = mongoose.model("MenuItem", menu_item__schema);
export default MenuItem ;
