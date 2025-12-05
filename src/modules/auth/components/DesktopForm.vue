<template>
    <div class="d-none d-sm-block" align="center">
      <LoginForm />
    </div>
    <div class="d-block d-sm-none" align="center">
      <MobileForm />
    </div>
</template>


<script setup lang="ts">
import LoginForm from '../forms/LoginForm.vue';
import MobileForm from '../forms/MobileForm.vue';

</script>

<style scoped>

/* #image {
  background-image: url('/src/assets/images/image-login.png');
  background-color: rgb(255, 255, 255);
  background-position: center;
  position: relative;
  right: 0;
  width: 55vw;
  height: 100vh;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: -1;
} */

/* .color {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #0000000c;
  z-index: -1;
}
.box {
  position: absolute;
  left: 25%;
  width: 90%;
  margin: 20px;
  justify-content: center;
  align-items: center;
} */
</style>