const { Comment } = require("../models");

const commentdata = [
  {
    comment: "Oops I forgot to mention...",
    user_id: 1,
    post_id: 1,
   
  },
  {
    comment: "Oh! How interesting.",
    user_id: 1,
    post_id: 2,
    
  },
  {
    comment: "Nice!",
    user_id: 2,
    post_id: 3,
   
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
