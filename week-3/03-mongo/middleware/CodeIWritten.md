## Admin.js
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://satrasalavinaykumar01:qqK5QCuOFldjG7hj@cluster0.zkkqicn.mongodb.net/adminLogin"
  );
const admin = require("../Schema/Admin.js");
const course = require("../Schema/Course.js");



// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    


    async function check(){
        const header = req.headers;
        const adminObj = await admin.findOne();

        const adminame = adminObj["username"];
        const adminpassword = adminObj["password"];
        if(adminame == header.username && adminpassword == header.password){
            next();
        }else{
            res.json({
                "msg":"Unauthorized"
            });
        }
    
    }
    check();


}

module.exports = adminMiddleware;




## User.js

const mongoose = require("mongoose");

const user = require("../Schema/User.js");
mongoose.connect(
    "mongodb+srv://satrasalavinaykumar01:qqK5QCuOFldjG7hj@cluster0.zkkqicn.mongodb.net/"
);


function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    async function check(){
        const header =  req.headers;
        const user_rec = await user.find();
        
        user_rec.forEach(element => {
            if(element["username"] == header["username"] && element["password"] == header["password"]){
                next();
            }
        });

        res.json({
            "msg" : "User not regisered"
        })
    }
    check();
}

module.exports = userMiddleware;