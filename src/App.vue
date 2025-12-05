<template>
  <SplashScreen v-if="appStore.showSplashScreen" />
<LoadingScreen v-if="appStore.showLoadingScreen" />
<router-view />
</template>
<script setup lang="ts">
import Swal from "sweetalert2";
import { provide } from "vue";
import { useAppStore } from "./stores/app-store";
import SplashScreen from "./components/SplashScreen.vue";
import LoadingScreen from "./components/LoadingScreen.vue";
const appStore = useAppStore()
provide("swal", Swal);
</script>

<style scoped>
.logo {
height: 6em;
padding: 1.5em;
will-change: filter;
transition: filter 300ms;
}

.logo:hover {
filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
