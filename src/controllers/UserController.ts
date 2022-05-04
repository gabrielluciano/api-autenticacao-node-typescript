import { Request, Response } from "express";

import User from "../models/User";

async function save(req: Request, res: Response) {
  const user: User = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirm_password: req.body.confirm_password
  };
}

export default {
  save
}