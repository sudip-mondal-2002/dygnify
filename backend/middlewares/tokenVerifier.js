const jwt = require('jsonwebtoken');
const verifyJWT = (req,res,next) => {
    const token = req.cookies?.token;
    if(!token){
        return res.status(401).json({message: 'Unauthorized'});
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(decoded && decoded.username){
            req.user = decoded;
            next();
        } else {
            return res.status(401).json({message: 'Unauthorized'});
        }
    }catch(err){
        return res.status(401).json({message: 'Unauthorized'});
    }
}
module.exports = verifyJWT;