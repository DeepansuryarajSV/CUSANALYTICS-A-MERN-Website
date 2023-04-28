const express=require('express');
const router=express.Router();
const QueryDetail = require('../models/selectQueryModel');
const CustomerDetails = require('../models/carDetailsModel');


router.get("/getda", async (req, res) => {
    const result  = await QueryDetail.find();
    res.send(result[0].query_no);
});




module.exports = router;