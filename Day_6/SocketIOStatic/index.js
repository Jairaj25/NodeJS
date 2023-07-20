const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const path = require('path');
const port = 5000;
const activeUsersList = {};



//const __dirname = path.resolve()
  
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("addUser", (name) => {
    activeUsersList[socket.id] = name;
    io.emit("activeUsers", Object.values(activeUsersList));
  });

  socket.on("privateMessage", (msg) => {
    const recievingSocketId = Object.keys(activeUsersList).find(
      (socketId) => activeUsersList[socketId] === msg.recipient
    );
    if (recievingSocketId) {

      io.to(recievingSocketId).emit("privateMessage", {
        sender: activeUsersList[socket.id],
        message: msg.message,
      });
    }
  });

  socket.on("disconnect", () => {
    if (activeUsersList[socket.id]) {
      delete activeUsersList[socket.id];
      io.emit("activeUsers", Object.values(activeUsersList));
      console.log("A user disconnected");
    }
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});