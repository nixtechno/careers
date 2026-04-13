<template>
  <div class="bg-white font-sans antialiased">
    <StickyNavbar />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppFooter from './AppFooter.vue'
import StickyNavbar from './StickyNavbar.vue'
</script>
