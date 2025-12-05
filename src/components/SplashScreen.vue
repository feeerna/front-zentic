<template>
  <div id="loading-screen-progress" align="center">
    <v-img width="150px" src="src/assets/logos/logo.jpg"></v-img>
    <br />
    <v-progress-linear
      rounded
      color="white"
      indeterminate
      :height="8"
    ></v-progress-linear>
    <b class="text-white">Iniciando</b>
  </div>
  <div id="loading-screen-background"></div>
</template>

<style scoped>
#loading-screen-background {
  z-index: 99;
  background: #841811ff;
  position: fixed;
  width: 100vw;
  height: 100vh;
}
#loading-screen-progress {
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centrar horizontal y verticalmente */
}
</style>
