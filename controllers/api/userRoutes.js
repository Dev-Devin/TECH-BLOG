const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

// GET all users (/api/users)
router.get("/", async (req, res) => {
  try {
    const dbUserData = await User.findAll({});
    res.json(dbUserData)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one user (/api/users/id)
router.get("/:id", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      attributes: { exclude: ["password"] },
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Post,
          model: Comment,
          include: {
            model: Post,
          },
        },
      ],
    }).then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "no user found with that id" });
        return;
      }
      res.json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE new user (sign up)
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    // .then (dbUserData => {
    // store session data
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
      res.json(dbUserData);
      // });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    console.log(dbUserData);
    // .then(dbUserData => {
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again." });
      return;
    }
    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again." });
      return;
    }
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
      res.status(200).json({ dbUserData, message: "You are now logged in" });
    });
    // })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
