exports.register = async (req,res,next)=>{
    res.send('registration page')
}

exports.login = async (req,res,next)=>{
    res.send('Login page')
}

exports.getUser = async (req,res,next)=>{
    res.send('Get user page')
}