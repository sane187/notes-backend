const admin =require('../Models/adminModel')

const generateToken =()=>{
  
}

const signUp =async(req,res)=>{
    let respObj = {
        Data: null,
        Message: 'Ok .. ',
        IsSuccess: false
    }
      try{
const isAdmin=await admin.findOne({email:req.body.email})
if(isAdmin){
    respObj.IsSuccess = false;
    respObj.Message = "Admin already registered";
    res.status(404).send(respObj)
}else{
let newAdmin =new admin(req.body)
    const result = await newAdmin.save();
    console.log(result)
    if (result) {
        respObj.IsSuccess = true;
        respObj.Message = "Admin Registered successfully";
         res.token =generateToken(result._id)
        res.status(200).json(respObj);
    }} }
    catch(err){
        console.error(err);
        respObj.Message = "Server Error.";
        return res.status(500).json(respObj);
    }
}

const logIn =async(req,res)=>{
    let respObj = {
        Data: null,      
        IsSuccess: false
    }
    try{
      const data =await admin.findOne({email:req.body.email})
      if(data){
        respObj.IsSuccess = true;
        respObj.Message="Logged in Successfully"
        res.status(200).json(respObj);
      } else{
          respObj.Message= "Login Attempt Unsuccessful Wrong Email"
          res.status(404).json(respObj)
        } 
      
      }
      catch(err){
        respObj.Message = "Server Error.";
        return res.status(500).json(respObj);
      }
 
 

}

module.exports ={signUp,logIn}