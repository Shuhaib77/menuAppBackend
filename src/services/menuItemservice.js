

export const add_menuItem_sevice=async(name, description,price)=>{
    const menuItem =await Menu.findOne({
        name, 
        description,
        price
       })
       if(menuItem){
        throw new Error("Menu allredy existt")
       }
      const newMenuIetm = Menu({
        name:name,
        description:description,
      });
      await newMenuIetm.save();
    
      return newMenuIetm;


}