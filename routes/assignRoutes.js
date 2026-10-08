const express=require('express');

const router=express.Router();

const {assignTeacher}=require('../controller/AssignController');

router.patch('/update',assignTeacher);

module.exports=router