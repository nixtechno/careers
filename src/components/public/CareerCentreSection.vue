<template>
  <section class="bg-[#f7faf8] py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p class="text-sm font-bold uppercase tracking-wide text-emerald-700">Career intelligence platform</p>
          <h2 class="mt-4 max-w-xl text-4xl font-black leading-tight text-navy-900 lg:text-5xl">
            Built for schools that want career outcomes from academic data.
          </h2>
          <p class="mt-5 max-w-xl leading-8 text-slate-600">
            The platform connects school records, student profiles, AI recommendations, employer demand, and career centre activity into one coordinated system.
          </p>
        </div>

        <div class="relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <img
            class="h-[440px] w-full object-cover"
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80"
            alt="University students in a career development discussion"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent"></div>
          <div class="absolute inset-x-4 bottom-4 rounded-lg bg-white/95 p-5 shadow-xl backdrop-blur sm:inset-x-6 sm:bottom-6 sm:p-6">
            <div class="mb-4 flex w-fit rounded-md bg-slate-100 p-1">
              <button
                v-for="item in statements"
                :key="item.id"
                type="button"
                class="rounded px-4 py-2 text-xs font-black uppercase tracking-wide transition"
                :class="activeStatement === item.id ? 'bg-navy-900 text-white' : 'text-slate-600 hover:text-navy-900'"
                @click="activeStatement = item.id"
              >
                {{ item.label }}
              </button>
            </div>
            <p class="text-sm font-bold uppercase tracking-wide text-emerald-700">{{ currentStatement.label }}</p>
            <p class="mt-3 text-lg font-semibold leading-8 text-slate-800">{{ currentStatement.copy }}</p>
          </div>
        </div>
      </div>

      <div class="mt-14 grid gap-4 md:grid-cols-4">
        <article v-for="service in services" :key="service.title" class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div class="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-[#062a3f]">
            <svg v-if="service.icon === 'guidance'" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5.75 4.25A2.75 2.75 0 0 0 3 7v10.25c0 .69.56 1.25 1.25 1.25h5.32c.71 0 1.39.28 1.89.78l.54.54.54-.54c.5-.5 1.18-.78 1.89-.78h5.32c.69 0 1.25-.56 1.25-1.25V7a2.75 2.75 0 0 0-2.75-2.75h-3.42A4.6 4.6 0 0 0 12 5.46a4.6 4.6 0 0 0-2.83-1.21H5.75Zm5.25 12.2a4.5 4.5 0 0 0-1.43-.24H5.5V7c0-.14.11-.25.25-.25h3.42c.7 0 1.35.33 1.83.9v8.8Zm2 0v-8.8c.48-.57 1.13-.9 1.83-.9h3.42c.14 0 .25.11.25.25v9.21h-4.07c-.49 0-.97.08-1.43.24Z" />
            </svg>
            <svg v-else-if="service.icon === 'webinar'" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5.75 4A2.75 2.75 0 0 0 3 6.75v8.5A2.75 2.75 0 0 0 5.75 18h4.5v1.5H7.5a1.25 1.25 0 1 0 0 2.5h9a1.25 1.25 0 1 0 0-2.5h-2.75V18h4.5A2.75 2.75 0 0 0 21 15.25v-8.5A2.75 2.75 0 0 0 18.25 4H5.75Zm5.1 4.2 4.35 2.51a1.1 1.1 0 0 1 0 1.9l-4.35 2.51a1.1 1.1 0 0 1-1.65-.95V9.15a1.1 1.1 0 0 1 1.65-.95Z" />
            </svg>
            <svg v-else-if="service.icon === 'employer'" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.5 4A2.5 2.5 0 0 0 7 6.5V8H5.75A2.75 2.75 0 0 0 3 10.75v7.5A2.75 2.75 0 0 0 5.75 21h12.5A2.75 2.75 0 0 0 21 18.25v-7.5A2.75 2.75 0 0 0 18.25 8H17V6.5A2.5 2.5 0 0 0 14.5 4h-5Zm0 2.5h5V8h-5V6.5ZM11 12h2a1 1 0 0 1 1 1v.25h3.75c.41 0 .75.34.75.75v1.25c0 .41-.34.75-.75.75H14v.25a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V16H6.25a.75.75 0 0 1-.75-.75V14c0-.41.34-.75.75-.75H10V13a1 1 0 0 1 1-1Z" />
            </svg>
            <svg v-else class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.75 3A2.75 2.75 0 0 0 4 5.75v12.5A2.75 2.75 0 0 0 6.75 21h10.5A2.75 2.75 0 0 0 20 18.25V6.5A3.5 3.5 0 0 0 16.5 3H6.75Zm1 4.5h6.5a1.25 1.25 0 1 1 0 2.5h-6.5a1.25 1.25 0 1 1 0-2.5Zm0 4.5h7.5a1.25 1.25 0 1 1 0 2.5h-7.5a1.25 1.25 0 1 1 0-2.5Zm0 4.5h4.5a1.25 1.25 0 1 1 0 2.5h-4.5a1.25 1.25 0 1 1 0-2.5Z" />
            </svg>
          </div>
          <h3 class="mt-5 font-black text-navy-900">{{ service.title }}</h3>
          <p class="mt-2 text-sm leading-6 text-slate-600">{{ service.copy }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const activeStatement = ref('vision')

const statements = [
  {
    id: 'vision',
    label: 'Vision',
    copy: 'Help every school convert academic history into practical career direction, employability support, and measurable graduate outcomes.',
  },
  {
    id: 'mission',
    label: 'Mission',
    copy: 'Integrate student data, recommend career paths with AI, connect employers to ready talent, and give schools the reports they need to improve outcomes.',
  },
]

const currentStatement = computed(() => statements.find((item) => item.id === activeStatement.value) ?? statements[0])

const services = [
  {
    icon: 'guidance',
    title: 'School Integration',
    copy: 'Dedicated school extensions, API keys, student signup rules, and data import flows for existing systems.',
  },
  {
    icon: 'webinar',
    title: 'AI Career Paths',
    copy: 'Recommendations based on academic records, skills, interests, projects, and graduate readiness signals.',
  },
  {
    icon: 'employer',
    title: 'Employer Portal',
    copy: 'Recruiters can post roles, review matched profiles, manage applications, and plan campus engagement.',
  },
  {
    icon: 'library',
    title: 'Outcome Reports',
    copy: 'Career centres can track readiness, applications, events, placements, and employer engagement.',
  },
]
</script>
