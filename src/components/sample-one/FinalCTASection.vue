<template>
  <section class="bg-gradient-to-br from-navy-900 to-navy-800 py-24 text-white">
    <div class="mx-auto max-w-5xl px-6 text-center">
      <h2 class="font-heading text-3xl font-bold lg:text-5xl">Ready to take the next step in your career journey?</h2>
      <p class="mx-auto mt-4 max-w-2xl text-lg text-slate-300">Explore opportunities, book a guidance session, and use the resources prepared for Redeemer's University students and alumni.</p>
      <div class="mt-10 flex flex-wrap justify-center gap-4">
        <a :href="withBase('/student')" class="rounded-full bg-emerald-500 px-8 py-3 font-bold text-navy-900 shadow-lg transition hover:bg-emerald-400" @click.prevent="navigateTo('/student')">Book a Session</a>
        <a :href="withBase('/opportunities')" class="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10" @click.prevent="navigateTo('/opportunities')">View Opportunities</a>
      </div>
      <p class="mt-8 text-sm text-slate-400">For students, alumni, employers, and career centre partners.</p>
    </div>
  </section>
</template>

<script setup>
import { navigateTo, withBase } from '../../utils/navigation'
</script>
