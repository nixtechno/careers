<template>
  <PublicLayout>
    <section class="bg-[#f7faf8] py-20">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <span class="rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-emerald-700">Career Resources</span>
        <h1 class="mt-6 max-w-3xl text-4xl font-black leading-tight text-navy-900 md:text-5xl">Tools for stronger applications and clearer career planning.</h1>
      </div>
    </section>

    <section class="bg-white py-16">
      <div class="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3 lg:px-8">
        <article v-for="resource in resources" :key="resource.title" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p class="text-xs font-bold uppercase tracking-wide text-emerald-700">{{ resource.type }}</p>
          <h2 class="mt-3 text-xl font-black text-navy-900">{{ resource.title }}</h2>
          <p class="mt-3 leading-7 text-slate-600">{{ resource.copy }}</p>
          <a class="mt-6 inline-flex rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-navy-900 transition hover:bg-slate-50" :href="withBase('/student')" @click.prevent="navigateTo('/student')">Open in Student Connect</a>
        </article>
      </div>
    </section>
  </PublicLayout>
</template>

<script setup>
import PublicLayout from '../../components/sample-one/PublicLayout.vue'
import { navigateTo, withBase } from '../../utils/navigation'

const resources = [
  { type: 'Document', title: 'CV & Cover Letter Pack', copy: 'Templates and examples for student applications, internships, and graduate roles.' },
  { type: 'Video', title: 'Graduate Interview Guide', copy: 'Recorded guidance for preparing confident employer conversations.' },
  { type: 'Checklist', title: 'Scholarship Application Checklist', copy: 'A step-by-step guide for personal statements, references, and document readiness.' },
]
</script>
