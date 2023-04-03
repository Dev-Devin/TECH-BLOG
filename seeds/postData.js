const { Post } = require("../models");

const postdata = [
  {
    title: "Test 1",
    contents: "Hello this is a test post",
    user_id: 1,
    date_created: "11/13/2022",
  },
  {
    title: "Test 2",
    contents: "Hi this is another test post",
    user_id: 2,
    date_created: "11/14/2022",
  },
  {
    title: "Test 3",
    contents: "Hey this is yet another test post",
    user_id: 1,
    date_created: "11/16/2022",
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
