import { indexProductsController } from "../controllers/products/index";
import { Router } from "express";

export const products = Router();

products.get("/products", (req, res) =>
  indexProductsController.execute(req, res)
);
