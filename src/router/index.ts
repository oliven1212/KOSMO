import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: () => import('@/views/LoginView.vue'),
        },
        {
            path: '/homepage',
            name: 'homepage',
            component: () => import('@/views/HomepageView.vue'),
        },
        {
            path: '/graense-minigame',
            name: 'graense-minigame',
            component: () => import('@/views/HomepageView.vue'),
        },
        {
            path: '/is',
            name: 'is',
            component: () => import('@/views/HomepageView.vue'),
        },
        {
            path: '/wardrobe',
            name: 'wardrobe',
            component: () => import('@/views/HomepageView.vue'),
        },
        {
            path: '/achievement',
            name: 'achievement',
            component: () => import('@/views/HomepageView.vue')

        },
    ],
});

export default router;
