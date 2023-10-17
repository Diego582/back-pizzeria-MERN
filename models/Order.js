import { model, Schema } from "mongoose";

let collection = "orders";

let schema = new Schema(
  {
    date: { type: String, required: true },
    quantity: { type: Number },
  },
  { timestamps: true }
);

let User = model(collection, schema);

export default User;
