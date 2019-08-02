const express = require('express');
const router = express.Router();
const { latest_img } = require('../gdrive');
const datatoinsert = require('../../data/info.json')

const Unst = require('../../models/unstructured');

router.get('/submit', async (req, res) => {
    const data = await Unst.find({});
    if (data.length === 0) {
        Unst.insertMany(datatoinsert)
        res.json('Data sucessfully added')
    }
    else {
        res.json(data)
    }
});

router.get('/desc', async (req, res) => {
    const getdes = await Unst.findOne({ DISEASE: req.query.disease });
    console.log(req.query)
    if (!getdes) {
        res.json(`We are unable to find ${req.query.disease} in our database`);
    }
    else {
        res.json(getdes)
    }
})

router.get('/latest/img', async (req, res) => {
    res.send(latest_img)
})


module.exports = router