import { createRouter, createWebHashHistory } from 'vue-router';
import MainLayout from './shared/presentation/components/MainLayout.vue';
import LandingView from './LandingView.vue';
import SignInView from './iam/presentation/views/SignInView.vue';
import SignUpView from './iam/presentation/views/SignUpView.vue'; // <--- 1. Importa la vista de registro
import StoreView from './store/presentation/components/StoreView.vue';

const routes = [
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '',
                name: 'landing',
                component: LandingView
            },
            {
                path: 'tienda',
                name: 'store',
                component: StoreView
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: SignInView
    },
    {
        path: '/sign-up',
        name: 'sign-up',
        component: SignUpView // <--- 2. Añade la ruta que faltaba
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;