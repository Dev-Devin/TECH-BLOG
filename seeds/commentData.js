const { Comment } = require("../models");

const commentdata = [
  {
    comment: "Oops I forgot to mention...",
    user_id: 1,
    post_id: 1,
    date_created: "11/14/2022",
  },
  {
    comment: "Oh! How interesting.",
    user_id: 1,
    post_id: 2,
    date_created: "11/17/2022",
  },
  {
    comment: "Nice!",
    user_id: 2,
    post_id: 3,
    date_created: "11/18/2022",
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
