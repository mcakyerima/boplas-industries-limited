import mongoose from "mongoose";

 const ProductSchema = new mongoose.Schema({
     prices: {
         type: [Number],
         required: true,
     },
     title: {
         type: String,
         required: true,
         maxlength:50
     },
     desc: {
         type: String,
         required: true
     },
     img: {
         type: String,
         required: true,
     },
     colors : [{type: [],
                default: [],
                required: true}]
     
 }, {timestamps: true});

 export default mongoose.models.Product || mongoose.model("Product", ProductSchema);