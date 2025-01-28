import { add_menuItem_sevice } from "../services/menuItemservice";


export const add_menuItem = async (req,res) => {
    console.log(req.body);
    
  const { name, description } = req.body;
  console.log(name, description,price);

  if (!name || !description ||!price) {
    return res.status(404).json({ message: "name and descripton requird" });
  }

  const data = await add_menuItem_sevice(name,description,price);
  console.log(data);
  
  if (!data) {
    res.status(404).json({ message: "menu adding failed" });
  }
  res.status(201).json({ message: "menu created", data: data });
};
