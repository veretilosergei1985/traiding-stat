import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
// import router from '@/router/index.js'
import { router } from './router';
import vuetify from './plugins/vuetify/index';
import i18n from '@/plugins/i18n';
import msw from '@/plugins/msw';
import '@/scss/style.scss';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
import VueApexCharts from 'vue3-apexcharts';
import store from './store';

const app = createApp(App);
app.use(router);
app.use(PerfectScrollbar);
app.use(VueApexCharts);
app.use(store);
app.use(i18n);
app.use(msw);
app.use(vuetify).mount('#app');


// import { createApp } from 'vue';
// import App from './App.vue';
// import { router } from './router';
// import vuetify from './plugins/vuetify/index';
// import i18n from '@/plugins/i18n';
// import msw from '@/plugins/msw';
// import '@/scss/style.scss';
// import PerfectScrollbar from 'vue3-perfect-scrollbar';
// import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
// import VueApexCharts from 'vue3-apexcharts';
// import store from './store';
// const app = createApp(App);
// app.use(router);
// app.use(PerfectScrollbar);
// app.use(VueApexCharts);
// app.use(store);
// app.use(i18n);
// app.use(msw);
// app.use(vuetify).mount('#app');
