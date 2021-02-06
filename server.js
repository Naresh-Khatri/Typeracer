const express = require("express");
const path = require("path");
const app = express();
const http = require("http").Server(app);
const socketio = require("socket.io")(http, { cors: { origin: "*" } });

//import words from './components/words.json';
//var words = require("src/components/words.json");

var count = 0;
var randomIndexArray = [];

app.use(express.static(path.join(__dirname, "dist", "spa")));
// app.get('*', (req,res) =>{
//   res.sendFile(path.join(__dirname,'dist/spa/index.html'));
// });

console.log(path.join(__dirname, "dist", "spa"))

const PORT = process.env.PORT || 8000;

let connectedUserMap = new Map();

socketio.on("connection", socket => {
  let connectedUserId = socket.id;

  connectedUserMap.set(socket.id, { username: "none" });
  count++;
  console.log(`a user connected`);
  console.log(connectedUserMap);
  socketio.on("newConnection", () => {
    "A User joined the chat";
  });
  socketio.emit("counter", { count: count });
  console.log("connected count", count);

  socket.on("getUsername", username => {
    let user = connectedUserMap.get(connectedUserId);
    user.id = connectedUserId;
    user.username = username;
    console.log(connectedUserMap);

    socket.on("getMessage", data => {
      socketio.emit("newMessage", data);
      console.log(data);
    });

    socket.on("startGame", () => {
      generateRandomIndexArray(1);
      socketio.emit("startGame", randomIndexArray);
    });
  });
  socket.on("randomGen", () => {
    generateRandomIndexArray(30);
    socketio.emit("getRandomWords", randomIndexArray);
  });
  socket.on("sendProgress", data => {
    user = connectedUserMap.get(connectedUserId);
    user.progress = data.progress;
    console.log(connectedUserMap.get(socket.id));
    socket.broadcast.emit("updateProgress", connectedUserMap.get(socket.id));
    if (user.progress == 0) {
      console.log(user.username, "has completed the game");
      socketio.emit("gameEnded", user.username);
      socketio.emit("goToLobby");
    }
  });

  socket.on("disconnect", data => {
    connectedUserMap.delete(connectedUserId);
    count--;
    console.log("user disconnected", data);
    console.log("disconnected count", count);
    socketio.emit("counter", { count: count });
  });
});

http.listen(PORT, () => console.log("listening on port " + PORT));

function generateRandomIndexArray(size) {
  randomIndexArray = [];
  for (var i = 0; i < size; i++)
    randomIndexArray.push(Math.floor(Math.random() * 326));
  // randomIndexArray.sort(()=> Math.random() - 0.5)
  //randomIndexArray.forEach(elem => console.log(words))
}
