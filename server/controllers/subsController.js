const models = require('../models/subsModel');

const subsController = {};

subsController.getAllSubs = (req, res, next) => {
    try {
        models.Sub.find()
            .then(data => {
                res.locals.allSubs = data;
                return next();
            })
    } catch (err) {
        return next('Error occured in subsController.getAllSubs');
    }
}

subsController.getAllCost = async (req, res, next) => {
    try {
        const costObj = {};
        for (let i=1; i<13; i++) {
            const monthlyData = await models.Sub.find( {$and:[{startMonth:{$lt:i+1}},{endMonth:{$gt:i-1}}]} );

            if (!monthlyData.length) {
                costObj[i] = 0;
            } else {
                let total=0;
                monthlyData.forEach(item => {
                    total += item.cost;
                    costObj[i] = total;
                })
            }  
        }
        res.locals.totalCost = costObj;
        return next();
    } catch (err) {
        console.log(err);
        return next('Error occured in subsController.getAllCost');
    }
}

subsController.addSubs = async (req, res, next) => {
    try {
        const {subsName, cost, startMonth, endMonth} = req.body;
        console.log(req.body);
        const newSubs = await models.Sub.create({name: subsName, cost: cost, startMonth: startMonth, endMonth: endMonth});
        res.locals.newSubs = newSubs;
        return next();
    } catch (err) {
        console.log(err);
        return next('Error occured in subsController.addSubs');
    }
}

subsController.deleteSubs = async (req, res, next) => {
    try {
        const {subsName} = req.body;
        console.log(req.body);
        const deleted = await models.Sub.deleteOne({name: subsName});
        res.locals.deletedSubs = deleted;
        return next();
    } catch (err) {
        console.log(err);
        return next('Error occured in subsController.deleteSubs');
    }
}

module.exports = subsController;