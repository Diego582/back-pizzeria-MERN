import { model, Schema } from "mongoose";

let collection = "promotions";

let productSchema = new Schema({
    price: { type: Number, required: true },
    name: { type: String, required: true },
    photo: { type: String, required: true, default: "https://www.cicis.com/content/images/cicis/Jalapeno%20pizza.png" },
    category: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
});


let Promotion = model(collection, productSchema);

export default Promotion;
