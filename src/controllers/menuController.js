import { add_menu_sevice } from "../services/menuService.js";

export const add_menu = async (req,res) => {
    console.log(req.body);
    
  const { name, description } = req.body;
  console.log(name, description);

  if (!name || !description) {
    return res.status(404).json({ message: "name and descripton requird" });
  }

  const data = await add_menu_sevice(name,description);
  console.log(data);
  
  if (!data) {
    res.status(404).json({ message: "menu adding failed" });
  }
  res.status(201).json({ message: "menu created", data: data });
};

export const menu_items= async (req,res) => {
  const { name } = req.body;
  console.log(name);
if (!name) {
    return res.status(404).json({ message: "name and descripton requird" });
  }
  const data = await menu_items_service(name);
  console.log(data);
  
  if (!data) {
    res.status(404).json({ message: "menu adding failed" });
  }
  res.status(201).json({ message: "menu created", data: data });
};
