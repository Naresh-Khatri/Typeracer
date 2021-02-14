<template>
  <div
    class="pitch-mixin"
    data-augmented-ui="
tl-clip tr-scoop b-clip-x both"
  >
    <div class="container">
      <div data-augmented-ui="tl-clip br-clip " class="words-box">
        <div
          v-for="(randomWordIndex, index) in randomWordsIndex"
          :key="index"
          class="word"
          :class="index == 0 ? 'first-word' : ''"
        >
          {{ words[randomWordIndex] }}
        </div>
      </div>
      <input
        data-augmented-ui="tr-clip"
        class="input-box"
        v-model="userword"
        @keydown.space="verifyWord()"
        @keyup.space="userword=''"
        autofocus
      />
    </div>
    <div style="margin-top:65px;"></div>
    <q-list dense>
      <q-item
        class="q-pa-sm"
        style="width:90%; margin: 0 auto; z-index:100;display:flex; flex-direction:row; align-items:center"
        v-for="(player, index) in matchPlayers"
        :key="index"
      >
        <!-- {{ player[1] }} -->

        <q-knob
          v-model="player[1].progress"
          show-value
          size="50px"
          :thickness="0.22"
          color="teal"
          track-color="grey-3"
          class="q-ma-md"
          style="margin:5px"
          readonly
          title="Speed in WPS"
        >
          <strong style="color:black;font-size:18px">{{
            player[1].wps
          }}</strong>
        </q-knob>
        <q-slider
          style="margin:0px 20px"
          :value="player[1].progress"
          :min="0"
          :max="100"
          :step="1"
          label
          :label-value="player[1].username"
          label-always
          readonly
          color="secondary"
        />
      </q-item>
    </q-list>
  </div>
</template>
<script>
import { store } from "../store/index";
import { socket } from "../pages/Index.vue";

export default {
  data() {
    return {
      wordslist: [],
      userword: "",
      progress: 0,
      opponent: {},
      secondsElapsed: 0,
      interval: null,
      wps: "",
      matchPlayers: new Map()
    };
  },
  computed: {
    words() {
      return store.state.words;
    },
    randomWordsIndex() {
      return store.state.randomWordsIndex;
    },
    progressPercent() {
      return this.randomWordsIndex.length;
    },
    username() {
      return store.state.username;
    }
  },
  sockets: {
    updateProgress(playersList) {
      this.matchPlayers = playersList;
      playersList.forEach(player => {
        console.log(player[1]);
      });
      // this.wps = (((100 - data.progress) * 60) / this.secondsElapsed).toFixed(
      //   0
      // );
      // this.matchPlayers.set(data.id, {
      //   username: data.username,
      //   progress: 100 - data.progress,
      //   speed: this.wps
      // });
      // this.matchPlayers.forEach(player=>{
      //   console.log(player)
      // });
    },
    initializeGameData(playersList) {
      this.matchPlayers = playersList;
      console.log(this.matchPlayers);
      playersList.forEach(player => {
        //console.log(player[1]);
      });
    }
  },
  mounted() {
    this.startCounter();
    this.sendInitialize();
  },
  beforeDestroy() {
    console.log("destroying");
    clearInterval(this.interval);
  },
  methods: {
    verifyWord() {
      if (
        this.words[this.randomWordsIndex[0]].localeCompare(this.userword) == 0
      ) {
        store.state.randomWordsIndex.shift();
        document.querySelector(".first-word").style.background = "#02d7f2";
        this.progress = 100 - this.randomWordsIndex.length;
        this.wps = Math.ceil((this.progress * 60) / this.secondsElapsed);
        console.log(this.progress);
        this.sendProgress();
      } else {
        document.querySelector(".first-word").style.background = "red";
      }
      this.userword = "";
    },
    sendProgress() {
      socket.emit("sendProgress", {
        id: socket.id,
        progress: this.progress,
        wps: this.wps,
        username: store.state.username
      });
    },
    sendInitialize() {
      socket.emit("sendProgress", {
        id: socket.id,
        progress: 0,
        wps: "0",
        username: store.state.username
      });
    },
    getPercent(val, max) {
      //console.log('returning ', Math.ceil(((max - val) / max) * 100))
      return Math.ceil(((max - val) / max) * 100);
    },
    startCounter() {
      this.secondsElapsed = 0;
      console.log("called counter");
      this.interval = setInterval(() => {
        this.secondsElapsed += 1;
        // console.log(this.secondsElapsed);
      }, 1000);
    }
  }
};
</script>
<style scoped>
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
  flex-direction: row;
  align-items: center;
  position: relative;
  top: 50px;
  width: 80%;
  margin: 0 auto;
  height: 100px;
}
.input-box {
  outline: none;
  text-decoration: none;
  border: 2px solid #26a69a;
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
