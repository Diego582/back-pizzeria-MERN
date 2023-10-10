import { model,Schema,Types } from "mongoose";

let collection = "products";

let schema = new Schema({
    price: { type:Number, required:true },
    name: { type:String, required:true },
    photo: { type:String, required:true, default: "https://www.cicis.com/content/images/cicis/Jalapeno%20pizza.png" },
    category: { type:String, required:true },
})
let Product = model( collection,schema )
export default Product