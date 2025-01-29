
import { add_menu_sevice, all_menu_service } from "../services/menuService.js";

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


export const all_menu = async (req, res) => {
//   const { name } = req.params;
//   console.log(name);
//   if (!name) {
//     return res.status(404).json({ message: "name and descripton requird" });
//   }
  const data = await all_menu_service();
//   console.log(data);

  if (!data) {
    res.status(404).json({ message: "menu finding failed" });
  }
  res.status(200).json({ message: "menus finded", data: data });
};
