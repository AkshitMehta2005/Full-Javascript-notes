
use('sigma2');

// Insert a few documents into the sales collection.
db.getCollection('cources2').insertMany(
  [
    {"name": "akshit", "roll-no": 22307, "age": 18},
    {"name": "sample_name_1", "roll-no": 1, "age": 20},
    {"name": "sample_name_2", "roll-no": 2, "age": 22},
    {"name": "sample_name_3", "roll-no": 3, "age": 25},
    {"name": "sample_name_4", "roll-no": 4, "age": 19},
    {"name": "sample_name_5", "roll-no": 5, "age": 21},
    {"name": "sample_name_6", "roll-no": 6, "age": 23},
    {"name": "sample_name_7", "roll-no": 7, "age": 18},
    {"name": "sample_name_8", "roll-no": 8, "age": 24},
    {"name": "sample_name_9", "roll-no": 9, "age": 20}
  ]
  
);

// Run a find command to view items sold on April 4th, 2014.
const salesOnApril4th = db.getCollection('sales').find({
  date: { name:('akshit')}
}).count();


console.log(`Done db insertion`);



// how to use mongodb in moongoose shell

// 1 - show dbs
// 2 - use sigma
// 3 - db.cources.find()
// 4 - db.cources.insertMany({name:"akshit"})