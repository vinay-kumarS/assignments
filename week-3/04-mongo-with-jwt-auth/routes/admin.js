const { Router } = require("express");
const router = Router();

const adminMiddleware = require("../middleware/admin");
const { JWT_SECRET } = require("../config.js");
const { Admin, Course } = require("../db/index.js");

const jwt = require("jsonwebtoken");

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  Admin.create({
    username: req.body.username,
    password: req.body.password,
  });

  res.json({
    message: "admin account created successfully....!",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  const admin = await Admin.findOne({ username, password });
  if (!admin) {
    res.json({
      msg: "Check entered credentials",
    });
  }
  const token = jwt.sign({ username: username }, JWT_SECRET);
  res.json({
    token: token,
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic

  const newCourse = await Course.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
  });

  res.json({
    msg: "Course Added suceessfully....!",
    courseId: newCourse._id,
  });
});
router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});

  res.json({
    Courses: courses,
  });
});

module.exports = router;
