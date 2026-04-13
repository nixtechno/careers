<template>
  <div v-if="open" class="fixed inset-0 z-[110] flex min-h-screen items-center justify-center bg-navy-900/70 px-4 py-8 backdrop-blur-sm" @click.self="$emit('close')">
    <aside class="w-full max-w-2xl overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="session-modal-title">
      <img
        class="h-56 w-full object-cover"
        src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80"
        alt="Career representative advising a student"
      />
      <div class="p-6">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="text-sm font-bold uppercase tracking-wide text-emerald-700">Book a session</p>
            <h3 id="session-modal-title" class="mt-3 text-2xl font-black text-navy-900">Meet with a career representative.</h3>
          </div>
          <button class="rounded-full bg-slate-100 p-2 text-slate-500 transition hover:bg-slate-200 hover:text-navy-900" type="button" aria-label="Close session modal" @click="$emit('close')">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
        <p class="mt-3 leading-7 text-slate-600">
          Students can request a guidance session for CV review, career planning, internships, graduate applications, or scholarship preparation.
        </p>

        <InfoBanner v-if="submitted" class="mt-5" variant="success" title="Session request received" message="A career representative will follow up through the email address provided." />

        <form class="mt-6 grid gap-4">
          <label class="grid gap-2 text-sm font-semibold text-slate-700">
            Full Name
            <input class="rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" type="text" placeholder="Your name" />
          </label>
          <label class="grid gap-2 text-sm font-semibold text-slate-700">
            Email Address
            <input class="rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" type="email" placeholder="student@run.edu.ng" />
          </label>
          <label class="grid gap-2 text-sm font-semibold text-slate-700">
            Preferred Date
            <input class="rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" type="date" />
          </label>
          <button class="mt-2 rounded-md bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800" type="button" @click="submitted = true">Book Now</button>
        </form>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import InfoBanner from './InfoBanner.vue'

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['close'])

const submitted = ref(false)

watch(() => props.open, (isOpen) => {
  if (!isOpen) submitted.value = false
})
</script>
