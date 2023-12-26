const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://satrasalavinaykumar01:qqK5QCuOFldjG7hj@cluster0.zkkqicn.mongodb.net/userLogin"
);

const user = require("../Schema/User.js");

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