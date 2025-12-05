//-- Project --//
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import Vue3Lottie from "vue3-lottie";

//-- Vuetify --//
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
//-- Vuetify --//
import "./style.css";
//-- Project --//

import "sweetalert2/dist/sweetalert2.min.css";

// import Layout from "./Layouts/LayoutOne.vue";
//@ts-ignore
// import Paginator from "./components/Paginator.vue";
import { VDateInput } from "vuetify/labs/VDateInput";
import { es } from "vuetify/locale";

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
  },
  components: {
    VDateInput,
    ...components,
  },
  locale: {
    locale: "es",
    fallback: "es",
    messages: { es },
  },
  // components,
  directives,
});

const pinia = createPinia();
const app = createApp(App);

// app.component("Layout", Layout);
// app.component("Paginator", Paginator);
app.component("Vue3Lottie", Vue3Lottie);

app.use(router);
app.use(vuetify);
app.use(Vue3Lottie);
app.use(pinia);
app.mount("#app");
