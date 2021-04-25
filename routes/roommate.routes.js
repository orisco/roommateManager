const router = require("express").Router()
const {Roommate} = require("../database/roommates.model")


router.get("/", (req, res) => {
  Roommate.find().then((users) => {
    res.send(users)
  })
})

router.post("/", (req, res) => {
  try {
    const newUser = new Roommate()
    newUser.name = req.body.name;
    newUser.nickname = req.body.nickname;
    newUser.title = req.body.title;
    newUser.save().then((newUser) => {
    res.send(newUser)
  })
  } catch (error) {
    res.json({err: true, error})
  }
  
  })





module.exports = router;