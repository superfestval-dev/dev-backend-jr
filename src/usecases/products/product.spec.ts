import { describe, it, expect } from "vitest";

import { client } from "../../database";
import { IndexProductsUseCase } from "./index.usecase";

describe("IndexProducstUseCase", () => {
  it("should be able to list all products", async () => {
    const productUseCase = new IndexProductsUseCase(client);
    const products = await productUseCase.execute();

    expect(products).toHaveLength(products.length);
  });
});
