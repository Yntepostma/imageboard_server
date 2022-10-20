const { Router } = require("express");
const User = require("../models/").user;

const router = new Router();

router.get("/", (req, res, next) => {
  const users = User.findAll();
  res.send(users);
  console.log(`request user received`);
});

module.exports = router;
