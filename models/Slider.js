import { model, Schema, Types } from "mongoose";

let collection = "sliders";

let schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  paragraph: { type: String, required: true },
  product_id: { type: Types.ObjectId, required: true, ref: "products" },
});
let Slider = model(collection, schema);
export default Slider;
