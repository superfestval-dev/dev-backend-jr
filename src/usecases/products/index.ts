import { client } from "./../../database/index";
import { IndexProductsUseCase } from "./index.usecase";

export const indexProductsUseCase = new IndexProductsUseCase(client);
