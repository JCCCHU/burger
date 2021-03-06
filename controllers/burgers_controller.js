var express = require("express");
var burger = require("../models/burger");
const orm = require("../config/orm");

var router = express.Router();

router.get("/", function(req, res) {
  res.render("index");
})

router.get("/burger", function(req, res) {
  burger.all(function(data) {
    var burgsObject = {
      burgers: data
    }
    console.log(burgsObject);
    res.render("index",burgsObject);
  })
})

// Takes in a parameter of "name" for burger name
router.post("/burger", function(req, res) {
  burger.create(req.body.name, function(data) {
    console.log(data);
    res.json({data});
  })
})

// Takes in a parameter of "name" for burger name
// Sets devoured to true
router.put("/burger", function(req, res) {
  burger.update(req.body.name, function(data) {
    console.log(data);
    res.json({data});
  })
})

module.exports = router;