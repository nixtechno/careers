<template>
  <main class="portal-shell fixed inset-0 flex overflow-hidden bg-slate-50 text-slate-900">
    <aside class="portal-sidebar flex w-72 flex-shrink-0 flex-col border-r border-[#123449] bg-[#071f2f]">
      <div class="flex h-16 flex-shrink-0 items-center border-b border-white/10 px-4">
        <div class="flex w-full items-center gap-3 rounded-lg bg-white/5 px-3 py-2">
          <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400 text-xs font-black text-navy-900">{{ initials }}</span>
          <div class="min-w-0">
            <p class="truncate text-sm font-black text-white">{{ brand }}</p>
            <p class="truncate text-xs font-semibold text-emerald-100/80">{{ label }}</p>
          </div>
        </div>
      </div>

      <div class="portal-shell-scroll min-h-0 flex-1 overflow-y-auto px-3 py-5">
        <slot name="sidebar" />
      </div>
    </aside>

    <section class="portal-main flex min-w-0 flex-1 flex-col">
      <header class="portal-header flex h-16 flex-shrink-0 items-center justify-between gap-4 border-b border-slate-200 bg-white px-6">
        <div class="flex min-w-0 flex-1 items-center">
          <div class="flex w-full max-w-xl items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-500">
            <MagnifyingGlassIcon class="h-5 w-5 flex-shrink-0" />
            <input class="min-w-0 flex-1 bg-transparent text-sm font-semibold text-slate-700 outline-none placeholder:text-slate-400" :placeholder="searchPlaceholder" type="search" />
          </div>
        </div>

        <div class="relative flex items-center gap-3">
          <slot name="actions" />
          <ThemeToggle />
          <button class="flex items-center gap-3 rounded-lg px-2 py-2 transition hover:bg-slate-50" type="button" @click="profileOpen = !profileOpen">
            <span class="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-xs font-black text-white">{{ initials }}</span>
            <span class="hidden text-left lg:block">
              <span class="block text-sm font-black leading-4 text-navy-900">{{ profileName }}</span>
              <span class="block text-xs font-semibold text-slate-500">{{ profileRole }}</span>
            </span>
            <ChevronDownIcon class="hidden h-4 w-4 text-slate-500 lg:block" />
          </button>

          <div v-if="profileOpen" class="absolute right-0 top-full z-50 mt-3 w-64 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl">
            <div class="border-b border-slate-100 p-4">
              <p class="font-black text-navy-900">{{ profileName }}</p>
              <p class="mt-1 text-sm text-slate-500">{{ profileRole }}</p>
            </div>
            <div class="grid p-2">
              <button class="flex items-center gap-3 rounded-md px-3 py-2 text-left text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-navy-900" type="button">
                <UserCircleIcon class="h-5 w-5" />
                Profile Settings
              </button>
              <button class="flex items-center gap-3 rounded-md px-3 py-2 text-left text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-navy-900" type="button">
                <ShieldCheckIcon class="h-5 w-5" />
                Account Security
              </button>
              <button class="flex items-center gap-3 rounded-md px-3 py-2 text-left text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-navy-900" type="button" @click="navigateTo('/')">
                <ArrowLeftOnRectangleIcon class="h-5 w-5" />
                Back to site
              </button>
              <button class="flex items-center gap-3 rounded-md px-3 py-2 text-left text-sm font-semibold text-red-600 transition hover:bg-red-50" type="button" @click="navigateTo('/')">
                <PowerIcon class="h-5 w-5" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div class="portal-content portal-shell-scroll min-h-0 flex-1 overflow-y-auto px-6 py-6 lg:px-8">
        <div class="mb-6">
          <p class="text-sm font-bold uppercase tracking-wide text-emerald-700">{{ pageLabel }}</p>
          <h2 class="mt-2 text-3xl font-black text-navy-900">{{ pageTitle }}</h2>
        </div>
        <div class="grid content-start gap-6">
          <slot />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowLeftOnRectangleIcon, ChevronDownIcon, MagnifyingGlassIcon, PowerIcon, ShieldCheckIcon, UserCircleIcon } from '@heroicons/vue/24/outline'
import ThemeToggle from '../ThemeToggle.vue'
import { navigateTo } from '../../utils/navigation'

defineProps({
  brand: { type: String, required: true },
  label: { type: String, required: true },
  initials: { type: String, default: 'CI' },
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  pageLabel: { type: String, required: true },
  pageTitle: { type: String, required: true },
  profileName: { type: String, default: 'Portal User' },
  profileRole: { type: String, default: 'Account Admin' },
  searchPlaceholder: { type: String, default: 'Search portal' },
})

const profileOpen = ref(false)
</script>

<style scoped>
.portal-shell-scroll {
  scrollbar-color: transparent transparent;
  scrollbar-width: thin;
}

.portal-shell-scroll::-webkit-scrollbar {
  height: 0;
  width: 0;
}

.portal-shell-scroll::-webkit-scrollbar-track,
.portal-shell-scroll::-webkit-scrollbar-thumb {
  background: transparent;
}

:global(html.dark) .portal-shell {
  background: #061925;
  color: #e2e8f0;
}

:global(html.dark) .portal-sidebar {
  background: #03131d;
  border-color: rgba(255, 255, 255, 0.08);
}

:global(html.dark) .portal-main,
:global(html.dark) .portal-header,
:global(html.dark) .portal-content {
  background: #061925;
  border-color: rgba(255, 255, 255, 0.08);
}

:global(html.dark) .portal-shell h1,
:global(html.dark) .portal-shell h2,
:global(html.dark) .portal-shell h3,
:global(html.dark) .portal-shell h4,
:global(html.dark) .portal-shell .text-navy-900,
:global(html.dark) .portal-shell .text-slate-900,
:global(html.dark) .portal-shell .text-slate-800,
:global(html.dark) .portal-shell .text-slate-700 {
  color: #f8fafc;
}

:global(html.dark) .portal-shell .bg-white,
:global(html.dark) .portal-shell .bg-slate-50,
:global(html.dark) .portal-shell .bg-slate-100 {
  background-color: #0b2230;
}

:global(html.dark) .portal-shell .border-slate-100,
:global(html.dark) .portal-shell .border-slate-200,
:global(html.dark) .portal-shell .border-slate-300 {
  border-color: rgba(255, 255, 255, 0.1);
}

:global(html.dark) .portal-shell .text-slate-500,
:global(html.dark) .portal-shell .text-slate-600 {
  color: #94a3b8;
}

:global(html.dark) .portal-back-button {
  background: #0b2230;
  color: #f8fafc;
}

:global(html.dark) .portal-shell input {
  color: #f8fafc;
}
</style>
