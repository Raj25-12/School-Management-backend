const ClassModel=require('../models/ClassModel');

const assignTeacher= async(req,res)=> {
       try{
         const {classId,teacherId}=req.body;
         const updateClass= await ClassModel.findByIdAndUpdate(classId,{
            teacher:teacherId
         },
         {
            new:true
         }
        );

        if(!updateClass){
           return res.status(404).json({
                message:"Class not found"
            })
        }
        
        return res.status(201).json({
             message:"Successfully Assigned",
             data:updateClass
        })
       }
       catch(error)
       {
           return res.status(500).json({
                message:"Something went wrong"
           })
       }
};

module.exports={assignTeacher}