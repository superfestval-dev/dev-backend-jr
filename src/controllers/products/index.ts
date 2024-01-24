import { indexProductsUseCase } from "../../usecases/products";
import { IndexProductsController } from "./index.controller";

export const indexProductsController = new IndexProductsController(
  indexProductsUseCase
);
