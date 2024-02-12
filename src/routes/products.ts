import { indexProductsController } from "../controllers/products/index";
import { Router } from "express";

export const products = Router();

products
  .get("/products", (req, res) => indexProductsController.index(req, res))
  .get("/products/club-price/:customerId", (req, res) =>
    indexProductsController.findPromotionalPriceProduct(req, res)
  );
