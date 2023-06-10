const Exception = require("../constants/Exception");

module.exports = (error, req, res, next) => {
    
    switch(error.name) {
        case Exception.NOT_FOUND_EXCEPTION:
            return res.status(404).json({
                statusCode: 404,
                message: error.message
            })
        case Exception.BUSINESS_EXCEPTION:
            return res.status(409).json({
                statusCode: 409,
                message: error.message
            })
        default:
            return res.status(500).json({
                statusCode: 500,
                message: 'Internal server error.'
            })
    }
}