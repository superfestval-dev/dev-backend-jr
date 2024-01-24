import { describe, it, expect } from "vitest";

import { client } from "./../../database/index";

import { IndexCustomersUseCase } from "./index.usecase";

describe("IndexCustomerUseCase", () => {
  it("should be able to list all customers", async () => {
    const customerUseCase = new IndexCustomersUseCase(client);
    const customers = await customerUseCase.execute();

    expect(customers).toHaveLength(customers.length);
  });
});
