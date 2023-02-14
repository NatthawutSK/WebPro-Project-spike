import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Forum from '../views/inner-forum.vue'
import CreateForum from '../views/create-forum.vue'
import Profile from '../views/profile.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/forum',
        name: 'forum',
        component: Forum
      },
      {
        path:'/create',
        name: 'createForum',
        component: CreateForum
      },
      {
        path:'/profile',
        name: 'profile',
        component: Profile
      },
      {
        path:'/login',
        name: 'login',
        component: Login
      },
      {
        path:'/register',
        name: 'register',
        component: Register
      }
    ]
    })
    export default router