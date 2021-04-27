import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import installElementPlus from './plugins/element';
import store from './store';
import axios from 'axios';
import { setSettings } from './config';

axios('/settings.json')
  .then(({ data }) => {
    setSettings(data);

    const app = createApp(App);
    installElementPlus(app);
    app.use(router).use(store).mount('#app');
  })
  .catch((e) => {
    console.error(e);
    alert('运行环境参数获取失败！');
  });
