const express = require('express');
const router = express.Router();
const data = require('../../data/xlsxtojson.json');

const Unst = require('../../models/unstructured');

router.get('/submit', () => {
    const db = new Unst({ data });
    db.save()
})


module.exports = router