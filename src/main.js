import { createApp } from 'vue';
import './style.css';
import App from './app.vue';
import PrimeVue from 'primevue/config';
import Material from '@primeuix/themes/material';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

createApp(App)
    .use(PrimeVue, { ripple: true, theme: { preset: Material } })
    .mount('#app');