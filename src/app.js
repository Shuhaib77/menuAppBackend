import { connect_db } from "../config/dbConnection.js";
import express from "express";
import cors from "cors";
import menu_route from "./routes/menuRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", menu_route);


connect_db();

export default app;
