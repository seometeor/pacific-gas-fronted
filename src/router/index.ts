import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/second',
      name: 'second',
      component: () => import('../views/SecondView.vue'),
      children: [
        {
          path: 'aboutUs',
          name: 'aboutUs',
          component: () => import('@/components/SecondaryPage/components/AboutUs.vue'),
        },
        {
          path: 'milestone',
          name: 'milestone',
          component: () => import('@/components/SecondaryPage/components/Milestone.vue'),
        },
        {
          path: 'commercial',
          name: 'commercial',
          component: () => import('@/components/SecondaryPage/components/Commercial.vue'),
        },
        {
          path: 'technical',
          name: 'technical',
          component: () => import('@/components/SecondaryPage/components/Technical.vue'),
        },
        {
          path: 'marine',
          name: 'marine',
          component: () => import('@/components/SecondaryPage/components/Marine.vue'),
        },
        {
          path: 'fleetList',
          name: 'fleetList',
          component: () => import('@/components/SecondaryPage/components/FleetList.vue'),
        },
        {
          path: 'investorRelations',
          name: 'investorRelations',
          component: () => import('@/components/SecondaryPage/components/InvestorRelations.vue'),
        },
        {
          path: 'careers',
          name: 'careers',
          component: () => import('@/components/SecondaryPage/components/Careers.vue'),
        },
        {
          path: 'contactUs',
          name: 'contactUs',
          component: () => import('@/components/SecondaryPage/components/ContactUs.vue'),
        },
      ]
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { left: 0, top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  window.scrollTo(0, 0);
  next()
})

export default router
