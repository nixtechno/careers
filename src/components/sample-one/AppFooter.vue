<template>
  <footer class="border-t border-slate-200 bg-white py-12">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid gap-8 md:grid-cols-4">
        <div>
          <div class="flex items-center gap-2">
            <div class="h-8 w-8 rounded-lg bg-navy-900"></div>
            <span class="text-lg font-bold text-navy-900">RUN CASEC</span>
          </div>
          <p class="mt-4 text-sm text-slate-500">Career Services Centre, Redeemer's University.</p>
        </div>
        <div v-for="group in groups" :key="group.title">
          <h4 class="font-semibold text-navy-900">{{ group.title }}</h4>
          <ul class="mt-3 space-y-2 text-sm text-slate-500">
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
      <div class="mt-10 border-t border-slate-100 pt-6 text-center text-sm text-slate-400">
        (c) 2025 Career Services Centre, Redeemer's University
      </div>
    </div>
  </footer>
</template>

<script setup>
const groups = [
  { title: 'Centre', items: ['About CASEC', 'Career Opportunities', 'Book a Session'] },
  { title: 'Resources', items: ['Documents', 'Videos', 'Events'] },
  { title: 'Connect', items: ['Student Connect', 'Employer Partners', 'Contact Us'] },
]
</script>
