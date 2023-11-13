import { model, Schema, Types } from "mongoose";

let collection = "commitments";

let schema = new Schema(
  {
    cart_id: { type: Types.ObjectId, ref: "carts", required: true },
    product_id: { type: Types.ObjectId, ref: "products", required: true },
    quantities: { type: String, required: true },
  },
  { timestamps: true }
);

let Commitment = model(collection, schema);

export default Commitment;
