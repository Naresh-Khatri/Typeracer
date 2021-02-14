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
          style="height: 100%; width: 100%; padding:20px"
        >
          <div v-if="msgData.length">
            <div v-for="(data, index) in msgData" :key="index">
              <strong> {{ data.username }}</strong
              >: {{ data.message }}
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

export default {
  data() {
    return {
      msg: "",
      contentActiveStyle: {
        color: "black"
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
  sockets: {
    async newMessage(data) {
      console.log("new message", data);
      this.msgData.push(data);
      await this.waitScrollBottom();
      // this.scrollToBottom();
    }
  },
  methods: {
    sendMessage() {
      socket.emit("getMessage", { username: this.username, message: this.msg });
      this.msg = "";
    },
    // scrollToBottom() {
    //   const scrollElement = document.querySelector(".chat-box");
    //   scrollElement.scrollTop = scrollElement.scrollHeight;
    // },
    waitScrollBottom() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const scrollElement = document.querySelector(".chat-box");
          scrollElement.scrollTop = scrollElement.scrollHeight;
        }, 10);
      });
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
