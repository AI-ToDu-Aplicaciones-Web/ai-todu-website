import { createRouter, createWebHistory } from 'vue-router';
import LandingView from './LandingView.vue';
import SignInView from './iam/presentation/views/SignInView.vue';
import SignUpView from './iam/presentation/views/SignUpView.vue';

const routes = [
    { path: '/', name: 'Landing', component: LandingView },
    { path: '/login', name: 'SignIn', component: SignInView },
    { path: '/register', name: 'SignUp', component: SignUpView },
    { path: '/sign-up', redirect: '/register' } // Por si acaso usas esta ruta
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});