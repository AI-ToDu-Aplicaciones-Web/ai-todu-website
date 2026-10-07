import { createI18n } from 'vue-i18n';

const messages = {
    en_US: {
        nav: { home: 'Home', benefits: 'Benefits', pricing: 'Pricing', login: 'Login' },
        hero: { title: 'Make complex projects possible', subtitle: 'Our AI breaks down your biggest goals into actionable steps.' }
    },
    es_419: {
        nav: { home: 'Inicio', benefits: 'Beneficios', pricing: 'Planes', login: 'Iniciar Sesión' },
        hero: { title: 'Haz que tus proyectos complejos sean posibles', subtitle: 'Nuestra Inteligencia Artificial desglosa tus metas más grandes en tareas accionables.' }
    }
};

export const i18n = createI18n({
    legacy: false,
    locale: 'en_US', // Idioma por defecto según requerimientos
    fallbackLocale: 'es_419',
    messages,
});