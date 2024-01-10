const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { json } = require("body-parser");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

const { User, Course } = require("../db/index");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  User.create({
    username: username,
    password: password,
  });

  res.json({
    msg: "User accout created succesfully",
  });
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  const user = User.findOne({ username, password });
  if (!user) {
    res.json({ msg: "Invalid credentials" });
  }
  const token = jwt.sign({ username: username}, JWT_SECRET);

  res.json({ token: token });
});

router.get("/courses", userMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});

  res.json({
    Courses: courses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;
  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );

  res.json({
    msg: "Purchase success.....!",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;
  const user =  await User.findOne({username : username});
  const courses = await Course.find({
      _id : {
          "$in" : user.purchasedCourses
      }
  })

  res.json({
      "Purchases" : courses
  });
});

module.exports = router;
