const {model, Schema} = require("mongoose")

const TasksSchema = new Schema({
  description: String,
  date: Date,
  _roommateId: [{
    type: Schema.Types.ObjectId,
    ref: "Roommate"
  }]
})

const Tasks = model('Tasks', TasksSchema)

module.exports = { Tasks }