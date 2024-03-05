"use strict";
const mock_house_mixing = require("./mixing.js");
const mock_house_zuyu = require("./zuyu.js");
const mock_house_lanyue = require("./lanyue.js");
const houseList = [
  mock_house_mixing.mixing,
  mock_house_zuyu.zuyu,
  mock_house_lanyue.lanyue
];
exports.houseList = houseList;
