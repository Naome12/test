const mongoose = require('mongoose')
const userModel = require('../models/userModel')
const UserModel = require('../models/userModel')
require('dotenv').config()

const user = (req,res)=>{
let name= req.body.name
let email = req.body.email
let userId = req.body.userId
 if(name==""  || email==""){
    res.json("All credentials are needed")
 }else{
    let users = new UserModel({
        name:name,
        email:email,
        userId:userId,
    })
    users.save().then(users=>console.log('user added')).catch(err=>console.log(err.message))
 
 if(users){
    res.json({message: users})
 }else{
    res.json({message : 'error occured'})
 }
 console.log(req.body)
}
}

const text = (req,res)=>{
   res.render('user')
}

// const update = async(req, res) => {
//    let id = req.params.id
//    let email = req.body.email
//    let user =  await userModel.findOne({email})
   
//    // update user
//    let updateUser = await userModel.findOneAndUpdate({email}, req.body)
//    if(updateUser){
//       console.log('Yeah');
//    } else {
//       console.log('Nope');
//    }
// }

const update = async(req,res) =>{
   let email = req.body.email
   let user = await userModel.findOne({email})

   let updateUser = await userModel.findOneAndUpdate({email},req.body)
   if(updateUser){
      res.json({user})
   }else{
      res.json({message: "error"})
   }
}

const register = (req,res)=>{
   let name= req.body.name
   res.send(`login successfully ${name}`)
}

const delet =async (req,res)=>{
   let userId = req.body.userId
let del = await userModel.findOne({userId})
let deleteUser =await userModel.findOneAndDelete({userId},req.body)
if(deleteUser){
   res.json('deleted')
}else{
   res.json({message: "error"})
}

}
module.exports = {
    user,
    text,
    update,
    register,
    delet
}
