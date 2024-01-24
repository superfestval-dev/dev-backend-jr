import { client } from "../../database";
import { IndexCustomersUseCase } from "./index.usecase";

export const indexCustomersUseCase = new IndexCustomersUseCase(client);
