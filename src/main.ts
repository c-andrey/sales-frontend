import { createApp } from "vue";
import "./style.css";
import App from "./presentation/App.vue";
import router from "./presentation/router";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./presentation/assets/scss/styles.scss";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");
