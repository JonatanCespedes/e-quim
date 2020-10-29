module.exports = function(req,res,next){
    if(req.cookies.userEquim){
        req.session.usuario = req.cookies.userEquim;
        next()
    }else{
        next()
    }
}