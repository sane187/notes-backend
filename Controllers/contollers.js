const notes =require('../Models/model')

const getNotes=async(req,res)=>{
    let respObj = {
        Data: null,
        Message: '',
        IsSuccess: false
    }
    const allNotes= await notes.find()
    if(allNotes){
      respObj.Data=allNotes,
      respObj.IsSuccess = true;
      respObj.Message = "NOTES FOUND successfully";
      res.status(200).json(respObj)
    }else{   respObj.Message = 'Unable to get notes';
    res.status(422).json(respObj);}

  
   
}

const createNotes=async(req,res)=>{
    let respObj = {
        Data: null,
        Message: '',
        IsSuccess: false
    }

const newNotes= new notes(req.body);
const result = await newNotes.save();

if (result) {
    respObj.Data = result
    respObj.IsSuccess = true;
    respObj.Message = "Notes Created successfully";
    res.status(200).json(respObj);
} else {
    respObj.Message = 'Unable to save notes';
    res.status(422).json(respObj);
}
}

const updateNotes=async(req,res)=>{
    let respObj = {
        Data: null,
        Message: '',
        IsSuccess: false
    }
    const id=req.params.id
    const body=req.body

const updatedData = await notes.findByIdAndUpdate(id,body,{new:true});

if (updatedData) {
    respObj.Data = updatedData
    respObj.IsSuccess = true;
    respObj.Message = "Note Updated successfully";
    res.status(200).json(respObj);
} else {
    respObj.Message = 'Unable to update notes';
    res.status(422).json(respObj);
}

}

const deleteNotes=async(req,res)=>{
    let respObj = {
        Message: '',
        IsSuccess: false
    }
    const id=req.params.id

const updatedData = await notes.findByIdAndDelete(id);

if (updatedData) {
    respObj.IsSuccess = true;
    respObj.Message = "Note Deleted successfully";
    res.status(200).json(respObj);
} else {
    respObj.Message = 'Unable to Delete notes';
    res.status(422).json(respObj);
}
}

module.exports={ 
    getNotes,createNotes,updateNotes,deleteNotes
}