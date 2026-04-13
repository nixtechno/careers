<template>
  <section class="relative overflow-hidden bg-white">
    <div class="absolute inset-0 -z-10">
      <div class="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-emerald-50/40 blur-3xl"></div>
      <div class="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-navy-50/30 blur-3xl"></div>
    </div>

    <div class="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div class="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            Career Services Centre - Redeemer's University
          </div>
          <h1 class="font-heading text-4xl font-bold leading-tight tracking-tight text-navy-900 lg:text-6xl">
            Your gateway to<br />
            <span class="text-emerald-600">professional success</span>
          </h1>
          <p class="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
            Career guidance, internships, scholarships, employer connections, and practical resources for students preparing for life after graduation.
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <a :href="withBase('/opportunities')" class="rounded-xl bg-navy-900 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-navy-800" @click.prevent="navigateTo('/opportunities')">
              <span>Explore Career Opportunities</span>
              <svg class="inline-block h-4 w-4 align-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
            <button class="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50" type="button" @click="openSessionModal">
              Book a Guidance Session
            </button>
          </div>

          <div class="mt-10 flex items-center gap-6 border-t border-slate-200 pt-6">
            <div class="flex -space-x-2">
              <div class="h-8 w-8 rounded-full border-2 border-white bg-slate-200"></div>
              <div class="h-8 w-8 rounded-full border-2 border-white bg-slate-300"></div>
              <div class="h-8 w-8 rounded-full border-2 border-white bg-slate-400"></div>
            </div>
            <div class="text-sm text-slate-500">
              Supporting <span class="font-semibold text-navy-900">students</span>, <span class="font-semibold text-navy-900">alumni</span>, and <span class="font-semibold text-navy-900">employer partners</span>
            </div>
          </div>
        </div>

        <div class="relative mx-auto flex min-h-[460px] w-full max-w-xl items-center justify-center">
          <div class="absolute h-72 w-72 rounded-full border border-emerald-100 bg-emerald-50/40 sm:h-96 sm:w-96"></div>
          <div class="absolute h-56 w-56 rounded-full border border-navy-100 sm:h-80 sm:w-80"></div>

          <svg class="circular-text absolute h-80 w-80 overflow-visible sm:h-[430px] sm:w-[430px]" viewBox="0 0 430 430" aria-hidden="true">
            <defs>
              <path id="heroTextCircle" d="M 215,215 m -178,0 a 178,178 0 1,1 356,0 a 178,178 0 1,1 -356,0" />
            </defs>
            <text class="circular-text-copy">
              <textPath href="#heroTextCircle" startOffset="0%">
                Career Guidance • Internships • Scholarships • Webinars • Alumni Support • Employer Connections •
              </textPath>
            </text>
          </svg>

          <div class="relative z-10 flex h-56 w-56 items-center justify-center rounded-full border border-slate-200 bg-white p-8 shadow-2xl shadow-navy-900/10 sm:h-72 sm:w-72">
            <img class="max-h-full max-w-full object-contain grayscale" :src="logoUrl" alt="Redeemer's University Career Services Centre logo" />
          </div>

          <div class="absolute bottom-8 left-4 z-20 hidden rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-xl sm:block">
            <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">Career Centre</p>
            <p class="mt-1 font-black text-navy-900">Guidance for every step</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import logoUrl from '../../../logo.png'
import { navigateTo, withBase } from '../../utils/navigation'
import { openSessionModal } from '../../utils/sessionModal'
</script>

<style scoped>
.circular-text {
  animation: circular-text-spin 24s linear infinite;
  transform-origin: center;
}

.circular-text-copy {
  fill: #062a3f;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
}

@keyframes circular-text-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .circular-text {
    animation: none;
  }
}
</style>
