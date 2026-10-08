import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from './shared/presentation/components/MainLayout.vue';
import LandingView from './LandingView.vue';
import SignInView from './iam/presentation/views/SignInView.vue';
import StoreView from './store/presentation/components/StoreView.vue';

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            { path: '', name: 'landing', component: LandingView },
            { path: 'tienda', name: 'store', component: StoreView }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: SignInView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;