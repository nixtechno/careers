<template>
  <section class="bg-white py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mb-14 text-center">
        <span class="text-sm font-semibold uppercase tracking-wide text-emerald-600">Platform user roles</span>
        <h2 class="font-heading mt-2 text-3xl font-bold text-navy-900 lg:text-4xl">One platform, tailored entry points for every user role</h2>
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

      <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p class="text-xs font-bold uppercase tracking-wide text-emerald-700">{{ currentPathway.eyebrow }}</p>
          <h3 class="mt-3 text-2xl font-bold text-navy-900 lg:text-3xl">{{ currentPathway.title }}</h3>
          <p class="mt-4 max-w-2xl leading-relaxed text-slate-600">{{ currentPathway.description }}</p>

          <div class="mt-8 grid gap-4">
            <div v-for="item in currentPathway.features" :key="item" class="flex gap-3 text-sm text-slate-700">
              <span class="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">+</span>
              <span class="leading-6">{{ item }}</span>
            </div>
          </div>
        </div>

        <div class="grid gap-4">
          <div class="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <p class="text-xs font-bold uppercase tracking-wide text-slate-500">Why this role matters</p>
            <p class="mt-3 text-base leading-7 text-slate-700">{{ currentPathway.supportingText }}</p>
          </div>

          <div class="rounded-lg border border-slate-200 bg-white p-6">
            <div class="grid gap-4 sm:grid-cols-2">
              <div>
                <p class="text-xs font-bold uppercase tracking-wide text-slate-500">Key metric</p>
                <p class="mt-2 text-lg font-black text-navy-900">{{ currentPathway.metric }}</p>
              </div>
              <div>
                <p class="text-xs font-bold uppercase tracking-wide text-slate-500">Current focus</p>
                <p class="mt-2 text-lg font-black text-navy-900">{{ currentPathway.activity }}</p>
              </div>
            </div>

            <div class="mt-6 flex flex-wrap gap-3">
              <button
                v-for="action in currentPathway.actions"
                :key="action.label"
                class="rounded-md px-5 py-2.5 text-sm font-semibold transition"
                :class="action.variant === 'primary' ? 'bg-navy-900 text-white hover:bg-navy-800' : 'border border-slate-300 bg-white text-navy-900 hover:bg-slate-50'"
                type="button"
                @click="handleAction(action)"
              >
                {{ action.label }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { navigateTo } from '../../utils/navigation'
import { openLoginModal } from '../../utils/openLoginModal'

const activeTab = ref('school')
const tabs = [
  { id: 'school', name: 'Schools' },
  { id: 'student', name: 'Students' },
  { id: 'employer', name: 'Employers' },
]
const pathways = {
  school: {
    eyebrow: 'School onboarding',
    title: 'Register a school and launch your institution workspace',
    description: 'Institutions get their own branded extension, API credentials, student signup rules, academic record imports, and outcome dashboards.',
    features: ['Unique school extension and branding', 'API, CSV, and document import flows', 'Student readiness and placement reports'],
    supportingText: 'School teams use the platform to onboard students, sync academic records, review AI-assisted pathways, and publish outcome data without rebuilding their campus systems.',
    metric: '1 school extension',
    activity: '4 active integrations',
    actions: [
      { label: 'Register your school', variant: 'primary', path: '/schools/signup' },
      { label: 'Login', variant: 'secondary', login: true },
    ],
  },
  student: {
    eyebrow: 'Student access',
    title: 'Students log in to manage profile, opportunities, and support',
    description: 'Students can access guidance, resources, events, opportunities, and their personal dashboard from one workspace.',
    features: ['Career path recommendations', 'Skill gap and readiness guidance', 'Matched opportunities and learning resources'],
    supportingText: 'The student experience stays simple: sign in, complete your profile, upload missing academic documents, and receive useful career and opportunity guidance as you progress.',
    metric: '87% career path fit',
    activity: '3 next actions',
    actions: [
      { label: 'Register as a student', variant: 'primary', path: '/schools/signup' },
      { label: 'Login', variant: 'secondary', login: true },
    ],
  },
  employer: {
    eyebrow: 'Employer access',
    title: 'Employers register, post roles, and review candidate matches',
    description: 'Employers can publish roles, review matched student profiles, manage applications, and run campus recruitment activities.',
    features: ['Post internships and graduate roles', 'Review matched student profiles', 'Track applications and campus events'],
    supportingText: 'Employers get a direct route into campus talent pipelines with cleaner role posting, stronger candidate visibility, and a structured way to engage schools.',
    metric: '48 matched students',
    activity: '7 active roles',
    actions: [
      { label: 'Register as an employer', variant: 'primary', path: '/schools/signup' },
      { label: 'Login', variant: 'secondary', login: true },
    ],
  },
}
const currentPathway = computed(() => pathways[activeTab.value])

const handleAction = (action) => {
  if (action.login) {
    openLoginModal()
    return
  }

  navigateTo(action.path)
}
</script>
