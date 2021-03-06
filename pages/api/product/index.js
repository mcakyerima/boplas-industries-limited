import dbConnect from "../../../utilities/dbConnect";
import Product from "../../../models/Product";

export default async function handler(req, res) {
    const { method } = req;

    dbConnect()

    if (method === 'GET') {
        try{
            const products = await  Product.find()
            res.status(200).json(products) 

        }catch(error){
            res.status(500).json(error)
        }
    }
    if (method === 'POST') {
        try{
            // collect data from our api and push to mongoose Schema
            const product = await Product.create(req.body)
            console.log(typeof req.body.colors )
            res.status(201).json(product)

        }catch(error){
            // return respond status as error
            res.status(500).json(error);
            console.log(error);  

        }
    }
}