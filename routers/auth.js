const Task = require('../models/Task');
const User = require('../models/User');

const router= require('express').Router();
router.post("/", async(req, res)=>{
    const userCheck= await User.findOne({email: req.body.email});
    if(!userCheck){
        try{
            const user= new User({
                username:req.body.username,
                email:req.body.email,
                password:req.body.password
            })
            const saved=await user.save();
            res.status(200).json(saved);
            // res.redirect('/tasks');
        }
        catch(err) {
            res.status(401).json(err);
        }
    }
    else{
        res.json('User already exists' + userCheck);
    }
})
router.get('/tasks', async(req, res)=>{
    try{
        const tasks= await Task.find({userEmail: req.query.userEmail});
        res.status(200).json(tasks);
    }
    catch(err){
        res.status(402).json(err);
    }
})

router.post('/tasks', async(req, res)=>{
    try{
        const task= new Task({
            title: req.body.title,
            desc: req.body.desc,
            username:req.body.username,
            userEmail: req.body.userEmail,
            userId: req.body.userId,
            completed: req.body.completed
        })

        const saved= await task.save();
        res.status(200).json(saved);
    }
    catch(err){
        res.status(403).json(err);
    }
})
module.exports=router;