<template>
  <component :is="iconComponent" class="h-5 w-5" aria-hidden="true" />
</template>

<script setup>
import { computed } from 'vue'
import {
  AcademicCapIcon,
  ArrowTrendingUpIcon,
  BellIcon,
  BookOpenIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  ChartBarSquareIcon,
  ClockIcon,
  Cog6ToothIcon,
  DocumentChartBarIcon,
  DocumentTextIcon,
  HomeIcon,
  InboxStackIcon,
  KeyIcon,
  RectangleGroupIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  UserCircleIcon,
  UserGroupIcon,
} from '@heroicons/vue/24/outline'

const props = defineProps({
  name: {
    type: String,
    default: 'dashboard',
  },
})

const icons = {
  dashboard: RectangleGroupIcon,
  feed: InboxStackIcon,
  opportunities: BriefcaseIcon,
  events: CalendarDaysIcon,
  resources: BookOpenIcon,
  sessions: ClockIcon,
  people: UserGroupIcon,
  notifications: BellIcon,
  records: DocumentTextIcon,
  integrations: ServerStackIcon,
  recommendations: ArrowTrendingUpIcon,
  reports: DocumentChartBarIcon,
  profile: UserCircleIcon,
  security: ShieldCheckIcon,
  settings: Cog6ToothIcon,
  students: AcademicCapIcon,
  api: KeyIcon,
  chart: ChartBarSquareIcon,
}

const iconComponent = computed(() => icons[props.name] ?? HomeIcon)
</script>
