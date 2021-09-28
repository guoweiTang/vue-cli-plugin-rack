import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';
import store from './store/index';

createApp(App)
  .use(ElementPlus)
  .use(store)
  .use(router)
  .mount('#app');
