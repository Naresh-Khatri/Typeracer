<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          color="dark"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        /> -->

        <q-toolbar-title>
          <div class="cp2-fonts" style="color:black">TypeRacer</div>
        </q-toolbar-title>

        <!-- <div style="color:#1d1d1d; margin-right:30px" v-if="username">
          Online Players: <strong>{{ onlineCount }}</strong>
        </div> -->
        <q-btn-dropdown
        class="cp2-fonts"
          style="color: black; margin:0px 10px"
          :label="'🟢' + onlineCount + ' online'"
          :key="onlineCount"
          @click="getUsersList()"
        >
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label v-for="(user, index) in usersList" :key="index"
                  >{{ user.username }}
                  <span style="color:#FF003C; font-weight: bold" v-if="user.username == 'unknown'"
                    >(New)</span
                  ><span style="color:green; font-weight: bold" v-if="socketID == user.id"
                    >(You)</span
                  ></q-item-label
                >
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <div style="color:#1d1d1d" v-if="username">
          <q-btn
            icon="logout"
            style="margin:0px 10px;"
            title="Logout"
            @click="logout()"
          />
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
      <router-view :key="updateChild" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { store } from "../store/index";
import { socket } from "../pages/Index.vue";

export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
      usersList: [],
      updateChild: false
    };
  },
  computed: {
    socketID() {
      return socket.id;
    },
    username() {
      return store.state.username;
    },
    onlineCount() {
      return store.state.onlineCount;
    }
  },
  mounted() {
    console.log(store.state.username);
    this.getUsersList();
  },
  sockets: {
    getUsersList(data) {
      this.usersList = data;
    }
  },
  methods: {
    getUsersList() {
      socket.emit("getUsersList");
    },
    logout() {
      store.state.username = "";
      this.$q.notify({
        message: "Logged out successfully",
        position: "top",
        color: "black"
      });
      localStorage.setItem("username", "");
      this.updateChild = !this.updateChild;
    }
  }
};
</script>
<style>
*{
  font-family: "Orbitron"
}
</style>
