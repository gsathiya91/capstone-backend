const productSchema = require('../models/Products')

const getProducts = async (req, res) => {

    try {
        const Product = await productSchema.find({});

        if (Product) {
            res.json(Product)
        }
    } catch (error) {
        console.log(error)
    }

};

const createProducts = async(req,res) => {
    try {
       const Product = new productSchema({
           name: req.body.name,
           description:req.body.description,
           price:req.body.price,
           countInStock:req.body.countInStock,
           imageUrl:req.body.imageUrl
       })
       
      const createdProduct = await Product.save()
      if(createdProduct) {
          res.send(createdProduct)
      }
    
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getProducts, createProducts}
