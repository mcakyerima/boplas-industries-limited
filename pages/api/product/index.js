import dbConnect from "../../../utilities/dbConnect";
import Product from "../../../models/Product";

export default async function handler(req, res) {
    const { method } = req;
    dbConnect()

    if (method === 'GET') {}
    if (method === 'POST') {
        try{
            // collect data from our api and push to mongoose Schema
            const product = await Product.create(req.body)
            res.status(200).json(product)

        }catch(error){
            // return respond status as error
            res.status(500).json(error);
            console.log(error);  

        }
    }
}