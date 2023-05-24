const User=require('../model/userModel');
const jwt=require('jsonwebtoken')
const asyncHandler=require('express-async-handler')

exports.validate=asyncHandler(async(req,res,next)=>{
    if(req.headers.authorization)
    try{
        const token=req.headers.authorization.split(' ')[1];
        
        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        req.user=await User.findById(decoded.id).select.apply('-password')

        next()
    }
    catch(error){
        res.status(401)
        throw new Error('Not authorized')
    }
}) 