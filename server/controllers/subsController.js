const models = require('../models/subsModel');

const subsController = {};

subsController.getAllSubs = (req, res, next) => {
    User.find({}, (err, users) => {
        if (err) {
          return next('Error in subsController.getAllSubs: ' + JSON.stringify(err)); 
        } else {
            res.locals.users = users;
            return next();
        }
    });
}

subsController.addSubs = async (req, res, next) => {
    try {
        const {name, cost, startMonth, endMonth} = req.body;
        const newSubs = await models.Sub.create({name: name, cost: cost, startMonth: startMonth, endMonth: endMonth});
        console.log(newSubs);
        res.locals.newSubs = newSubs;
        return next();
    } catch (err) {
        return next('Error occured in subsController.addSubs.');
    }
}

module.exports = subsController;