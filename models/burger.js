var orm = require("../config/orm.js");

var burger = {
  all: function() {
    orm.all(function (res) {
      return res;
    });
  },
  create: function(name) {
    orm.insertOne(name, function(res) {
      return res;
    });
  },
  update: function(name) {
    orm.updateOne(name, function(res) {
      return res;
    });
  }
}

module.exports = burger;