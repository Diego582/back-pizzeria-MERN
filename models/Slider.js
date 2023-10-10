import { model, Schema, Types } from "mongoose";


let collection = 'sliders'

let schema = new Schema({
    title: { type: String, required: true, default:'Delicious' },
    description: { type: String, required: true, default: 'food for health'  },
    paragraph: { type: String, required: true, default:"We work closely with our team of artisan  in Italy utilizing sustainable  materials and processes"},
    product_id: { type: Schema.Types.ObjectId, required: true, ref: "Products" },

})
let Slider = model(collection, schema)

export default Slider

