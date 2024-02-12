import { Knex } from "knex";

interface Product {
  id: number;
  descricao: string;
  preco: number;
  club_price: number;
  created_at: string;
  updated_at: string;
}

interface Customer {
  nome: string;
  email: string;
  cpf: string;
  membro_clube: boolean;
}

export class IndexProductsUseCase {
  constructor(private client: Knex) {}

  async index(): Promise<Product[]> {
    // list all products
    return [];
  }

  async findPromotionalPriceByUserId(customerId: number): Promise<Product[]> {
    // list all club products by user id
    return [];
  }
}
