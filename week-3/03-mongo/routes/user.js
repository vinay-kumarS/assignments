const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User , Course} = require("../db/index.js");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    User.create({
        username : req.body.username,
        password : req.body.password
    });

    res.json({
        "msg" : "User created sucessfully....!"
    });
});

router.get("/courses", userMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});
  
    res.json({
      Courses : courses
    })
  });

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username =  req.headers.username;
    await User.updateOne({
        username : username
    }, {
        "$push" : {
        purchasedCourses : courseId
        }
    });


    res.json({
        msg : "Purchase success.....!"
    });

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
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

module.exports = router