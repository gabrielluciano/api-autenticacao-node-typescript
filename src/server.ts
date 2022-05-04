import "dotenv/config";
import express from "express";

import addMiddlewares from "./config/middlewares";

const port = process.env.APP_PORT || 3000;
const app = express();
addMiddlewares(app);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
