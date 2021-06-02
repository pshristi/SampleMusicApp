const express = require("express")
const http = require("http")
const socketio = require("socket.io")

const app = express()
const server = http.Server(app)
const io = socketio(server)

const PORT = process.env.PORT || 3333

io.on("connection",(socket) => {
    console.log("Received socket connection from "+socket.id)

    socket.on("play",(data) => {
        io.emit("play",data)
    })
})

app.use("/",express.static(__dirname+"/public"))

server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})