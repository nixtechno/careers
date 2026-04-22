<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import PublicHomePage from './pages/PublicHomePage.vue'
import AdminPortal from './pages/admin/AdminPortal.vue'
import EmployerPortal from './pages/employer/EmployerPortal.vue'
import StudentPortal from './pages/student/StudentPortal.vue'
import ContactPage from './pages/public/ContactPage.vue'
import DonationPage from './pages/public/DonationPage.vue'
import DocumentationPage from './pages/public/DocumentationPage.vue'
import EventsPage from './pages/public/EventsPage.vue'
import OpportunitiesPage from './pages/public/OpportunitiesPage.vue'
import OpportunityDetailPage from './pages/public/OpportunityDetailPage.vue'
import ResourcesPage from './pages/public/ResourcesPage.vue'
import SchoolSignupPage from './pages/public/SchoolSignupPage.vue'
import { currentRoutePath } from './utils/navigation'

const path = ref(currentRoutePath())

const routes = {
  '/': PublicHomePage,
  '/admin': AdminPortal,
  '/employer': EmployerPortal,
  '/student': StudentPortal,
  '/opportunities': OpportunitiesPage,
  '/events': EventsPage,
  '/resources': ResourcesPage,
  '/docs': DocumentationPage,
  '/schools/signup': SchoolSignupPage,
  '/donations/online': DonationPage,
  '/donations/bank-details': DonationPage,
  '/contact': ContactPage,
}

const currentRoute = computed(() => {
  if (path.value.startsWith('/opportunities/')) {
    return {
      component: OpportunityDetailPage,
      props: { slug: path.value.replace('/opportunities/', '') },
    }
  }

  if (path.value === '/donations/bank-details') {
    return {
      component: DonationPage,
      props: { mode: 'bank' },
    }
  }

  return {
    component: routes[path.value] ?? PublicHomePage,
    props: {},
  }
})

const handleNavigation = () => {
  path.value = currentRoutePath()
}

onMounted(() => {
  window.addEventListener('popstate', handleNavigation)
})

onBeforeUnmount(() => {
  window.removeEventListener('popstate', handleNavigation)
})
</script>

<template>
  <component :is="currentRoute.component" v-bind="currentRoute.props" />
</template>
