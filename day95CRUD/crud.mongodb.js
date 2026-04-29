use("CRUdDb")

db.createCollection("cources")

db.cources.insertOne({
    name:"akshit",
    rollNo:22307,
    age:18
})

db.createCollection("cources2")

db.cources2.insertMany(
    [
        {"name": "akshit", "roll-no": 22307, "age": 18},
        {"name": "sample_name_1", "roll-no": 1, "age": 20},
        {"name": "sample_name_2", "roll-no": 2, "age": 25},
        {"name": "sample_name_3", "roll-no": 3, "age": 25},
        {"name": "sample_name_4", "roll-no": 4, "age": 19},
        {"name": "sample_name_5", "roll-no": 5, "age": 21},
        {"name": "sample_name_6", "roll-no": 6, "age": 21},
        {"name": "sample_name_7", "roll-no": 7, "age": 18},
        {"name": "sample_name_8", "roll-no": 8, "age": 24},
        {"name": "sample_name_9", "roll-no": 9, "age": 20}
      ]
      
)

// for read

let a = db.cources2.find({age:21})
console.log(a.toArray()) // toArray use to see all data that has age 21

// findOne

// let b = db.cources2.findOne({age:21}) // ye phle data dega jo 21 age ka hoga
// console.log(b)

// for update

// db.cources2.updateOne({age:25},{$set:{age:100}})

// use update many of all update




// delete

// db.cources2.deleteOne({age:21})


// see on documenetation query and locacal operator for monfodb

