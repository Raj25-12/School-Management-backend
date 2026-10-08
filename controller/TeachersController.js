const TeacherAccount=require('../models/TeacherAccounts.js')

const teacherCreateAccount = async(req,res) => {
    const  {fullName,employeeId,email,phone,gender,dateOfBirth,localAddress,permanentAddress,department,primarySubject,qualification,experience,contractType,dateOfJoining,salary,password}=req.body;
    try{
        const findemail=await TeacherAccount.findOne({email})
        if(findemail)
        {
            res.status(401).json({
                message:"Email Already Exists"
            })
        }
        const response = await TeacherAccount.create({
              fullName,
              employeeId,
              email,
              phone,
              gender,
              dateOfBirth,
              localAddress,
              permanentAddress,
              department,
              primarySubject,
              qualification,
              experience,
              contractType,
              dateOfJoining,
              salary,
              password
    })
    res.status(201).json({
        data:response,
        message:"Create Teacher Account Successfully"
    })
    }
    catch(error)
    {
      res.status(400).json({
        message:"Invalid Crediational"
      })
    }
}

const teacherLoginAccount =async (req,res) =>{
     const {email,password}=req.body;
     try{
        const response=await TeacherAccount.findOne({email})
     if(response)
     {
        if(response.password === password)
        {
            res.status(201).json({
                data:response,
                message:"Login Successfully"
            })
        }
        else{
            res.status(400).json({
                message:"Password is invalid"
            })
        }
     }
     else{
        res.status(400).json({
            message:"Email does not exist"
        })
     }
     }
     catch(error)
     {
        res.status(500).json({
            message:"Server error"
        })
     }

}

const getAllTeachersAccount=async(req,res) =>{
       try{
          const response= await TeacherAccount.find();

          res.status(201).json({
            message:"All Teachers",
            data:response
          })
       }
       catch(error)
       {
          res.status(500).json({
            message:"Something went wrong"
          })
       }

}

const teacherDeleteAccount = async (req,res) =>{
     const {email}=req.body
     try{
        const response =await TeacherAccount.findOne({email})
        if(response){
            const deleteAccount=await TeacherAccount.findOneAndDelete({_id:response._id})
             res.status(201).json({
            message:"Successfully Deleted"
        })
        }
        else{
            res.status(401).json({
                message:"Teacher does not exist"
            })
        }
     }
     catch(error)
     {
        res.status(500).json({
            message:"Something went wrong"
        })
     }

}

module.exports={teacherCreateAccount,teacherLoginAccount,teacherDeleteAccount,getAllTeachersAccount}