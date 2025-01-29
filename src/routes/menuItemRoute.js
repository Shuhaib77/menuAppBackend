import express from 'express'
import try_catch from '../middlewares/tryCatch.js'
import { error_handler } from '../middlewares/globelError.js'
import { add_menuItem, menu_items } from '../controllers/menuItemController.js'


const menuItem_route=express.Router()

menuItem_route.post("/admin/menuitem",error_handler,try_catch(add_menuItem))
menuItem_route.get("/menu/menuitem/:name",error_handler,try_catch(menu_items))

export default menuItem_route