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
        userId:userId
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
   // let userId = req.body.userId
   // let name = req.body.name
   let userId = req.body.userId
   let email = req.body.email
   let name = req.body.name
   let updateUser = await userModel.findOneAndUpdate({userId,email,name})
   if(updateUser){
      res.json({updateUser})
   }else{
      res.json({message: "error"})
   }
   console.log('yeah')
}

const register = (req,res)=>{
   let name= req.body.name
   res.send(`login successfully ${name}`)
}

const delet =async (req,res)=>{
   let userId = req.body.userId
// let del = await userModel.findOne({userId})
let deleteUser =await userModel.findOneAndDelete({userId},req.body)
if(deleteUser){
   res.json('deleted')
}else{
   res.json({message: "error"})
}
}

const gete =(req,res)=>{
   UserModel.find()
   .then(users => res.send(users))
   .catch(err => res.send(err).status(404));

}

module.exports = {
    user,
    text,
    update,
    register,
    delet,
    gete
}
