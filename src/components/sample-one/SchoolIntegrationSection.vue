<template>
  <section class="bg-white py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p class="text-sm font-bold uppercase tracking-wide text-emerald-700">School integration</p>
          <h2 class="mt-4 text-3xl font-black leading-tight text-navy-900 lg:text-4xl">
            Plug into the systems schools already use.
          </h2>
          <p class="mt-4 leading-8 text-slate-600">
            Each school gets a dedicated extension, API access, and simple import options for student records and results.
          </p>
        </div>

        <div class="grid gap-4 md:grid-cols-3">
          <article v-for="item in integrationItems" :key="item.title" class="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <div class="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-black text-navy-900 shadow-sm">{{ item.short }}</div>
            <h3 class="mt-5 font-black text-navy-900">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.copy }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const integrationItems = [
  {
    short: 'EXT',
    title: 'School extension',
    copy: 'Branded portal, signup rules, departments, and admin access for each institution.',
  },
  {
    short: 'API',
    title: 'API and imports',
    copy: 'Connect student systems or upload records through CSV and structured documents.',
  },
  {
    short: 'DOC',
    title: 'Developer docs',
    copy: 'Clear endpoints for students, results, recommendations, opportunities, and reports.',
  },
]
</script>
