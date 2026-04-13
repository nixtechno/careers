<template>
  <section class="sample-one-opportunities bg-white py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <span class="eyebrow eyebrow-emerald mb-4 inline-flex">Live Opportunities</span>
          <h2 class="editorial-heading mt-3" style="font-size: clamp(1.8rem, 3vw, 2.5rem); color: #062a3f">
            Scholarships, internships,<br />and graduate opportunities.
          </h2>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <div class="relative">
            <svg class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="6" cy="6" r="4.5" stroke="#94a3b8" stroke-width="1.3" />
              <path d="M9.5 9.5l2.5 2.5" stroke="#94a3b8" stroke-width="1.3" stroke-linecap="round" />
            </svg>
            <input v-model="searchQuery" type="text" placeholder="Search opportunities..." class="input-field pl-9" style="width: 200px; padding-top: 8px; padding-bottom: 8px" />
          </div>
          <select v-model="selectedType" class="select-field" style="width: 140px; padding-top: 8px; padding-bottom: 8px">
            <option>All Types</option>
            <option>Internship</option>
            <option>Graduate</option>
            <option>Scholarship</option>
            <option>Fellowship</option>
          </select>
          <a :href="withBase('/student')" class="btn-primary" style="padding: 8px 16px; font-size: 13px" @click.prevent="navigateTo('/student')">Find Support</a>
        </div>
      </div>

      <div class="tab-group mb-8 w-fit">
        <button
          v-for="type in oppTypes"
          :key="type"
          type="button"
          class="tab-item"
          :class="{ active: activeOppType === type }"
          @click="setActiveType(type)"
        >
          {{ type }}
        </button>
      </div>

      <div v-if="isLoading" class="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <article v-for="index in 6" :key="index" class="opp-card">
          <div class="mb-5 flex items-start justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="shimmer h-10 w-10 rounded-xl"></div>
              <div>
                <div class="shimmer h-3 w-24 rounded"></div>
                <div class="shimmer mt-2 h-3 w-16 rounded"></div>
              </div>
            </div>
            <div class="shimmer h-6 w-20 rounded-full"></div>
          </div>
          <div class="shimmer h-4 w-3/4 rounded"></div>
          <div class="shimmer mt-3 h-3 w-full rounded"></div>
          <div class="shimmer mt-2 h-3 w-5/6 rounded"></div>
          <div class="mt-5 flex gap-2">
            <div class="shimmer h-6 w-16 rounded-full"></div>
            <div class="shimmer h-6 w-20 rounded-full"></div>
            <div class="shimmer h-6 w-14 rounded-full"></div>
          </div>
          <div class="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
            <div class="shimmer h-3 w-24 rounded"></div>
            <div class="shimmer h-7 w-16 rounded-md"></div>
          </div>
        </article>
      </div>

      <div v-else class="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <article v-for="opp in filteredOpportunities" :key="opp.slug" class="opp-card">
          <div class="mb-4 flex items-start justify-between gap-4">
            <div class="flex min-w-0 items-center gap-3">
              <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white" :style="{ background: opp.color }">
                {{ opp.company[0] }}
              </div>
              <div class="min-w-0">
                <p class="truncate text-xs font-medium text-slate-500">{{ opp.company }}</p>
                <p class="text-xs text-slate-400">{{ opp.location }}</p>
              </div>
            </div>
            <span class="badge flex-shrink-0" :class="opp.typeBadge">{{ opp.type }}</span>
          </div>

          <h4 class="mb-2 font-bold leading-snug text-slate-800">{{ opp.title }}</h4>
          <p class="mb-4 text-xs leading-relaxed text-slate-500">{{ opp.desc }}</p>

          <div class="mb-4 flex flex-wrap gap-2">
            <span v-for="tag in opp.tags" :key="tag" class="badge badge-slate">{{ tag }}</span>
          </div>

          <div class="flex items-center justify-between border-t border-slate-100 pt-3">
            <div class="flex items-center gap-1.5 text-xs text-slate-400">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect x="1.5" y="2.5" width="9" height="8" rx="1" stroke="#94a3b8" stroke-width="1" />
                <path d="M4 1.5v2M8 1.5v2M1.5 5.5h9" stroke="#94a3b8" stroke-width="1" stroke-linecap="round" />
              </svg>
              Closes {{ opp.deadline }}
            </div>
            <a :href="withBase(`/opportunities/${opp.slug}`)" class="btn-ghost" style="padding: 5px 12px; font-size: 11px" @click.prevent="navigateTo(`/opportunities/${opp.slug}`)">
              <span>View</span>
              <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </article>
      </div>

      <div v-if="!isLoading && filteredOpportunities.length === 0" class="empty-state mt-8">
        <p class="font-semibold text-slate-700">No matching opportunities yet.</p>
        <p class="mt-1 text-sm text-slate-500">Try a different role, company, or opportunity type.</p>
      </div>

      <div class="mt-10 text-center">
        <a :href="withBase('/opportunities')" class="btn-secondary" @click.prevent="navigateTo('/opportunities')">View All Career Opportunities</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { opportunities } from '../../data/publicContent'
import { navigateTo, withBase } from '../../utils/navigation'

const activeOppType = ref('All')
const selectedType = ref('All Types')
const searchQuery = ref('')
const isLoading = ref(true)
let loadingTimeout

const oppTypes = ['All', 'Internships', 'Graduate', 'Scholarships', 'Fellowships']
const filteredOpportunities = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  const tabFiltered = activeOppType.value === 'All'
    ? opportunities
    : opportunities.filter((opp) => opp.category === activeOppType.value)

  return tabFiltered.filter((opp) => {
    const matchesType = selectedType.value === 'All Types' || opp.type === selectedType.value
    const matchesQuery = !query || [opp.title, opp.company, opp.location, ...opp.tags].some((item) => item.toLowerCase().includes(query))

    return matchesType && matchesQuery
  })
})

const showLoading = () => {
  isLoading.value = true
  window.clearTimeout(loadingTimeout)
  loadingTimeout = window.setTimeout(() => {
    isLoading.value = false
  }, 650)
}

const setActiveType = (type) => {
  if (activeOppType.value === type) return
  activeOppType.value = type
}

watch([activeOppType, selectedType, searchQuery], showLoading)

onMounted(showLoading)
</script>

<style scoped>
.sample-one-opportunities {
  --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.05), 0 8px 32px rgba(6, 42, 63, 0.06);
  --shadow-card-hover: 0 4px 6px rgba(0, 0, 0, 0.04), 0 16px 48px rgba(6, 42, 63, 0.12);
  color: #1e293b;
}

.editorial-heading {
  font-family: 'Poppins', system-ui, sans-serif;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.eyebrow {
  align-items: center;
  border-radius: 100px;
  display: inline-flex;
  font-size: 12px;
  font-weight: 700;
  gap: 8px;
  letter-spacing: 0.06em;
  padding: 5px 14px;
  text-transform: uppercase;
}

.eyebrow-emerald {
  background: #ecfdf5;
  color: #047857;
}

.input-field,
.select-field {
  background: #fff;
  border: 1.5px solid #e2e8f0;
  border-radius: 10px;
  color: #1e293b;
  font-family: 'Poppins', system-ui, sans-serif;
  font-size: 14px;
  outline: none;
  padding: 10px 14px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  width: 100%;
}

.input-field:focus,
.select-field:focus {
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.12);
}

.input-field::placeholder {
  color: #94a3b8;
}

.select-field {
  appearance: none;
  cursor: pointer;
}

.tab-group {
  background: #f1f5f9;
  border-radius: 10px;
  display: flex;
  gap: 2px;
  padding: 4px;
}

.tab-item {
  border: 0;
  border-radius: 8px;
  color: #64748b;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 18px;
  transition: all 0.2s ease;
}

.tab-item.active {
  background: #fff;
  box-shadow: 0 1px 4px rgba(6, 42, 63, 0.12);
  color: #062a3f;
}

.tab-item:hover:not(.active) {
  color: #047857;
}

.opp-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  padding: 20px;
  transition: all 0.2s ease;
}

.opp-card:hover {
  border-color: #a7f3d0;
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-2px);
}

.shimmer {
  background: linear-gradient(90deg, #f1f5f9 0%, #e2e8f0 48%, #f8fafc 100%);
  background-size: 220% 100%;
  animation: shimmer 1.25s ease-in-out infinite;
}

.badge {
  align-items: center;
  border-radius: 100px;
  display: inline-flex;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 3px 10px;
  text-transform: uppercase;
}

.badge-navy {
  background: #f0f4f8;
  color: #062a3f;
}

.badge-emerald {
  background: #d1fae5;
  color: #047857;
}

.badge-soft {
  background: #f0f4f8;
  color: #3b6b8f;
}

.badge-deep {
  background: #ecfdf5;
  color: #065f46;
}

.badge-slate {
  background: #f1f5f9;
  color: #475569;
}

.btn-primary,
.btn-secondary,
.btn-ghost {
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  display: inline-flex;
  font-family: 'Poppins', system-ui, sans-serif;
  font-size: 14px;
  font-weight: 600;
  gap: 8px;
  letter-spacing: 0;
  padding: 11px 24px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-primary {
  background: #062a3f;
  border: none;
  color: #fff;
}

.btn-primary:hover {
  background: #0e3a56;
  box-shadow: 0 8px 24px rgba(6, 42, 63, 0.24);
  transform: translateY(-1px);
}

.btn-secondary {
  background: #f1f5f9;
  border: 1.5px solid #e2e8f0;
  color: #1e293b;
}

.btn-secondary:hover {
  background: #e2e8f0;
  border-color: #cbd5e1;
  transform: translateY(-1px);
}

.btn-ghost {
  background: transparent;
  border: 1.5px solid #a7f3d0;
  color: #047857;
}

.btn-ghost:hover {
  background: #ecfdf5;
}

.empty-state {
  border: 1px dashed #d1fae5;
  border-radius: 14px;
  padding: 32px;
  text-align: center;
}

@keyframes shimmer {
  0% {
    background-position: 120% 0;
  }

  100% {
    background-position: -120% 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .shimmer {
    animation: none;
  }
}
</style>
