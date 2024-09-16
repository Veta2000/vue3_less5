import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Admin from '../views/Admin.vue';
import UserDetail from '../views/UserDetail.vue';
import UserInfo from '../views//UserInfo.vue';
import UserActivities from '../views//UserActivities.vue';
import NotFound from '../views//NotFound.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/admin', component: Admin, meta: { requiresAuth: true, isAdmin: true } },
    { path: '/user/:id',
      component: UserDetail,
      props: true,
      children: [
        { path: 'info', component: UserInfo },
        { path: 'activities', component: UserActivities }
      ]
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = true;
  const isAdmin = true; 

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else if (to.meta.isAdmin && !isAdmin) {
    next('/404');
  } else {
    next();
  }
});

export default router;
