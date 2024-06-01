const { otpValidation } = require('../validations/otp.validation');


module.exports = (req, res, next) => {
    const { error } = otpValidation.validate(req.body);
    if(error){
        let errorMessage = error.message.replace(/"/g, '');
        errorMessage = errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
        return res.status(401).json({
            message: errorMessage
        })
    }else{
        next();
    }
}