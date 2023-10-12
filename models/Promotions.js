import { model, Schema } from "mongoose";

let collection = "promotions";

let productSchema = new Schema({
    products:{ type: Array, required: true },
    discount: { type: Number, required: true },
    detail: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
},
    {timestamps:true}
);


let Promotion = model(collection, productSchema);

export default Promotion;
