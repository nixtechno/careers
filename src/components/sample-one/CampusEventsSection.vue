<template>
  <section class="bg-[#f7faf8] py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <p class="text-sm font-bold uppercase tracking-wide text-emerald-700">Campus engagement</p>
          <h2 class="mt-4 max-w-2xl text-4xl font-black leading-tight text-navy-900 lg:text-5xl">
            Events, workshops, and advisory sessions for student success.
          </h2>
        </div>
        <div class="max-w-xl">
          <p class="leading-8 text-slate-600">
            Keep students close to real opportunities with career fairs, employer talks, mentorship sessions, and one-on-one support from the career centre.
          </p>
          <div class="mt-6 flex flex-wrap gap-3">
            <button class="rounded-md bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800" type="button" @click="openSessionModal">Book a Session</button>
            <a :href="withBase('/events')" class="rounded-md border border-slate-300 px-5 py-3 text-sm font-bold text-navy-900 transition hover:bg-white" @click.prevent="navigateTo('/events')">View All Events</a>
          </div>
        </div>
      </div>

      <div class="grid gap-5 lg:grid-cols-3">
        <article v-for="event in featuredEvents" :key="event.title" class="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <img class="h-48 w-full object-cover" :src="event.image" :alt="event.alt" />
          <div class="p-5">
            <div class="flex items-start gap-4">
              <div class="flex h-20 w-20 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-navy-900 text-white">
                <span class="text-3xl font-black">{{ event.day }}</span>
                <span class="text-xs font-bold uppercase tracking-wide text-emerald-200">{{ event.month }}</span>
              </div>
              <div>
                <p class="text-xs font-bold uppercase tracking-wide text-emerald-700">{{ event.type }}</p>
                <h3 class="mt-1 text-xl font-black text-navy-900">{{ event.title }}</h3>
              </div>
            </div>
            <p class="mt-5 leading-7 text-slate-600">{{ event.copy }}</p>
            <button class="mt-5 inline-flex rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-navy-900 transition hover:bg-slate-50" type="button" @click="selectedEvent = event">Read More</button>
          </div>
        </article>
      </div>
    </div>

    <EventDetailsModal :event="selectedEvent" @close="selectedEvent = null" @register="handleEventRegister" />
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import EventDetailsModal from '../shared/EventDetailsModal.vue'
import { events } from '../../data/publicContent'
import { navigateTo, withBase } from '../../utils/navigation'
import { openSessionModal } from '../../utils/sessionModal'

const selectedEvent = ref(null)
const featuredEvents = computed(() => events.slice(0, 3))
const handleEventRegister = () => {
  selectedEvent.value = null
  openSessionModal()
}
</script>
