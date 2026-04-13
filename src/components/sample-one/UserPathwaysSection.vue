<template>
  <section class="bg-white py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mb-14 text-center">
        <span class="text-sm font-semibold uppercase tracking-wide text-emerald-600">University career ecosystem</span>
        <h2 class="font-heading mt-2 text-3xl font-bold text-navy-900 lg:text-4xl">Support for every member of the career community</h2>
      </div>

      <div class="mb-12 flex flex-wrap justify-center gap-2 border-b border-slate-200">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          type="button"
          class="rounded-t-lg px-6 py-3 text-sm font-medium transition"
          :class="activeTab === tab.id ? 'bg-navy-900 text-white' : 'text-slate-600 hover:text-navy-900'"
          @click="activeTab = tab.id"
        >
          {{ tab.name }}
        </button>
      </div>

      <div class="rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:p-10">
        <div class="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h3 class="text-2xl font-bold text-navy-900">{{ currentPathway.title }}</h3>
            <p class="mt-3 leading-relaxed text-slate-600">{{ currentPathway.description }}</p>
            <ul class="mt-6 space-y-3">
              <li v-for="item in currentPathway.features" :key="item" class="flex items-center gap-3 text-slate-700">
                <span class="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-600">+</span>
                {{ item }}
              </li>
            </ul>
            <a :href="withBase(currentPathway.path)" class="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-navy-900 transition hover:bg-slate-100" @click.prevent="navigateTo(currentPathway.path)">
              <span>View support pathway</span>
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
          </div>
          <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div class="mb-2 text-sm font-medium text-slate-400">{{ currentPathway.imageLabel }}</div>
            <div class="overflow-hidden rounded-lg bg-slate-100">
              <img
                :key="activeTab"
                :src="currentPathway.image"
                :alt="currentPathway.imageAlt"
                class="h-56 w-full object-cover transition duration-300"
              />
            </div>
            <div class="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div class="rounded bg-slate-50 p-2">
                <span class="font-semibold">Key metric</span><br />
                {{ currentPathway.metric }}
              </div>
              <div class="rounded bg-slate-50 p-2">
                <span class="font-semibold">Recent activity</span><br />
                {{ currentPathway.activity }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { navigateTo, withBase } from '../../utils/navigation'

const activeTab = ref('student')
const tabs = [
  { id: 'student', name: 'Students' },
  { id: 'employer', name: 'Employers' },
  { id: 'alumni', name: 'Alumni' },
  { id: 'officer', name: 'Career Officers' },
]
const pathways = {
  student: {
    title: 'Student career guidance',
    description: 'From career discovery to internships, scholarships, and graduate roles, students get practical support for every stage of preparation.',
    features: ['Career opportunities and scholarships', 'CV review and interview preparation', 'Webinars, events, and guidance sessions'],
    imageLabel: 'Student support pathway',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Students studying together with laptops',
    metric: '85% resource engagement',
    activity: '2 session requests',
    path: '/student',
  },
  employer: {
    title: 'Employer and partner engagement',
    description: 'Employers can share roles, participate in career events, and connect with students preparing for internships and graduate work.',
    features: ['Career opportunity promotion', 'Campus event participation', 'Graduate talent visibility'],
    imageLabel: 'Employer engagement pathway',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Employer team reviewing candidates in a meeting',
    metric: '48 student interests',
    activity: '7 active postings',
    path: '/contact',
  },
  alumni: {
    title: 'Alumni mentorship and connection',
    description: 'Alumni can guide current students, share opportunities, join networking events, and remain connected to the university community.',
    features: ['Mentorship and career stories', 'Alumni opportunity sharing', 'Networking and industry events'],
    imageLabel: 'Alumni connection pathway',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Alumni and professionals connecting in a collaborative workspace',
    metric: '340 alumni links',
    activity: '12 mentoring requests',
    path: '/donations/online',
  },
  officer: {
    title: 'Career centre coordination',
    description: 'Career officers can manage appointments, resources, events, employer relationships, and student outcomes from one place.',
    features: ['Appointment and event coordination', 'Student engagement visibility', 'Resource and opportunity management'],
    imageLabel: 'Career centre pathway',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Career office team planning student support',
    metric: '74% outcome tracking',
    activity: '184 advisory sessions',
    path: '/admin',
  },
}
const currentPathway = computed(() => pathways[activeTab.value])
</script>
