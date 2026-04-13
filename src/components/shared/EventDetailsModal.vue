<template>
  <div v-if="event" class="fixed inset-0 z-[120] flex min-h-screen items-center justify-center bg-navy-900/70 px-4 py-8 backdrop-blur-sm" @click.self="$emit('close')">
    <section class="w-full max-w-xl overflow-hidden rounded-lg bg-white shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="event-modal-title">
      <img v-if="event.image" class="h-44 w-full object-cover" :src="event.image" :alt="event.imageAlt || event.title" />
      <div class="flex items-start justify-between border-b border-slate-200 px-6 py-5">
        <div>
          <p class="text-xs font-bold uppercase tracking-wide text-emerald-700">{{ event.type }}</p>
          <h2 id="event-modal-title" class="mt-1 text-2xl font-black text-navy-900">{{ event.title }}</h2>
        </div>
        <button class="rounded-full bg-slate-100 p-2 text-slate-500 transition hover:bg-slate-200 hover:text-navy-900" type="button" aria-label="Close event details" @click="$emit('close')">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>

      <div class="p-6">
        <div class="grid gap-3 sm:grid-cols-3">
          <div class="rounded-md bg-slate-50 p-4">
            <p class="text-xs font-bold uppercase tracking-wide text-slate-500">Date</p>
            <p class="mt-1 font-black text-navy-900">{{ event.date }}</p>
          </div>
          <div class="rounded-md bg-slate-50 p-4">
            <p class="text-xs font-bold uppercase tracking-wide text-slate-500">Time</p>
            <p class="mt-1 font-black text-navy-900">{{ event.time }}</p>
          </div>
          <div class="rounded-md bg-slate-50 p-4">
            <p class="text-xs font-bold uppercase tracking-wide text-slate-500">Venue</p>
            <p class="mt-1 font-black text-navy-900">{{ event.venue }}</p>
          </div>
        </div>

        <p class="mt-6 leading-8 text-slate-600">{{ event.copy }}</p>

        <div class="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p class="text-sm font-black text-navy-900">What to prepare</p>
          <ul class="mt-3 grid gap-2 text-sm text-slate-600">
            <li v-for="item in event.checklist" :key="item" class="flex gap-2">
              <span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500"></span>
              {{ item }}
            </li>
          </ul>
        </div>

        <div class="mt-6 flex flex-wrap gap-3">
          <button class="rounded-md bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800" type="button" @click="$emit('register', event)">Register Interest</button>
          <button class="rounded-md border border-slate-300 px-5 py-3 text-sm font-bold text-navy-900 transition hover:bg-slate-50" type="button" @click="$emit('close')">Close</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineEmits(['close', 'register'])

defineProps({
  event: {
    type: Object,
    default: null,
  },
})
</script>
