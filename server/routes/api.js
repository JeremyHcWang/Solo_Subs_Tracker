const express = require('express');
const subsController = require('../controllers/subsController');
const router = express.Router();

router.get('/', subsController.getAllSubs, (req, res) => {
    return res.status(200).json(res.locals.allSubs);
})

router.get('/cost', subsController.getAllCost, (req, res) => {
    return res.status(200).json(res.locals.totalCost);
})

router.post('/subscription', subsController.addSubs, (req, res) => {
    return res.status(200).json(res.locals.newSubs);
})

router.put('/subscription', subsController.deleteSubs, (req, res) => {
    return res.status(200).json(res.locals.deletedSubs);
})

module.exports = router;