const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");


// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    `jwt saves a DB call we no need to check that username in DB or not it username slitly 
    changed for what it has encoded then jwt will not verigy it`
    
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    const decodeValue = jwt.verify(jwtToken , JWT_SECRET);
    if(decodeValue.username){
        next();
    }else{
        res.stasus(403).json({msg : "Unauthorized"});
    }

}

module.exports = adminMiddleware;