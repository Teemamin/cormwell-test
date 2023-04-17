const BadRequestError = require('../errors/badRequest')
const UnauthenticatedError = require('../errors/unauthorized')
const {StatusCodes} = require('http-status-codes')
const User = require('../model/User')
const attachCookie = require('../util/attachCookie')
const mongoose = require('mongoose')

exports.register = async (req,res,next)=>{
    const {username, email, password} = req.body

    if(!username || !email || !password){
        throw new BadRequestError('Please Provide all values')
    }
    //sanitize mongo sanitize
    const emailExist = await User.findOne({email})
    if(emailExist){
        throw new BadRequestError('Email already in use')
    }
   const user =   await User.create({username, email, password})
   const token = user.createJWT()
   attachCookie({res,token})

   user.password = undefined
    res.status(StatusCodes.CREATED).json(user)
}

exports.login = async (req,res,next)=>{
    const {email, password} = req.body
    if( !email || !password){
        throw new BadRequestError('Please Provide all values')
    }
    const user = await User.findOne({email}).select('+password')
    if(!user){
        throw new UnauthenticatedError('Invalid Credentials, Sorry we cannot find the provided email in our database')
    }
    const passwordMatch = await user.comparePassword(password)
    if(!passwordMatch){
        throw new UnauthenticatedError('Invalid Password')
    }
    const token = user.createJWT()
    attachCookie({res,token})
//consider abstracting password match to utill func for testing
    user.password = undefined
    res.status(StatusCodes.OK).json(user)
}


exports.getCurrentUser = async (req,res,next)=>{
    const userId = req.user.userId
    if (!mongoose.Types.ObjectId.isValid(userId)){
        throw new BadRequestError(`No user with id :${userId} found`)
    }
    const user = await User.findOne({_id: userId})

    res.status(StatusCodes.OK).json(user)
}

exports.logout = async (req, res) => {
    res.cookie('token', 'logout', {
      httpOnly: true,
      expires: new Date(Date.now()),
    });
    res.status(StatusCodes.OK).json({ msg: 'Logout success!' });
  };
