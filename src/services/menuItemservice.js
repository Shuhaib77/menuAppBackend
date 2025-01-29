import MenuItem from "../models/menuItemSchema.js";
import Menu from "../models/menuSchema.js";

export const add_menuItem_sevice = async (body) => {
  const { name, description, price, catogery } = body;
  console.log(name, description, price, catogery);

  const menu_item = await MenuItem.findOne({
    name: name,
  });
  if (menu_item) {
    throw new Error("Menuitem allredy existt");
  }
  const menu = await Menu.findOne({ name: catogery });
  if (!menu) {
    throw new Error("menu not found");
  }

  const new_menu_item = await MenuItem.create({
    name,
    description,
    price,
    catogery,
  });
  menu.menuItems.push(new_menu_item.id);
  await menu.save();

  return new_menu_item;
};


export const menu_items_service=async(name)=>{
    const menuitems= await MenuItem.find({catogery:name})
    if(!menuitems){
        throw new Error("this menu is emptyy")
    }
    console.log(menuitems);
    
    return menuitems
    
}
