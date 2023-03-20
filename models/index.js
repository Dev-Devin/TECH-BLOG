const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// model associations

// The user can have many posts
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// The post belongs to user
Post.belongsTo(User, {
  foreignKey: "user_id",
});

// The user can have many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// The comment belongs to user
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

// The post can have many comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
});

// The comments belong to one post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Comment };
