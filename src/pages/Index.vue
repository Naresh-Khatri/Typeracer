<template>
  <q-page class="flex flex-center page">
    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" /> -->
    <q-btn lable="generate" @click="emitGen" />
    <div v-if="!hasUsername" class="q-pa-md">
      <button class="btn" @click="dialog = true">start</button>
      <q-dialog v-model="dialog" persistent>
        <div
          style="background-color:#02d7f2;box-shadow: none;"
          class="dialog-box"
        >
          <q-card-section class="row items-center">
            <q-avatar
              icon="account_circle"
              color="dark"
              style="color: #02d7f2"
            />
            <span class="q-ml-sm">Please enter a name to begin.</span>
          </q-card-section>

          <q-card-section class="row items-center">
            <q-input
              class="username-input"
              outlined
              v-model="username"
              v-on:keydown.enter="dialog = false"
              color="dark"
              label="username"
              autofocus
              @keypress.enter="setUsername()"
            />
            <!-- <q-input standout="text-white" v-model="username" label="Standout" /> -->
          </q-card-section>

          <!-- Notice v-close-popup -->
          <q-card-actions align="right">
            <q-btn
              flat
              class="cpfont"
              label="Confirm"
              color="dark"
              v-close-popup
              @click="setUsername()"
              :disable="!username"
            />
          </q-card-actions>
        </div>
      </q-dialog>
    </div>
    <div v-else>
      <q-btn label="send name" @click="emitUsername()" />
      <typingComp />
    </div>
  </q-page>
</template>

<script>
import typingComp from "../components/typingComponent.vue";
import { store } from "../store/index";
import words from "../components/words.json";

// import Vue from "vue"
// import VueSocketIO from 'vue-socket.io';
// import socketio from 'socket.io'
// //export const SocketInstance = socketio('http://localhost:4113');
// Vue.use(new VueSocketIO({
//   debug: false,
//   connection:'localhost:8000',
//}))

//const io = (window.io = require("socket.io-client"));
import VueSocketIOExt from "vue-socket.io-extended";
import { io } from "socket.io-client";
import Vue from "vue";

//const socket = io('http://socketserver.com:1923');
export var socket = io("ws://localhost:8000");
Vue.use(VueSocketIOExt, socket);

export default {
  name: "PageIndex",
  components: { typingComp },
  data() {
    return {
      dialog: false,
      cancelEnabled: false,
      username: "",
      hasUsername: false,
      isConnected: false
    };
  },
  sockets: {
    connect() {
      // Fired when the socket connects.
      console.log("connected to socket");
      this.isConnected = true;
      this.emitUsername()
    },
    getRandomWords(indexArray) {
      store.state.randomWordsIndex = indexArray;
      console.log(store.state.randomWordsIndex);
    },
    disconnect() {
      this.isConnected = false;
    },

    // Fired when the server sends something on the "messageChannel" channel.
    messageChannel(data) {
      this.socketMessage = data;
    }
  },
  created() {
    // if (localStorage.getItem("username")) {
    //   this.username = localStorage.getItem("username");
    //   store.state.username = this.username;
    //   this.hasUsername = true;
    //   socket.emit("getUsername", this.username);
    // }
    this.emitUsername();
    this.emitGen();
  },
  methods: {
    emitUsername() {
      if (localStorage.getItem("username")) {
        this.username = localStorage.getItem("username");
        this.hasUsername = true;
        store.state.username = this.username;
        console.log("sending name " + store.state.username);
        socket.emit("getUsername", store.state.username);
      }
    },
    setUsername() {
      localStorage.setItem('username', this.username)
      emitUsername();
    },
    emitGen() {
      socket.emit("randomGen");
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap");
* {
  font-family: "Orbitron", sans-serif;
}
.cpfont {
  font-family: "cyberpunkregular";
}
@font-face {
  font-family: "cyberpunkregular";
  src: url("../assets/fonts/Cyberpunk.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
.dialog-box {
  position: relative;
}
.dialog-box::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  border-top: 30px solid #979807;
  border-left: 30px solid #02d7f2;
  width: 0;
}
.dialog-box::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  border-left: 10px solid #979807;
  border-top: 10px solid #02d7f2;
  width: 0;
}
.username-input {
  position: relative;
}
.username-input::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  border-left: 20px solid #02d7f2;
  border-top: 20px solid #02d7f2;
  width: 0;
}
.page {
  background: url("../assets/background.jpg");
  background-repeat: no-repeat;
  width: 100%;
  background-size: 100vw 95vh;
}
.btn {
  all: revert;
  position: relative;
  background: #ff003c;
  outline: none;
  border: none;
  height: 40px;
  padding: 30px 90px;
  color: white;
  font-size: 25px;
  font-family: "cyberpunkregular";
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}
.btn:hover {
  -webkit-filter: brightness(70%);
  filter: brightness(70%);
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.btn::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  border-top: 40px solid #fcf700;
  border-left: 40px solid #ff003c;
  width: 0;
}
.btn::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  border-bottom: 20px solid #fcf700;
  border-right: 20px solid #ff003c;
  width: 0;
}
</style>
