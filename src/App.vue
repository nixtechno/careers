<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import SampleOne from './pages/SampleOne.vue'
import SampleTwo from './pages/SampleTwo.vue'
import AdminPortal from './pages/admin/AdminPortal.vue'
import StudentPortal from './pages/student/StudentPortal.vue'
import { currentRoutePath } from './utils/navigation'

const path = ref(currentRoutePath())

const routes = {
  '/': SampleOne,
  '/sample': SampleTwo,
  '/admin': AdminPortal,
  '/student': StudentPortal,
}

const currentPage = computed(() => routes[path.value] ?? SampleOne)

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
  <component :is="currentPage" />
</template>
