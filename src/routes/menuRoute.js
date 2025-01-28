import express from 'express'
import { add_menu } from '../controllers/menuController.js'
import try_catch from '../middlewares/tryCatch.js'
import { error_handler } from '../middlewares/globelError.js'


const menu_route=express.Router()

menu_route.post("/admin/menu",error_handler,try_catch(add_menu))
export default menu_route