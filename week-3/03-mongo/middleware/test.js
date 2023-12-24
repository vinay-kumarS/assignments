const mongoose = require("mongoose");


mongoose.connect(
    "mongodb+srv://satrasalavinaykumar01:qqK5QCuOFldjG7hj@cluster0.zkkqicn.mongodb.net/adminLogin"
);

const Admin = mongoose.model("admin", {
    username: String,
    password: String
});

async function print(){
    // const add = await user.save();
    // console.log(add["_id"]);

    console.log(await Admin.find());
    console.log("inside");
}


print();


console.log("after wards.....!");