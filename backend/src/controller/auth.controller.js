

const User=require("../models/user.model");
var jwt=require("jsonwebtoken");
require('dotenv').config()

const newToken=(user)=>{
    
return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
}

const signup=async(req,res)=>{
    try {
        //checking email
        let user=await User.findOne({email:req.body.email})

        if(user){
            return res.status(400).send({message:"email already exists"})
        }
        
        // if new user, create it 
        user= await User.create(req.body);

        const token =newToken(user)

        return res.status(200).send({user,token})
       
    } catch (err) {
        res.status(400).send({message:err.messgae})
    }
}





const login=async(req,res)=>{
    try {

        const user= await User.findOne({email:req.body.email})

        //checked if email exist or not

        if(!user){
            return res.status(200).send("Wrong Email or Password")
        }
       

        //if email exist , check password
        const match=user.checkPassword(req.body.password)
        if(!match){
            return res.status(400).send({message:"Wrong email or password"})
        }
        //if it matches
        const token =newToken(user)

        return res.status(200).send({user,token})

    } catch (err) {
        res.status(400).send({message:err.messgae})
    }
}

const FetchUser=async(req,res)=>{
    try {
        const user=await User.find().lean().exec()
      
        return res.status(200).send(user)
        
    } catch (err) {
        return res.status(404).send(err.message)
    }
}

module.exports={signup,login,FetchUser}