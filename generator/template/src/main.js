import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import installElementPlus from './plugins/element';
import store from './store';

const app = createApp(App);
installElementPlus(app);
app.use(router).use(store).mount('#app');
