<template>
  <q-page class="flex flex-center page">
    <!-- <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" /> -->
    <!-- <q-btn lable="generate" @click="emitGen" /> -->
    <div v-if="state == 'signup'" class="q-pa-md">
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
              color="dark"
              label="username"
              autofocus
              v-on:keydown.enter="setUsername()"
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
    <div v-else-if="state == 'lobby'">
      <q-btn
        style="left:800px; top:30px; background:#FF003C; z-index:100"
        data-augmented-ui="tl-clip br-clip "
        label="Start Game"
        size="xl"
        @click="startGame"
      />
      <!-- <button style="left:700px; top:60px" class="btn" @click="dialog = true">start</button> -->

      <h1
        style="margin:0px;position:relative; top:-50px;text-weight:bold"
        class="cpfont"
      >
        lobby
      </h1>

      <lobbyComp />
    </div>
    <div v-else-if="state == 'game'">
      <!-- <q-btn label="send name" @click="emitUsername()" /> -->
      <q-btn
        style="background:#FF003C; z-index:100"
        data-augmented-ui="tl-clip br-clip "
        label="<- Lobby"
        size="xl"
        @click="goToLobby()"
      />
      <typingComp />
    </div>
  </q-page>
</template>

<script>
import typingComp from "../components/typingComponent.vue";
import lobbyComp from "../components/lobbyComponent.vue";
import { store } from "../store/index";

import VueSocketIOExt from "vue-socket.io-extended";
import { io } from "socket.io-client";
import Vue from "vue";

if (process.env.DEBUGGING) {
  export var socket = io("ws://localhost:8000");
} else export var socket = io("wss://" + window.location.hostname); //wss = wss over https

Vue.use(VueSocketIOExt, socket);

export default {
  name: "PageIndex",
  components: { typingComp, lobbyComp },
  data() {
    return {
      dialog: false,
      cancelEnabled: false,
      username: "",
      hasUsername: false,
      isConnected: false,
      state: "signup"
    };
  },
  sockets: {
    connect() {
      // Fired when the socket connects.
      console.log("connected to socket");
      this.isConnected = true;
      this.emitUsername();
    },
    startGame(indexArray) {
      this.state = "game";
      store.state.randomWordsIndex = indexArray;
      console.log(store.state.randomWordsIndex);
    },
    gameEnded(data) {
      console.log(data, "has completed the game");
      this.$q.notify({
        message: `<strong> ${data} <span style="color:'dark'"></span></strong> won  the game wew *-*`,
        position: "top",
        color: "green",
        html: true
      });
    },
    goToLobby() {
      this.state = "lobby";
    },
    disconnect() {
      this.isConnected = false;
    },
    counter(data) {
      store.state.onlineCount = data.count;
    }
  },
  created() {
    this.emitUsername();
  },
  methods: {
    emitUsername() {
      if (localStorage.getItem("username")) {
        this.username = localStorage.getItem("username");
        this.hasUsername = true;
        store.state.username = this.username;
        console.log("sending name " + store.state.username);
        socket.emit("getUsername", store.state.username);
        this.state = "lobby";
      }
    },
    setUsername() {
      localStorage.setItem("username", this.username);
      this.emitUsername();
    },
    startGame() {
      console.log("starting game");
      socket.emit("startGame");
      this.state = "game";
    },
    goToLobby() {
      this.state = "lobby";
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
