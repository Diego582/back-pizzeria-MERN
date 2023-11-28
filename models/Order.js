import { model, Schema, Types } from "mongoose";
import Product from "./Product.js";
let collection = "orders";

let schema = new Schema(
  {
    cart_id: { type: Types.ObjectId, ref: "carts", required: true },
    prod: { type: [Product.schema], required: true },
    quantities: { type: String, required: true },
  },
  { timestamps: true }
);

let Order = model(collection, schema);

export default Order;
