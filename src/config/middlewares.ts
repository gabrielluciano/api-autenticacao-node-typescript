import express, { Express } from "express";
import routes from "./routes";
import cors from "cors";

function addMiddlewares(app: Express) {
  app.use(cors());
  app.use(express.json());
  app.use(routes);
}

export default addMiddlewares;