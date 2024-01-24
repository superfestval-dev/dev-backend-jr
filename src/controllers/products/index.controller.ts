import { IndexProductsUseCase } from "./../../usecases/products/index.usecase";
import { Request, Response } from "express";

export class IndexProductsController {
  constructor(private indexProductsUseCase: IndexProductsUseCase) {}

  async execute(req: Request, res: Response): Promise<Response> {
    const products = await this.indexProductsUseCase.execute();

    return res.status(200).json({ products });
  }
}
