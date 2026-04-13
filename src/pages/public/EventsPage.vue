<template>
  <PublicLayout>
    <section class="bg-[#f7faf8] py-20">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <span class="rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-emerald-700">Campus Engagement</span>
        <h1 class="mt-6 max-w-3xl text-4xl font-black leading-tight text-navy-900 md:text-5xl">Events that bring students, alumni, and employers together.</h1>
        <p class="mt-5 max-w-2xl leading-8 text-slate-600">Register for workshops, career fairs, conferences, and guidance sessions hosted through RUN CASEC.</p>
      </div>
    </section>

    <section class="bg-white py-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p class="text-sm font-bold uppercase tracking-wide text-emerald-700">Events archive</p>
            <h2 class="mt-2 text-3xl font-black text-navy-900">All CASEC events</h2>
          </div>
          <p class="max-w-lg text-sm leading-6 text-slate-500">Browse career fairs, advisory sessions, conferences, and student development programmes.</p>
        </div>

        <div class="grid gap-5 lg:grid-cols-3">
          <article v-for="event in paginatedEvents" :key="event.slug" class="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
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

        <div v-if="totalPages > 1" class="mt-10 flex flex-col items-center justify-between gap-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-4 sm:flex-row">
          <p class="text-sm font-semibold text-slate-500">Page {{ currentPage }} of {{ totalPages }}</p>
          <div class="flex items-center gap-2">
            <button class="rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-navy-900 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40" type="button" :disabled="currentPage === 1" @click="currentPage -= 1">Previous</button>
            <button
              v-for="page in totalPages"
              :key="page"
              class="h-10 w-10 rounded-md border text-sm font-black transition"
              :class="page === currentPage ? 'border-navy-900 bg-navy-900 text-white' : 'border-slate-300 bg-white text-navy-900 hover:border-emerald-300'"
              type="button"
              @click="currentPage = page"
            >
              {{ page }}
            </button>
            <button class="rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-navy-900 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40" type="button" :disabled="currentPage === totalPages" @click="currentPage += 1">Next</button>
          </div>
        </div>
      </div>
    </section>

    <EventDetailsModal :event="selectedEvent" @close="selectedEvent = null" @register="handleEventRegister" />
  </PublicLayout>
</template>

<script setup>
import { computed, ref } from 'vue'
import PublicLayout from '../../components/sample-one/PublicLayout.vue'
import EventDetailsModal from '../../components/shared/EventDetailsModal.vue'
import { events } from '../../data/publicContent'
import { openSessionModal } from '../../utils/sessionModal'

const selectedEvent = ref(null)
const currentPage = ref(1)
const eventsPerPage = 3
const totalPages = computed(() => Math.ceil(events.length / eventsPerPage))
const paginatedEvents = computed(() => {
  const start = (currentPage.value - 1) * eventsPerPage
  return events.slice(start, start + eventsPerPage)
})

const handleEventRegister = () => {
  selectedEvent.value = null
  openSessionModal()
}
</script>
