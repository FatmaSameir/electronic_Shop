const Customer = require('../model/customer');


addcustomer = function (req, res, next) {
    const customer = new Customer({
        customername: req.body.customername,
        address: req.body.address,
        phone : req.body.phone,
        country: req.body.country,
        product: req.body.product,
        order: req.body.order
    });
    customer.save().
        then(resault => {
            if (resault) {
                res.status(200).json({
                    massage: 'added success',
                    resault:resault 
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

getcustomer = function (req, res, next) {
    Customer.find().then(resault => {
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

getonecustomer = function(req, res, next) {
    Customer.find({ _id: req.params.id }).
        then(resault => {
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

updatecustomer = function (req, res, next) {
    const newcustomer = {
        customername: req.body.customername,
        address: req.body.address,
        phone : req.body.phone,
        country: req.body.country,
    }
    Customer.findByIdAndUpdate({ _id: req.params.id }, { $set: newcustomer }).
        then(resault => {
            res.status(200).json({
                massage: 'updated Success',
            });
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

deletecustomer = function (req, res, next) {
    Customer.deleteOne({ _id: req.params.id }).
        then(resault => {
            res.status(200).json({
                massage: 'deleted Success',
            });
        }).
        catch(err => {
            res.status(404).json({
                massage: err
            });
        });
}

module.exports = {
    addcustomer: addcustomer,
    getcustomer: getcustomer,
    getonecustomer: getonecustomer,
    updatecustomer: updatecustomer,
    deletecustomer: deletecustomer
}