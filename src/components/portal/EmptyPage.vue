<template>
  <div class="rounded-lg border border-dashed border-slate-300 bg-white p-10 text-center">
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
