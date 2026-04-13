<template>
  <main class="min-h-screen bg-slate-50 text-slate-900">
    <section class="border-b border-slate-200 bg-white">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <div>
          <p class="text-xs font-bold uppercase tracking-wide text-emerald-700">Student Connect</p>
          <h1 class="mt-1 text-2xl font-black text-navy-900">Welcome back, Amara</h1>
        </div>
        <div class="flex items-center gap-3">
          <ThemeToggle />
          <a class="rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-navy-900 transition hover:bg-slate-50" href="/">
            Back to site
          </a>
        </div>
      </div>
    </section>

    <section class="mx-auto grid max-w-7xl items-start gap-6 px-6 py-10 lg:grid-cols-[280px_1fr] lg:px-8">
      <aside class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="rounded-lg bg-navy-900 p-5 text-white">
          <p class="text-sm text-slate-300">Career profile</p>
          <p class="mt-2 text-3xl font-black">78%</p>
          <div class="mt-4 h-2 rounded-full bg-white/15">
            <div class="h-2 rounded-full bg-emerald-400" style="width: 78%"></div>
          </div>
        </div>

        <p class="mt-6 text-sm font-bold text-slate-500">Student Menu</p>
        <nav class="mt-5 grid gap-2">
          <button
            v-for="item in menu"
            :key="item.id"
            class="flex items-center gap-3 rounded-md px-3 py-3 text-left text-sm font-semibold transition"
            :class="activePage === item.id ? 'bg-navy-900 text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-navy-900'"
            type="button"
            @click="activePage = item.id"
          >
            <span class="flex h-9 w-9 items-center justify-center rounded-full" :class="activePage === item.id ? 'bg-white/10' : 'bg-slate-100 text-navy-900'">
              <PortalIcon :name="item.icon" />
            </span>
            {{ item.label }}
          </button>
        </nav>
      </aside>

      <div class="grid content-start gap-6">
        <div>
          <p class="text-sm font-bold uppercase tracking-wide text-emerald-700">{{ currentMenu.label }}</p>
          <h2 class="mt-2 text-3xl font-black text-navy-900">{{ pageTitle }}</h2>
        </div>

        <template v-if="activePage === 'dashboard'">
          <div class="grid gap-4 md:grid-cols-3">
            <article v-for="card in overviewCards" :key="card.label" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p class="text-sm font-semibold text-slate-500">{{ card.label }}</p>
              <p class="mt-3 text-3xl font-black text-navy-900">{{ card.value }}</p>
              <p class="mt-2 text-sm text-emerald-700">{{ card.note }}</p>
            </article>
          </div>

          <section class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-xl font-black text-navy-900">Recommended next steps</h3>
            <div class="mt-5 grid gap-4 md:grid-cols-3">
              <div v-for="step in steps" :key="step" class="rounded-md bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                {{ step }}
              </div>
            </div>
          </section>
        </template>

        <section v-else-if="activePage === 'opportunities'" class="grid gap-4 md:grid-cols-2">
          <article v-for="item in opportunities" :key="item.title" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p class="text-xs font-bold uppercase tracking-wide text-emerald-700">{{ item.type }}</p>
            <h3 class="mt-2 text-xl font-black text-navy-900">{{ item.title }}</h3>
            <p class="mt-2 text-sm text-slate-500">{{ item.company }}</p>
            <p class="mt-4 leading-7 text-slate-600">{{ item.copy }}</p>
            <button class="mt-5 rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-navy-900 transition hover:bg-slate-50">Save Opportunity</button>
          </article>
        </section>

        <section v-else-if="activePage === 'sessions'" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 class="text-xl font-black text-navy-900">Guidance Sessions</h3>
              <p class="mt-1 text-sm text-slate-500">Book or review career centre appointments.</p>
            </div>
            <button class="rounded-md bg-navy-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-navy-800">Book New Session</button>
          </div>
          <div class="mt-6 grid gap-4 md:grid-cols-2">
            <div v-for="session in sessions" :key="session.title" class="rounded-md bg-slate-50 p-4">
              <p class="font-bold text-slate-800">{{ session.title }}</p>
              <p class="mt-1 text-sm text-slate-500">{{ session.date }}</p>
            </div>
          </div>
        </section>

        <section v-else-if="activePage === 'resources'" class="grid gap-4 md:grid-cols-3">
          <article v-for="resource in resources" :key="resource.title" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p class="text-xs font-bold uppercase tracking-wide text-emerald-700">{{ resource.type }}</p>
            <h3 class="mt-3 text-lg font-black text-navy-900">{{ resource.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ resource.copy }}</p>
          </article>
        </section>

        <section v-else-if="activePage === 'events'" class="grid gap-4 md:grid-cols-2">
          <article v-for="event in events" :key="event.title" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p class="text-sm font-black text-emerald-700">{{ event.date }}</p>
            <h3 class="mt-2 text-xl font-black text-navy-900">{{ event.title }}</h3>
            <p class="mt-3 leading-7 text-slate-600">{{ event.copy }}</p>
          </article>
        </section>

        <section v-else-if="activePage === 'profile'" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div class="grid gap-6 md:grid-cols-[180px_1fr]">
            <div class="flex h-36 w-36 items-center justify-center rounded-full bg-slate-100 text-4xl font-black text-navy-900">AO</div>
            <div>
              <h3 class="text-2xl font-black text-navy-900">Amara Okonkwo</h3>
              <p class="mt-1 text-slate-500">Computer Science, 400 Level</p>
              <div class="mt-6 grid gap-3 md:grid-cols-2">
                <div v-for="item in profile" :key="item.label" class="rounded-md bg-slate-50 p-4">
                  <p class="text-xs font-bold uppercase tracking-wide text-slate-500">{{ item.label }}</p>
                  <p class="mt-1 font-semibold text-slate-800">{{ item.value }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <EmptyPage v-else icon="dashboard" title="Page not found" copy="Choose another item from the student menu." />
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import EmptyPage from '../../components/portal/EmptyPage.vue'
import PortalIcon from '../../components/portal/PortalIcon.vue'
import ThemeToggle from '../../components/ThemeToggle.vue'

const activePage = ref('dashboard')
const menu = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
  { id: 'opportunities', label: 'Opportunities', icon: 'opportunities' },
  { id: 'sessions', label: 'Guidance Sessions', icon: 'sessions' },
  { id: 'resources', label: 'Resources', icon: 'resources' },
  { id: 'events', label: 'Events', icon: 'events' },
  { id: 'profile', label: 'Profile', icon: 'people' },
]
const currentMenu = computed(() => menu.find((item) => item.id === activePage.value) ?? menu[0])
const pageTitle = computed(() => currentMenu.value.label === 'Dashboard' ? 'Student Overview' : currentMenu.value.label)

const overviewCards = [
  { label: 'Saved Opportunities', value: '12', note: '3 closing this month' },
  { label: 'Booked Sessions', value: '2', note: 'Next session: Friday' },
  { label: 'Resources Opened', value: '18', note: 'CV guide completed' },
]
const steps = ['Update your CV document', 'Register for the next career workshop', 'Save two opportunities before Friday']
const opportunities = [
  { type: 'Scholarship', title: 'Aston Ferguson Masters Scholarship', company: 'Aston University', copy: 'Prepare your postgraduate application with centre guidance and scholarship documents.' },
  { type: 'Graduate Role', title: 'Shell Graduate Programme', company: 'Scholarship Region', copy: 'A structured graduate opportunity for students moving into professional work.' },
  { type: 'Internship', title: 'Data Science Intern', company: 'Access Bank', copy: 'Build analytics skills through a practical student internship route.' },
  { type: 'Fellowship', title: 'Policy Innovation Fellow', company: 'NPC Nigeria', copy: 'For graduates interested in leadership, governance, and public policy development.' },
]
const sessions = [
  { title: 'CV Review with Career Representative', date: 'Friday, 10:00 AM' },
  { title: 'Scholarship Application Support', date: 'Next Tuesday, 2:00 PM' },
]
const resources = [
  { type: 'Document', title: 'CV & Cover Letter Pack', copy: 'Templates and examples for student applications.' },
  { type: 'Video', title: 'Graduate Interview Guide', copy: 'Recorded tips for preparing employer conversations.' },
  { type: 'Checklist', title: 'Scholarship Application Checklist', copy: 'A step-by-step list for strong scholarship submissions.' },
]
const events = [
  { date: '15 Mar', title: 'Tech Conference 2025', copy: 'Meet industry professionals and explore digital career pathways.' },
  { date: '22 Apr', title: 'Career Fair & Workshop', copy: 'Connect with recruiters and prepare for internship and graduate applications.' },
]
const profile = [
  { label: 'Email', value: 'amara@run.edu.ng' },
  { label: 'Department', value: 'Computer Science' },
  { label: 'Career Interest', value: 'Data Analytics' },
  { label: 'CV Status', value: 'Needs final review' },
]
</script>
