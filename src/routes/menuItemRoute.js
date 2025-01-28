import express from 'express'
import { add_menu } from '../controllers/menuController.js'
import try_catch from '../middlewares/tryCatch.js'
import { error_handler } from '../middlewares/globelError.js'
import { add_menuItem } from '../controllers/menuItemController.js'


const menuItem_route=express.Router()

menuItem_route.post("/admin/menuItem",error_handler,try_catch(add_menuItem))
export default menuItem_route