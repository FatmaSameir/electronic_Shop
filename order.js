const Order = require('../model/order');


addorder = function (req, res, next) {
    const order = new Order({
        ordername: req.body. ordername,
        ordernumper: req.body. ordernumper,
       
    });
    order.save().
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

getorder = function (req, res, next) {
    Order.find().then(resault => {
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
    addorder: addorder,
    getorder: getorder,

}