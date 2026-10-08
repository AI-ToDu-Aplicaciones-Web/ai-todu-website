import { createRouter, createWebHistory } from 'vue-router';
import LandingView from './LandingView.vue';
import SignInView from './iam/presentation/views/SignInView.vue';
import SignUpView from './iam/presentation/views/SignUpView.vue';
import StoreView from './store/presentation/components/StoreView.vue';

const routes = [
    { path: '/', name: 'Landing', component: LandingView },
    { path: '/login', name: 'SignIn', component: SignInView },
    { path: '/register', name: 'SignUp', component: SignUpView },
    { path: '/sign-up', redirect: '/register' },
    { path: '/tienda', name: 'store', component: StoreView }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});