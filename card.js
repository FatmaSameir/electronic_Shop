const Card = require('../model/card');


addcard = function (req, res, next) {
    const card = new Card({
        cardtype: req.body. cardtype, 
        customer:req.body.customer      
    });
    card.save().
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

getcard = function (req, res, next) {
    Card.find().then(resault => {
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
    addcard: addcard,
    getcard: getcard,

}