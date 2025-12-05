<template>
  <div id="loading-screen-progress" align="center">
    <v-progress-circular
      color="error"
      indeterminate
      :size="90"
      :width="12"
    ></v-progress-circular>
    <br />
    <br />
    <b>Cargando</b>
  </div>
  <div id="loading-screen-background"></div>
</template>

<style scoped>
#loading-screen-background {
  z-index: 99;
  background: white;
  opacity: 0.7;
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
