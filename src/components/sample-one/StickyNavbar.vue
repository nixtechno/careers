<template>
  <div>
  <header class="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm">
    <nav class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between lg:h-20">
        <div class="flex items-center gap-2">
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-900">
            <span class="text-lg font-bold text-white">CC</span>
          </div>
          <span class="font-heading text-xl font-bold text-navy-900">
            RUN CASEC<span class="text-emerald-600">.</span>
          </span>
        </div>

        <div class="hidden items-center space-x-8 lg:flex">
          <div v-for="item in navItems" :key="item.label" class="relative">
            <a
              v-if="!item.children"
              :href="withBase(item.path)"
              class="text-sm font-medium transition hover:text-navy-900"
              :class="isActive(item.path) ? 'text-navy-900' : 'text-slate-600'"
              @click.prevent="goTo(item.path)"
            >
              {{ item.label }}
            </a>
            <div v-else>
              <button
                class="inline-flex items-center gap-1 text-sm font-medium text-slate-600 transition hover:text-navy-900"
                type="button"
                :aria-expanded="openDropdown === item.label"
                @click="openDropdown = openDropdown === item.label ? '' : item.label"
              >
                {{ item.label }}
                <svg class="h-4 w-4 transition" :class="openDropdown === item.label ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div v-if="openDropdown === item.label" class="absolute left-0 top-full z-50 mt-3 w-48 rounded-lg border border-slate-200 bg-white p-2 shadow-xl">
                <a
                  v-for="child in item.children"
                  :key="child.label"
                  :href="withBase(child.path)"
                  class="block rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-navy-900"
                  @click.prevent="goTo(child.path)"
                >
                  {{ child.label }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <button class="text-sm font-medium text-slate-700 transition hover:text-navy-900" @click="openLoginModal">
            Login
          </button>
          <button class="rounded-full bg-navy-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-navy-800" @click="goTo('/student')">
            Book a Session
          </button>
        </div>

        <button type="button" class="rounded-lg p-2 hover:bg-slate-100 lg:hidden" @click="mobileMenuOpen = !mobileMenuOpen">
          <svg class="h-6 w-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div v-if="mobileMenuOpen" class="animate-fadeIn border-t border-slate-200 py-4 lg:hidden">
        <div class="flex flex-col space-y-4">
          <div v-for="item in navItems" :key="item.label">
            <a :href="withBase(item.path)" class="block px-2 py-1 text-sm font-medium text-slate-600 transition hover:text-navy-900" @click.prevent="goTo(item.path)">
              {{ item.label }}
            </a>
            <div v-if="item.children" class="mt-2 grid gap-1 border-l border-slate-200 pl-4">
              <a v-for="child in item.children" :key="child.label" :href="withBase(child.path)" class="px-2 py-1 text-sm text-slate-500 transition hover:text-navy-900" @click.prevent="goTo(child.path)">
                {{ child.label }}
              </a>
            </div>
          </div>
          <div class="flex flex-col gap-2 pt-2">
            <ThemeToggle />
            <button class="px-2 py-2 text-left text-sm font-medium text-slate-700" @click="openLoginModal">Login</button>
            <button class="rounded-full bg-navy-900 px-4 py-2 text-center text-sm font-semibold text-white" @click="goTo('/student')">Book a Session</button>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <div v-if="loginModalOpen" class="fixed inset-0 z-[100] flex min-h-screen items-center justify-center bg-navy-900/70 px-4 py-8 backdrop-blur-sm" @click.self="loginModalOpen = false">
    <section class="w-full max-w-2xl overflow-hidden rounded-lg bg-white shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="login-modal-title">
      <div class="flex items-start justify-between border-b border-slate-200 px-6 py-5">
        <div>
          <p class="text-xs font-bold uppercase tracking-wide text-emerald-700">RUN CASEC</p>
          <h2 id="login-modal-title" class="mt-1 text-2xl font-black text-navy-900">Login to your portal</h2>
        </div>
        <button class="rounded-full bg-slate-100 p-2 text-slate-500 transition hover:bg-slate-200 hover:text-navy-900" type="button" aria-label="Close login modal" @click="loginModalOpen = false">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>

      <div class="p-6 sm:p-8">
        <div class="mb-6 grid grid-cols-2 rounded-lg bg-slate-100 p-1">
          <button
            v-for="tab in loginTabs"
            :key="tab.id"
            type="button"
            class="rounded-md px-4 py-3 text-sm font-bold transition"
            :class="activeLoginTab === tab.id ? 'bg-white text-navy-900 shadow-sm' : 'text-slate-500 hover:text-navy-900'"
            @click="activeLoginTab = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>

        <form class="grid gap-5">
          <div class="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p class="text-sm font-bold text-navy-900">{{ activeLogin.heading }}</p>
            <p class="mt-1 text-sm leading-6 text-slate-600">{{ activeLogin.copy }}</p>
          </div>

          <label class="grid gap-2 text-sm font-semibold text-slate-700">
            {{ activeLogin.identifierLabel }}
            <input class="rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" :placeholder="activeLogin.identifierPlaceholder" type="text" />
          </label>

          <label class="grid gap-2 text-sm font-semibold text-slate-700">
            Password
            <input class="rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" placeholder="Enter your password" type="password" />
          </label>

          <div class="flex items-center justify-between text-sm">
            <label class="flex items-center gap-2 text-slate-600">
              <input class="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" type="checkbox" />
              Remember me
            </label>
            <a href="#" class="font-semibold text-emerald-700 hover:text-emerald-800">Forgot password?</a>
          </div>

          <button class="mt-2 rounded-md bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800" type="button" @click="goToPortal">
            {{ activeLogin.buttonLabel }}
          </button>
        </form>
      </div>
    </section>
  </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import ThemeToggle from '../ThemeToggle.vue'
import { currentRoutePath, navigateTo, withBase } from '../../utils/navigation'

const mobileMenuOpen = ref(false)
const loginModalOpen = ref(false)
const activeLoginTab = ref('student')
const openDropdown = ref('')
const currentPath = ref(currentRoutePath())
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Career Opportunities', path: '/opportunities' },
  { label: 'Resources', path: '/resources' },
  { label: 'Events', path: '/events' },
  { label: 'Donations', path: '/donations/online', children: [{ label: 'Donate Online', path: '/donations/online' }, { label: 'Bank Details', path: '/donations/bank-details' }] },
  { label: 'Contact', path: '/contact' },
]
const loginTabs = [
  {
    id: 'student',
    label: 'Student Login',
    heading: 'Student Connect',
    copy: 'Access career opportunities, guidance sessions, resources, and your career profile.',
    identifierLabel: 'Matric Number or Email',
    identifierPlaceholder: 'RUN/2024/0001 or student@run.edu.ng',
    buttonLabel: 'Login as Student',
  },
  {
    id: 'admin',
    label: 'Admin Login',
    heading: 'Admin Portal',
    copy: 'Manage career opportunities, events, resources, student sessions, and centre updates.',
    identifierLabel: 'Admin Email',
    identifierPlaceholder: 'admin@run.edu.ng',
    buttonLabel: 'Login as Admin',
  },
]

const activeLogin = computed(() => loginTabs.find((tab) => tab.id === activeLoginTab.value) ?? loginTabs[0])

const openLoginModal = () => {
  mobileMenuOpen.value = false
  loginModalOpen.value = true
}

const handleRouteChange = () => {
  currentPath.value = currentRoutePath()
}

const isActive = (target) => {
  if (target === '/') return currentPath.value === '/'
  return currentPath.value.startsWith(target)
}

const goTo = (target) => {
  mobileMenuOpen.value = false
  openDropdown.value = ''
  navigateTo(target)
}

const goToPortal = () => {
  const target = activeLoginTab.value === 'admin' ? '/admin' : '/student'
  loginModalOpen.value = false
  navigateTo(target)
}

onMounted(() => {
  window.addEventListener('popstate', handleRouteChange)
})

onBeforeUnmount(() => {
  window.removeEventListener('popstate', handleRouteChange)
})
</script>
