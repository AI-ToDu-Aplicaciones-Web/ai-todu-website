import { createApp } from 'vue';
import './style.css';
import { router } from './router.js';
import { i18n } from './i18n.js';
import AppContainer from './AppContainer.vue'; // Nuevo contenedor raíz
import PrimeVue from 'primevue/config';
import Material from '@primeuix/themes/material';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const primeUiLicenseKey = import.meta.env.VITE_PRIME_UI_LICENSE_KEY;

createApp(AppContainer)
    .use(router)
    .use(i18n)
    .use(PrimeVue, { ripple: true, theme: { preset: Material }, license: primeUiLicenseKey })
    .mount('#app');