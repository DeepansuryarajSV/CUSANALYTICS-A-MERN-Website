const express=require('express');
const router=express.Router();
const CarDetail = require('../models/carDetailsModel');
const Queries = require("../queryContainer");


//FOR REFERENCE END

router.post("/post", (req, res) => {
  // let {selected}  = req.body;

//   if(selected !=" "){
//     switch(selected){
//       case "1":
//         console.log("query1");
//         res.redirect("/query1")
//         break;
      
//       case "2":
//         console.log("query2");
//         break;
      
//       case "3":
//         console.log("query3");
//         break;

//       case "4":
//         console.log("query4");
//         break;

//       case "5":
//         console.log("query5");
//         break;
//     }
//   }
//   else{
//     console.log("remainng")
//   }
});

router.get("/query1", async (req, res) => {
  const result  = await CarDetail.find(Queries.QUERY1);
  res.send(result);
});

router.get("/query2", async (req, res) => {
  const result  = await CarDetail.find(Queries.QUERY2);
  res.send(result);
});

router.get("/query3", async (req, res) => {
  const result  = await CarDetail.find(Queries.QUERY3);
  res.send(result);
});

router.get("/query4", async (req, res) => {
  const result  = await CarDetail.find(Queries.QUERY4);
  res.send(result);
});

router.get("/query5", async (req, res) => {
  const result  = await CarDetail.aggregate(Queries.QUERY5);
  res.send(result);
});




module.exports = router;