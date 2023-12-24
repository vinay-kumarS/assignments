// const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
// const router = Router();
const express = require("express");

const app = express();
app.use(express.json());

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://satrasalavinaykumar01:qqK5QCuOFldjG7hj@cluster0.zkkqicn.mongodb.net/adminLogin"
);

// Records schema

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
});

const Course = mongoose.model("Course", courseSchema);

// Admin Routes
<<<<<<< Updated upstream
router.post('/signup', (req, res) => {
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});
=======
app.post("/signup", (req, res) => {
  const adminSchema = new mongoose.Schema({
    username: String,
    password: String,
  });

  const Admin = mongoose.model("admin", adminSchema);
  // Implement admin signup logic
  Admin.create({
    username: req.body.username,
    password: req.body.password,
  });

  res.json({
    message: "admin account created successfully....!",
  });
});

app.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  const adminObj = async () => {
    return await Admin.findOne();
  };

  const header = req.headers;
  const course = new Course(req.body);
  let course_id;
  course.save().then((saved_rec) => {
    course_id = saved_rec.id;
  });
  res.json({
    message: "course added sucessfully.....!",
    id: course_id,
  });
});
app.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  async function check() {
    const courses = await Course.find();

    res.json({
      Courses: courses,
    });
  }
  check();
});

// module.exports = router;
>>>>>>> Stashed changes

app.listen(3000, () => {
  console.log("on port 3000");
});
