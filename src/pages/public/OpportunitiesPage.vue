<template>
  <PublicLayout>
    <section class="bg-[#f7faf8] py-20">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <span class="rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-emerald-700">Opportunity Marketplace</span>
        <div class="mt-6 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <h1 class="text-4xl font-black leading-tight text-navy-900 md:text-5xl">Find the next step for your career journey.</h1>
            <p class="mt-5 max-w-2xl leading-8 text-slate-600">Browse internships, scholarships, fellowships, and graduate roles curated for Redeemer's University students and alumni.</p>
          </div>
          <div class="grid gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[1fr_180px]">
            <input v-model="searchQuery" class="rounded-md border border-slate-300 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" placeholder="Search by role, company, or skill" type="text" />
            <select v-model="selectedType" class="rounded-md border border-slate-300 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100">
              <option>All Types</option>
              <option>Internship</option>
              <option>Graduate</option>
              <option>Scholarship</option>
              <option>Fellowship</option>
            </select>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-16">
      <div class="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 xl:grid-cols-3 lg:px-8">
        <article v-for="opportunity in filteredOpportunities" :key="opportunity.slug" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl">
          <div class="flex items-start justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="flex h-12 w-12 items-center justify-center rounded-lg text-lg font-black text-white" :style="{ background: opportunity.color }">{{ opportunity.company[0] }}</div>
              <div>
                <p class="font-bold text-navy-900">{{ opportunity.company }}</p>
                <p class="text-sm text-slate-500">{{ opportunity.location }}</p>
              </div>
            </div>
            <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase text-slate-600">{{ opportunity.type }}</span>
          </div>
          <h2 class="mt-5 text-xl font-black text-navy-900">{{ opportunity.title }}</h2>
          <p class="mt-3 leading-7 text-slate-600">{{ opportunity.desc }}</p>
          <div class="mt-5 flex flex-wrap gap-2">
            <span v-for="tag in opportunity.tags" :key="tag" class="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{{ tag }}</span>
          </div>
          <div class="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
            <p class="text-sm font-semibold text-slate-500">Closes {{ opportunity.deadline }}</p>
            <a class="inline-flex items-center gap-2 rounded-md bg-navy-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-navy-800" :href="withBase(`/opportunities/${opportunity.slug}`)" @click.prevent="navigateTo(`/opportunities/${opportunity.slug}`)">
              View Details
            </a>
          </div>
        </article>
      </div>

      <div v-if="filteredOpportunities.length === 0" class="mx-auto max-w-3xl px-6">
        <EmptyPage icon="opportunities" title="No matching opportunities yet" copy="Try another keyword or opportunity type." />
      </div>
    </section>
  </PublicLayout>
</template>

<script setup>
import { computed, ref } from 'vue'
import EmptyPage from '../../components/portal/EmptyPage.vue'
import PublicLayout from '../../components/sample-one/PublicLayout.vue'
import { opportunities } from '../../data/publicContent'
import { navigateTo, withBase } from '../../utils/navigation'

const searchQuery = ref('')
const selectedType = ref('All Types')

const filteredOpportunities = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  return opportunities.filter((opportunity) => {
    const matchesType = selectedType.value === 'All Types' || opportunity.type === selectedType.value
    const matchesQuery = !query || [opportunity.title, opportunity.company, opportunity.location, ...opportunity.tags].some((item) => item.toLowerCase().includes(query))

    return matchesType && matchesQuery
  })
})
</script>
