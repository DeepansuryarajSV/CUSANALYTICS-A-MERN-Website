const { strict } = require('assert');
const express=require('express');
const mongoose=require('mongoose');
const cors = require('cors');
const CarDetail = require('./models/carDetailsModel')
const CustomerDetails = require('./routes/cusdetails');
const QueryDetails = require('./routes/querydetails');

const app=express();
mongoose.set('strictQuery', false);

app.use(cors());
app.use(express.json());
app.use("/details",CustomerDetails);
app.use("/details",QueryDetails);



if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const PORT = process.env.PORT || 3000; 
const CONNECTION = process.env.CONNECTION;

const start = async() => {
    try{
        await mongoose.connect(CONNECTION);

        app.listen(PORT, () => {
        console.log('App listening on port ' + PORT);
        });
    }catch(e){
        console.log(e.message);
    }
    
} 
start();