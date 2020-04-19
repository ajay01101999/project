const phoneModel = require('../db/models/phonesModel');
const express = require('express');
const fs = require('fs');
const path = require('path');

const products = JSON.parse(fs.readFileSync(path.normalize(__dirname+'/../json/categories.json')));

const router = express.Router();


router.get('/',async (req, res)=>{
    try{
        // const product = phoneModel.create(products);
        // const phone = await phoneModel.find({'specs.boxContent': 'Handset, EarPods with Lightning Connector, USB-C to Lightning Cable, 18W USB-C Power Adapter, Documentation'});
        const phone = await phoneModel.find({latest: true});
        res.send(phone);
    }catch(err){
        res.send(err)
    }
})

module.exports = router;