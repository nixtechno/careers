<template>
  <PublicLayout>
    <section class="bg-[#f7faf8] py-20">
      <div class="mx-auto max-w-5xl px-6 lg:px-8">
        <a class="inline-flex items-center gap-2 text-sm font-bold text-emerald-700" :href="withBase('/opportunities')" @click.prevent="navigateTo('/opportunities')">
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m6-6-6 6 6 6" />
          </svg>
          Back to opportunities
        </a>

        <div v-if="opportunity" class="mt-8 rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
          <div class="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p class="text-sm font-bold uppercase tracking-wide text-emerald-700">{{ opportunity.type }}</p>
              <h1 class="mt-3 text-4xl font-black text-navy-900">{{ opportunity.title }}</h1>
              <p class="mt-3 text-lg text-slate-500">{{ opportunity.company }} • {{ opportunity.location }}</p>
            </div>
            <div class="flex h-16 w-16 items-center justify-center rounded-lg text-2xl font-black text-white" :style="{ background: opportunity.color }">{{ opportunity.company[0] }}</div>
          </div>

          <p class="mt-8 text-lg leading-9 text-slate-600">{{ opportunity.summary }}</p>

          <div class="mt-8 grid gap-4 sm:grid-cols-3">
            <div class="rounded-md bg-slate-50 p-4">
              <p class="text-xs font-bold uppercase tracking-wide text-slate-500">Deadline</p>
              <p class="mt-1 font-black text-navy-900">{{ opportunity.deadline }}</p>
            </div>
            <div class="rounded-md bg-slate-50 p-4">
              <p class="text-xs font-bold uppercase tracking-wide text-slate-500">Category</p>
              <p class="mt-1 font-black text-navy-900">{{ opportunity.category }}</p>
            </div>
            <div class="rounded-md bg-slate-50 p-4">
              <p class="text-xs font-bold uppercase tracking-wide text-slate-500">Support</p>
              <p class="mt-1 font-black text-navy-900">CASEC guided</p>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-2xl font-black text-navy-900">Application checklist</h2>
            <ul class="mt-5 grid gap-3">
              <li v-for="item in opportunity.requirements" :key="item" class="flex gap-3 rounded-md bg-slate-50 p-4 text-slate-700">
                <svg class="mt-1 h-4 w-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.79 6.8-6.79a1 1 0 0 1 1.4 0Z" clip-rule="evenodd" />
                </svg>
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="mt-10 flex flex-wrap gap-3">
            <a class="rounded-md bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800" :href="withBase('/student')" @click.prevent="navigateTo('/student')">Apply through Student Connect</a>
            <a class="rounded-md border border-slate-300 px-5 py-3 text-sm font-bold text-navy-900 transition hover:bg-slate-50" :href="withBase('/contact')" @click.prevent="navigateTo('/contact')">Ask CASEC for guidance</a>
          </div>
        </div>

        <div v-else class="mt-8 rounded-lg border border-dashed border-slate-300 bg-white p-10 text-center">
          <h1 class="text-2xl font-black text-navy-900">Opportunity not found</h1>
          <p class="mt-2 text-slate-500">The opportunity may have closed or moved.</p>
        </div>
      </div>
    </section>
  </PublicLayout>
</template>

<script setup>
import { computed } from 'vue'
import PublicLayout from '../../components/sample-one/PublicLayout.vue'
import { opportunities } from '../../data/publicContent'
import { navigateTo, withBase } from '../../utils/navigation'

const props = defineProps({
  slug: { type: String, default: '' },
})

const opportunity = computed(() => opportunities.find((item) => item.slug === props.slug))
</script>
