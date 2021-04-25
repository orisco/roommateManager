const router = require("express").Router();
const { Tasks } = require("../database/tasks.model");

router.get("/", (req, res) => {
  Tasks.find()
    .populate("_roommateId")
    .exec()
    .then((tasks) => {
      res.send(tasks);
    });
});

router.post("/", (req, res) => {
  const newTask = new Tasks();
  newTask.description = req.body.description;
  newTask.date = new Date();
  newTask._roommateId = req.body._roommateId;
  newTask.save().then((task) => {
    res.send(task);
  });
});

router.delete("/:taskId", (req, res) => {
  Tasks.findByIdAndDelete({ _id: req.params.taskId }).then((removed) => {
    res.send(removed);
  });
});

module.exports = router;
