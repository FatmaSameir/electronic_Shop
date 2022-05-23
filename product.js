const Product = require('../model/product');


addproduct = function (req, res, next) {
    const product = new Product({
        productname: req.body. productname,
        productnumper: req.body.productnumper,
        customer:req.body.customer,
       
    });
    product.save().
        then(resault => {
            if (resault) {
                res.status(200).json({
                    massage: 'added success',
                });
            } else {
                res.status(400).json({
                    massage: ' added Failed'
                });
            }
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

getproduct = function (req, res, next) {
    Product.find().then(resault => {
            res.status(200).json({
                massage: resault
            });
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}


module.exports = {
    addproduct: addproduct,
    getproduct: getproduct,

}