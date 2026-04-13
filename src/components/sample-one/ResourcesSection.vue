<template>
  <section class="bg-white py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span class="text-sm font-semibold uppercase text-emerald-600">Resource centre</span>
          <h2 class="font-heading mt-2 text-3xl font-bold text-navy-900 lg:text-4xl">Documents, videos, and guidance for career readiness</h2>
          <p class="mt-4 text-slate-600">Access practical resources from the career centre to prepare for internships, scholarships, graduate programmes, interviews, and workplace transition.</p>
          <div class="mt-8 space-y-4">
            <div v-for="resource in resources" :key="resource.title" class="flex items-center gap-4 rounded-lg p-3 transition hover:bg-slate-50">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-navy-900">{{ resource.short }}</div>
              <div>
                <h4 class="font-semibold">{{ resource.title }}</h4>
                <p class="text-sm text-slate-500">{{ resource.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="relative overflow-hidden rounded-2xl bg-slate-900 text-white">
          <img
            class="h-80 w-full object-cover opacity-60"
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80"
            alt="Students using career documents and study resources"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/70 to-transparent"></div>
          <div class="absolute inset-x-0 bottom-0 z-10 p-6">
            <p class="text-sm uppercase tracking-wide text-emerald-300">Featured resource</p>
            <p class="mt-2 text-2xl font-bold">"Preparing for Your First Graduate Interview"</p>
            <p class="mt-2 text-slate-300">A practical guide for students moving from campus applications to employer conversations.</p>
            <button class="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-navy-900">
              <span>Watch Guide</span>
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const resources = [
  { short: 'CV', title: 'CV & Cover Letter Documents', description: 'Templates and guides for student applications' },
  { short: 'VID', title: 'Career Development Videos', description: 'Recorded sessions, webinars, and interview lessons' },
  { short: 'LIB', title: 'Scholarship & Industry Guides', description: 'Resources for study, internships, and graduate paths' },
]
</script>
