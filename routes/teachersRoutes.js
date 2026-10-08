const express=require('express');

const router=express.Router();

const {teacherCreateAccount,teacherLoginAccount,teacherDeleteAccount,getAllTeachersAccount}=require('../controller/TeachersController');

router.post('/create',teacherCreateAccount);
router.post('/login',teacherLoginAccount);
router.delete('/delete',teacherDeleteAccount);
router.get('/getAllTeachers',getAllTeachersAccount);

module.exports=router