import { Knex } from "knex";

interface Product {
  id: number;
  descricao: string;
  preco: number;
  club_price: number;
  created_at: string;
  updated_at: string;
}

export class IndexProductsUseCase {
  constructor(private client: Knex) {}

  async execute(): Promise<Product[]> {
    const products = await this.client.select().from<Product>("produtos");

    return products;
  }
}
