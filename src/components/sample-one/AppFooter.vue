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
            <li v-for="item in group.items" :key="item.label">
              <button v-if="item.action === 'session'" class="text-left transition hover:text-navy-900" type="button" @click="openSessionModal">{{ item.label }}</button>
              <a v-else class="transition hover:text-navy-900" :href="withBase(item.path)" @click.prevent="navigateTo(item.path)">{{ item.label }}</a>
            </li>
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
import { navigateTo, withBase } from '../../utils/navigation'
import { openSessionModal } from '../../utils/sessionModal'

const groups = [
  { title: 'Centre', items: [{ label: 'About CASEC', path: '/' }, { label: 'Career Opportunities', path: '/opportunities' }, { label: 'Book a Session', path: '/student', action: 'session' }] },
  { title: 'Resources', items: [{ label: 'Documents', path: '/resources' }, { label: 'Videos', path: '/resources' }, { label: 'Events', path: '/events' }] },
  { title: 'Connect', items: [{ label: 'Student Connect', path: '/student' }, { label: 'Employer Partners', path: '/contact' }, { label: 'Contact Us', path: '/contact' }] },
]
</script>
