const express = require('express');
const router = express.Router();
const datatoinsert = require('../../data/xlsxtojson.json');
const { latest_img } = require('../gdrive');

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

router.get('/desc/:disease', async (req, res) => {
    const getdes = await Unst.findOne({ DISEASE: req.params.disease });
    if (!getdes) {
        res.json(`We are unable to find ${req.params.disease} in our database`);
    }
    else {
        res.json(getdes)
    }
})

router.get('/latest/img', async (req, res) => {
    res.send(latest_img)
})

router.get('/test', (req, res) => {
    console.log(req.ip)
})



module.exports = router