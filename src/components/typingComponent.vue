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
        @keyup.space="removeSpace()"
        autofocus
      />
    </div>
    <div
      class="q-pa-md"
      style="width:90%; margin: 100px auto; 
          margin-top:100px; z-index:100"
    >
      <q-badge color="secondary"> Progress: {{ progress }}% </q-badge>

      <q-slider
        v-model="progress"
        :min="0"
        :max="100"
        :step="1"
        label
        label-value="User1"
        label-always
        readonly
        color="secondary"
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
      wordslist: [],
      userword: "",
      progress: 0,

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
    }
  },
  sockets: {
    updateProgress(data){
      console.log(data)

    }
  },
  methods: {
    verifyWord() {
      if (
        this.words[this.randomWordsIndex[0]].localeCompare(this.userword) == 0
      ) {
        store.state.randomWordsIndex.shift();
        document.querySelector(".first-word").style.background = "#02d7f2";
        this.progress = Math.ceil(
          ((30 - this.randomWordsIndex.length) / 30) * 100
        );
        this.sendProgress();
      } else {
        document.querySelector(".first-word").style.background = "red";
      }
      this.userword = "";
    },
    sendProgress() {
      socket.emit("sendProgress", {
        id: socket.id,
        progress: this.randomWordsIndex.length
      });
    },
    removeSpace() {
      this.userword = "";
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
