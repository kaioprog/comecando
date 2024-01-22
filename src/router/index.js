import { createRouter, createWebHashHistory } from 'vue-router';
import AppLayout from '../layout/AppLayout.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    component: () => import('../components/HomeView.vue')
                }
            ]
        }
    ]
});

export default router;
