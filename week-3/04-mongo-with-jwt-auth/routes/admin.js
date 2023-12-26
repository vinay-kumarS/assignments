const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");
const jwtpassword = "vinaysatrasala";
const mongoose = require('mongoose');

router.use(Router.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://satrasalavinaykumar01:qqK5QCuOFldjG7hj@cluster0.zkkqicn.mongodb.net/');

const admin = require("../db/index.js")["Admin"];
const course = require("../db/index.js")["Course"];

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    admin.create({
        username: req.body.username,
        password: req.body.password,
    });
    
    res.json({
        message: "admin account created successfully....!",
    });
});

router.post('/signin',adminMiddleware ,(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const token = jwt.sign({username : username , password:password} , jwtpassword);
    res.json({
        "token" : token
    });
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;