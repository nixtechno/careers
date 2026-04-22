<template>
  <div class="bg-white font-sans antialiased">
    <StickyNavbar />
    <main>
      <slot />
    </main>
    <AppFooter />
    <BookSessionModal :open="sessionModalOpen" @close="sessionModalOpen = false" />
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import AppFooter from './AppFooter.vue'
import StickyNavbar from './StickyNavbar.vue'
import BookSessionModal from '../shared/BookSessionModal.vue'

const sessionModalOpen = ref(false)
const openSessionModal = () => {
  sessionModalOpen.value = true
}

onMounted(() => {
  window.addEventListener('open-session-modal', openSessionModal)
})

onBeforeUnmount(() => {
  window.removeEventListener('open-session-modal', openSessionModal)
})
</script>
