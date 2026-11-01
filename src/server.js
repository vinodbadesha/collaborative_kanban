require("dotenv").config()
const http = require("http")
const app = require("./app")

const server = http.createServer(app)
const PORT = process.env.PORT || 5001

server.listen(PORT,
    () => console.log(`Server is running succesfully at PORT: ${PORT}`)
)
