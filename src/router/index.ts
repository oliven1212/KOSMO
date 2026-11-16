import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: () => import('@/views/HomepageView.vue'),
        }
    ],
});

export default router;
