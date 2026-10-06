const mongoose=require('mongoose');

const teacherAccountSchema=mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },

    password:{
        type:String,
        required:true
    },

    gender:{
        type:String,
        required:true
    },

    dateOfBirth:{
       type:Date,
       required:true
    },

    LocalAddress:{

    },

    PermanentAdress:{

    },

    primarySubject:{
        type:String,
        required:true
    },

    qualification:{

    },

    experience:{

    },

    assignClasses:{

    },

    contractType:{

    },


    phone:{
        type:String,
        required:true,
        match: /^\d{10}$/,
    },

    employeeId:{
        type: String,
        required: true,
        unique: true,
    },

    department:{
        type: String,
        required: true,
    },

    dateOfJoining:{

    },

    salary:{

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
