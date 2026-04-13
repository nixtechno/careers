<template>
  <div class="empty-state rounded-xl border border-dashed border-slate-200 bg-white">
    <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-navy-900">
      <PortalIcon :name="icon" />
    </div>
    <h3 class="mt-5 text-xl font-black text-navy-900">{{ title }}</h3>
    <p class="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">{{ copy }}</p>
  </div>
</template>

<script setup>
import PortalIcon from './PortalIcon.vue'

defineProps({
  icon: {
    type: String,
    default: 'dashboard',
  },
  title: {
    type: String,
    required: true,
  },
  copy: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.empty-state {
  align-items: center;
  color: #94a3b8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  text-align: center;
}
</style>
