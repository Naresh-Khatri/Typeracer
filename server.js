const { match } = require("assert");
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

console.log(path.join(__dirname, "dist", "spa"));

const PORT = process.env.PORT || 8000;

let connectedUserMap = new Map();
let matchPlayers = new Map();
let rankList = [];

socketio.on("connection", socket => {
  let connectedUserId = socket.id;

  connectedUserMap.set(socket.id, { username: "unknown" });
  count++;
  console.log(`a user connected`);
  console.log(connectedUserMap);
  socketio.on("newConnection", () => {
    "A User joined the chat";
  });
  socketio.emit("counter", { count: count });
  socket.broadcast.emit("newUserConnected");
  console.log("connected count", count);
  socket.on("getUsername", username => {
    var user = connectedUserMap.get(connectedUserId);
    user["username"] = username;
    user["id"] = connectedUserId;
  });
  socket.on("getUsersList", () => {
    var usersList = [];
    connectedUserMap.forEach(obj => {
      usersList.push(obj);
    });
    socket.emit("getUsersList", usersList);
  });
  socket.on("getMessage", data => {
    socketio.emit("newMessage", data);
    console.log(data);
  });
  socket.on("emitStartGame", () => {
    matchPlayers.set(socket.id, {});
    generateRandomIndexArray(100);
    socketio.emit("startGame", { randomIndexArray });
    socketio.emit("initializeGameData", [...matchPlayers.entries()]);
    for (var i = matchPlayers.size; i > 0; i--) rankList.push(i); 
    matchPlayers = new Map();
  });
  socket.on("sendStartGame", () => {
    //console.log("called start");
    //generateRandomIndexArray(100)
    socket.emit("testing");
  });
  socket.on("socketStartGame", () => {
    generateRandomIndexArray(100);
    socketio.emit("startGame", randomIndexArray);
    socketio.emit("updateProgress", connectedUserMap.get(socket.id));
    //console.log("starting");
  });
  socket.on("randomGen", () => {
    generateRandomIndexArray(30);
    socketio.emit("getRandomWords", randomIndexArray);
  });
  socket.on("sendProgress", data => {
    //console.log(connectedUserMap.get(socket.id));

    matchPlayers.set(socket.id, data);

    socketio.emit("updateProgress", [...matchPlayers.entries()]);
    if (data.progress == 100) {
      socketio.emit("gameEnded", matchPlayers.get(socket.id).username);
      var rank = rankList.pop()
      socket.emit("showResults", rank);
      console.log('sending rank ' + rankList)
      //socketio.emit("goToLobby");
    }
  });

  socket.on("wentToLobby", id => {
    var player = matchPlayers.get(id);
    player.active = false;
    console.log(matchPlayers.get(socket.id), "has left");
    socket.broadcast.emit("playerLeft", matchPlayers.get(socket.id));
  });

  socket.on("disconnect", data => {
    connectedUserMap.delete(connectedUserId);
    count--;
    console.log("user disconnected", data);
    console.log("disconnected count", count);
    socketio.emit("counter", { count: count });
    socketio.emit("userDisconnected");
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
