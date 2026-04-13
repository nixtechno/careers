<template>
  <div class="info-banner" :class="variantClass" role="status">
    <span class="info-banner-icon">
      <svg v-if="variant === 'success'" class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.79 6.8-6.79a1 1 0 0 1 1.4 0Z" clip-rule="evenodd" />
      </svg>
      <svg v-else class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm1-11a1 1 0 1 0-2 0v.2a1 1 0 1 0 2 0V7Zm0 3.8a1 1 0 1 0-2 0V13a1 1 0 1 0 2 0v-2.2Z" clip-rule="evenodd" />
      </svg>
    </span>
    <span>
      <strong v-if="title" class="block font-bold">{{ title }}</strong>
      <span class="block leading-6">{{ message }}</span>
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  message: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: 'info',
  },
})

const variantClass = computed(() => props.variant === 'success' ? 'info-banner-success' : 'info-banner-info')
</script>

<style scoped>
.info-banner {
  align-items: flex-start;
  border-radius: 12px;
  border: 1px solid;
  display: flex;
  font-size: 14px;
  gap: 12px;
  padding: 14px 18px;
}

.info-banner-icon {
  display: inline-flex;
  flex: 0 0 auto;
  margin-top: 3px;
}

.info-banner-info {
  background: #e0e9ff;
  border-color: #a5bafc;
  color: #3233a3;
}

.info-banner-success {
  background: #dcfce7;
  border-color: #86efac;
  color: #15803d;
}

:global(html.dark) .info-banner-info {
  background: rgba(50, 51, 163, 0.22);
  border-color: rgba(165, 186, 252, 0.32);
  color: #c7d7fe;
}

:global(html.dark) .info-banner-success {
  background: rgba(22, 101, 52, 0.24);
  border-color: rgba(134, 239, 172, 0.28);
  color: #86efac;
}
</style>
