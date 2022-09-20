var DataTypes = require("sequelize").DataTypes;
var _Posts = require("./Posts");
var _Sales = require("./Sales");
var _Users = require("./Users");

function initModels(sequelize) {
  var Posts = _Posts(sequelize, DataTypes);
  var Sales = _Sales(sequelize, DataTypes);
  var Users = _Users(sequelize, DataTypes);


  return {
    Posts,
    Sales,
    Users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
