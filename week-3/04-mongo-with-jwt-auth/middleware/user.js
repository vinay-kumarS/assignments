const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://satrasalavinaykumar01:qqK5QCuOFldjG7hj@cluster0.zkkqicn.mongodb.net/');

const user = require("../db/index.js")["User"];

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