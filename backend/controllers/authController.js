const AuthModel = require('../database/models/AuthData');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const login = async (req, res) => {
    const username = req.body?.username;
    const password = req.body?.password;
    if(!username || !password){
        return res.status(400).json({
            message: 'Username and password are required'
        });
    }
    try {
        const user = await AuthModel.findOne({username: username});
        if(!user){
            return res.status(404).json({message: 'User not found'});
        }
        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if(!isMatch){
            return res.status(401).json({message: 'Invalid password'});
        }
        const token = jwt.sign({
            username: user.username,
            userId: user._id
        }, process.env.JWT_SECRET, {expiresIn: '1d'});
        res.cookie('token', token, {httpOnly: true, sameSite: true});
        res.status(200).json({
            message: 'Login successful',
            user: user
        });
    }catch(err){
        console.log(err);
        res.status(500).json({err:err.message});
    }
}

module.exports = {
    login
}