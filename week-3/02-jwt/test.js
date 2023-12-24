const jwt = require('jsonwebtoken');
const z = require("zod");
const jwtPassword = 'secret';

const emailSchema = z.string().email();
const passwordSchema = z.string().length(6);


function signJwt(username, password) {
    const email_response = emailSchema.safeParse(username)["success"];
    const password_responce = passwordSchema.safeParse(password)["success"];
    if(email_response && password_responce){
        var token = jwt.sign({username : username , password : password} , jwtPassword);
        return token;
    }

    return null;
    // Your code here
}


console.log(signJwt("vinaykumar@gmail.com" , "vinays"));


const token = signJwt("vinaykumar@gmail.com" , "vinays");


console.log(jwt.verify(token,"jwtPassword"));