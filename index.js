const express= require("express");
const app=express();
app.use(express.json());
const PORT= 5000;
const authRoute= require('./routers/auth');
const mongoose= require('mongoose');
const key= require('./key');
const cors= require('cors');
const dotenv= require('dotenv');
dotenv.config();

app.use(cors());
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.9cryh7q.mongodb.net/${process.env.MONGODB_DBNAME}?retryWrites=true&w=majority`)
.then(()=>console.log("database is connected successfully!"))
.catch((err)=> console.log(err));
app.use('/auth', authRoute);
app.listen(PORT, ()=>{
    console.log(`Backend is running on port ${PORT}`);
})