<template>
  <section class="relative overflow-hidden bg-white">
    <div class="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
      <div class="mx-auto max-w-4xl text-center">
        <div class="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-emerald-700 shadow-sm">
          <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
          AI-driven career intelligence for schools
        </div>

        <h1 class="mt-7 font-heading text-4xl font-bold leading-tight tracking-tight text-navy-900 md:text-6xl">
          Help every student graduate with a clearer career path.
        </h1>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Connect school records, student profiles, AI recommendations, employer roles, and career centre activity in one platform.
        </p>

        <div class="mt-9 flex flex-wrap justify-center gap-4">
          <button class="rounded-md bg-navy-900 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-navy-800" type="button" @click="openLogin">
            Open Platform
          </button>
          <button class="rounded-md border border-slate-300 bg-white px-6 py-3 font-semibold text-navy-900 transition hover:bg-slate-50" type="button" @click="navigateTo('/docs')">
            Read API Docs
          </button>
          <button class="rounded-md border border-slate-300 bg-white px-6 py-3 font-semibold text-navy-900 transition hover:bg-slate-50" type="button" @click="navigateTo('/schools/signup')">
            Register
          </button>
        </div>
      </div>

      <div class="mx-auto mt-14 max-w-6xl overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl shadow-navy-900/10">
        <div class="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-3">
          <div class="flex items-center gap-2">
            <span class="h-3 w-3 rounded-full bg-red-300"></span>
            <span class="h-3 w-3 rounded-full bg-yellow-300"></span>
            <span class="h-3 w-3 rounded-full bg-emerald-400"></span>
          </div>
          <p class="hidden text-xs font-bold uppercase tracking-wide text-slate-500 sm:block">School console preview</p>
        </div>

        <div class="grid bg-white lg:grid-cols-[230px_1fr]">
          <aside class="border-b border-slate-200 bg-navy-900 p-5 text-white lg:border-b-0 lg:border-r">
            <p class="text-xs font-bold uppercase tracking-wide text-emerald-300">RUN Extension</p>
            <h3 class="mt-2 text-xl font-black">Career Intelligence</h3>
            <div class="mt-6 grid gap-2">
              <span v-for="item in menuPreview" :key="item" class="rounded-md px-3 py-2 text-sm font-semibold" :class="item === 'AI Recommendations' ? 'bg-white text-navy-900' : 'bg-white/5 text-slate-300'">{{ item }}</span>
            </div>
          </aside>

          <div class="grid gap-6 p-5 lg:grid-cols-[1fr_300px] lg:p-7">
            <section>
              <div class="grid gap-4 sm:grid-cols-3">
                <article v-for="metric in metrics" :key="metric.label" class="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p class="text-xs font-bold uppercase tracking-wide text-slate-500">{{ metric.label }}</p>
                  <p class="mt-2 text-2xl font-black text-navy-900">{{ metric.value }}</p>
                  <p class="mt-1 text-xs font-semibold text-emerald-700">{{ metric.note }}</p>
                </article>
              </div>

              <div class="mt-5 rounded-lg border border-slate-200 p-5">
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <p class="text-xs font-bold uppercase tracking-wide text-emerald-700">Recommended career path</p>
                    <h3 class="mt-2 text-2xl font-black text-navy-900">Data Analytics</h3>
                    <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                      Based on year-one to final-year result patterns, SQL interest, saved opportunities, and profile readiness.
                    </p>
                  </div>
                  <span class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">87% fit</span>
                </div>

                <div class="mt-5 grid gap-3">
                  <div v-for="step in nextActions" :key="step" class="flex items-center justify-between rounded-md bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
                    <span>{{ step }}</span>
                    <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
                  </div>
                </div>
              </div>
            </section>

            <aside class="rounded-lg border border-slate-200 bg-[#f7faf8] p-5">
              <p class="text-xs font-bold uppercase tracking-wide text-slate-500">Employer match</p>
              <h3 class="mt-2 text-xl font-black text-navy-900">48 students matched</h3>
              <p class="mt-2 text-sm leading-6 text-slate-600">Candidate fit for graduate analyst, data intern, and product operations roles.</p>

              <div class="mt-5 grid gap-3">
                <div v-for="candidate in candidates" :key="candidate.name" class="rounded-md bg-white p-3 shadow-sm">
                  <div class="flex items-center justify-between gap-3">
                    <p class="font-bold text-navy-900">{{ candidate.name }}</p>
                    <span class="text-xs font-black text-emerald-700">{{ candidate.fit }}</span>
                  </div>
                  <p class="mt-1 text-xs text-slate-500">{{ candidate.role }}</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { navigateTo } from '../../utils/navigation'

const menuPreview = ['Student Records', 'AI Recommendations', 'Employer Matches', 'Reports']

const metrics = [
  { label: 'Synced records', value: '12k', note: '4 imports this week' },
  { label: 'Career paths', value: '8.2k', note: 'Generated by AI' },
  { label: 'Employer roles', value: '412', note: 'Active pipeline' },
]

const nextActions = ['Complete SQL readiness module', 'Book a CV review', 'Apply to Data Science Intern']

const candidates = [
  { name: 'Amara O.', role: 'Computer Science', fit: '92%' },
  { name: 'David O.', role: 'Accounting', fit: '86%' },
  { name: 'Yewande E.', role: 'Economics', fit: '81%' },
]

const openLogin = () => {
  window.dispatchEvent(new CustomEvent('open-login-modal'))
}
</script>
