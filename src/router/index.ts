import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      redirect: 'homePC',
    },
    {
      path: '/homePC',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/second',
      name: 'second',
      component: () => import('@/views/SecondView.vue'),
      children: [
        {
          path: 'aboutUs',
          name: 'aboutUs',
          component: () => import('@/components/PC/SecondaryPage/components/AboutUs.vue'),
        },
        {
          path: 'milestone',
          name: 'milestone',
          component: () => import('@/components/PC/SecondaryPage/components/Milestone.vue'),
        },
        {
          path: 'commercial',
          name: 'commercial',
          component: () => import('@/components/PC/SecondaryPage/components/Commercial.vue'),
        },
        {
          path: 'technical',
          name: 'technical',
          component: () => import('@/components/PC/SecondaryPage/components/Technical.vue'),
        },
        {
          path: 'marine',
          name: 'marine',
          component: () => import('@/components/PC/SecondaryPage/components/Marine.vue'),
        },
        {
          path: 'fleetList',
          name: 'fleetList',
          component: () => import('@/components/PC/SecondaryPage/components/FleetList.vue'),
        },
        {
          path: 'sustainability',
          name: 'sustainability',
          component: () => import('@/components/PC/SecondaryPage/components/Sustainability.vue'),
        },
        {
          path: 'careers',
          name: 'careers',
          component: () => import('@/components/PC/SecondaryPage/components/Careers.vue'),
        },
        {
          path: 'contactUs',
          name: 'contactUs',
          component: () => import('@/components/PC/SecondaryPage/components/ContactUs.vue'),
        },
        {
          path: 'infoAnnouncement',
          name: 'infoAnnouncement',
          component: () => import('@/components/PC/SecondaryPage/components/InfoAnnouncement.vue'),
        },
        {
          path: 'infomation',
          name: 'infomation',
          component: () => import('@/components/PC/SecondaryPage/components/Infomation.vue'),
        },
      ]
    },
    {
      path: '/homeMobile',
      name: 'homeMobile',
      component: () => import('@/views/HomeMobileView.vue'),
    },
    {
      path: '/secondMobile',
      name: 'secondMobile',
      component: () => import('@/views/SecondMobileView.vue'),
      children: [
        {
          path: 'aboutUsMobile',
          name: 'aboutUsMobile',
          component: () => import('@/components/Mobile/SecondaryPage/AboutUsMobile.vue'),
        },
        {
          path: 'milestoneMobile',
          name: 'milestoneMobile',
          component: () => import('@/components/Mobile/SecondaryPage/MilestoneMobile.vue'),
        },
        {
          path: 'commercialMobile',
          name: 'commercialMobile',
          component: () => import('@/components/Mobile/SecondaryPage/CommercialMobile.vue'),
        },
        {
          path: 'technicalMobile',
          name: 'technicalMobile',
          component: () => import('@/components/Mobile/SecondaryPage/TechnicalMobile.vue'),
        },
        {
          path: 'marineMobile',
          name: 'marineMobile',
          component: () => import('@/components/Mobile/SecondaryPage/MarineMobile.vue'),
        },
        {
          path: 'fleetListMobile',
          name: 'fleetListMobile',
          component: () => import('@/components/Mobile/SecondaryPage/FleetListMobile.vue'),
        },
        {
          path: 'sustainabilityMobile',
          name: 'sustainabilityMobile',
          component: () => import('@/components/Mobile/SecondaryPage/SustainabilityMobile.vue'),
        },
        {
          path: 'careersMobile',
          name: 'careersMobile',
          component: () => import('@/components/Mobile/SecondaryPage/CareersMobile.vue'),
        },
        {
          path: 'contactUsMobile',
          name: 'contactUsMobile',
          component: () => import('@/components/Mobile/SecondaryPage/ContactUsMobile.vue'),
        },
        {
          path: 'infoAnnouncementMobile',
          name: 'infoAnnouncementMobile',
          component: () => import('@/components/Mobile/SecondaryPage/InfoAnnouncementMobile.vue'),
        },
        {
          path: 'infomationMobile',
          name: 'infomationMobile',
          component: () => import('@/components/Mobile/SecondaryPage/InfomationMobile.vue'),
        },
      ]
    },
  ],
})

export default router
