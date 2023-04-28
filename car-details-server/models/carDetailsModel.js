const mongoose = require('mongoose');

const carDetailsSchema = new mongoose.Schema({
    _id: String,
    id: Number,
    first_name:String,
    last_name:String,
    email:String,
    gender:String,
    income: Number,
    city:String,
    car:String,
    quote:String,
    phone_price:Number
});

module.exports = mongoose.model('car-detail', carDetailsSchema);