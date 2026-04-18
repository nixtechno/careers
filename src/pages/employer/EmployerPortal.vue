<template>
  <PortalShell
    brand="TalentBridge HR"
    label="Employer workspace"
    initials="TB"
    eyebrow="Employer Portal"
    title="Talent Pipeline"
    :page-label="currentMenu.label"
    :page-title="pageTitle"
    profile-name="TalentBridge HR"
    profile-role="Employer Partner"
    search-placeholder="Search candidates, roles, applications..."
  >
    <template #sidebar>
        <div class="rounded-lg bg-navy-900 p-5 text-white">
          <p class="text-xs font-bold uppercase tracking-wide text-emerald-300">Partner Company</p>
          <h2 class="mt-2 text-xl font-black">TalentBridge HR</h2>
          <p class="mt-2 text-sm leading-6 text-slate-300">Hiring interns and graduate analysts across product, data, and finance.</p>
        </div>

        <p class="mt-6 px-3 text-xs font-black uppercase tracking-wide text-emerald-200/70">Employer Menu</p>
        <nav class="mt-4 grid gap-1.5">
          <button
            v-for="item in menu"
            :key="item.id"
            class="group relative flex items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-semibold transition"
            :class="activePage === item.id ? 'bg-white text-navy-900 shadow-lg shadow-black/10' : 'text-slate-300 hover:bg-white/10 hover:text-white'"
            type="button"
            @click="activePage = item.id"
          >
            <span v-if="activePage === item.id" class="absolute -left-3 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-emerald-400"></span>
            <span class="flex h-9 w-9 items-center justify-center rounded-lg transition" :class="activePage === item.id ? 'bg-emerald-50 text-emerald-700' : 'bg-white/10 text-slate-200 group-hover:bg-white/15'">
              <PortalIcon :name="item.icon" />
            </span>
            {{ item.label }}
          </button>
        </nav>
    </template>

        <template v-if="activePage === 'dashboard'">
          <div class="grid gap-4 md:grid-cols-3">
            <article v-for="stat in stats" :key="stat.label" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p class="text-sm font-semibold text-slate-500">{{ stat.label }}</p>
              <p class="mt-3 text-3xl font-black text-navy-900">{{ stat.value }}</p>
              <p class="mt-2 text-sm text-emerald-700">{{ stat.note }}</p>
            </article>
          </div>

          <section class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 class="text-xl font-black text-navy-900">Recommended candidates</h3>
                <p class="mt-1 text-sm text-slate-500">AI-ranked student profiles based on role fit, academic signals, and declared interests.</p>
              </div>
              <button class="rounded-md bg-navy-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-navy-800" type="button" @click="activePage = 'candidates'">Review Matches</button>
            </div>

            <div class="mt-6 divide-y divide-slate-100">
              <article v-for="candidate in candidates.slice(0, 3)" :key="candidate.name" class="flex flex-col gap-4 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between">
                <div class="flex items-start gap-4">
                  <div class="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 font-black text-navy-900">{{ candidate.initials }}</div>
                  <div>
                    <h4 class="font-black text-navy-900">{{ candidate.name }}</h4>
                    <p class="mt-1 text-sm text-slate-500">{{ candidate.programme }}</p>
                    <p class="mt-2 text-sm leading-6 text-slate-600">{{ candidate.match }}</p>
                  </div>
                </div>
                <span class="w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">{{ candidate.score }} fit</span>
              </article>
            </div>
          </section>
        </template>

        <template v-else-if="activePage === 'roles'">
          <div class="grid gap-4 md:grid-cols-4">
            <article v-for="stat in roleStats" :key="stat.label" class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <p class="text-sm font-semibold text-slate-500">{{ stat.label }}</p>
              <p class="mt-3 text-2xl font-black text-navy-900">{{ stat.value }}</p>
              <p class="mt-2 text-xs font-bold text-emerald-700">{{ stat.note }}</p>
            </article>
          </div>

          <section class="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
            <div class="flex flex-wrap gap-2">
              <button
                v-for="tab in roleTabs"
                :key="tab.id"
                class="rounded-md px-4 py-2 text-sm font-black transition"
                :class="activeRoleTab === tab.id ? 'bg-navy-900 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-navy-900'"
                type="button"
                @click="activeRoleTab = tab.id"
              >
                {{ tab.label }}
              </button>
            </div>
          </section>

          <section class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div>
                <h3 class="text-xl font-black text-navy-900">Posted roles</h3>
                <p class="mt-1 text-sm text-slate-500">Manage internships, graduate roles, fellowships, and campus hiring campaigns.</p>
              </div>
              <button class="rounded-md bg-navy-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-navy-800" type="button" @click="roleModalOpen = true">Post New Role</button>
            </div>

            <div class="mt-6 divide-y divide-slate-100 rounded-lg border border-slate-200">
              <div v-for="role in currentRoles" :key="role.title" class="grid gap-4 p-5 lg:grid-cols-[1fr_140px_120px] lg:items-center">
                <div>
                  <p class="font-black text-navy-900">{{ role.title }}</p>
                  <p class="mt-1 text-sm text-slate-500">{{ role.type }} · {{ role.school }}</p>
                  <p class="mt-2 text-sm leading-6 text-slate-600">{{ role.copy }}</p>
                </div>
                <p class="text-sm font-bold text-slate-500">{{ role.deadline }}</p>
                <span class="w-fit rounded-full px-3 py-1 text-xs font-bold" :class="role.statusClass">{{ role.status }}</span>
              </div>
            </div>
          </section>
        </template>

        <template v-else-if="activePage === 'candidates'">
          <template v-if="selectedCandidate">
            <section class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <button class="inline-flex items-center gap-2 text-sm font-bold text-emerald-700" type="button" @click="selectedCandidate = null">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m6-6-6 6 6 6" />
                </svg>
                Back to matches
              </button>

              <div class="mt-6 grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
                <aside class="rounded-lg bg-slate-50 p-6">
                  <div class="flex items-center gap-4">
                    <div class="flex h-16 w-16 items-center justify-center rounded-full bg-white text-xl font-black text-navy-900">{{ selectedCandidate.initials }}</div>
                    <div>
                      <h3 class="text-2xl font-black text-navy-900">{{ selectedCandidate.name }}</h3>
                      <p class="mt-1 text-sm font-semibold text-slate-500">{{ selectedCandidate.programme }}</p>
                    </div>
                  </div>

                  <div class="mt-6 grid gap-3 text-sm">
                    <p class="flex justify-between gap-3"><span class="font-bold text-slate-500">Match Score</span><span class="font-black text-navy-900">{{ selectedCandidate.score }}</span></p>
                    <p class="flex justify-between gap-3"><span class="font-bold text-slate-500">Location</span><span class="font-black text-navy-900">{{ selectedCandidate.location }}</span></p>
                    <p class="flex justify-between gap-3"><span class="font-bold text-slate-500">Availability</span><span class="font-black text-navy-900">{{ selectedCandidate.availability }}</span></p>
                    <p class="flex justify-between gap-3"><span class="font-bold text-slate-500">CV</span><span class="font-black text-navy-900">{{ selectedCandidate.cvStatus }}</span></p>
                  </div>

                  <div class="mt-6">
                    <p class="text-xs font-black uppercase tracking-wide text-slate-500">Key Skills</p>
                    <div class="mt-3 flex flex-wrap gap-2">
                      <span v-for="skill in selectedCandidate.skills" :key="skill" class="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600">{{ skill }}</span>
                    </div>
                  </div>
                </aside>

                <div class="grid gap-6">
                  <section class="rounded-lg border border-slate-200 p-5">
                    <div class="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                      <div>
                        <p class="text-sm font-bold uppercase tracking-wide text-emerald-700">Fit summary</p>
                        <h3 class="mt-2 text-2xl font-black text-navy-900">Why this candidate matches</h3>
                        <p class="mt-2 text-sm leading-6 text-slate-500">{{ selectedCandidate.match }}</p>
                      </div>
                      <span class="w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">{{ selectedCandidate.score }} fit</span>
                    </div>
                  </section>

                  <section class="rounded-lg border border-slate-200 p-5">
                    <h3 class="text-xl font-black text-navy-900">Fit reasons</h3>
                    <div class="mt-5 grid gap-3">
                      <div v-for="item in selectedCandidate.reasons" :key="item" class="flex gap-3 rounded-md bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                        <svg class="mt-1 h-4 w-4 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.79 6.8-6.79a1 1 0 0 1 1.4 0Z" clip-rule="evenodd" />
                        </svg>
                        <span>{{ item }}</span>
                      </div>
                    </div>
                  </section>

                  <section class="rounded-lg border border-slate-200 p-5">
                    <h3 class="text-xl font-black text-navy-900">Documents and readiness</h3>
                    <div class="mt-5 grid gap-4 md:grid-cols-3">
                      <div v-for="item in selectedCandidate.readiness" :key="item.label" class="rounded-md bg-slate-50 p-4">
                        <p class="text-xs font-black uppercase tracking-wide text-slate-500">{{ item.label }}</p>
                        <p class="mt-2 text-lg font-black text-navy-900">{{ item.value }}</p>
                        <p class="mt-1 text-xs font-bold text-emerald-700">{{ item.note }}</p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </section>
          </template>

          <template v-else>
            <div class="divide-y divide-slate-100 rounded-lg border border-slate-200 bg-white">
              <article v-for="candidate in candidates" :key="candidate.name" class="grid gap-4 p-5 lg:grid-cols-[1fr_120px_130px] lg:items-center">
                <div class="flex items-start gap-4">
                  <div class="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 font-black text-navy-900">{{ candidate.initials }}</div>
                  <div>
                    <h4 class="font-black text-navy-900">{{ candidate.name }}</h4>
                    <p class="mt-1 text-sm text-slate-500">{{ candidate.programme }}</p>
                    <p class="mt-2 text-sm leading-6 text-slate-600">{{ candidate.match }}</p>
                  </div>
                </div>
                <span class="w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">{{ candidate.score }} fit</span>
                <button class="w-fit rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-navy-900 transition hover:bg-slate-50" type="button" @click="selectedCandidate = candidate">View Details</button>
              </article>
            </div>
          </template>
        </template>

        <section v-else-if="activePage === 'applications'" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div class="grid gap-3">
            <div v-for="application in applications" :key="application.name" class="rounded-md bg-slate-50 p-4">
              <p class="font-black text-navy-900">{{ application.name }}</p>
              <p class="mt-1 text-sm text-slate-500">{{ application.role }} ? {{ application.status }}</p>
            </div>
          </div>
        </section>

        <template v-else-if="activePage === 'settings'">
          <section class="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
            <div class="flex flex-wrap gap-2">
              <button
                v-for="tab in settingsTabs"
                :key="tab.id"
                class="rounded-md px-4 py-2 text-sm font-black transition"
                :class="activeSettingsTab === tab.id ? 'bg-navy-900 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-navy-900'"
                type="button"
                @click="activeSettingsTab = tab.id"
              >
                {{ tab.label }}
              </button>
            </div>
          </section>

          <section class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <template v-if="activeSettingsTab === 'company'">
              <div class="grid gap-6 xl:grid-cols-[240px_1fr]">
                <div class="rounded-lg bg-slate-50 p-5">
                  <div class="flex h-24 w-24 items-center justify-center rounded-full bg-white text-2xl font-black text-navy-900">TB</div>
                  <button class="mt-4 rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-navy-900 transition hover:bg-white" type="button">Change Logo</button>
                  <div class="mt-5 grid gap-3 text-sm">
                    <p class="flex justify-between gap-3"><span class="font-bold text-slate-500">Company</span><span class="font-black text-navy-900">TalentBridge HR</span></p>
                    <p class="flex justify-between gap-3"><span class="font-bold text-slate-500">Industry</span><span class="font-black text-navy-900">Recruitment</span></p>
                    <p class="flex justify-between gap-3"><span class="font-bold text-slate-500">HQ</span><span class="font-black text-navy-900">Lagos</span></p>
                  </div>
                </div>
                <form class="grid gap-4">
                  <div class="grid gap-4 md:grid-cols-2">
                    <label v-for="field in employerInfoFields" :key="field.label" class="grid gap-2 text-sm font-semibold text-slate-700">
                      {{ field.label }}
                      <input class="rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" :value="field.value" type="text" />
                    </label>
                  </div>
                  <label class="grid gap-2 text-sm font-semibold text-slate-700">
                    Company Description
                    <textarea class="min-h-32 rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100">TalentBridge HR hires interns and graduate talent across analytics, product operations, finance, and business support functions.</textarea>
                  </label>
                  <button class="w-fit rounded-md bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800" type="button">Save Company Info</button>
                </form>
              </div>
            </template>

            <template v-else-if="activeSettingsTab === 'hiring'">
              <h3 class="text-xl font-black text-navy-900">Hiring preferences</h3>
              <p class="mt-1 text-sm text-slate-500">Control the schools, levels, and candidate signals used in your employer matches.</p>
              <div class="mt-6 grid gap-4 md:grid-cols-2">
                <label v-for="item in hiringPreferences" :key="item.label" class="grid gap-2 text-sm font-semibold text-slate-700">
                  {{ item.label }}
                  <input class="rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" :value="item.value" type="text" />
                </label>
              </div>
            </template>

            <template v-else>
              <h3 class="text-xl font-black text-navy-900">Access and notifications</h3>
              <p class="mt-1 text-sm text-slate-500">Manage employer team access and the updates you want to receive from the platform.</p>
              <div class="mt-6 grid gap-4 md:grid-cols-2">
                <div v-for="item in employerAccess" :key="item.title" class="rounded-lg bg-slate-50 p-5">
                  <p class="font-black text-navy-900">{{ item.title }}</p>
                  <p class="mt-2 text-sm leading-6 text-slate-500">{{ item.copy }}</p>
                </div>
              </div>
              <div class="mt-6 grid gap-4 md:grid-cols-2">
                <label v-for="item in employerNotifications" :key="item" class="flex items-center justify-between rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700">
                  {{ item }}
                  <input class="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" type="checkbox" checked />
                </label>
              </div>
            </template>
          </section>
        </template>

        <section v-else class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div class="flex flex-col justify-between gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-center">
            <div>
              <h3 class="text-xl font-black text-navy-900">{{ activeCalendarMonth.name }} 2026</h3>
              <p class="mt-1 text-sm text-slate-500">Open a marked date to review employer talks, screening days, and partner campus events.</p>
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
  </PortalShell>

  <EventDetailsModal :event="selectedEvent" @close="selectedEvent = null" @register="handleEmployerEventInterest" />

  <div v-if="eventListOpen" class="fixed inset-0 z-[115] flex min-h-screen items-center justify-center bg-navy-900/70 px-4 py-8 backdrop-blur-sm" @click.self="eventListOpen = false">
    <section class="w-full max-w-lg overflow-hidden rounded-lg bg-white shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="employer-event-list-title">
      <div class="flex items-start justify-between border-b border-slate-200 px-6 py-5">
        <div>
          <p class="text-xs font-bold uppercase tracking-wide text-emerald-700">Campus Events</p>
          <h2 id="employer-event-list-title" class="mt-1 text-2xl font-black text-navy-900">Scheduled events</h2>
        </div>
        <button class="rounded-full bg-slate-100 p-2 text-slate-500 transition hover:bg-slate-200 hover:text-navy-900" type="button" aria-label="Close events list" @click="eventListOpen = false">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
      <div class="grid gap-3 p-6">
        <button
          v-for="event in campusEvents"
          :key="event.title"
          class="overflow-hidden rounded-md border border-slate-200 bg-slate-50 text-left transition hover:bg-white"
          type="button"
          @click="eventListOpen = false; openEvent(event)"
        >
          <img class="h-28 w-full object-cover" :src="event.image" :alt="event.imageAlt" />
          <span class="block p-4">
            <span class="block text-xs font-bold uppercase tracking-wide text-emerald-700">{{ event.date }}</span>
            <span class="mt-1 block font-black text-navy-900">{{ event.title }}</span>
            <span class="mt-1 block text-sm text-slate-500">{{ event.time }} · {{ event.venue }}</span>
          </span>
        </button>
      </div>
    </section>
  </div>


  <div v-if="roleModalOpen" class="fixed inset-0 z-[120] flex min-h-screen items-center justify-center bg-navy-900/70 px-4 py-8 backdrop-blur-sm" @click.self="roleModalOpen = false">
    <section class="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="role-modal-title">
      <div class="flex items-start justify-between border-b border-slate-200 px-6 py-5">
        <div>
          <p class="text-xs font-bold uppercase tracking-wide text-emerald-700">Employer Portal</p>
          <h2 id="role-modal-title" class="mt-1 text-2xl font-black text-navy-900">Post a new role</h2>
        </div>
        <button class="rounded-full bg-slate-100 p-2 text-slate-500 transition hover:bg-slate-200 hover:text-navy-900" type="button" aria-label="Close role modal" @click="roleModalOpen = false">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>

      <div class="grid gap-6 p-6 sm:p-8">
        <div class="grid gap-4 md:grid-cols-2">
          <label v-for="field in roleFormFields" :key="field.label" class="grid gap-2 text-sm font-semibold text-slate-700">
            {{ field.label }}
            <input v-if="field.type !== 'select'" class="rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" :placeholder="field.placeholder" :type="field.type" />
            <select v-else class="rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100">
              <option>{{ field.placeholder }}</option>
              <option v-for="option in field.options" :key="option">{{ option }}</option>
            </select>
          </label>
        </div>

        <label class="grid gap-2 text-sm font-semibold text-slate-700">
          Role Summary
          <textarea class="min-h-32 rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" placeholder="Describe the role, team, expectations, and who should apply."></textarea>
        </label>

        <div class="grid gap-4 md:grid-cols-2">
          <label class="grid gap-2 text-sm font-semibold text-slate-700">
            Key Requirements
            <textarea class="min-h-28 rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" placeholder="Degree discipline, skills, tools, or experience requirements."></textarea>
          </label>
          <label class="grid gap-2 text-sm font-semibold text-slate-700">
            Application Instructions
            <textarea class="min-h-28 rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" placeholder="How students should apply, required documents, and deadlines."></textarea>
          </label>
        </div>

        <div class="flex flex-wrap justify-end gap-3">
          <button class="rounded-md border border-slate-300 px-5 py-3 text-sm font-bold text-navy-900 transition hover:bg-slate-50" type="button" @click="roleModalOpen = false">Save as Draft</button>
          <button class="rounded-md bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800" type="button" @click="roleModalOpen = false">Publish Role</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import EventDetailsModal from '../../components/shared/EventDetailsModal.vue'
import PortalIcon from '../../components/portal/PortalIcon.vue'
import PortalShell from '../../components/portal/PortalShell.vue'

const activePage = ref('dashboard')
const activeRoleTab = ref('active')
const roleModalOpen = ref(false)
const selectedCandidate = ref(null)
const selectedEvent = ref(null)
const eventListOpen = ref(false)
const activeMonthIndex = ref(0)
const activeSettingsTab = ref('company')

const menu = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
  { id: 'roles', label: 'Posted Roles', icon: 'opportunities' },
  { id: 'candidates', label: 'Candidate Matches', icon: 'people' },
  { id: 'applications', label: 'Applications', icon: 'resources' },
  { id: 'settings', label: 'Settings', icon: 'settings' },
  { id: 'events', label: 'Campus Events', icon: 'events' },
]

const currentMenu = computed(() => menu.find((item) => item.id === activePage.value) ?? menu[0])
const pageTitle = computed(() => currentMenu.value.label === 'Dashboard' ? 'Employer Overview' : currentMenu.value.label)
const roleTabs = [
  { id: 'active', label: 'Active' },
  { id: 'reviewing', label: 'Reviewing' },
  { id: 'draft', label: 'Drafts' },
]
const settingsTabs = [
  { id: 'company', label: 'Company' },
  { id: 'hiring', label: 'Hiring' },
  { id: 'access', label: 'Access' },
]
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const calendarMonths = [
  { label: 'Mar', name: 'March', days: 31, offset: 0 },
  { label: 'Apr', name: 'April', days: 30, offset: 3 },
  { label: 'May', name: 'May', days: 31, offset: 5 },
]
const currentRoles = computed(() => {
  if (activeRoleTab.value === 'reviewing') return roles.filter((role) => role.status === 'Reviewing')
  if (activeRoleTab.value === 'draft') return roles.filter((role) => role.status === 'Draft')
  return roles.filter((role) => role.status === 'Active')
})
const activeCalendarMonth = computed(() => calendarMonths[activeMonthIndex.value])
const calendarDays = computed(() => {
  const eventByKey = new Map(campusEvents.map((event) => [`${event.month}-${event.day}`, event]))
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

const stats = [
  { label: 'Matched Students', value: '48', note: '12 strong matches' },
  { label: 'Active Roles', value: '7', note: '3 closing this month' },
  { label: 'Applications', value: '126', note: '22 shortlisted' },
]

const roleStats = [
  { label: 'Active Roles', value: '3', note: '2 closing this month' },
  { label: 'Draft Roles', value: '1', note: 'Ready to publish' },
  { label: 'Applications', value: '126', note: '22 shortlisted' },
  { label: 'Matched Schools', value: '4', note: 'Across partner campuses' },
]

const candidates = [
  {
    initials: 'AO',
    name: 'Amara Okonkwo',
    programme: 'Computer Science - 400 Level',
    score: '92%',
    location: 'Lagos',
    availability: 'Immediate',
    cvStatus: 'Uploaded',
    skills: ['SQL', 'Python', 'Excel', 'Data Visualisation'],
    match: 'Strong in analytics, SQL, and Python with improving final-year performance.',
    reasons: [
      'Strong academic performance in quantitative and technical courses.',
      'Skill profile lines up with entry-level analytics role requirements.',
      'CV and profile are complete enough for shortlist review.',
    ],
    readiness: [
      { label: 'CV Status', value: 'Ready', note: 'Uploaded and reviewed' },
      { label: 'Academic Fit', value: 'High', note: 'Strong analytics signal' },
      { label: 'Interview Readiness', value: 'Medium', note: 'Would benefit from practice' },
    ],
  },
  {
    initials: 'DO',
    name: 'David Ojo',
    programme: 'Accounting - 400 Level',
    score: '86%',
    location: 'Ogun State',
    availability: '2 weeks',
    cvStatus: 'Uploaded',
    skills: ['Financial Reporting', 'Excel', 'Audit', 'Analysis'],
    match: 'Good fit for finance trainee roles with audit coursework and certification interest.',
    reasons: [
      'Coursework suggests a strong fit for finance and advisory tracks.',
      'Profile shows clear interest in graduate trainee programmes.',
      'Academic record supports shortlist review for structured roles.',
    ],
    readiness: [
      { label: 'CV Status', value: 'Ready', note: 'Suitable for review' },
      { label: 'Academic Fit', value: 'High', note: 'Finance track aligned' },
      { label: 'Interview Readiness', value: 'High', note: 'Prepared for screening' },
    ],
  },
  {
    initials: 'YE',
    name: 'Yewande Esho',
    programme: 'Economics - 300 Level',
    score: '81%',
    location: 'Ibadan',
    availability: 'Next session',
    cvStatus: 'Needs update',
    skills: ['Research', 'Writing', 'Policy Analysis', 'Presentations'],
    match: 'Recommended for research, policy, and analyst internships.',
    reasons: [
      'Strong writing and research orientation visible from profile interests.',
      'Academic direction supports analyst and policy internship roles.',
      'Would improve with a stronger CV and project examples.',
    ],
    readiness: [
      { label: 'CV Status', value: 'Update Needed', note: 'Needs refreshed version' },
      { label: 'Academic Fit', value: 'Good', note: 'Research-aligned' },
      { label: 'Interview Readiness', value: 'Medium', note: 'Needs prep support' },
    ],
  },
  {
    initials: 'NK',
    name: 'Ngozi Kalu',
    programme: 'Computer Science - 400 Level',
    score: '78%',
    location: 'Abuja',
    availability: 'Immediate',
    cvStatus: 'Uploaded',
    skills: ['Product Support', 'Documentation', 'Testing', 'Communication'],
    match: 'Recommended for junior product and software support roles.',
    reasons: [
      'Best fit is operational and support-oriented technical roles.',
      'Profile shows enough communication strength for customer-facing work.',
      'Portfolio depth is still limited, so fit is moderate rather than strong.',
    ],
    readiness: [
      { label: 'CV Status', value: 'Ready', note: 'Uploaded' },
      { label: 'Academic Fit', value: 'Moderate', note: 'Support role aligned' },
      { label: 'Interview Readiness', value: 'Medium', note: 'Needs confidence boost' },
    ],
  },
]

const roles = [
  { title: 'Graduate Data Analyst', type: 'Graduate Role', school: 'RUN CASEC', deadline: 'Closes May 20', status: 'Active', statusClass: 'bg-emerald-50 text-emerald-700', copy: 'Entry-level analytics role for final-year and recent graduates with SQL, spreadsheet, and data storytelling interest.' },
  { title: 'Product Operations Intern', type: 'Internship', school: 'RUN CASEC', deadline: 'Closes May 14', status: 'Reviewing', statusClass: 'bg-amber-50 text-amber-700', copy: 'Structured internship supporting product reporting, user feedback tracking, and operational process improvement.' },
  { title: 'Finance Graduate Trainee', type: 'Graduate Role', school: 'All Schools', deadline: 'Draft', status: 'Draft', statusClass: 'bg-slate-100 text-slate-700', copy: 'Graduate trainee intake for finance, reporting, and internal control support across business units.' },
  { title: 'Research and Insight Associate', type: 'Analyst Role', school: 'All Schools', deadline: 'Closes May 28', status: 'Active', statusClass: 'bg-emerald-50 text-emerald-700', copy: 'Ideal for economics and social science candidates with strong writing, analysis, and presentation skills.' },
]

const roleFormFields = [
  { label: 'Role Title', type: 'text', placeholder: 'Graduate Data Analyst' },
  { label: 'Role Type', type: 'select', placeholder: 'Select role type', options: ['Internship', 'Graduate Role', 'Analyst Role', 'Fellowship'] },
  { label: 'Location', type: 'text', placeholder: 'Lagos, Nigeria' },
  { label: 'Application Deadline', type: 'text', placeholder: 'May 30, 2026' },
  { label: 'School Scope', type: 'select', placeholder: 'Select school scope', options: ['RUN CASEC', 'All Schools', 'Specific Partner Schools'] },
  { label: 'Work Mode', type: 'select', placeholder: 'Select work mode', options: ['On-site', 'Hybrid', 'Remote'] },
]

const employerInfoFields = [
  { label: 'Company Name', value: 'TalentBridge HR' },
  { label: 'Contact Email', value: 'talent@talentbridgehr.com' },
  { label: 'Contact Phone', value: '+234 800 000 1000' },
  { label: 'Website', value: 'www.talentbridgehr.com' },
  { label: 'Head Office', value: 'Lagos, Nigeria' },
  { label: 'Primary Hiring Focus', value: 'Analytics and Graduate Roles' },
]

const hiringPreferences = [
  { label: 'Preferred School Scope', value: 'All Partner Schools' },
  { label: 'Target Student Level', value: 'Final Year and Graduates' },
  { label: 'Top Skills to Prioritise', value: 'SQL, Excel, Analysis, Communication' },
  { label: 'Work Mode Default', value: 'Hybrid' },
]

const employerAccess = [
  { title: 'Recruiter access', copy: 'Invite internal recruiters and assign them to candidate review, applications, and event planning.' },
  { title: 'Approval flow', copy: 'Choose who can publish roles, shortlist candidates, and confirm campus recruitment events.' },
]

const employerNotifications = [
  'New candidate matches',
  'Application updates',
  'Campus event reminders',
  'Role closing reminders',
]

const applications = [
  { name: 'Amara Okonkwo', role: 'Graduate Data Analyst', status: 'Shortlisted' },
  { name: 'David Ojo', role: 'Finance Graduate Trainee', status: 'Under Review' },
  { name: 'Yewande Esho', role: 'Policy Research Intern', status: 'Interview Invite' },
]

const campusEvents = [
  {
    day: 12,
    month: 'Mar',
    date: '12 Mar',
    title: 'Employer Talk: Data Careers',
    type: 'Employer Talk',
    time: '1:00 PM',
    venue: 'Virtual Session',
    copy: 'Meet partner schools and present the kind of analytics talent your team is looking for this hiring cycle.',
    image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Employer speaking to students during a careers talk',
    checklist: ['Prepare role overview slides', 'Highlight key hiring criteria', 'Share application timeline'],
  },
  {
    day: 24,
    month: 'Apr',
    date: '24 Apr',
    title: 'Campus Screening Day',
    type: 'Screening Day',
    time: '10:00 AM',
    venue: 'RUN Auditorium',
    copy: 'Shortlisted students meet employer teams for first-round screening, CV review, and introductory interviews.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Employer team screening students on campus',
    checklist: ['Bring interview scorecards', 'Prepare role briefing notes', 'Confirm shortlist list with CASEC'],
  },
  {
    day: 16,
    month: 'May',
    date: '16 May',
    title: 'Partner School Career Fair',
    type: 'Career Fair',
    time: '11:00 AM',
    venue: 'Main Hall',
    copy: 'Join other employer partners for a broader talent fair across departments, schools, and graduate pathways.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Students and employers meeting at a career fair',
    checklist: ['Set up employer booth', 'Bring branded materials', 'Assign recruiters to departments'],
  },
]

const openEvent = (event) => {
  selectedEvent.value = event
}

const previousMonth = () => {
  activeMonthIndex.value = activeMonthIndex.value === 0 ? calendarMonths.length - 1 : activeMonthIndex.value - 1
}

const nextMonth = () => {
  activeMonthIndex.value = activeMonthIndex.value === calendarMonths.length - 1 ? 0 : activeMonthIndex.value + 1
}

const handleEmployerEventInterest = () => {
  selectedEvent.value = null
}

</script>
