<template>
  <section class="relative overflow-hidden bg-white">
    <div class="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:min-h-[720px] lg:px-8 lg:pb-28 lg:pt-24">
      <div class="relative z-20 max-w-3xl lg:max-w-[700px] xl:max-w-[760px]">
        <div class="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-emerald-700 shadow-sm">
          <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
          AI-driven career intelligence for schools
        </div>

        <h1 class="mt-7 max-w-3xl font-heading text-4xl font-bold leading-tight tracking-tight text-navy-900 md:text-5xl xl:text-6xl">
          Turn school records into clearer career direction for every student.
        </h1>
        <p class="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
          Give schools one platform for academic data, student readiness, AI-guided career recommendations, employer engagement, and outcome reporting.
        </p>

        <div class="mt-8 grid gap-3 sm:max-w-xl">
          <div v-for="point in heroPoints" :key="point" class="flex items-start gap-3 text-sm text-slate-700">
            <span class="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-bold text-emerald-700">+</span>
            <span class="leading-6">{{ point }}</span>
          </div>
        </div>

        <div class="mt-8 flex flex-wrap gap-4">
          <button class="rounded-md bg-navy-900 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-navy-800" type="button" @click="openLogin">
            Open Platform
          </button>
          <button class="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-navy-900 transition hover:bg-slate-50" type="button" @click="navigateTo('/schools/signup')">
            Register
          </button>
          <button class="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-navy-900 transition hover:bg-slate-50" type="button" @click="navigateTo('/docs')">
            Read Documentation
          </button>
        </div>
      </div>

      <div class="relative mt-14 w-full max-w-5xl lg:absolute lg:left-[31%] lg:right-0 lg:top-20 lg:mt-0 lg:max-w-[940px] xl:left-[33%] xl:max-w-[980px]">
        <div class="hero-float hero-float-one hero-floating-card absolute right-36 top-4 z-10 hidden rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-xl xl:block">
          <p class="text-xs font-bold uppercase tracking-wide text-slate-500">Recommendation Fit</p>
          <p class="mt-1 text-lg font-black text-navy-900">87% aligned</p>
        </div>

        <div class="hero-float hero-float-two hero-floating-card hero-floating-card-emerald absolute right-2 top-36 z-10 hidden rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 shadow-xl xl:block">
          <p class="text-xs font-bold uppercase tracking-wide text-emerald-700">Records Synced</p>
          <p class="mt-1 text-lg font-black text-emerald-800">12,480 students</p>
        </div>

        <div class="hero-float hero-float-three hero-floating-card absolute bottom-4 left-[44%] z-10 hidden rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-xl xl:block">
          <p class="text-xs font-bold uppercase tracking-wide text-slate-500">Employer Access</p>
          <p class="mt-1 text-lg font-black text-navy-900">89 live roles</p>
        </div>

        <div class="hero-float hero-float-four hero-floating-card hero-floating-card-sky absolute left-[46%] top-[14%] z-10 hidden w-[220px] rounded-xl border border-sky-200 bg-white/95 p-4 shadow-xl xl:block">
          <div class="flex items-center gap-3">
            <div class="hero-pie-chart"></div>
            <div>
              <p class="text-[10px] font-bold uppercase tracking-wide text-slate-500">Recommendation Split</p>
              <p class="mt-1 text-sm font-black text-navy-900">STEM pathways lead</p>
              <p class="mt-1 text-xs leading-5 text-slate-500">Current recommendation mix across synced student profiles.</p>
            </div>
          </div>

          <div class="mt-3 grid gap-1.5 text-[11px] text-slate-600">
            <div class="flex items-center justify-between gap-3">
              <span class="flex items-center gap-2"><span class="h-2.5 w-2.5 rounded-full bg-sky-400"></span>STEM</span>
              <span class="font-bold text-navy-900">62%</span>
            </div>
            <div class="flex items-center justify-between gap-3">
              <span class="flex items-center gap-2"><span class="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>Business</span>
              <span class="font-bold text-navy-900">20%</span>
            </div>
            <div class="flex items-center justify-between gap-3">
              <span class="flex items-center gap-2"><span class="h-2.5 w-2.5 rounded-full bg-amber-400"></span>Creative</span>
              <span class="font-bold text-navy-900">10%</span>
            </div>
            <div class="flex items-center justify-between gap-3">
              <span class="flex items-center gap-2"><span class="h-2.5 w-2.5 rounded-full bg-violet-400"></span>Public Sector</span>
              <span class="font-bold text-navy-900">8%</span>
            </div>
          </div>
        </div>

        <div class="hero-float hero-float-five hero-floating-card hero-floating-card-violet absolute -right-3 bottom-3 z-10 hidden w-[220px] rounded-xl border border-violet-200 bg-white/95 p-4 shadow-xl xl:block">
          <p class="text-[10px] font-bold uppercase tracking-wide text-slate-500">Placement Trend</p>
          <p class="mt-1 text-sm font-black text-navy-900">Graduate outcomes improving</p>
          <p class="mt-1 text-xs leading-5 text-slate-500">Quarterly placement signal from employer matches, completed guidance, and verified records.</p>
          <div class="mt-3 flex items-end gap-1.5">
            <span class="hero-bar h-6 bg-sky-400"></span>
            <span class="hero-bar h-10 bg-emerald-400"></span>
            <span class="hero-bar h-8 bg-amber-400"></span>
            <span class="hero-bar h-14 bg-violet-400"></span>
          </div>
          <div class="mt-3 flex items-center justify-between text-[11px] text-slate-500">
            <span>Q1</span>
            <span>Q2</span>
            <span>Q3</span>
            <span>Q4</span>
          </div>
          <p class="mt-2 text-xs font-semibold text-emerald-700">+18% stronger placement readiness this cycle</p>
        </div>

        <div class="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl shadow-navy-900/10">
          <div class="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-[46%] bg-gradient-to-r from-white via-white/95 to-white/0 dark:from-[#07151f] dark:via-[#07151f]/95 dark:to-[#07151f]/0 lg:block"></div>
          <div class="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3">
            <div class="flex items-center gap-2">
              <span class="h-3 w-3 rounded-full bg-red-300"></span>
              <span class="h-3 w-3 rounded-full bg-yellow-300"></span>
              <span class="h-3 w-3 rounded-full bg-emerald-400"></span>
            </div>
            <p class="text-xs font-bold uppercase tracking-wide text-slate-500">School Console Preview</p>
          </div>

          <div class="grid bg-white lg:grid-cols-[190px_1fr]">
            <aside class="border-b border-slate-200 bg-navy-900 p-4 text-white lg:border-b-0 lg:border-r">
              <p class="text-xs font-bold uppercase tracking-wide text-emerald-300">RUN Extension</p>
              <h3 class="mt-2 text-lg font-black">Career Intelligence</h3>
              <div class="mt-5 grid gap-2">
                <span
                  v-for="item in menuPreview"
                  :key="item.name"
                  class="rounded-md px-3 py-2 text-xs font-semibold"
                  :class="item.active ? 'bg-white text-navy-900' : 'bg-white/5 text-slate-300'"
                >
                  {{ item.name }}
                </span>
              </div>
            </aside>

            <div class="hero-preview-scroll grid gap-8 p-4 lg:max-h-[560px] lg:overflow-y-auto lg:p-5">
              <section>
                <div class="grid gap-4 sm:grid-cols-3">
                  <article v-for="stat in heroStats" :key="stat.label" class="rounded-lg border border-slate-200 bg-slate-50 p-3.5">
                    <p class="text-xs font-bold uppercase tracking-wide text-slate-500">{{ stat.label }}</p>
                    <p class="mt-2 text-xl font-black text-navy-900">{{ stat.value }}</p>
                    <p class="mt-1 text-xs font-semibold text-emerald-700">{{ stat.note }}</p>
                  </article>
                </div>

                <div class="mt-5 rounded-lg border border-slate-200 p-4">
                  <div class="flex items-start justify-between gap-4">
                    <div>
                      <p class="text-xs font-bold uppercase tracking-wide text-emerald-700">Recommended career path</p>
                      <h3 class="mt-2 text-xl font-black text-navy-900">Data Analytics</h3>
                      <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                        Based on year-one to final-year result patterns, SQL interest, saved opportunities, and profile readiness.
                      </p>
                    </div>
                    <span class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">87% fit</span>
                  </div>

                  <div class="mt-5 grid gap-3">
                    <div v-for="step in nextActions" :key="step" class="flex items-center justify-between rounded-md bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-700 sm:text-sm">
                      <span>{{ step }}</span>
                      <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
                    </div>
                  </div>
                </div>

                <div class="rounded-lg border border-slate-200 p-4">
                  <p class="text-xs font-bold uppercase tracking-wide text-slate-500">Guidance queue</p>
                  <div class="mt-4 grid gap-3">
                    <div v-for="item in guidanceQueue" :key="item.title" class="rounded-md bg-slate-50 px-4 py-3">
                      <div class="flex items-center justify-between gap-3">
                        <p class="text-xs font-bold text-navy-900 sm:text-sm">{{ item.title }}</p>
                        <span class="text-xs font-bold text-emerald-700">{{ item.meta }}</span>
                      </div>
                      <p class="mt-1 text-xs text-slate-500 sm:text-sm">{{ item.copy }}</p>
                    </div>
                  </div>
                </div>
              </section>

              <aside class="rounded-lg border border-slate-200 bg-[#f7faf8] p-4 lg:max-w-[280px]">
                <p class="text-xs font-bold uppercase tracking-wide text-slate-500">Employer match</p>
                <h3 class="mt-2 text-lg font-black text-navy-900">48 students matched</h3>
                <p class="mt-2 text-sm leading-6 text-slate-600">Candidate fit for graduate analyst, data intern, and product operations roles.</p>

                <div class="mt-5 grid gap-3">
                  <div v-for="candidate in candidates" :key="candidate.name" class="rounded-md bg-white p-3 shadow-sm">
                    <div class="flex items-center justify-between gap-3">
                      <p class="text-sm font-bold text-navy-900">{{ candidate.name }}</p>
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
    </div>
  </section>
</template>

<script setup>
import { navigateTo } from '../../utils/navigation'

const heroPoints = [
  'Connect school records, readiness data, and graduate outcomes in one place.',
  'Guide students with AI-supported career direction as they progress.',
  'Give employers a cleaner pipeline into qualified campus talent.',
]

const heroStats = [
  { label: 'Synced records', value: '12k', note: '4 imports this week' },
  { label: 'Career paths', value: '8.2k', note: 'Generated by AI' },
  { label: 'Employer roles', value: '412', note: 'Active pipeline' },
]

const menuPreview = [
  { name: 'Overview', active: false },
  { name: 'Recommendations', active: true },
  { name: 'Students', active: false },
  { name: 'Reports', active: false },
]

const nextActions = ['Complete SQL readiness module', 'Book a CV review', 'Apply to Data Science Intern']

const guidanceQueue = [
  { title: 'CV clinic follow-up', meta: 'Today', copy: '21 students still need review slots before the internship cycle closes.' },
  { title: 'Missing transcript checks', meta: '32 pending', copy: 'Academic record gaps are holding back recommendation updates for some final-year profiles.' },
]

const candidates = [
  { name: 'Amara O.', role: 'Computer Science', fit: '92%' },
  { name: 'David O.', role: 'Accounting', fit: '86%' },
  { name: 'Yewande E.', role: 'Economics', fit: '81%' },
]

const openLogin = () => {
  window.dispatchEvent(new CustomEvent('open-login-modal'))
}
</script>

<style scoped>
.hero-float {
  animation: hero-float 6s ease-in-out infinite;
  will-change: transform;
}

.hero-float-one {
  animation-delay: 0s;
}

.hero-float-two {
  animation-delay: 1.2s;
}

.hero-float-three {
  animation-delay: 2.4s;
}

.hero-float-four {
  animation-delay: 0.8s;
}

.hero-float-five {
  animation-delay: 1.8s;
}

.hero-floating-card {
  backdrop-filter: blur(10px);
}

.hero-pie-chart {
  height: 44px;
  width: 44px;
  flex-shrink: 0;
  border-radius: 9999px;
  background:
    conic-gradient(#38bdf8 0 36%, #34d399 36% 62%, #fbbf24 62% 78%, #a78bfa 78% 100%);
  position: relative;
}

.hero-pie-chart::after {
  content: '';
  position: absolute;
  inset: 9px;
  border-radius: 9999px;
  background: white;
}

.hero-bar {
  width: 10px;
  border-radius: 9999px 9999px 4px 4px;
  display: block;
}

.hero-preview-scroll {
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 #f8fafc;
}

.hero-preview-scroll::-webkit-scrollbar {
  width: 8px;
}

.hero-preview-scroll::-webkit-scrollbar-track {
  background: #f8fafc;
}

.hero-preview-scroll::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 9999px;
}

@keyframes hero-float {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-float {
    animation: none;
  }
}

:global(html.dark) .hero-floating-card {
  background: rgba(11, 24, 34, 0.92) !important;
  border-color: #1f3442 !important;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.38) !important;
}

:global(html.dark) .hero-floating-card-emerald {
  background: rgba(6, 78, 59, 0.26) !important;
  border-color: rgba(52, 211, 153, 0.3) !important;
}

:global(html.dark) .hero-floating-card-sky {
  background: rgba(8, 47, 73, 0.9) !important;
  border-color: rgba(56, 189, 248, 0.28) !important;
}

:global(html.dark) .hero-floating-card-violet {
  background: rgba(46, 16, 101, 0.82) !important;
  border-color: rgba(167, 139, 250, 0.3) !important;
}

:global(html.dark) .hero-pie-chart::after {
  background: #0b1822;
}

:global(html.dark) .hero-preview-scroll {
  scrollbar-color: #274152 #102331;
}

:global(html.dark) .hero-preview-scroll::-webkit-scrollbar-track {
  background: #102331;
}

:global(html.dark) .hero-preview-scroll::-webkit-scrollbar-thumb {
  background: #274152;
}
</style>
