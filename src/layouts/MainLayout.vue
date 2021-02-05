<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          color="dark"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <div style="color:black">TypeRacer</div>
        </q-toolbar-title>

        <div style="color:#1d1d1d; margin-right:30px" v-if="username">
          Online Players: <strong>{{  }}</strong>
        </div>
        <div style="color:#1d1d1d" v-if="username">
          Playing as <strong>{{ username }}</strong>
        </div>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { store } from "../store/index";
import socket from '../pages/Index.vue'

export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false
    };
  },
  computed: {
    username() {
      return store.state.username;
    },
  },
  mounted() {
    console.log(store.state.username);
  },
  methods: {}
};
</script>
