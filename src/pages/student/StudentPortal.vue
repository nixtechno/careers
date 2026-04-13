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
      <aside class="max-h-[calc(100vh-140px)] overflow-hidden rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div class="rounded-lg bg-navy-900 p-5 text-white">
          <div class="flex items-center gap-3">
            <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-navy-900">AO</div>
            <div class="min-w-0">
              <p class="truncate font-black">Amara Okonkwo</p>
              <p class="mt-1 truncate text-xs font-semibold text-slate-300">RUN/2021/CSC/014</p>
              <p class="truncate text-xs text-slate-400">amara@run.edu.ng</p>
            </div>
          </div>

          <div class="mt-5 border-t border-white/10 pt-4">
            <div v-for="stat in networkStats" :key="stat.label">
              <p class="text-2xl font-black">{{ stat.value }}</p>
              <p class="mt-0.5 text-xs font-bold uppercase tracking-wide text-slate-300">{{ stat.label }}</p>
            </div>
          </div>

          <div class="mt-5">
            <div class="flex items-center justify-between text-xs font-semibold text-slate-300">
              <span>Career profile</span>
              <span>78%</span>
            </div>
            <div class="mt-2 h-2 rounded-full bg-white/15">
              <div class="h-2 rounded-full bg-emerald-400" style="width: 78%"></div>
            </div>
          </div>
        </div>

        <p class="mt-6 text-sm font-bold text-slate-500">Student Menu</p>
        <nav class="portal-scroll mt-5 grid max-h-[360px] gap-2 overflow-y-auto pr-1">
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
            <span class="flex min-w-0 flex-1 items-center justify-between gap-3">
              <span class="truncate">{{ item.label }}</span>
              <span
                v-if="item.id === 'notifications' && notificationCount"
                class="flex h-6 min-w-[24px] items-center justify-center rounded-full bg-emerald-100 px-2 text-xs font-black text-emerald-700"
              >
                {{ notificationCount }}
              </span>
            </span>
          </button>
        </nav>
      </aside>

      <div class="grid content-start gap-6">
        <div v-if="false" class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
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

        <div v-if="activePage !== 'feed'">
          <p class="text-sm font-bold uppercase tracking-wide text-emerald-700">{{ currentMenu.label }}</p>
          <h2 class="mt-2 text-3xl font-black text-navy-900">{{ pageTitle }}</h2>
        </div>

        <div v-if="activePage !== 'feed'" class="portal-scroll grid h-[calc(100vh-220px)] min-h-[420px] content-start gap-6 overflow-y-auto">
        <template v-if="activePage === 'dashboard'">
          <div class="grid gap-4 md:grid-cols-3">
            <article v-for="card in overviewCards" :key="card.label" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p class="text-sm font-semibold text-slate-500">{{ card.label }}</p>
              <p class="mt-3 text-3xl font-black text-navy-900">{{ card.value }}</p>
              <p class="mt-2 text-sm text-emerald-700">{{ card.note }}</p>
            </article>
          </div>

          <section class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 class="text-xl font-black text-navy-900">Next best actions</h3>
                <p class="mt-1 text-sm text-slate-500">A quick path through the things that need attention.</p>
              </div>
            </div>
            <div class="mt-5 grid gap-4 md:grid-cols-3">
              <div v-for="step in steps" :key="step" class="rounded-md bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                {{ step }}
              </div>
            </div>
          </section>

          <section class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-black text-navy-900">Latest network updates</h3>
            </div>
            <div class="mt-5 divide-y divide-slate-100">
              <div v-for="item in feedItems.slice(0, 3)" :key="item.title" class="py-4 first:pt-0 last:pb-0">
                <p class="text-xs font-bold uppercase tracking-wide text-emerald-700">{{ item.type }}</p>
                <p class="mt-1 font-black text-navy-900">{{ item.title }}</p>
                <p class="mt-1 text-sm leading-6 text-slate-500">{{ item.copy }}</p>
              </div>
            </div>
          </section>

          <section class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div class="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <h3 class="text-xl font-black text-navy-900">Upcoming events</h3>
                <p class="mt-1 text-sm text-slate-500">Open an event to see the details and preparation notes.</p>
              </div>
              <button class="text-sm font-bold text-emerald-700" type="button" @click="activePage = 'events'">Open calendar</button>
            </div>
            <div class="mt-5 divide-y divide-slate-100">
              <button
                v-for="event in events.slice(0, 3)"
                :key="event.title"
                class="flex w-full items-center justify-between gap-4 py-4 text-left first:pt-0 last:pb-0"
                type="button"
                @click="openEvent(event)"
              >
                <span>
                  <span class="block text-xs font-bold uppercase tracking-wide text-emerald-700">{{ event.type }}</span>
                  <span class="mt-1 block font-black text-navy-900">{{ event.title }}</span>
                  <span class="mt-1 block text-sm text-slate-500">{{ event.date }} • {{ event.time }}</span>
                </span>
                <span class="rounded-md border border-slate-300 px-3 py-2 text-xs font-bold text-navy-900">Details</span>
              </button>
            </div>
          </section>
        </template>

        <template v-else-if="activePage === 'feed'">
          <InfoBanner v-if="feedNotice" variant="success" title="Feed updated" :message="feedNotice" />

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

            <div class="portal-scroll grid h-[calc(100vh-220px)] min-h-[420px] w-full grid-cols-1 overflow-y-auto border border-slate-200 bg-white">
              <article v-for="item in visibleFeedItems" :key="item.title" class="border-b border-slate-200 p-5 transition hover:bg-slate-50">
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

              <div class="p-5 text-center">
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

        <section v-else-if="activePage === 'opportunities'" class="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <div v-if="selectedOpportunity" class="p-6">
            <button class="inline-flex items-center gap-2 text-sm font-bold text-emerald-700" type="button" @click="selectedOpportunity = null">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m6-6-6 6 6 6" />
              </svg>
              Back to opportunities
            </button>

            <div class="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p class="text-sm font-bold uppercase tracking-wide text-emerald-700">{{ selectedOpportunity.type }}</p>
                <h3 class="mt-2 text-3xl font-black text-navy-900">{{ selectedOpportunity.title }}</h3>
                <p class="mt-3 text-base font-semibold text-slate-500">{{ selectedOpportunity.company }} · {{ selectedOpportunity.location }}</p>
              </div>
              <div class="flex h-16 w-16 items-center justify-center rounded-lg text-2xl font-black text-white" :style="{ background: selectedOpportunity.color }">
                {{ selectedOpportunity.company[0] }}
              </div>
            </div>

            <p class="mt-6 max-w-3xl text-base leading-8 text-slate-600">{{ selectedOpportunity.summary }}</p>

            <div class="mt-6 grid gap-4 sm:grid-cols-3">
              <div class="rounded-md bg-slate-50 p-4">
                <p class="text-xs font-bold uppercase tracking-wide text-slate-500">Deadline</p>
                <p class="mt-1 font-black text-navy-900">{{ selectedOpportunity.deadline }}</p>
              </div>
              <div class="rounded-md bg-slate-50 p-4">
                <p class="text-xs font-bold uppercase tracking-wide text-slate-500">Category</p>
                <p class="mt-1 font-black text-navy-900">{{ selectedOpportunity.category }}</p>
              </div>
              <div class="rounded-md bg-slate-50 p-4">
                <p class="text-xs font-bold uppercase tracking-wide text-slate-500">Status</p>
                <p class="mt-1 font-black text-navy-900">{{ isOpportunitySaved(selectedOpportunity) ? 'Saved' : 'Open' }}</p>
              </div>
            </div>

            <div class="mt-8">
              <h4 class="text-xl font-black text-navy-900">Application checklist</h4>
              <div class="mt-4 grid gap-3">
                <div v-for="item in selectedOpportunity.requirements" :key="item" class="flex gap-3 rounded-md bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                  <svg class="mt-1 h-4 w-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.79 6.8-6.79a1 1 0 0 1 1.4 0Z" clip-rule="evenodd" />
                  </svg>
                  <span>{{ item }}</span>
                </div>
              </div>
            </div>

            <div class="mt-8 flex flex-wrap gap-3">
              <button class="rounded-md bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800" type="button">Start Application</button>
              <button class="rounded-md border border-slate-300 px-5 py-3 text-sm font-bold text-navy-900 transition hover:bg-slate-50" type="button" @click="saveOpportunity(selectedOpportunity)">
                {{ isOpportunitySaved(selectedOpportunity) ? 'Saved Opportunity' : 'Save Opportunity' }}
              </button>
              <button class="rounded-md border border-slate-300 px-5 py-3 text-sm font-bold text-navy-900 transition hover:bg-slate-50" type="button" @click="activePage = 'sessions'">Ask for Guidance</button>
            </div>
          </div>

          <template v-else>
          <div class="border-b border-slate-200 bg-slate-50 p-2">
            <div class="grid gap-2 sm:grid-cols-2">
              <button
                v-for="tab in opportunityTabs"
                :key="tab.id"
                class="rounded-md px-4 py-3 text-sm font-bold transition"
                :class="activeOpportunityTab === tab.id ? 'bg-white text-navy-900 shadow-sm' : 'text-slate-500 hover:text-navy-900'"
                type="button"
                @click="activeOpportunityTab = tab.id"
              >
                {{ tab.label }}
              </button>
            </div>
          </div>
          <div class="divide-y divide-slate-100">
            <article v-for="item in currentOpportunities" :key="item.slug" class="flex flex-col gap-4 p-5 transition hover:bg-slate-50 md:flex-row md:items-center md:justify-between">
              <div class="min-w-0">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">{{ item.type }}</span>
                  <span class="text-sm font-semibold text-slate-500">{{ item.company }}</span>
                </div>
                <h3 class="mt-2 text-lg font-black text-navy-900">{{ item.title }}</h3>
                <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{{ item.desc }}</p>
              </div>
              <div class="flex flex-wrap gap-2 md:flex-shrink-0">
                <button class="w-fit rounded-md bg-navy-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-navy-800" type="button" @click="openOpportunity(item)">View Details</button>
                <button class="w-fit rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-navy-900 transition hover:bg-white" type="button" @click="saveOpportunity(item)">
                  {{ isOpportunitySaved(item) ? 'Saved' : 'Save' }}
                </button>
              </div>
            </article>
          </div>
          </template>
        </section>

        <section v-else-if="activePage === 'sessions'" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 class="text-xl font-black text-navy-900">Guidance Sessions</h3>
              <p class="mt-1 text-sm text-slate-500">Book or review career centre appointments.</p>
            </div>
            <button class="rounded-md bg-navy-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-navy-800" type="button" @click="openSessionModal">Book New Session</button>
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

        <section v-else-if="activePage === 'events'" class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div class="flex flex-col justify-between gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-center">
            <div>
              <h3 class="text-xl font-black text-navy-900">{{ activeCalendarMonth.name }} 2026</h3>
              <p class="mt-1 text-sm text-slate-500">Tap a marked date to view event details.</p>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <button class="rounded-md border border-slate-300 px-3 py-2 text-sm font-bold text-navy-900 transition hover:bg-slate-50" type="button" @click="previousMonth">Previous</button>
              <button class="rounded-md border border-slate-300 px-3 py-2 text-sm font-bold text-navy-900 transition hover:bg-slate-50" type="button" @click="nextMonth">Next</button>
              <button class="rounded-md bg-navy-900 px-3 py-2 text-sm font-bold text-white transition hover:bg-navy-800" type="button" @click="eventListOpen = true">View Events</button>
            </div>
          </div>

          <div class="mt-5">
            <div class="grid grid-cols-7 overflow-hidden rounded-lg border border-slate-200 bg-white">
            <div v-for="day in weekDays" :key="day" class="border-b border-slate-200 bg-slate-50 px-2 py-3 text-center text-xs font-bold uppercase tracking-wide text-slate-500">
              {{ day }}
            </div>
            <button
              v-for="day in calendarDays"
              :key="day.key"
              class="min-h-24 border-b border-r border-slate-200 p-2 text-left transition hover:bg-slate-50"
              :class="day.isMuted ? 'bg-slate-50/70 text-slate-300' : 'bg-white text-slate-700'"
              type="button"
              @click="day.event && openEvent(day.event)"
            >
              <span class="text-xs font-bold">{{ day.day }}</span>
              <span v-if="day.event" class="mt-2 block rounded-md bg-navy-900 px-2 py-1 text-xs font-bold leading-5 text-white">
                {{ day.event.title }}
              </span>
            </button>
            </div>
          </div>
        </section>

        <section v-else-if="activePage === 'connections'" class="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <div class="border-b border-slate-200 bg-slate-50 p-2">
            <div class="grid gap-2 sm:grid-cols-2">
              <button
                v-for="tab in connectTabs"
                :key="tab.id"
                class="rounded-md px-4 py-3 text-sm font-bold transition"
                :class="activeConnectTab === tab.id ? 'bg-white text-navy-900 shadow-sm' : 'text-slate-500 hover:text-navy-900'"
                type="button"
                @click="activeConnectTab = tab.id"
              >
                {{ tab.label }}
              </button>
            </div>
          </div>
          <div class="divide-y divide-slate-100">
            <article v-for="connection in currentConnections" :key="connection.name" class="flex flex-col gap-4 p-5 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between">
              <div class="flex items-start gap-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 font-black text-navy-900">{{ connection.initials }}</div>
              <div>
                <h3 class="font-black text-navy-900">{{ connection.name }}</h3>
                <p class="mt-1 text-sm text-slate-500">{{ connection.role }}</p>
                <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{{ connection.copy }}</p>
              </div>
              </div>
              <button class="w-fit rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-navy-900 transition hover:bg-white sm:flex-shrink-0" type="button">{{ activeConnectTab === 'connections' ? 'Message' : 'Connect' }}</button>
            </article>
          </div>
        </section>

        <section v-else-if="activePage === 'notifications'" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div class="grid gap-3">
            <div v-for="notification in notifications" :key="notification.title" class="rounded-md bg-slate-50 p-4">
              <p class="font-bold text-navy-900">{{ notification.title }}</p>
              <p class="mt-1 text-sm text-slate-500">{{ notification.copy }}</p>
            </div>
          </div>
        </section>

        <section v-else-if="activePage === 'profile'" class="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <div class="border-b border-slate-200 bg-slate-50 p-2">
            <div class="grid gap-2 sm:grid-cols-4">
              <button
                v-for="tab in profileTabs"
                :key="tab.id"
                class="rounded-md px-4 py-3 text-sm font-bold transition"
                :class="activeProfileTab === tab.id ? 'bg-white text-navy-900 shadow-sm' : 'text-slate-500 hover:text-navy-900'"
                type="button"
                @click="activeProfileTab = tab.id"
              >
                {{ tab.label }}
              </button>
            </div>
          </div>

          <div v-if="activeProfileTab === 'details'" class="p-6">
            <div class="grid gap-6 lg:grid-cols-[220px_1fr]">
              <div>
                <div class="flex h-40 w-40 items-center justify-center rounded-full bg-slate-100 text-4xl font-black text-navy-900">AO</div>
                <button class="mt-4 rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-navy-900 transition hover:bg-slate-50" type="button">Change Display Image</button>
              </div>
              <form class="grid gap-4">
                <div class="grid gap-4 md:grid-cols-2">
                  <label v-for="field in profileFields" :key="field.label" class="grid gap-2 text-sm font-semibold text-slate-700">
                    {{ field.label }}
                    <input class="rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" :value="field.value" type="text" />
                  </label>
                </div>
                <label class="grid gap-2 text-sm font-semibold text-slate-700">
                  Career Bio
                  <textarea class="min-h-28 rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100">Computer Science student interested in data analytics, product thinking, and internship opportunities.</textarea>
                </label>
                <button class="w-fit rounded-md bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800" type="button">Save Changes</button>
              </form>
            </div>
          </div>

          <div v-else-if="activeProfileTab === 'security'" class="p-6">
            <form class="grid max-w-2xl gap-4">
              <label v-for="field in securityFields" :key="field" class="grid gap-2 text-sm font-semibold text-slate-700">
                {{ field }}
                <input class="rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" type="password" />
              </label>
              <button class="w-fit rounded-md bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800" type="button">Update Password</button>
            </form>
          </div>

          <div v-else-if="activeProfileTab === 'documents'" class="divide-y divide-slate-100">
            <div v-for="document in documents" :key="document.name" class="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p class="font-black text-navy-900">{{ document.name }}</p>
                <p class="mt-1 text-sm text-slate-500">{{ document.status }}</p>
              </div>
              <button class="w-fit rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-navy-900 transition hover:bg-slate-50" type="button">Manage</button>
            </div>
          </div>

          <div v-else class="p-6">
            <div class="grid gap-4 md:grid-cols-2">
              <label v-for="preference in preferences" :key="preference" class="flex items-center justify-between rounded-md bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                {{ preference }}
                <input class="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" type="checkbox" checked />
              </label>
            </div>
          </div>
        </section>

        <EmptyPage v-else icon="dashboard" title="Page not found" copy="Choose another item from the student menu." />
        </div>
      </div>
    </section>
  </main>

  <EventDetailsModal :event="selectedEvent" @close="selectedEvent = null" @register="registerForEvent" />
  <BookSessionModal :open="sessionModalOpen" @close="sessionModalOpen = false" />

  <div v-if="eventListOpen" class="fixed inset-0 z-[115] flex min-h-screen items-center justify-center bg-navy-900/70 px-4 py-8 backdrop-blur-sm" @click.self="eventListOpen = false">
    <section class="w-full max-w-lg overflow-hidden rounded-lg bg-white shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="event-list-title">
      <div class="flex items-start justify-between border-b border-slate-200 px-6 py-5">
        <div>
          <p class="text-xs font-bold uppercase tracking-wide text-emerald-700">Events</p>
          <h2 id="event-list-title" class="mt-1 text-2xl font-black text-navy-900">Scheduled events</h2>
        </div>
        <button class="rounded-full bg-slate-100 p-2 text-slate-500 transition hover:bg-slate-200 hover:text-navy-900" type="button" aria-label="Close events list" @click="eventListOpen = false">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
      <div class="grid gap-3 p-6">
        <button
          v-for="event in events"
          :key="event.title"
          class="overflow-hidden rounded-md border border-slate-200 bg-slate-50 text-left transition hover:bg-white"
          type="button"
          @click="eventListOpen = false; openEvent(event)"
        >
          <img class="h-28 w-full object-cover" :src="event.image" :alt="event.imageAlt" />
          <span class="block p-4">
            <span class="block text-xs font-bold uppercase tracking-wide text-emerald-700">{{ event.date }}</span>
            <span class="mt-1 block font-black text-navy-900">{{ event.title }}</span>
            <span class="mt-1 block text-sm text-slate-500">{{ event.time }} • {{ event.venue }}</span>
          </span>
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import EmptyPage from '../../components/portal/EmptyPage.vue'
import PortalIcon from '../../components/portal/PortalIcon.vue'
import BookSessionModal from '../../components/shared/BookSessionModal.vue'
import EventDetailsModal from '../../components/shared/EventDetailsModal.vue'
import InfoBanner from '../../components/shared/InfoBanner.vue'
import ThemeToggle from '../../components/ThemeToggle.vue'
import { opportunities as marketplaceOpportunities } from '../../data/publicContent'
import { openSessionModal } from '../../utils/sessionModal'
import { withBase } from '../../utils/navigation'

const activePage = ref('dashboard')
const activeConnectTab = ref('people')
const activeOpportunityTab = ref('general')
const activeProfileTab = ref('details')
const menu = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
  // Feed is parked for a later networking rollout.
  // { id: 'feed', label: 'Feed', icon: 'feed' },
  { id: 'connections', label: 'Connect', icon: 'people' },
  { id: 'notifications', label: 'Notifications', icon: 'notifications' },
  { id: 'opportunities', label: 'Opportunities', icon: 'opportunities' },
  { id: 'sessions', label: 'Guidance Sessions', icon: 'sessions' },
  { id: 'resources', label: 'Resources', icon: 'resources' },
  { id: 'events', label: 'Events', icon: 'events' },
  { id: 'profile', label: 'Profile', icon: 'people' },
]
const connectTabs = [
  { id: 'people', label: 'Users on Site' },
  { id: 'connections', label: 'Your Connections' },
]
const opportunityTabs = [
  { id: 'general', label: 'General Opportunities' },
  { id: 'saved', label: 'Saved Opportunities' },
]
const profileTabs = [
  { id: 'details', label: 'Details' },
  { id: 'security', label: 'Security' },
  { id: 'documents', label: 'Documents' },
  { id: 'preferences', label: 'Preferences' },
]
const currentMenu = computed(() => menu.find((item) => item.id === activePage.value) ?? menu[0])
const pageTitle = computed(() => currentMenu.value.label)

const feedLoading = ref(true)
const feedNotice = ref('')
const feedVisibleCount = ref(4)
const selectedEvent = ref(null)
const sessionModalOpen = ref(false)
const selectedOpportunity = ref(null)
const eventListOpen = ref(false)
const activeMonthIndex = ref(0)
const savedOpportunitySlugs = ref(['data-science-intern', 'commonwealth-scholarship'])
const networkStats = [
  { label: 'Connections', value: '248' },
]
const overviewCards = [
  { label: 'Saved Opportunities', value: '12', note: '3 closing this month' },
  { label: 'Booked Sessions', value: '2', note: 'Next session: Friday' },
  { label: 'Unread Notifications', value: '9', note: '2 need action' },
]
const steps = ['Update your CV document', 'Register for the next career workshop', 'Save two opportunities before Friday']
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
const savedOpportunities = computed(() => marketplaceOpportunities.filter((opportunity) => savedOpportunitySlugs.value.includes(opportunity.slug)))
const currentOpportunities = computed(() => activeOpportunityTab.value === 'saved' ? savedOpportunities.value : marketplaceOpportunities)
const sessions = [
  { title: 'CV Review with Career Representative', date: 'Friday, 10:00 AM' },
  { title: 'Scholarship Application Support', date: 'Next Tuesday, 2:00 PM' },
]
const resources = [
  { type: 'Document', title: 'CV & Cover Letter Pack', copy: 'Templates and examples for student applications.' },
  { type: 'Video', title: 'Graduate Interview Guide', copy: 'Recorded tips for preparing employer conversations.' },
  { type: 'Checklist', title: 'Scholarship Application Checklist', copy: 'A step-by-step list for strong scholarship submissions.' },
]
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const calendarMonths = [
  { label: 'Mar', name: 'March', days: 31, offset: 0 },
  { label: 'Apr', name: 'April', days: 30, offset: 3 },
  { label: 'May', name: 'May', days: 31, offset: 5 },
]
const events = [
  {
    day: 15,
    month: 'Mar',
    date: '15 Mar',
    title: 'Tech Conference 2026',
    type: 'Conference',
    time: '10:00 AM',
    venue: 'Main Auditorium',
    copy: 'Meet industry professionals and explore digital career pathways across software, product, and data.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Students attending a technology conference',
    checklist: ['Bring your student ID', 'Prepare a short introduction', 'Save two questions for the panel'],
  },
  {
    day: 22,
    month: 'Apr',
    date: '22 Apr',
    title: 'Career Fair & Workshop',
    type: 'Career Fair',
    time: '11:30 AM',
    venue: 'University Multipurpose Hall',
    copy: 'Connect with recruiters and prepare for internship, scholarship, and graduate applications.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Recruiters speaking with students at a career fair',
    checklist: ['Update your CV', 'Dress professionally', 'Review participating employers'],
  },
  {
    day: 9,
    month: 'May',
    date: '09 May',
    title: 'Entrepreneurship Summit',
    type: 'Summit',
    time: '1:00 PM',
    venue: 'Enterprise Hub',
    copy: 'Learn how students can shape ideas into ventures with mentorship, funding readiness, and market support.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Students listening during an entrepreneurship summit',
    checklist: ['Write down one business idea', 'Bring a notebook', 'Prepare a question for alumni founders'],
  },
]
const activeCalendarMonth = computed(() => calendarMonths[activeMonthIndex.value])
const calendarDays = computed(() => {
  const eventByKey = new Map(events.map((event) => [`${event.month}-${event.day}`, event]))
  const month = activeCalendarMonth.value
  const leading = Array.from({ length: month.offset }, (_, index) => ({
    key: `${month.label}-muted-start-${index}`,
    day: '',
    isMuted: true,
    event: null,
  }))
  const days = Array.from({ length: month.days }, (_, index) => {
    const day = index + 1
    return {
      key: `${month.label}-${day}`,
      day: `${day}`,
      isMuted: false,
      event: eventByKey.get(`${month.label}-${day}`) ?? null,
    }
  })

  return [...leading, ...days]
})
const connections = [
  { initials: 'TA', name: 'Tomi Adewale', role: 'Alumni Mentor • Data Analytics', copy: 'Available for portfolio reviews and internship preparation conversations.' },
  { initials: 'CU', name: 'Chinonso Ude', role: '300 Level • Mass Communication', copy: 'Interested in media internships, event volunteering, and alumni networking.' },
  { initials: 'AB', name: 'Aisha Bello', role: 'Alumni • Scholarship Recipient', copy: 'Shares postgraduate scholarship notes and application planning guidance.' },
  { initials: 'DO', name: 'David Ojo', role: '400 Level • Accounting', copy: 'Preparing for graduate trainee applications and professional certification routes.' },
]
const siteUsers = [
  { initials: 'NK', name: 'Ngozi Kalu', role: '400 Level • Computer Science', copy: 'Interested in software engineering internships and product roles.' },
  { initials: 'IM', name: 'Ibrahim Musa', role: 'Alumni • Product Manager', copy: 'Open to helping students prepare for product and business analyst interviews.' },
  { initials: 'YE', name: 'Yewande Esho', role: '300 Level • Economics', copy: 'Exploring scholarships, development roles, and research internships.' },
  { initials: 'TA', name: 'Tomi Adewale', role: 'Alumni Mentor • Data Analytics', copy: 'Available for portfolio reviews and internship preparation conversations.' },
]
const currentConnections = computed(() => activeConnectTab.value === 'connections' ? connections : siteUsers)
const notifications = [
  { title: 'CV review request received', copy: 'Your document is in the CASEC review queue.' },
  { title: 'Career Fair reminder', copy: 'Registration closes this Friday.' },
  { title: 'New alumni mentor match', copy: 'Tomi Adewale matches your data analytics interest.' },
  { title: 'Scholarship checklist saved', copy: 'You can open it from your resources page.' },
]
const notificationCount = computed(() => Math.min(notifications.length, 99))
const profile = [
  { label: 'Email', value: 'amara@run.edu.ng' },
  { label: 'Department', value: 'Computer Science' },
  { label: 'Career Interest', value: 'Data Analytics' },
  { label: 'CV Status', value: 'Needs final review' },
]
const profileFields = [
  { label: 'Full Name', value: 'Amara Okonkwo' },
  { label: 'Matric Number', value: 'RUN/2021/CSC/014' },
  { label: 'Email', value: 'amara@run.edu.ng' },
  { label: 'Phone Number', value: '+234 800 000 0000' },
  { label: 'Department', value: 'Computer Science' },
  { label: 'Career Interest', value: 'Data Analytics' },
]
const securityFields = ['Current Password', 'New Password', 'Confirm New Password']
const documents = [
  { name: 'Current CV', status: 'Uploaded • Needs final review' },
  { name: 'Cover Letter', status: 'Draft saved' },
  { name: 'Transcript', status: 'Not uploaded' },
]
const preferences = ['Email notifications', 'Opportunity recommendations', 'Alumni connection requests', 'Event reminders']

const handleOpenSessionModal = () => {
  sessionModalOpen.value = true
}

const runFeedAction = (item) => {
  feedNotice.value = `${item.secondaryAction} added for "${item.title}".`
}

const loadMoreFeed = () => {
  feedVisibleCount.value = Math.min(feedVisibleCount.value + 3, feedItems.length)
}

const openEvent = (event) => {
  selectedEvent.value = event
}

const openOpportunity = (opportunity) => {
  selectedOpportunity.value = opportunity
}

const isOpportunitySaved = (opportunity) => savedOpportunitySlugs.value.includes(opportunity.slug)

const saveOpportunity = (opportunity) => {
  if (!isOpportunitySaved(opportunity)) {
    savedOpportunitySlugs.value = [...savedOpportunitySlugs.value, opportunity.slug]
  }
}

const previousMonth = () => {
  activeMonthIndex.value = activeMonthIndex.value === 0 ? calendarMonths.length - 1 : activeMonthIndex.value - 1
}

const nextMonth = () => {
  activeMonthIndex.value = activeMonthIndex.value === calendarMonths.length - 1 ? 0 : activeMonthIndex.value + 1
}

const registerForEvent = (event) => {
  selectedEvent.value = null
  activePage.value = 'notifications'
  notifications.unshift({
    title: `${event.title} registration noted`,
    copy: `Your interest for ${event.date} at ${event.time} has been added to your student record.`,
  })
}

onMounted(() => {
  window.setTimeout(() => {
    feedLoading.value = false
  }, 750)

  window.addEventListener('open-session-modal', handleOpenSessionModal)
})

onBeforeUnmount(() => {
  window.removeEventListener('open-session-modal', handleOpenSessionModal)
})
</script>

<style scoped>
.portal-shimmer {
  animation: portal-shimmer 1.25s ease-in-out infinite;
  background: linear-gradient(90deg, #f1f5f9 0%, #e2e8f0 48%, #f8fafc 100%);
  background-size: 220% 100%;
}

.portal-scroll {
  scrollbar-color: transparent transparent;
  scrollbar-width: thin;
}

.portal-scroll::-webkit-scrollbar {
  height: 0;
  width: 0;
}

.portal-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.portal-scroll::-webkit-scrollbar-thumb {
  background: transparent;
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
