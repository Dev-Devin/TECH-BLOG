const { User } = require("../models");

const userdata = [
  {
    username: "laura",
    password: "password",
  },
  {
    username: "otherlaura",
    password: "password",
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
