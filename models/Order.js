import mongoose from "mongoose";

 const OrderSchema = new mongoose.Schema({
     status: {
         type: Nuber,
         default: 0,
     },
     customer: {
         type: String,
         required: true,
         maxLength:50
     },
     address: {
         type: String,
         required: true
     },
     total: {
         type: Number,
         required: true,
     },
     method : {
         type: Number,
         required: true,

     }
     
 }, {timestamps: true});

 export default mongoose.models.Order || mongoose.model("Order", OrderSchema)