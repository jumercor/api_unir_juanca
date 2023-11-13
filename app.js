import express from "express";
import morgan from "morgan";
import api from "./src/routes/api.js";

//conexión con la bbdd
import pool from './dbconfig.js';

const app = express();

app.set("port", 4000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());


app.use("/",api)

export default app;

