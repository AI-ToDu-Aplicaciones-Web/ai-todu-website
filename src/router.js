import { createRouter, createWebHistory } from 'vue-router';
import App from './app.vue'; // Tu Landing Page actual
import SignInView from './iam/presentation/views/SignInView.vue';
import SignUpView from './iam/presentation/views/SignUpView.vue';

const routes = [
    { path: '/', name: 'Landing', component: App },
    { path: '/login', name: 'SignIn', component: SignInView },
    { path: '/register', name: 'SignUp', component: SignUpView },
    // Aquí agregaremos luego las rutas protegidas para profiles y task-management
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) return { el: to.hash, behavior: 'smooth' };
        return { top: 0 };
    }
});