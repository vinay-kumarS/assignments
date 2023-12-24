const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://satrasalavinaykumar01:qqK5QCuOFldjG7hj@cluster0.zkkqicn.mongodb.net/adminLogin"
    
);

const admin = mongoose.model("admin",{username:String,password:String})

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