import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from '@/pages/Home.vue'
import Login from '@/pages/auth/Login.vue'
import {
    useStore
} from '@/store/modules'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        component: Login
    }

]

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes
})
router.beforeEach((to, from, next) => {
    const store = useStore()

    const Login = store.authStore.isLogin;
    if (to.path !== '/login' && !Login) {
        next('/login');
    } else {
        next();
    }
});


export default router