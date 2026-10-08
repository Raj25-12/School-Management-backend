const mongoose=require('mongoose');

const classSchema=mongoose.Schema({
    className: {
        type: String,
        required: true
      },
      
    section: {
        type: String,
        required: true
      },

      teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"TeacherAccount",
        default:null
      }
})

const ClassModel=mongoose.model('Class',classSchema)

module.exports=ClassModel