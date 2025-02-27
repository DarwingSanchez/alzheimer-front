import "./assets/main.css";
import config from "../formkit.config";
import { createApp } from "vue";
import { plugin, defaultConfig } from "@formkit/vue";
import '@formkit/themes/genesis'
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(plugin, defaultConfig(config));

app.mount("#app");
