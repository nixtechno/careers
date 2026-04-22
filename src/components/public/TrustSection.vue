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
          Multi-school integration, academic records, AI recommendations, employer matching, and outcome reporting in one platform.
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const metrics = [
  { value: '8+', label: 'School Extensions' },
  { value: '12k+', label: 'Student Records Ready' },
  { value: '340+', label: 'Employer Partners' },
  { value: '94%', label: 'Recommendation Confidence' },
]
</script>
