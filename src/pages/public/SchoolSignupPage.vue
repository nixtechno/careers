<template>
  <main class="min-h-screen bg-[#f7faf8] text-slate-900">
    <section class="border-b border-slate-200 bg-white">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <button class="flex items-center gap-3" type="button" @click="navigateTo('/')">
          <span class="flex h-9 w-9 items-center justify-center rounded-md bg-navy-900 text-xs font-black text-white">CI</span>
          <span class="font-heading text-xl font-black text-navy-900">CASEC Intelligence</span>
        </button>
        <button class="rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-navy-900 transition hover:bg-slate-50" type="button" @click="navigateTo('/docs')">View Docs</button>
      </div>
    </section>

    <section class="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <div class="pt-6">
        <p class="text-sm font-bold uppercase tracking-wide text-emerald-700">Register on CASEC</p>
        <h1 class="mt-4 max-w-xl text-4xl font-black leading-tight text-navy-900 lg:text-5xl">
          Choose how you want to join the platform.
        </h1>
        <p class="mt-5 max-w-xl leading-8 text-slate-600">
          Schools can integrate student records and recommendations, while employers can post roles, review matched candidates, and join campus hiring events.
        </p>

        <section class="mt-8 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
          <div class="flex flex-wrap gap-2">
            <button
              v-for="option in accountOptions"
              :key="option.id"
              class="rounded-md px-4 py-2 text-sm font-black transition"
              :class="activeAccountType === option.id ? 'bg-navy-900 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-navy-900'"
              type="button"
              @click="activeAccountType = option.id"
            >
              {{ option.label }}
            </button>
          </div>
        </section>

        <div class="mt-8 grid gap-4">
          <div v-for="step in currentSteps" :key="step.title" class="flex gap-4 rounded-lg bg-white p-5 shadow-sm">
            <span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-black text-emerald-700">{{ step.number }}</span>
            <div>
              <p class="font-black text-navy-900">{{ step.title }}</p>
              <p class="mt-1 text-sm leading-6 text-slate-600">{{ step.copy }}</p>
            </div>
          </div>
        </div>
      </div>

      <form class="rounded-lg border border-slate-200 bg-white p-6 shadow-xl">
        <div>
          <p class="text-sm font-bold uppercase tracking-wide text-emerald-700">{{ activeAccount.headingTag }}</p>
          <h2 class="mt-2 text-2xl font-black text-navy-900">{{ activeAccount.heading }}</h2>
          <p class="mt-2 text-sm leading-6 text-slate-500">{{ activeAccount.copy }}</p>
        </div>

        <div class="mt-6 grid gap-4 md:grid-cols-2">
          <label
            v-for="field in currentFields"
            :key="field.label"
            class="grid gap-2 text-sm font-semibold text-slate-700"
            :class="field.full ? 'md:col-span-2' : ''"
          >
            {{ field.label }}
            <input
              class="rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              :placeholder="field.placeholder"
              :type="field.type"
            />
          </label>

          <template v-if="activeAccountType === 'school'">
            <label class="grid gap-2 text-sm font-semibold text-slate-700 md:col-span-2">
              Integration Preference
              <select class="rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100">
                <option>API integration</option>
                <option>CSV and spreadsheet upload</option>
                <option>Structured document upload</option>
                <option>Not sure yet</option>
              </select>
            </label>

            <label class="grid gap-2 text-sm font-semibold text-slate-700 md:col-span-2">
              What should students use to sign up?
              <select class="rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100">
                <option>Matric number and school email</option>
                <option>School email only</option>
                <option>Matric number only</option>
                <option>Manual admin approval</option>
              </select>
            </label>
          </template>

          <template v-else>
            <label class="grid gap-2 text-sm font-semibold text-slate-700 md:col-span-2">
              What are you hiring for most?
              <select class="rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100">
                <option>Internships</option>
                <option>Graduate roles</option>
                <option>Analyst and associate roles</option>
                <option>Campus events and recruitment</option>
              </select>
            </label>

            <label class="grid gap-2 text-sm font-semibold text-slate-700 md:col-span-2">
              Preferred school scope
              <select class="rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100">
                <option>All partner schools</option>
                <option>Specific school only</option>
                <option>Still deciding</option>
              </select>
            </label>
          </template>
        </div>

        <div class="mt-6 rounded-lg bg-slate-50 p-4">
          <p class="text-sm font-black text-navy-900">What happens next?</p>
          <p class="mt-1 text-sm leading-6 text-slate-600">{{ activeAccount.nextStep }}</p>
        </div>

        <button class="mt-6 w-full rounded-md bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800" type="button" @click="navigateTo(activeAccount.portal)">
          {{ activeAccount.button }}
        </button>
      </form>
    </section>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import { navigateTo } from '../../utils/navigation'

const activeAccountType = ref('school')

const accountOptions = [
  { id: 'school', label: 'Register School' },
  { id: 'employer', label: 'Register Employer' },
]

const accountContent = {
  school: {
    headingTag: 'School Account',
    heading: 'Request school access',
    copy: 'Create a pending school account for review before production API keys are issued.',
    nextStep: 'A sandbox extension is created, documentation is shared, and your school admin can test student sync and result import.',
    button: 'Create School Account',
    portal: '/admin',
    steps: [
      { number: '01', title: 'Create school extension', copy: 'Register school identity, extension URL, and primary admin details.' },
      { number: '02', title: 'Choose integration path', copy: 'Start with API, CSV upload, or structured documents depending on school readiness.' },
      { number: '03', title: 'Test recommendations', copy: 'Use sandbox data to validate student records, result imports, and AI career outputs.' },
    ],
    fields: [
      { label: 'School Name', placeholder: 'Redeemer\'s University', type: 'text' },
      { label: 'School Website', placeholder: 'https://run.edu.ng', type: 'url' },
      { label: 'Admin Full Name', placeholder: 'Jane Doe', type: 'text' },
      { label: 'Admin Email', placeholder: 'admin@school.edu', type: 'email' },
      { label: 'Preferred Extension', placeholder: 'run.careers.example', type: 'text', full: true },
    ],
  },
  employer: {
    headingTag: 'Employer Account',
    heading: 'Request employer access',
    copy: 'Create an employer workspace to post roles, review matched candidates, and join campus hiring events.',
    nextStep: 'Your employer workspace is created, candidate matching is enabled, and you can begin posting roles and planning recruitment activity.',
    button: 'Create Employer Account',
    portal: '/employer',
    steps: [
      { number: '01', title: 'Create employer workspace', copy: 'Register your company, recruiter contact, and employer profile details.' },
      { number: '02', title: 'Set hiring preferences', copy: 'Choose the roles, school scope, and candidate signals you care about most.' },
      { number: '03', title: 'Start recruitment', copy: 'Post roles, review AI-ranked matches, and plan campus screening or employer events.' },
    ],
    fields: [
      { label: 'Company Name', placeholder: 'TalentBridge HR', type: 'text' },
      { label: 'Company Website', placeholder: 'https://talentbridgehr.com', type: 'url' },
      { label: 'Recruiter Full Name', placeholder: 'John Doe', type: 'text' },
      { label: 'Recruiter Email', placeholder: 'talent@company.com', type: 'email' },
      { label: 'Primary Hiring Focus', placeholder: 'Graduate analysts and interns', type: 'text', full: true },
    ],
  },
}

const activeAccount = computed(() => accountContent[activeAccountType.value])
const currentSteps = computed(() => activeAccount.value.steps)
const currentFields = computed(() => activeAccount.value.fields)
</script>
