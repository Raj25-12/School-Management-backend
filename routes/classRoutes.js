const express=require("express");
const router=express.Router();

const {createClass}=require("../controller/ClassController");

router.post('/create',createClass)

module.exports=router
