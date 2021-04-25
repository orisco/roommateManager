const {model, Schema} = require("mongoose")

const RoommateSchema = new Schema({
  name: String,
  nickname: String,
  title: String
})

const Roommate = model('Roommate', RoommateSchema)

module.exports = { Roommate }