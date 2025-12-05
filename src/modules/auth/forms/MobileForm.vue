<template>
  <v-card width="85%" elevation="0" class="mt-10">
    <v-card-text class="pa-4 pt-16" align="center">
      <v-img width="40%" src="../../../assets/logos/temporal_logo.png"></v-img>
      <h1 class="golden-color">Bienvenido a Zentic</h1>
      <p class="text-start">Para iniciar sesión, ingresa tus datos de acceso.</p>
      <v-form @submit.prevent="" class="mt-6">
        <v-text-field
          density="compact"
          bg-color="white"
          v-model="formData.username"
          variant="outlined"
          label="Nombre de usuario"
        ></v-text-field>
        <v-text-field
          density="compact"
          class="mt-4"
          bg-color="white"
          type="password"
          variant="outlined"
          v-model="formData.password"
          label="Contraseña"
        ></v-text-field>

        <br />
        <v-btn class="golden-color" type="submit" variant="outlined" block>
          Ingresar
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>
<script setup lang="ts">
// import { useAppStore } from "@/stores/app-store";
import { reactive } from "vue-demi";
// import * as Yup from "yup";

let formData = reactive({
  username: "",
  password: "",
});
// const validations = {
//   username: Yup.string().required(),
//   password: Yup.string().required(),
// };
// let validationSchema = Yup.object(validations);
// const usernameRules = ref([
//   async (value: any) => {
//     try {
//       await validations.username.validate(value);
//       return true;
//     } catch (e: any) {
//       return "El username no es válido";
//     }
//   },
// ]);

// const onLoadedImage = () => {
//   const appStore = useAppStore();
//   appStore.showSplashScreen = false;
// };
// const submit = async () => {
//   const appStore = useAppStore();
//   appStore.showLoadingScreen = true;
//   await validationSchema.validate(formData);
//   const authStore = useAuthStore();
//   const { isLogged } = await authStore.login(
//     formData.username,
//     formData.password
//   );
//   if (isLogged) {
//     router.push("/");
//   }
//   appStore.showLoadingScreen = false;
// };
</script>
<style scoped>
.golden-color {
  color: #b78f4c;
}
</style>
