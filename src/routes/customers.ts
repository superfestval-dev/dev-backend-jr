import { indexCustomersController } from "../controllers/customers/index";
import { Router } from "express";

export const customers = Router();

customers.get("/customers", (req, res) =>
  indexCustomersController.execute(req, res)
);
