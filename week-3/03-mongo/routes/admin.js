const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin , Course} = require("../db/index.js");


// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  Admin.create({
    username: req.body.username,
    password: req.body.password,
  });

  res.json({
    message: "admin created successfully....!",
  });

});

router.post("/courses", adminMiddleware,async (req, res) => {
  // Implement course creation logic

  const newCourse = await Course.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
  });

  res.json({
    msg : "Course Added suceessfully....!",
    courseId : newCourse._id
  });

});
router.get("/courses", adminMiddleware,async (req, res) => {  
  // Implement fetching all courses logic
  const courses = await Course.find({});

  res.json({
    Courses : courses
  })
});

module.exports = router;
