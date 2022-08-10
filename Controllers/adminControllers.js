const admin =require('../Models/adminModel')

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
}
let newAdmin =new admin(req.body)
    const result = await newAdmin.save();
    if (result) {
        respObj.IsSuccess = true;
        respObj.Message = "Admin Registered successfully";
        res.status(200).json(respObj);
    } }
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
  const data =await admin.findOne({email:req.body.email})

  if(data){
    respObj.Data="Logged in Successfully"
    res.status(200).json(respObj);
  }

  else{
    respObj.Data= "Login Attempt Unsuccessful"
    res.status(404).json(respObj)
  }

}

module.exports ={signUp,logIn}