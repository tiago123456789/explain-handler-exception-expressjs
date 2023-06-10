const Exception = require("../constants/Exception")

module.exports = class NotFoundException extends Error {

    constructor(message) {
        super(message)
        this.name = Exception.NOT_FOUND_EXCEPTION
    }
}