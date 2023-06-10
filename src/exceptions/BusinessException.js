const Exception = require("../constants/Exception")

module.exports = class BusinessException extends Error {

    constructor(message) {
        super(message)
        this.name = Exception.BUSINESS_EXCEPTION
    }
}