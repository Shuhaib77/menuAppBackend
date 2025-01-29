import { connect_db } from "../config/dbConnection.js";
import express from "express";
import cors from "cors";
import menu_route from "./routes/menuRoute.js";
import menuItem_route from "./routes/menuItemRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", menu_route);
app.use("/api", menuItem_route);


connect_db();

export default app;
