const { Router } = require("express");
const Image = require("../models/").images;

const router = new Router();

router.get("/", (req, res, next) => {
  const images = Image.findAll();
  res.send(images);
  console.log(`request images received`);
});

module.exports = router;
