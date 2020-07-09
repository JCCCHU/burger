var connection = require("../config/connection.js");

var orm = {
  selectAll: function() {
    connection.query("SELECT * FROM burgers_db", function(err, res) {
      if (err) {
        throw err;
      }
      console.log("returning all burgers");
      return res;
    })
  },
  insertOne: function(name) {
    connection.query("INSERT INTO burgers (burger_name) VALUES ?",name, function(err, res) {
      if (err) {
        throw err;
      }
      console.log("successfully inserted a burger");
    })
  },
  updateOne: function(name) {
    connection.query("UPDATE burgers SET TRUE WHERE ?",{burger_name:name},function(err, res) {
      if (err) {
        throw err;
      }
      console.log("successfully updated a burger")
    })
  }
}

module.exports = orm;