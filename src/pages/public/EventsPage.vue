<template>
  <PublicLayout>
    <section class="bg-[#f7faf8] py-20">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <span class="rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-emerald-700">Campus Engagement</span>
        <h1 class="mt-6 max-w-3xl text-4xl font-black leading-tight text-navy-900 md:text-5xl">Events that bring students, alumni, and employers together.</h1>
        <p class="mt-5 max-w-2xl leading-8 text-slate-600">Register for workshops, career fairs, conferences, and guidance sessions hosted through RUN CASEC.</p>
      </div>
    </section>

    <section class="bg-white py-16">
      <div class="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3 lg:px-8">
        <article v-for="event in events" :key="event.slug" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p class="text-sm font-black text-emerald-700">{{ event.date }}</p>
          <h2 class="mt-3 text-2xl font-black text-navy-900">{{ event.title }}</h2>
          <p class="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-500">{{ event.type }}</p>
          <p class="mt-5 leading-7 text-slate-600">{{ event.copy }}</p>
          <a class="mt-6 inline-flex rounded-md bg-navy-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-navy-800" :href="withBase('/student')" @click.prevent="navigateTo('/student')">Register</a>
        </article>
      </div>
    </section>
  </PublicLayout>
</template>

<script setup>
import PublicLayout from '../../components/sample-one/PublicLayout.vue'
import { events } from '../../data/publicContent'
import { navigateTo, withBase } from '../../utils/navigation'
</script>
