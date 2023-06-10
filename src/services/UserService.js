const BusinessException = require("../exceptions/BusinessException")
const NotFoundException = require("../exceptions/NotFoundExeption")

module.exports = class UserService {

    constructor() {
        this.users = [
            {
                name: "John test",
                email: "johntest@gmail.com"
            }
        ]
    }

    getById(id) {
        const register = this.users[id]
        if (!register) {
            throw new NotFoundException("User not found")
        }

        return register
    }

    create(newUser) {
        const register = this.users.find(item => item.email === newUser.email);
        if (register) {
            throw new BusinessException("You can't use this email")
        }

        this.users.push(newUser);
        return this.users[this.users.length - 1]
    }
}