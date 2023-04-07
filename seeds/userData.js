const { User } = require("../models");

const userdata = [
  {
    username: "devin",
    password: "Password",
  },
  {
    username: "otherdevin",
    password: "Password",
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
