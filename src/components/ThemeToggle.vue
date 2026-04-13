<template>
  <button
    class="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
    type="button"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggleTheme"
  >
    <svg class="h-4 w-4 text-navy-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.1 14.7a8.5 8.5 0 0 1-10.8-10.8 1 1 0 0 0-1.2-1.2 10.5 10.5 0 1 0 13.2 13.2 1 1 0 0 0-1.2-1.2Z" />
    </svg>
    <span>{{ isDark ? 'Light' : 'Dark' }}</span>
  </button>
</template>

<script setup>
import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>
