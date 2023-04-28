const QUERY1 = {
    income: {$lt: 5},
    $or: [
      { car: "BMW" },
      { car: "Mercedes" }
    ] 
  };
  
const QUERY2 = { gender: 'Male', 'phone_price': { $gt: 10000 }};

const QUERY3 = {
last_name: { $regex: /^M/i },
$expr: { $gt: [{ $strLenCP: { $toString: "$quote" } }, 15] },
email: { $regex: /M$/i }};

const QUERY4 = {
car: { $in: ["BMW", "Mercedes", "Audi"] },
email: { $regex: /^\D*$/ }
};

const QUERY5 = [
{
    $group: {
    _id: "$city",
    count: { $sum: 1 },
    avgIncome: { $avg: "$income" }
    }
},
{
    $sort: { count: -1 }
},
{
    $limit: 10
}
]


// FOR REFERENCE START //

const priceToIntQuery= [{},
[
{
    $set: {
    phone_price: {
        $toInt: "$phone_price"
    }
    }
}
]];

const incomeToIntQuery =[{ income: { $exists: true } }, // Filter to select documents with an income field
[
{
$set: {
    income: {
    $cond: {
        if: { $regexMatch: { input: "$income", regex: /^(\$)?[0-9]+(\.[0-9]{1,2})?$/ } },
        then: { $toDouble: { $trim: { input: "$income", chars: "\\$" } } },
        else: 0
    }
    }
}
}
]]

module.exports = {QUERY1,QUERY2,QUERY3,QUERY4,QUERY5};