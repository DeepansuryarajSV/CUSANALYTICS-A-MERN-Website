const mongoose = require('mongoose');

const selectQuerySchema = new mongoose.Schema({
    _id: String,
    query_no:String
});

module.exports = mongoose.model('querydetail', selectQuerySchema);