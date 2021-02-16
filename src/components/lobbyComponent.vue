<template>
  <div
    class="pitch-mixin"
    data-augmented-ui="
tl-clip tr-scoop b-clip-x both"
  >
    <div class="container">
      <div data-augmented-ui="tl-clip br-clip " class="chat-box">
        <q-scroll-area
          :thumb-style="thumbStyle"
          style="height: 220%; width: 100%; padding:20px"
          id="chat-box1"
          ref="scrollArea"
        >
          <div v-if="msgData.length">
            <div v-for="(data, index) in msgData" :key="index">
              <strong> {{ data.username }}</strong
              >: {{ data.message
              }}<span style="font-size:15px;float:right">
                {{ minutesAgo(data.time) }}</span
              >
            </div>
          </div>
          <div v-else style="color:#978d01">send a message</div>
        </q-scroll-area>
      </div>
      <input
        data-augmented-ui="tr-clip"
        class="input-box"
        v-model="msg"
        @keydown.enter="sendMessage()"
        autofocus
        placeholder="Type here"
      />
    </div>
  </div>
</template>
<script>
import wordsjson from "./words.json";
import { store } from "../store/index";
import { socket } from "../pages/Index.vue";

import { scroll } from "quasar";
const { getScrollHeight } = scroll;

export default {
  data() {
    return {
      msg: "",
      contentActiveStyle: {
        color: "black",
        scrollPosition: 0
      },

      thumbStyle: {
        right: "2px",
        borderRadius: "5px",
        backgroundColor: "#027be3",
        width: "5px",
        opacity: 0.75
      }
    };
  },
  computed: {
    username() {
      return store.state.username;
    },
    msgData() {
      return store.state.messageData;
    }
  },
  mounted() {
    this.scrollToBottom();
  },
  sockets: {
    getOldMessages(data){
      //console.log(data)
      store.state.messageData = data
    },
    newMessage(data) {
      //console.log("new message", data);
      this.msgData.push(data);
      this.scrollToBottom();
    }
  },
  methods: {
    sendMessage() {
      socket.emit("getMessage", {
        username: this.username,
        time: Date.now(),
        message: this.msg
      });
      this.msg = "";
    },
    minutesAgo(date) {
      var minutes = Math.floor((Date.now() - date) / (1000 * 60));
      if ((Date.now() - date) / 1000 < 20) return "- Just now";
      else if (
        (Date.now() - date) / 1000 > 20 &&
        (Date.now() - date) / 1000 < 60
      )
        return " - 30 secs ago ";
      else return " - " + minutes + " Min ago ";
    },
    scrollToBottom() {
      //console.log(this.$refs.scrollArea.getScrollPosition());
      const chatBox = document.querySelector("#chat-box1");
      //console.log(getScrollHeight(chatBox));
      this.$refs.scrollArea.setScrollPosition(10000, 300);
    }
  }
};
</script>
<style scoped>
.chat-box {
  width: 80%;
  height: 70vh;
  overflow: auto;
  overflow-y: auto;
  text-overflow: ellipsis;
  font-size: 25px;
  background: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 50px;
  width: 80%;
  margin: 0 auto;
  height: 350px;
}
.chat-box::-webkit-scrollbar {
  display: none;
}
.container {
  position: relative;
  width: 100%;
  margin: 0 auto;
}
.first-word {
  padding: 10px;
  background: #02d7f2;
}
.word {
  margin-left: 10px;
}
.words-box {
  font-weight: bold;
  font-size: 25px;
  background: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 50px;
  width: 80%;
  margin: 0 auto;
  height: 350px;
}
.input-box {
  outline: none;
  text-decoration: none;
  border: none;
  background: white;
  font-weight: bold;
  font-size: 25px;
  display: flex;
  justify-content: center;
  position: relative;
  top: 60px;
  width: 60%;
  padding: 10px;
  margin: 0 auto;
  height: 50px;
}
.my-augfiguration {
  --aug-tr: 25px;
  --aug-bl: 57px;
  --aug-br: 25px;
  --aug-br-inset2: 40%;
  --aug-border-all: 10px;
  --aug-border-bg: linear-gradient(344px);
  --aug-inlay-all: 10px;
  --aug-inlay-bg: #fbe806;
  background: linear-gradient(#ff604d, #b1ffff);
  color: #b1ffff;
  font-size: "cyberpunkregular";
}
.pitch-mixin {
  --aug-tr: 25px;
  --aug-b-extend1: 50%;
  height: 500px;
  width: 1000px;
  --aug-border-all: 7px;
  --aug-border-bg: radial-gradient(at top, #fbe806 25%, transparent 50%);

  --aug-inlay-all: 4px;
  --aug-inlay-bg: radial-gradient(#fbe806, black);
  --aug-inlay-opacity: 0.5;
}
</style>
