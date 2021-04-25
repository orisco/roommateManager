const express = require("express");
const app = express()
const cors = require("cors")
const mongoose = require("./database/mongoose")


app.use(cors())
app.use(express.json())

app.use('/task', require("./routes/task.routes"))
app.use('/roommate', require("./routes/roommate.routes"))

app.listen(5001, () => {
  console.log("server is running")
})