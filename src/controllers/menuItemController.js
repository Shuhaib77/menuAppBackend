import {
  add_menuItem_sevice,
  menu_items_service,
} from "../services/menuItemservice.js";

export const add_menuItem = async (req, res) => {
  console.log(req.body);

  const { name, description, price, catogery } = req.body;
  console.log(name, description, price, catogery);

  if (!name || !description || !price || !catogery) {
    return res
      .status(404)
      .json({ message: "name,descripton,price,catogery are requird" });
  }
  const body = req.body;
  const data = await add_menuItem_sevice(body);
  console.log(data);

  if (!data) {
    res.status(404).json({ message: "menuitem adding failed" });
  }
  res.status(201).json({ message: "menuitem  created", data: data });
};

//get specific menu itemss

export const menu_items = async (req, res) => {
  const { name } = req.params;
  console.log(name);
  if (!name) {
    return res.status(404).json({ message: "name and descripton requird" });
  }
  const data = await menu_items_service(name);
  console.log(data);

  if (!data) {
    res.status(404).json({ message: "this menu items not found" });
  }
  res.status(200).json({ message: "menuitems finded", data: data });
};
