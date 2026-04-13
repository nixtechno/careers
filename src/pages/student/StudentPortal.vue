<template>
  <main class="min-h-screen bg-slate-50 text-slate-900">
    <section class="border-b border-slate-200 bg-white">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <div>
          <p class="text-xs font-bold uppercase tracking-wide text-emerald-700">Student Connect</p>
          <h1 class="mt-1 text-2xl font-black text-navy-900">Welcome back, Amara</h1>
        </div>
        <div class="flex items-center gap-3">
          <ThemeToggle />
          <a class="rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-navy-900 transition hover:bg-slate-50" :href="withBase('/')">
            Back to site
          </a>
        </div>
      </div>
    </section>

    <section class="mx-auto grid max-w-7xl items-start gap-6 px-6 py-10 lg:grid-cols-[280px_1fr] lg:px-8">
      <aside class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="rounded-lg bg-navy-900 p-5 text-white">
          <p class="text-sm text-slate-300">Career profile</p>
          <p class="mt-2 text-3xl font-black">78%</p>
          <div class="mt-4 h-2 rounded-full bg-white/15">
            <div class="h-2 rounded-full bg-emerald-400" style="width: 78%"></div>
          </div>
        </div>

        <p class="mt-6 text-sm font-bold text-slate-500">Student Menu</p>
        <nav class="mt-5 grid gap-2">
          <button
            v-for="item in menu"
            :key="item.id"
            class="flex items-center gap-3 rounded-md px-3 py-3 text-left text-sm font-semibold transition"
            :class="activePage === item.id ? 'bg-navy-900 text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-navy-900'"
            type="button"
            @click="activePage = item.id"
          >
            <span class="flex h-9 w-9 items-center justify-center rounded-full" :class="activePage === item.id ? 'bg-white/10' : 'bg-slate-100 text-navy-900'">
              <PortalIcon :name="item.icon" />
            </span>
            {{ item.label }}
          </button>
        </nav>
      </aside>

      <div class="grid content-start gap-6">
        <div v-if="activePage === 'feed'" class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div class="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
            <div class="flex items-center gap-4">
              <div class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-navy-900 text-xl font-black text-white">AO</div>
              <div>
                <p class="text-sm font-bold uppercase tracking-wide text-emerald-700">Student Feed</p>
                <h2 class="mt-1 text-2xl font-black text-navy-900">Amara Okonkwo</h2>
                <p class="mt-1 text-sm font-semibold text-slate-500">RUN/2021/CSC/014 • amara@run.edu.ng</p>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-3 sm:min-w-[390px]">
              <div v-for="stat in networkStats" :key="stat.label" class="rounded-md bg-slate-50 p-4 text-center">
                <p class="text-2xl font-black text-navy-900">{{ stat.value }}</p>
                <p class="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </div>

        <div v-else>
          <p class="text-sm font-bold uppercase tracking-wide text-emerald-700">{{ currentMenu.label }}</p>
          <h2 class="mt-2 text-3xl font-black text-navy-900">{{ pageTitle }}</h2>
        </div>

        <template v-if="activePage === 'feed'">
          <p v-if="feedNotice" class="rounded-md bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">{{ feedNotice }}</p>

          <div v-if="feedLoading" class="grid gap-4">
            <article v-for="index in 4" :key="index" class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div class="flex items-start gap-4">
                <div class="portal-shimmer h-12 w-12 rounded-full"></div>
                <div class="flex-1">
                  <div class="portal-shimmer h-4 w-40 rounded"></div>
                  <div class="portal-shimmer mt-3 h-3 w-24 rounded"></div>
                  <div class="portal-shimmer mt-6 h-4 w-full rounded"></div>
                  <div class="portal-shimmer mt-3 h-4 w-4/5 rounded"></div>
                  <div class="mt-5 flex gap-2">
                    <div class="portal-shimmer h-8 w-24 rounded-md"></div>
                    <div class="portal-shimmer h-8 w-24 rounded-md"></div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div v-else class="grid gap-4">
            <div class="flex items-center justify-between px-1">
              <div>
                <h3 class="text-lg font-black text-navy-900">Network updates</h3>
              </div>
              <span class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">Live feed</span>
            </div>

            <div class="feed-scroll grid max-h-[680px] gap-5 overflow-y-auto pr-3">
              <article v-for="item in visibleFeedItems" :key="item.title" class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl">
                <div class="flex items-start gap-4">
                  <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-navy-900">
                    <PortalIcon :name="item.icon" />
                  </div>
                  <div class="min-w-0 flex-1">
                    <div class="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                      <div>
                        <p class="text-xs font-bold uppercase tracking-wide text-emerald-700">{{ item.type }}</p>
                        <h3 class="mt-1 text-xl font-black text-navy-900">{{ item.title }}</h3>
                      </div>
                      <span class="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">{{ item.time }}</span>
                    </div>
                    <p class="mt-3 leading-7 text-slate-600">{{ item.copy }}</p>
                    <div class="mt-4 flex flex-wrap gap-2">
                      <span v-for="tag in item.tags" :key="tag" class="rounded-full bg-slate-50 px-3 py-1 text-xs font-bold text-slate-600">{{ tag }}</span>
                    </div>
                    <div class="mt-5 flex flex-wrap gap-3">
                      <button class="rounded-md bg-navy-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-navy-800" type="button" @click="activePage = item.target">
                        {{ item.primaryAction }}
                      </button>
                      <button class="rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-navy-900 transition hover:bg-slate-50" type="button" @click="runFeedAction(item)">
                        {{ item.secondaryAction }}
                      </button>
                    </div>
                  </div>
                </div>
              </article>

              <div class="text-center">
                <button
                  v-if="visibleFeedItems.length < feedItems.length"
                  class="rounded-md border border-slate-300 px-5 py-3 text-sm font-bold text-navy-900 transition hover:bg-slate-50"
                  type="button"
                  @click="loadMoreFeed"
                >
                  Load More
                </button>
                <p v-else class="text-sm font-semibold text-slate-500">You are all caught up.</p>
              </div>
            </div>
          </div>
        </template>

        <section v-else-if="activePage === 'opportunities'" class="grid gap-4 md:grid-cols-2">
          <article v-for="item in opportunities" :key="item.title" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p class="text-xs font-bold uppercase tracking-wide text-emerald-700">{{ item.type }}</p>
            <h3 class="mt-2 text-xl font-black text-navy-900">{{ item.title }}</h3>
            <p class="mt-2 text-sm text-slate-500">{{ item.company }}</p>
            <p class="mt-4 leading-7 text-slate-600">{{ item.copy }}</p>
            <button class="mt-5 rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-navy-900 transition hover:bg-slate-50">Save Opportunity</button>
          </article>
        </section>

        <section v-else-if="activePage === 'sessions'" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 class="text-xl font-black text-navy-900">Guidance Sessions</h3>
              <p class="mt-1 text-sm text-slate-500">Book or review career centre appointments.</p>
            </div>
            <button class="rounded-md bg-navy-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-navy-800">Book New Session</button>
          </div>
          <div class="mt-6 grid gap-4 md:grid-cols-2">
            <div v-for="session in sessions" :key="session.title" class="rounded-md bg-slate-50 p-4">
              <p class="font-bold text-slate-800">{{ session.title }}</p>
              <p class="mt-1 text-sm text-slate-500">{{ session.date }}</p>
            </div>
          </div>
        </section>

        <section v-else-if="activePage === 'resources'" class="grid gap-4 md:grid-cols-3">
          <article v-for="resource in resources" :key="resource.title" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p class="text-xs font-bold uppercase tracking-wide text-emerald-700">{{ resource.type }}</p>
            <h3 class="mt-3 text-lg font-black text-navy-900">{{ resource.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-slate-600">{{ resource.copy }}</p>
          </article>
        </section>

        <section v-else-if="activePage === 'events'" class="grid gap-4 md:grid-cols-2">
          <article v-for="event in events" :key="event.title" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p class="text-sm font-black text-emerald-700">{{ event.date }}</p>
            <h3 class="mt-2 text-xl font-black text-navy-900">{{ event.title }}</h3>
            <p class="mt-3 leading-7 text-slate-600">{{ event.copy }}</p>
          </article>
        </section>

        <section v-else-if="activePage === 'connections'" class="grid gap-4 md:grid-cols-2">
          <article v-for="connection in connections" :key="connection.name" class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div class="flex items-start gap-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 font-black text-navy-900">{{ connection.initials }}</div>
              <div class="flex-1">
                <h3 class="font-black text-navy-900">{{ connection.name }}</h3>
                <p class="mt-1 text-sm text-slate-500">{{ connection.role }}</p>
                <p class="mt-3 text-sm leading-6 text-slate-600">{{ connection.copy }}</p>
                <button class="mt-4 rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-navy-900 transition hover:bg-slate-50" type="button">Message</button>
              </div>
            </div>
          </article>
        </section>

        <section v-else-if="activePage === 'notifications'" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div class="grid gap-3">
            <div v-for="notification in notifications" :key="notification.title" class="rounded-md bg-slate-50 p-4">
              <p class="font-bold text-navy-900">{{ notification.title }}</p>
              <p class="mt-1 text-sm text-slate-500">{{ notification.copy }}</p>
            </div>
          </div>
        </section>

        <section v-else-if="activePage === 'profile'" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div class="grid gap-6 md:grid-cols-[180px_1fr]">
            <div class="flex h-36 w-36 items-center justify-center rounded-full bg-slate-100 text-4xl font-black text-navy-900">AO</div>
            <div>
              <h3 class="text-2xl font-black text-navy-900">Amara Okonkwo</h3>
              <p class="mt-1 text-slate-500">Computer Science, 400 Level</p>
              <div class="mt-6 grid gap-3 md:grid-cols-2">
                <div v-for="item in profile" :key="item.label" class="rounded-md bg-slate-50 p-4">
                  <p class="text-xs font-bold uppercase tracking-wide text-slate-500">{{ item.label }}</p>
                  <p class="mt-1 font-semibold text-slate-800">{{ item.value }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <EmptyPage v-else icon="dashboard" title="Page not found" copy="Choose another item from the student menu." />
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import EmptyPage from '../../components/portal/EmptyPage.vue'
import PortalIcon from '../../components/portal/PortalIcon.vue'
import ThemeToggle from '../../components/ThemeToggle.vue'
import { withBase } from '../../utils/navigation'

const activePage = ref('feed')
const menu = [
  { id: 'feed', label: 'Feed', icon: 'feed' },
  { id: 'connections', label: 'Connections', icon: 'people' },
  { id: 'notifications', label: 'Notifications', icon: 'notifications' },
  { id: 'opportunities', label: 'Opportunities', icon: 'opportunities' },
  { id: 'sessions', label: 'Guidance Sessions', icon: 'sessions' },
  { id: 'resources', label: 'Resources', icon: 'resources' },
  { id: 'events', label: 'Events', icon: 'events' },
  { id: 'profile', label: 'Profile', icon: 'people' },
]
const currentMenu = computed(() => menu.find((item) => item.id === activePage.value) ?? menu[0])
const pageTitle = computed(() => currentMenu.value.label)

const feedLoading = ref(true)
const feedNotice = ref('')
const feedVisibleCount = ref(4)
const networkStats = [
  { label: 'Connections', value: '248' },
  { label: 'Alumni', value: '64' },
  { label: 'Unread', value: '9' },
]
const visibleFeedItems = computed(() => feedItems.slice(0, feedVisibleCount.value))
const feedItems = [
  {
    type: 'Alumni connection',
    title: 'Tomi Adewale is open to mentoring data students',
    copy: 'Tomi works in analytics at a fintech company and is accepting short portfolio review conversations this week.',
    time: '12 min ago',
    tags: ['Data Analytics', 'Mentorship', 'Alumni'],
    icon: 'people',
    target: 'profile',
    primaryAction: 'View Profile',
    secondaryAction: 'Connect',
  },
  {
    type: 'Opportunity',
    title: 'Data Science Intern applications are closing soon',
    copy: 'Access Bank is looking for students with Python, SQL, and analytics interest. CASEC can help review your CV before submission.',
    time: '1 hr ago',
    tags: ['Internship', 'Python', 'Lagos'],
    icon: 'opportunities',
    target: 'opportunities',
    primaryAction: 'Open Opportunity',
    secondaryAction: 'Save',
  },
  {
    type: 'Event',
    title: 'Career Fair & Workshop registration is live',
    copy: 'Meet recruiters, practice your introduction, and learn how to present your profile during employer conversations.',
    time: 'Today',
    tags: ['Career Fair', 'Recruiters', 'Workshop'],
    icon: 'events',
    target: 'events',
    primaryAction: 'View Event',
    secondaryAction: 'Remind Me',
  },
  {
    type: 'Resource',
    title: 'Graduate Interview Guide was added to your library',
    copy: 'A practical guide for preparing answers, asking better questions, and following up after interviews.',
    time: 'Yesterday',
    tags: ['Interview', 'Graduate Role', 'Video'],
    icon: 'resources',
    target: 'resources',
    primaryAction: 'Open Resource',
    secondaryAction: 'Share',
  },
  {
    type: 'Guidance',
    title: 'Book a quick CV review before applying',
    copy: 'The centre has two open guidance slots this week for students applying to internships and scholarships.',
    time: 'Yesterday',
    tags: ['CV Review', 'Guidance', 'Application'],
    icon: 'sessions',
    target: 'sessions',
    primaryAction: 'Book Session',
    secondaryAction: 'See Slots',
  },
  {
    type: 'Connection request',
    title: 'Chinonso Ude wants to connect',
    copy: 'Chinonso is a 300 level Mass Communication student interested in media internships and campus events.',
    time: '2 days ago',
    tags: ['Student', 'Media', 'Connection'],
    icon: 'people',
    target: 'connections',
    primaryAction: 'View Connection',
    secondaryAction: 'Accept',
  },
  {
    type: 'Notification',
    title: 'Your CV review request was received',
    copy: 'A career representative will review your latest CV and share notes before your next application.',
    time: '2 days ago',
    tags: ['CV Review', 'Pending', 'CASEC'],
    icon: 'notifications',
    target: 'notifications',
    primaryAction: 'View Notice',
    secondaryAction: 'Mark Read',
  },
  {
    type: 'Alumni post',
    title: 'Aisha Bello shared a scholarship checklist',
    copy: 'The checklist covers references, transcripts, personal statements, and application timelines for postgraduate study.',
    time: '3 days ago',
    tags: ['Scholarship', 'Checklist', 'Alumni'],
    icon: 'resources',
    target: 'resources',
    primaryAction: 'Open Checklist',
    secondaryAction: 'Save',
  },
  {
    type: 'Group update',
    title: 'Data Analytics Circle has a new discussion',
    copy: 'Students are sharing project ideas, portfolio links, and beginner-friendly datasets for practice.',
    time: '3 days ago',
    tags: ['Group', 'Analytics', 'Portfolio'],
    icon: 'people',
    target: 'connections',
    primaryAction: 'Open Group',
    secondaryAction: 'Join',
  },
]
const opportunities = [
  { type: 'Scholarship', title: 'Aston Ferguson Masters Scholarship', company: 'Aston University', copy: 'Prepare your postgraduate application with centre guidance and scholarship documents.' },
  { type: 'Graduate Role', title: 'Shell Graduate Programme', company: 'Scholarship Region', copy: 'A structured graduate opportunity for students moving into professional work.' },
  { type: 'Internship', title: 'Data Science Intern', company: 'Access Bank', copy: 'Build analytics skills through a practical student internship route.' },
  { type: 'Fellowship', title: 'Policy Innovation Fellow', company: 'NPC Nigeria', copy: 'For graduates interested in leadership, governance, and public policy development.' },
]
const sessions = [
  { title: 'CV Review with Career Representative', date: 'Friday, 10:00 AM' },
  { title: 'Scholarship Application Support', date: 'Next Tuesday, 2:00 PM' },
]
const resources = [
  { type: 'Document', title: 'CV & Cover Letter Pack', copy: 'Templates and examples for student applications.' },
  { type: 'Video', title: 'Graduate Interview Guide', copy: 'Recorded tips for preparing employer conversations.' },
  { type: 'Checklist', title: 'Scholarship Application Checklist', copy: 'A step-by-step list for strong scholarship submissions.' },
]
const events = [
  { date: '15 Mar', title: 'Tech Conference 2025', copy: 'Meet industry professionals and explore digital career pathways.' },
  { date: '22 Apr', title: 'Career Fair & Workshop', copy: 'Connect with recruiters and prepare for internship and graduate applications.' },
]
const connections = [
  { initials: 'TA', name: 'Tomi Adewale', role: 'Alumni Mentor • Data Analytics', copy: 'Available for portfolio reviews and internship preparation conversations.' },
  { initials: 'CU', name: 'Chinonso Ude', role: '300 Level • Mass Communication', copy: 'Interested in media internships, event volunteering, and alumni networking.' },
  { initials: 'AB', name: 'Aisha Bello', role: 'Alumni • Scholarship Recipient', copy: 'Shares postgraduate scholarship notes and application planning guidance.' },
  { initials: 'DO', name: 'David Ojo', role: '400 Level • Accounting', copy: 'Preparing for graduate trainee applications and professional certification routes.' },
]
const notifications = [
  { title: 'CV review request received', copy: 'Your document is in the CASEC review queue.' },
  { title: 'Career Fair reminder', copy: 'Registration closes this Friday.' },
  { title: 'New alumni mentor match', copy: 'Tomi Adewale matches your data analytics interest.' },
  { title: 'Scholarship checklist saved', copy: 'You can open it from your resources page.' },
]
const profile = [
  { label: 'Email', value: 'amara@run.edu.ng' },
  { label: 'Department', value: 'Computer Science' },
  { label: 'Career Interest', value: 'Data Analytics' },
  { label: 'CV Status', value: 'Needs final review' },
]

const runFeedAction = (item) => {
  feedNotice.value = `${item.secondaryAction} added for "${item.title}".`
}

const loadMoreFeed = () => {
  feedVisibleCount.value = Math.min(feedVisibleCount.value + 3, feedItems.length)
}

onMounted(() => {
  window.setTimeout(() => {
    feedLoading.value = false
  }, 750)
})
</script>

<style scoped>
.portal-shimmer {
  animation: portal-shimmer 1.25s ease-in-out infinite;
  background: linear-gradient(90deg, #f1f5f9 0%, #e2e8f0 48%, #f8fafc 100%);
  background-size: 220% 100%;
}

.feed-scroll {
  scrollbar-color: #94a3b8 transparent;
  scrollbar-width: thin;
}

.feed-scroll::-webkit-scrollbar {
  width: 8px;
}

.feed-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.feed-scroll::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 999px;
}

.feed-scroll::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

:global(html.dark) .feed-scroll {
  scrollbar-color: #486273 transparent;
}

:global(html.dark) .feed-scroll::-webkit-scrollbar-thumb {
  background: #334957;
}

:global(html.dark) .feed-scroll::-webkit-scrollbar-thumb:hover {
  background: #486273;
}

:global(html.dark) .portal-shimmer {
  background: linear-gradient(90deg, #102331 0%, #1f3442 48%, #102331 100%);
  background-size: 220% 100%;
}

@keyframes portal-shimmer {
  0% {
    background-position: 120% 0;
  }

  100% {
    background-position: -120% 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .portal-shimmer {
    animation: none;
  }
}
</style>
