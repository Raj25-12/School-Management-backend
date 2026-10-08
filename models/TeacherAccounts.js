const mongoose=require('mongoose');

const teacherAccountSchema=mongoose.Schema({
    
    fullName:{
        type:String,
        required:true
    },

    employeeId:{
        type: String,
        required: true,
        unique: true,
    },

    email:{
        type:String,
        required:true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },

    phone:{
        type:String,
        required:true,
        match: /^\d{10}$/,
    },

    gender:{
        type:String,
        required:true,
        enum:[
            "Male",
            "Female",
            "Other"
        ]
    },

    dateOfBirth:{
       type:Date,
       required:true
    },

    localAddress:{
       type:String,
       required:true
    },

    permanentAddress:{
       type:String,
       required:true 
    },

    department:{
        type: String,
        required: true,
    },

    primarySubject:{
        type:String,
        required:true
    },

    qualification:{
        type:String,
        required:true,
        // enum: ["B.Tech", "M.Tech", "BCA", "MCA", "B.Sc", "M.Sc", "PhD"]
    },

    experience:{
        type:String,
        required:true
    },

    contractType:{
        type:String,
        required:true,
        enum:["Full Time(Permanent)","Part Time","InternShip Period"]
    },

    dateOfJoining:{
        type: Date,
        required: true
    },

    salary:{
       type:String,
       required:true
    },

    password:{
        type:String,
        required:true
    },
    
    // designation:{
    //   type: String,
    //   enum: [
    //     "Teacher",
    //     "Senior Teacher",
    //     "HOD",
    //     "Professor",
    //     "Principal",
    //   ],
    //   default: "Teacher",
    // },

})

const TeacherAccounts=mongoose.model("TeacherAccount",teacherAccountSchema);

module.exports=TeacherAccounts
