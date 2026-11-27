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
            component: () => import('@/views/games/border/FindCountryView.vue'),
        },
        {
            path: '/is',
            name: 'is',
            component: () => import('@/views/games/icecream/TemperatureView.vue'),
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
        {
            path: '/teacher',
            children: [
                {
                    path: '',
                    name: 'teacher-login',
                    component: () => import('@/views/teacher/LoginView.vue'),
                },
                {
                    path: 'home',
                    name: 'teacher-home',
                    component: () => import('@/views/teacher/HomeView.vue'),
                },
                {
                    path: 'menu',
                    name: 'teacher-menu',
                    component: () => import('@/views/teacher/MenuView.vue'),
                },
                {
                    path: 'class-data',
                    name: 'teacher-class-data',
                    component: () => import('@/views/teacher/ClassDataView.vue'),
                },
                {
                    path: 'student-data',
                    name: 'teacher-student-data',
                    component: () => import('@/views/teacher/StudentDataView.vue'),
                },
            ],
        },
    ],
});

export default router;
