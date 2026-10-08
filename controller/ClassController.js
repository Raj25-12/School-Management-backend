const ClassModel=require('../models/ClassModel');

const createClass = async(req,res)=>{
     const { className,section }=req.body;
    try{
        const response=await ClassModel.create({
            className,
            section
        })
        res.status(201).json({
            data:response,
            message:"Create Class Successfully"
        })
    }
    catch(error)
    {
       res.status(500).json({
        message:"Something went wrong"
       })
    }
}

module.exports={createClass}