import { indexCustomersUseCase } from "../../usecases/Customers";
import { IndexCustomersController } from "./index.controller";

export const indexCustomersController = new IndexCustomersController(
  indexCustomersUseCase
);
