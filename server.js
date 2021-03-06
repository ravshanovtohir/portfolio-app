const fs = require("fs")
const path = require("path")
const express = require("express")
const app = express()
const port = process.env.PORT || 5000

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/main.html"))
})

app.listen(port, () => console.log("Server is running at http://localhost:" + port))