import Menu from "../models/menuSchema.js";

export const add_menu_sevice = async (name, description) => {
  console.log(name, description);

  const menu = await Menu.findOne({
    name: name,
  });
  if (menu) {
    throw new Error("Menu allredy existt");
  }
  const newMenu = Menu({
    name,
    description,
  });
  await newMenu.save();

  return newMenu;
};


export const all_menu_service=async()=>{
   const menus= await Menu.find({})
   if(!menus){
    throw new Error("menu is emptyy")
   }
   return menus

}