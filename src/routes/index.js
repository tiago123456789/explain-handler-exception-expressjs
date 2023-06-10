const HandlerException = require("../middlewares/HandlerException")
const UserService = require("../services/UserService")

const userService = new UserService();

module.exports = (app) => {

    app.get("/users/:id", (req, res, next) => {
        try {
            const user = userService.getById(req.params.id)
            return res.json(user)
        } catch(error) {
            return next(error)
        }
    })

    app.post("/users", (req, res, next) => {
        try {
            const newUser = req.body;
            const user = userService.create(newUser)
            return res.status(201).json(user)
        } catch(error) {
            return next(error)
        }
    })

    // Handler exceptions the application
    app.use(HandlerException)
}