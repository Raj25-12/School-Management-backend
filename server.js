const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());


const connectDb = require('./config/dbConnection.js');
connectDb();



const adminRoutes=require('./routes/adminRoutes.js');
const teachersRoutes=require('./routes/teachersRoutes.js');
const studentsRoutes=require('./routes/studentRoutes.js');

app.use("/api/v1",adminRoutes);
app.use("/api/v2",teachersRoutes);
app.use("/api/v3",studentsRoutes);


app.listen(PORT,()=>{
     console.log(`App is running on ${PORT}`); 
})



