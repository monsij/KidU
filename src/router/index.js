import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@/store'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/teacher',
    name: 'Teacher App',
    component: () => import(/* webpackChunkName: "teacher" */ '../views/Teacher/TeacherApp.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'Teacher Dashboard',
        component: () => import(/* webpackChunkName: "teacher" */ '../views/Teacher/TeacherDashboard.vue')
      },
      {
        path: 'classroom/:id',
        name: 'Teacher Classroom',
        component: () => import(/* webpackChunkName: "teacher" */ '../views/Teacher/TeacherClassroom.vue')
      }
    ]
  },
  {
    path: '/student',
    name: 'Student App',
    component: () => import(/* webpackChunkName: "student" */ '../views/Student/StudentApp.vue'),
    // beforeEnter: (to, from, next) => {
    //   // console.log('im being called');
    //   // console.log(store.getters.getUserType);
    //   if (store.getters.getUserType === 'student') {
    //     next();
    //   } else {
    //     next({ name: 'Login' });
    //   }
    // },
    children: [
      {
        path: 'dashboard',
        name: 'Student Dashboard',
        component: () => import(/* webpackChunkName: "student" */ '../views/Student/StudentDashboard.vue')
      },
      {
        path: 'classroom/:id',
        name: 'Student Classroom',
        component: () => import(/* webpackChunkName: "student" */ '../views/Student/StudentClassroom.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
