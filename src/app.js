const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

app.get("/api/health", (request, response) => {
    response.json({status: "OK", message: "The serber is running successfully"})
})

module.exports = app

