const cookieParser = (req,res,next) => {
    if(req.headers.cookie){
        const cookie = req.headers.cookie.split('; ');
        const cookieObj = {};
        cookie.forEach(item => {
            const [key, value] = item.split('=');
            cookieObj[key] = value;
        });
        req.cookies = cookieObj;
    }
    next();
}
module.exports = cookieParser;