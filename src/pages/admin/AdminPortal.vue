<template>
  <main class="min-h-screen bg-slate-50 text-slate-900">
    <section class="border-b border-slate-200 bg-white">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <div>
          <p class="text-xs font-bold uppercase tracking-wide text-emerald-700">RUN CASEC</p>
          <h1 class="mt-1 text-2xl font-black text-navy-900">Admin Portal</h1>
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
        <p class="text-sm font-bold text-slate-500">Portal Menu</p>
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
            <article v-for="stat in stats" :key="stat.label" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p class="text-sm font-semibold text-slate-500">{{ stat.label }}</p>
              <p class="mt-3 text-3xl font-black text-navy-900">{{ stat.value }}</p>
              <p class="mt-2 text-sm text-emerald-700">{{ stat.note }}</p>
            </article>
          </div>
          <DataTable title="Career Centre Activity" description="Manage opportunities, events, resources, and student session requests." :rows="activities" />
        </template>

        <DataTable v-else-if="activePage === 'opportunities'" title="Opportunity Management" description="Publish and review scholarships, internships, fellowships, and graduate roles." :rows="opportunities" />
        <DataTable v-else-if="activePage === 'events'" title="Events Management" description="Coordinate webinars, career fairs, workshops, and campus engagement programmes." :rows="events" />
        <DataTable v-else-if="activePage === 'resources'" title="Resource Library" description="Manage student documents, videos, templates, and career readiness materials." :rows="resources" />
        <DataTable v-else-if="activePage === 'sessions'" title="Session Requests" description="Review student requests for CV review, interview preparation, and career guidance." :rows="sessions" />
        <DataTable v-else-if="activePage === 'students'" title="Student Directory" description="Track student engagement and career profile readiness." :rows="students" />

        <EmptyPage v-else icon="dashboard" title="Page not found" copy="Choose another item from the admin menu." />
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, defineComponent, h, ref } from 'vue'
import EmptyPage from '../../components/portal/EmptyPage.vue'
import PortalIcon from '../../components/portal/PortalIcon.vue'
import ThemeToggle from '../../components/ThemeToggle.vue'

const DataTable = defineComponent({
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    rows: { type: Array, required: true },
  },
  setup(props) {
    return () => h('section', { class: 'rounded-lg border border-slate-200 bg-white p-6 shadow-sm' }, [
      h('div', { class: 'flex flex-col justify-between gap-4 sm:flex-row sm:items-center' }, [
        h('div', [
          h('h3', { class: 'text-xl font-black text-navy-900' }, props.title),
          h('p', { class: 'mt-1 text-sm text-slate-500' }, props.description),
        ]),
        h('button', { class: 'rounded-md bg-navy-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-navy-800' }, 'Create Update'),
      ]),
      h('div', { class: 'mt-6 overflow-hidden rounded-lg border border-slate-200' }, [
        h('table', { class: 'w-full text-left text-sm' }, [
          h('thead', { class: 'bg-slate-50 text-xs uppercase tracking-wide text-slate-500' }, [
            h('tr', [h('th', { class: 'px-4 py-3' }, 'Item'), h('th', { class: 'px-4 py-3' }, 'Type'), h('th', { class: 'px-4 py-3' }, 'Status')]),
          ]),
          h('tbody', { class: 'divide-y divide-slate-100' }, props.rows.map((row) => h('tr', { key: row.item }, [
            h('td', { class: 'px-4 py-3 font-semibold text-slate-700' }, row.item),
            h('td', { class: 'px-4 py-3 text-slate-500' }, row.type),
            h('td', { class: 'px-4 py-3' }, [h('span', { class: 'rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700' }, row.status)]),
          ]))),
        ]),
      ]),
    ])
  },
})

const activePage = ref('dashboard')
const menu = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
  { id: 'opportunities', label: 'Opportunities', icon: 'opportunities' },
  { id: 'events', label: 'Events', icon: 'events' },
  { id: 'resources', label: 'Resources', icon: 'resources' },
  { id: 'sessions', label: 'Session Requests', icon: 'sessions' },
  { id: 'students', label: 'Students', icon: 'people' },
]
const currentMenu = computed(() => menu.find((item) => item.id === activePage.value) ?? menu[0])
const pageTitle = computed(() => currentMenu.value.label === 'Dashboard' ? 'Career Centre Overview' : currentMenu.value.label)

const stats = [
  { label: 'Session Requests', value: '184', note: '24 pending review' },
  { label: 'Active Opportunities', value: '412', note: '18 added this week' },
  { label: 'Resource Views', value: '8.2k', note: 'CV guide trending' },
]
const activities = [
  { item: 'Career Fair & Workshop', type: 'Event', status: 'Published' },
  { item: 'Aston Ferguson Masters Scholarship', type: 'Opportunity', status: 'Active' },
  { item: 'Graduate Interview Guide', type: 'Resource', status: 'Draft' },
]
const opportunities = [
  { item: 'Shell Graduate Programme', type: 'Graduate Role', status: 'Active' },
  { item: 'Commonwealth Scholarship', type: 'Scholarship', status: 'Review' },
  { item: 'Data Science Intern', type: 'Internship', status: 'Active' },
]
const events = [
  { item: 'Tech Conference 2025', type: 'Conference', status: 'Published' },
  { item: 'Career Fair & Workshop', type: 'Career Fair', status: 'Published' },
  { item: 'Entrepreneurship Summit', type: 'Summit', status: 'Draft' },
]
const resources = [
  { item: 'CV & Cover Letter Documents', type: 'Document', status: 'Published' },
  { item: 'Graduate Interview Guide', type: 'Video', status: 'Published' },
  { item: 'Scholarship Application Checklist', type: 'Document', status: 'Draft' },
]
const sessions = [
  { item: 'Amara Okonkwo', type: 'CV Review', status: 'Pending' },
  { item: 'David A.', type: 'Interview Prep', status: 'Scheduled' },
  { item: 'Oluwaseun K.', type: 'Scholarship Support', status: 'Completed' },
]
const students = [
  { item: 'Amara Okonkwo', type: 'Computer Science', status: '78% Profile' },
  { item: 'David A.', type: 'Accounting', status: 'Session Booked' },
  { item: 'Oluwaseun K.', type: 'Mass Communication', status: 'Active' },
]
</script>
