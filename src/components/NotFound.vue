<template>
  <figure class="not-found-figure">
    <img src="./../assets/404.svg" alt="Not Found" class="not-found-image" />
    <router-link to="/login" class="return-button">
      <v-btn 
        class="mt-n6"
        color="#841811ff"
        small
        density="compact"
        variant="outlined"
      >
        Volver al Inicio
      </v-btn>
    </router-link>
  </figure>
</template>

<script setup lang="ts">

//import { ref } from "vue";

defineProps<{ msg: string }>();

//const count = ref(0);
</script>

<style scoped>
.not-found-figure {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  margin: 0;
}

.not-found-image {
  max-width: 100%;
  height: auto;
  width: 100%;
  max-width: 600px; /* Maximum width for larger screens */
}

.return-button {
  margin-top: 20px;
}

</style>
