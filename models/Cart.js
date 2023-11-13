import { model, Schema } from "mongoose";

let collection = "carts";

let schema = new Schema(
  {
    date: { type: String, required: true },
  },
  { timestamps: true }
);

let Carts = model(collection, schema);

export default Carts;
