<template>
  <section class="border-y border-slate-100 bg-white py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
        <div v-for="metric in metrics" :key="metric.label" class="p-4">
          <p class="text-3xl font-bold text-navy-900 lg:text-4xl">{{ metric.value }}</p>
          <p class="mt-1 text-sm text-slate-500">{{ metric.label }}</p>
        </div>
      </div>
      <div class="mt-10 flex justify-center">
        <div class="rounded-full border border-slate-200 bg-slate-50 px-6 py-2 text-sm text-slate-600">
          Career guidance, webinars, documents, videos, employer links, and student support from one centre.
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const metrics = [
  { value: '12k+', label: 'Students Supported' },
  { value: '340+', label: 'Employer & Alumni Links' },
  { value: '2,800+', label: 'Opportunities Shared' },
  { value: '94%', label: 'Student Satisfaction' },
]
</script>
