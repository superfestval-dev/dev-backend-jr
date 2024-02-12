import { describe, it, expect } from "vitest";

import { client } from "../../database";
import { IndexProductsUseCase } from "./index.usecase";

describe("IndexProducstUseCase", () => {
  it("should be able to list all products", async () => {
    const productUseCase = new IndexProductsUseCase(client);
    const products = await productUseCase.index();

    expect(products).toHaveLength(products.length);
  });

  it("should be able to list all products with a promotional price by user id", async () => {
    const productUseCase = new IndexProductsUseCase(client);
    const products = await productUseCase.findPromotionalPriceByUserId(1);

    expect(products.length).toBe(4);
  });
});
