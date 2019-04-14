module.exports = function(req, res, next){
    if (!req.session.user){
        return res.send({ message: 'Please Login or Register' })
        }
    }
    next();
}


