import { Knex } from "knex";

interface Customer {
  nome: string;
  email: string;
  cpf: string;
  membro_clube: boolean;
  created_at: string;
  updated_at: string;
}

export class IndexCustomersUseCase {
  constructor(private client: Knex) {}

  async execute(): Promise<Customer[]> {
    const customers = await this.client.select().from<Customer>("clientes");

    return customers;
  }
}
