## Admin.js

const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://satrasalavinaykumar01:qqK5QCuOFldjG7hj@cluster0.zkkqicn.mongodb.net/adminLogin"
);
const admin = require("../Schema/Admin.js");
const course = require("../Schema/Course.js");

// Admin Routes
app.post("/signup", (req, res) => {
  // Implement admin signup logic
  admin.create({
    username: req.body.username,
    password: req.body.password,
  });

  res.json({
    message: "admin account created successfully....!",
  });
});

app.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic

  const temp = course.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
  });

  res.json(temp);
});
app.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  async function check() {
    const courses = await course.find();

    res.json({
      Courses: courses,
    });
  }
  check();
});

module.exports = router;

// app.listen(3000, () => {
//   console.log("on port 3000");
// });

<!--  -->


