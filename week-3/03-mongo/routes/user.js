const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const mongoose = require("mongoose");

router.use(Router.json());

mongoose.connect(
    "mongodb+srv://satrasalavinaykumar01:qqK5QCuOFldjG7hj@cluster0.zkkqicn.mongodb.net/userLogin"
);

const user = require("../Schema/User.js");
const course = require("../Schema/Course.js");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    user.create({
        username : req.body.username,
        password : req.body.password
    });

    res.json({
        "msg" : "User created sucessfully....!"
    });
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    async function check(){
        const courses = await course.find();
        res.json({
            "msg" : courses
        });
    }
    check();
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router