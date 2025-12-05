<template>
  <v-card width="85%" elevation="0">
    <v-card-text class="ma-10">
      <v-row>
        <v-col cols="12" md="6"  class="left-col">
          <h1 class="font-style golden-color">Bienvenido a Zentic</h1>
          <div class="align-logo d-none d-md-block">
            <img src="../../../assets/logos/temporal_logo.jpg" alt="">
          </div>
          <div class="carousel-container d-none d-md-block" >
          <v-carousel
            height="100"
            :show-arrows="false"
            cycle
            hide-delimiter-background
            color="#00162e"
            style="box-shadow: none !important;"
          >
            <v-carousel-item
              v-for="(slide, i) in [
                'Descripción empresa, es una empresa donde puedes encontrar todo lo que necesitas',
                'Publicidad, es una empresa donde puedes encontrar todo lo que necesitas.',
                'Promociones, es una empresa donde puedes encontrar todo lo que necesitas.',
                'Servicios, es una empresa donde puedes encontrar todo lo que necesitas.',
              ]"
              :key="i"
              class="mb-5"
            >
              <v-sheet color="transparent" height="100">
                <div class="d-flex fill-height justify-center align-end">
                  <p class="mb-10">
                    {{ slide }}
                  </p>
                </div>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="text-start mb-5 ml-10 mt-7">
            <h2 class="golden-color text-start">Iniciar sesión</h2>
            <p class="text-start gray-color">
              Para iniciar sesión, ingresa tus datos de acceso.
            </p>
          </div>
          <v-form>
            <div class="pl-10 pr-5">
              <v-text-field
                label="Usuario"
                type="text"
                variant="outlined"
                density="compact"
                required
                append-inner-icon="mdi-email"
                class="border-color"
                v-model="formLogin.user"
              ></v-text-field>
              <v-text-field
                label="Contraseña"
                :type="isVisible ? 'text' : 'password'"
                variant="outlined"
                density="compact"
                required
                :append-inner-icon="isVisible ? 'mdi-lock-off' : 'mdi-lock'"
                class="border-color"
                v-model="formLogin.password"
                @keyup.enter="submitForm"
                @click:append-inner="isVisible = !isVisible"
              ></v-text-field>
              <div align="start">
                <v-btn
                  variant="plain"
                  density="compact"
                  class="text-black mt-n3 mb-2 ml-n4"
                  @click="goTo('forgot-password')"
                >
                  <b class="golden-color"> ¿Olvidaste tu contraseña? </b>
                </v-btn>
              </div>
              <div>
                <v-btn
                  color="#b78f4c"
                  block
                  variant="outlined"
                  class="change-color"
                  @click="submitForm"
                  >Ingresar</v-btn
                >
              </div>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  <div id="image"></div>
</template>

<script setup lang="ts">
import { inject, reactive } from "vue";
import router from "../../../router";
import { useAuthStore } from "../store/useStoreAuth";
import { ref } from "vue";
import { loginType } from "../interfaces/login.type";

const authStore = useAuthStore();
let isVisible = ref(false);
let swal: any = inject("swal");

const formLogin = reactive<loginType>({
  user: "",
  password: "",
});

const submitForm = async () => {
  let res = await authStore.login(formLogin);
  if (res.isLogged) {
    router.push({ name: "Home" });
  } else {
    await swal.fire({
      icon: "error",
      text: res.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};

const goTo = (routeName: string) => {
  router.push({ name: routeName });
};
</script>
<style scoped>
.v-card {
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  height: 60vh;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 6;
  margin-top: 20vh;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.border-color {
  color: rgb(0, 0, 0);
  border-radius: 10px !important;
  border-color: rgb(0, 0, 0) !important;
}

.change-color {
  border-radius: 10px !important;
  border-color: #b78f4c !important;
  color: #b78f4c !important;
}

.font-style {
  text-align: center;
}

.golden-color {
  color: #b78f4c;
}
.align-logo {
  width: 215px;
  margin-top: 20px;
  margin-bottom: -150px;
}
.gray-color {
  color: gray;
}
.left-col {
  display: flex;
  flex-direction: column;
  align-items: center; 
}

.carousel-container {
  width: 60%; 
  margin-top: 150px; 
}
</style>
