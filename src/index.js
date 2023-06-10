const express = require("express")
const app = express();
const routesApp = require("./routes")

app.use(express.json())

routesApp(app)

app.listen(3000, () => console.log(`Server is running at http://localhost:3000`))