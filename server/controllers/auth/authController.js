const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/user');

//Registration

const registerUser = async(req,res) => {
    const { userName, email, password } = req.body;


    console.log(userName, email, password);
    
    // try {
    //     const checkUser = User.findOne({email});
    //     if(checkUser){
    //         return res.json({
    //             success: false,
    //             message: "User Already exists with the same email! Please try again"
    //         });
    //     }
    //     const hashPasssword = await bcrypt.hash(password, 12);
    //     const newUser = new User({
    //         userName,
    //         email,
    //         password: hashPasssword
    //     });
        
    //     await newUser.save();

    //     res.status(200).json({
    //         success: true,
    //         message: "Registration Successful"
    //     });
    // } catch (err) {
    //     console.log("authController", err);
    //     res.status(500).json({
    //         success: false,
    //         message: "Some error occured",
    //     })
    // }
}

//Login

const loginUser = async(req,res) => {
    const { email, password } = req.body;

    try {
    const checkUser = User.findOne({email});
    if(!checkUser){
        return res.json({
            success: false,
            message: "User doesn't exists! Please register first"
        });
    }

    const checkPasswordMatch = bcrypt.hash(password, checkUser.password);
    if(!checkPasswordMatch){
        res.status(200).json({
            success: true,
            message: "Incorrect password! Please try again"
        });
    }

    } catch (err) {
        console.log("authController", err);
        res.status(500).json({
            success: false,
            message: "Some error occured",
        })
    }
}

//Logout



//Auth middleware


module.exports = { registerUser, loginUser};