const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/angular_test_4", {useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true}).then(()=> {
  console.log("connected to db")
}).catch((error) => {
  console.log(`connection error ${error}`)
})


module.exports = {mongoose}