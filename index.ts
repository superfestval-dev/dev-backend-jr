import cors from "cors";
import express from "express";

import { env } from "./src/env";

import { customers } from "./src/routes/customers";
import { products } from "./src/routes/products";

const app = express();

app.use(cors());
app.use(express.json());

app.use(products);
app.use(customers);

app.listen(env.PORT, () =>
  console.log(`Server is running at por ${env.PORT} 🔥`)
);
