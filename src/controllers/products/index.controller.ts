import { IndexProductsUseCase } from "./../../usecases/products/index.usecase";
import { Request, Response } from "express";

export class IndexProductsController {
  constructor(private indexProductsUseCase: IndexProductsUseCase) {}

  async index(req: Request, res: Response): Promise<Response> {
    const products = await this.indexProductsUseCase.index();

    return res.status(200).json({ products });
  }

  async findPromotionalPriceProduct(
    req: Request,
    res: Response
  ): Promise<Response> {
    const { customerId } = req.params;
    const products =
      await this.indexProductsUseCase.findPromotionalPriceByUserId(
        Number(customerId)
      );

    return res.status(200).json({ products });
  }
}
