<template>
  <section class="bg-gradient-to-br from-navy-900 to-navy-800 py-24 text-white">
    <div class="mx-auto max-w-5xl px-6 text-center">
      <h2 class="font-heading text-3xl font-bold lg:text-5xl">Ready to connect your school to career intelligence?</h2>
      <p class="mx-auto mt-4 max-w-2xl text-lg text-slate-300">Launch a school extension, integrate student records, guide students with AI recommendations, and open a stronger pipeline for employers.</p>
      <div class="mt-10 flex flex-wrap justify-center gap-4">
        <a :href="withBase('/schools/signup')" class="rounded-full bg-emerald-500 px-8 py-3 font-bold text-navy-900 shadow-lg transition hover:bg-emerald-400" @click.prevent="navigateTo('/schools/signup')">Register</a>
      </div>
      <p class="mt-8 text-sm text-slate-400">For schools, students, employers, and platform operators.</p>
    </div>
  </section>
</template>

<script setup>
import { navigateTo, withBase } from '../../utils/navigation'
</script>
