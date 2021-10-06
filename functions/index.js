const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors")

const { createStudent, getAllStudents, getStudentById, updateStudent} = require("./src/models/students")

const app = express()
app.use(cors())

app.post("/students", createStudent)
app.get("/students", getAllStudents)
app.get("/students/:id", getStudentById)
app.patch("/students/:id", updateStudent)

app.get("/test", (req, res) => {
    res.send("It Works")
})

exports.app = functions.https.onRequest(app)