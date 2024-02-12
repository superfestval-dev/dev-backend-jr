import { IndexCustomersUseCase } from "../../usecases/customers/index.usecase";
import { Request, Response } from "express";

export class IndexCustomersController {
  constructor(private indexCustomersUseCase: IndexCustomersUseCase) {}

  async execute(req: Request, res: Response): Promise<Response> {
    const customers = await this.indexCustomersUseCase.execute();

    return res.status(200).json({ customers });
  }
}
