<template>
  <PortalShell
    brand="Redeemer's University"
    label="School API Console"
    initials="RU"
    eyebrow="School Admin"
    title="Integration Console"
    :page-label="currentMenu.label"
    :page-title="pageTitle"
    profile-name="Dr. CASEC Admin"
    profile-role="School API Owner"
    search-placeholder="Search students, imports, API logs..."
  >
    <template #sidebar>
      <p class="px-3 text-xs font-black uppercase tracking-wide text-emerald-200/70">School Console</p>
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
      <div class="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
        <article v-for="stat in dashboardStats" :key="stat.label" class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <p class="text-sm font-semibold text-slate-500">{{ stat.label }}</p>
          <p class="mt-3 text-2xl font-black text-navy-900">{{ stat.value }}</p>
          <p class="mt-2 text-xs font-bold text-emerald-700">{{ stat.note }}</p>
        </article>
      </div>

      <div class="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <section class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div class="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
            <div>
              <h3 class="text-xl font-black text-navy-900">Academic data trend</h3>
              <p class="mt-1 text-sm text-slate-500">Student records and result imports synced this week.</p>
            </div>
            <div class="flex gap-4 text-xs font-black text-slate-500">
              <span class="flex items-center gap-2"><span class="h-2.5 w-2.5 rounded-full bg-navy-900"></span> Students</span>
              <span class="flex items-center gap-2"><span class="h-2.5 w-2.5 rounded-full bg-emerald-500"></span> Results</span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-7 items-end gap-3 border-b border-slate-200 pb-3">
            <div v-for="point in syncTrend" :key="point.day" class="grid gap-3">
              <div class="flex h-48 items-end justify-center gap-1.5 rounded-md bg-slate-50 px-2 py-3">
                <span class="w-3 rounded-t-full bg-navy-900" :style="{ height: point.students }"></span>
                <span class="w-3 rounded-t-full bg-emerald-500" :style="{ height: point.results }"></span>
              </div>
              <p class="text-center text-xs font-black text-slate-500">{{ point.day }}</p>
            </div>
          </div>
        </section>

        <section class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h3 class="text-xl font-black text-navy-900">AI path distribution</h3>
          <p class="mt-1 text-sm text-slate-500">Most common recommended career directions from current profiles.</p>

          <div class="mt-6 grid gap-5">
            <div v-for="path in pathDistribution" :key="path.name">
              <div class="flex items-center justify-between gap-3">
                <p class="text-sm font-black text-navy-900">{{ path.name }}</p>
                <p class="text-sm font-bold text-slate-500">{{ path.value }}</p>
              </div>
              <div class="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100">
                <div class="h-full rounded-full" :style="{ width: `${path.percent}%`, backgroundColor: path.color }"></div>
              </div>
              <p class="mt-1 text-xs font-bold text-slate-400">{{ path.percent }}% of eligible students</p>
            </div>
          </div>
        </section>
      </div>

      <div class="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <section class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div class="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h3 class="text-xl font-black text-navy-900">Integration health</h3>
              <p class="mt-1 text-sm text-slate-500">Current status of school data sync and API activity.</p>
            </div>
            <span class="w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">Healthy</span>
          </div>
          <div class="mt-6 grid gap-3">
            <div v-for="item in integrationHealth" :key="item.name" class="grid gap-3 rounded-md bg-slate-50 p-4 sm:grid-cols-[1fr_120px] sm:items-center">
              <div>
                <p class="font-bold text-navy-900">{{ item.name }}</p>
                <p class="mt-1 text-sm text-slate-500">{{ item.copy }}</p>
              </div>
              <p class="text-sm font-black text-emerald-700">{{ item.status }}</p>
            </div>
          </div>
        </section>

        <section class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h3 class="text-xl font-black text-navy-900">Students needing attention</h3>
          <p class="mt-1 text-sm text-slate-500">Data issues that reduce recommendation quality.</p>
          <div class="mt-5 divide-y divide-slate-100">
            <div v-for="item in attentionItems" :key="item.title" class="py-4 first:pt-0 last:pb-0">
              <p class="font-bold text-navy-900">{{ item.title }}</p>
              <p class="mt-1 text-sm text-slate-500">{{ item.copy }}</p>
            </div>
          </div>
        </section>
      </div>

      <section class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div class="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
          <div>
            <h3 class="text-xl font-black text-navy-900">Recent system logs</h3>
            <p class="mt-1 text-sm text-slate-500">Live activity from API calls, record imports, and AI recommendation jobs.</p>
          </div>
          <button class="rounded-md border border-slate-200 px-4 py-2 text-sm font-black text-navy-900 transition hover:border-emerald-300 hover:text-emerald-700" type="button">
            View full logs
          </button>
        </div>

        <div class="mt-6 divide-y divide-slate-100 rounded-lg border border-slate-200">
          <div v-for="log in dashboardLogs" :key="`${log.time}-${log.endpoint}`" class="grid gap-4 p-4 md:grid-cols-[100px_1fr_140px] md:items-center">
            <div>
              <p class="text-xs font-black uppercase tracking-wide text-slate-400">{{ log.time }}</p>
              <p class="mt-1 text-sm font-black text-navy-900">{{ log.method }}</p>
            </div>
            <div>
              <p class="font-black text-navy-900">{{ log.endpoint }}</p>
              <p class="mt-1 text-sm text-slate-500">{{ log.copy }}</p>
            </div>
            <span class="w-fit rounded-full px-3 py-1 text-xs font-black" :class="log.statusClass">{{ log.status }}</span>
          </div>
        </div>
      </section>
    </template>

    <template v-else-if="activePage === 'students'">
      <template v-if="!selectedStudent">
        <div class="grid gap-4 md:grid-cols-4">
          <article v-for="stat in studentStats" :key="stat.label" class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <p class="text-sm font-semibold text-slate-500">{{ stat.label }}</p>
            <p class="mt-3 text-2xl font-black text-navy-900">{{ stat.value }}</p>
            <p class="mt-2 text-xs font-bold text-emerald-700">{{ stat.note }}</p>
          </article>
        </div>

        <section class="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
          <div class="flex flex-wrap gap-2">
            <button
              v-for="tab in studentTabs"
              :key="tab.id"
              class="rounded-md px-4 py-2 text-sm font-black transition"
              :class="activeStudentTab === tab.id ? 'bg-navy-900 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-navy-900'"
              type="button"
              @click="activeStudentTab = tab.id"
            >
              {{ tab.label }}
            </button>
          </div>
        </section>

        <section class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <template v-if="activeStudentTab === 'directory'">
            <div class="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div>
                <h3 class="text-xl font-black text-navy-900">Student directory</h3>
                <p class="mt-1 text-sm text-slate-500">Synced students and their AI recommendation readiness.</p>
              </div>
              <div class="flex flex-wrap gap-2">
                <button class="rounded-md bg-slate-100 px-3 py-2 text-xs font-black text-navy-900" type="button">All Levels</button>
                <button class="rounded-md bg-slate-100 px-3 py-2 text-xs font-black text-navy-900" type="button">Missing Data</button>
                <button class="rounded-md bg-slate-100 px-3 py-2 text-xs font-black text-navy-900" type="button">Ready</button>
              </div>
            </div>

            <div class="mt-6 overflow-hidden rounded-lg border border-slate-200">
              <div class="hidden grid-cols-[1.4fr_1fr_0.7fr_1fr_120px] gap-4 bg-slate-50 px-4 py-3 text-xs font-black uppercase tracking-wide text-slate-500 md:grid">
                <span>Student</span>
                <span>Department</span>
                <span>Level</span>
                <span>Status</span>
                <span>Action</span>
              </div>
              <div class="divide-y divide-slate-100">
                <div v-for="student in students" :key="student.matric" class="grid gap-4 px-4 py-4 text-sm md:grid-cols-[1.4fr_1fr_0.7fr_1fr_120px] md:items-center">
                  <div class="flex items-center gap-3">
                    <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-black text-navy-900">{{ student.initials }}</span>
                    <div>
                      <p class="font-black text-navy-900">{{ student.name }}</p>
                      <p class="mt-1 text-xs font-bold text-slate-500">{{ student.matric }} - {{ student.email }}</p>
                    </div>
                  </div>
                  <p class="font-semibold text-slate-600">{{ student.department }}</p>
                  <p class="font-black text-navy-900">{{ student.level }}</p>
                  <span class="w-fit rounded-full px-3 py-1 text-xs font-black" :class="student.statusClass">{{ student.resultStatus }}</span>
                  <button class="w-fit rounded-md border border-slate-200 px-3 py-2 text-xs font-black text-navy-900 transition hover:border-emerald-300 hover:text-emerald-700" type="button" @click="openStudent(student)">
                    View
                  </button>
                </div>
              </div>
            </div>
          </template>

          <template v-else-if="activeStudentTab === 'upload'">
            <div class="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h3 class="text-xl font-black text-navy-900">Upload students</h3>
                <p class="mt-1 text-sm leading-6 text-slate-500">Add students manually, upload a mapped file, or sync from the school system.</p>

                <div class="mt-6 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                  <p class="font-black text-navy-900">Drop student list here</p>
                  <p class="mt-1 text-sm text-slate-500">CSV, XLSX, or JSON with matric number, department, level, and email.</p>
                  <div class="mt-5 flex flex-wrap justify-center gap-3">
                    <button class="rounded-md bg-navy-900 px-4 py-2 text-sm font-bold text-white" type="button">Choose File</button>
                    <button class="rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-navy-900" type="button">Download Template</button>
                  </div>
                </div>
              </div>

              <div class="rounded-lg bg-slate-50 p-5">
                <p class="font-black text-navy-900">Required fields</p>
                <div class="mt-5 grid gap-3 sm:grid-cols-2">
                  <span v-for="field in studentUploadFields" :key="field" class="rounded-md bg-white px-4 py-3 text-sm font-bold text-slate-600">{{ field }}</span>
                </div>
              </div>
            </div>
          </template>

          <template v-else>
            <h3 class="text-xl font-black text-navy-900">Sync sources</h3>
            <p class="mt-1 text-sm text-slate-500">Ways students enter this school account.</p>
            <div class="mt-6 grid gap-4 lg:grid-cols-3">
              <div v-for="source in studentImportSources" :key="source.name" class="rounded-lg bg-slate-50 p-5">
                <div class="flex items-center justify-between gap-3">
                  <p class="font-black text-navy-900">{{ source.name }}</p>
                  <span class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">{{ source.status }}</span>
                </div>
                <p class="mt-3 text-sm leading-6 text-slate-500">{{ source.copy }}</p>
              </div>
            </div>
          </template>
        </section>
      </template>

      <section v-else class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <button class="rounded-md border border-slate-200 px-4 py-2 text-sm font-black text-navy-900 transition hover:border-emerald-300 hover:text-emerald-700" type="button" @click="closeStudent">
          Back to directory
        </button>

        <div class="mt-6 grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
          <aside class="rounded-lg bg-slate-50 p-6">
            <div class="flex items-center gap-4">
              <span class="flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 text-xl font-black text-white">{{ selectedStudent.initials }}</span>
              <div>
                <h3 class="text-2xl font-black text-navy-900">{{ selectedStudent.name }}</h3>
                <p class="mt-1 text-sm font-bold text-slate-500">{{ selectedStudent.matric }}</p>
              </div>
            </div>

            <div class="mt-6 grid gap-3 text-sm">
              <p class="flex justify-between gap-3"><span class="font-bold text-slate-500">Email</span><span class="font-black text-navy-900">{{ selectedStudent.email }}</span></p>
              <p class="flex justify-between gap-3"><span class="font-bold text-slate-500">Department</span><span class="font-black text-navy-900">{{ selectedStudent.department }}</span></p>
              <p class="flex justify-between gap-3"><span class="font-bold text-slate-500">Level</span><span class="font-black text-navy-900">{{ selectedStudent.level }}</span></p>
              <p class="flex justify-between gap-3"><span class="font-bold text-slate-500">Result Status</span><span class="font-black text-navy-900">{{ selectedStudent.resultStatus }}</span></p>
            </div>
          </aside>

          <div class="grid gap-6">
            <section class="rounded-lg border border-slate-200 p-5">
              <div class="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                <div>
                  <p class="text-sm font-bold uppercase tracking-wide text-emerald-700">AI recommendation</p>
                  <h3 class="mt-2 text-2xl font-black text-navy-900">{{ selectedStudent.recommendation }}</h3>
                  <p class="mt-2 text-sm leading-6 text-slate-500">{{ selectedStudent.recommendationCopy }}</p>
                </div>
                <span class="w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">{{ selectedStudent.confidence }} confidence</span>
              </div>
            </section>

            <section class="rounded-lg border border-slate-200 p-5">
              <h3 class="text-xl font-black text-navy-900">Academic snapshot</h3>
              <div class="mt-5 grid gap-4 md:grid-cols-3">
                <div v-for="metric in selectedStudent.metrics" :key="metric.label" class="rounded-md bg-slate-50 p-4">
                  <p class="text-xs font-black uppercase tracking-wide text-slate-500">{{ metric.label }}</p>
                  <p class="mt-2 text-2xl font-black text-navy-900">{{ metric.value }}</p>
                  <p class="mt-1 text-xs font-bold text-emerald-700">{{ metric.note }}</p>
                </div>
              </div>
            </section>

            <section class="rounded-lg border border-slate-200 p-5">
              <h3 class="text-xl font-black text-navy-900">Timeline</h3>
              <div class="mt-5 divide-y divide-slate-100">
                <div v-for="item in selectedStudent.timeline" :key="item.title" class="py-4 first:pt-0 last:pb-0">
                  <p class="font-black text-navy-900">{{ item.title }}</p>
                  <p class="mt-1 text-sm text-slate-500">{{ item.copy }}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </template>

    <template v-else-if="activePage === 'records'">
      <div class="grid gap-4 md:grid-cols-4">
        <article v-for="stat in recordStats" :key="stat.label" class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <p class="text-sm font-semibold text-slate-500">{{ stat.label }}</p>
          <p class="mt-3 text-2xl font-black text-navy-900">{{ stat.value }}</p>
          <p class="mt-2 text-xs font-bold text-emerald-700">{{ stat.note }}</p>
        </article>
      </div>

      <section class="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
        <div class="flex flex-wrap gap-2">
          <button
            v-for="tab in recordTabs"
            :key="tab.id"
            class="rounded-md px-4 py-2 text-sm font-black transition"
            :class="activeRecordTab === tab.id ? 'bg-navy-900 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-navy-900'"
            type="button"
            @click="activeRecordTab = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>
      </section>

      <section class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <template v-if="activeRecordTab === 'upload'">
          <div class="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h3 class="text-xl font-black text-navy-900">Upload academic records</h3>
              <p class="mt-2 text-sm leading-6 text-slate-500">Import student results by file upload or API sync. CASEC validates the records before they affect AI recommendations.</p>
              <div class="mt-6 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                <p class="font-black text-navy-900">Drop result file here</p>
                <p class="mt-1 text-sm text-slate-500">CSV, XLSX, or JSON export from the school system.</p>
                <div class="mt-5 flex flex-wrap justify-center gap-3">
                  <button class="rounded-md bg-navy-900 px-4 py-2 text-sm font-bold text-white" type="button">Choose File</button>
                  <button class="rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-navy-900" type="button">Use API Sync</button>
                </div>
              </div>
            </div>

            <div class="rounded-lg bg-slate-50 p-5">
              <div class="flex items-center justify-between gap-3">
                <p class="font-black text-navy-900">Processing queue</p>
                <span class="rounded-full bg-amber-50 px-3 py-1 text-xs font-black text-amber-700">1 active</span>
              </div>
              <div class="mt-5 grid gap-4">
                <div v-for="job in recordQueue" :key="job.name">
                  <div class="flex items-center justify-between gap-3">
                    <p class="text-sm font-black text-navy-900">{{ job.name }}</p>
                    <p class="text-xs font-black text-slate-500">{{ job.progress }}%</p>
                  </div>
                  <div class="mt-2 h-2 overflow-hidden rounded-full bg-white">
                    <div class="h-full rounded-full bg-emerald-500" :style="{ width: `${job.progress}%` }"></div>
                  </div>
                  <p class="mt-1 text-xs font-bold text-slate-500">{{ job.copy }}</p>
                </div>
              </div>
            </div>
          </div>
        </template>

        <template v-else-if="activeRecordTab === 'mapping'">
          <div class="flex flex-col justify-between gap-3 md:flex-row md:items-start">
            <div>
              <h3 class="text-xl font-black text-navy-900">Column mapping</h3>
              <p class="mt-1 text-sm text-slate-500">Match the school result export fields with CASEC academic record fields.</p>
            </div>
            <button class="rounded-md bg-navy-900 px-4 py-2 text-sm font-bold text-white" type="button">Save Mapping</button>
          </div>
          <div class="mt-6 divide-y divide-slate-100 rounded-lg border border-slate-200">
            <div v-for="field in recordMappings" :key="field.source" class="grid gap-3 p-4 text-sm md:grid-cols-[1fr_1fr_120px] md:items-center">
              <p class="font-black text-navy-900">{{ field.source }}</p>
              <p class="font-semibold text-slate-600">{{ field.target }}</p>
              <span class="w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">{{ field.status }}</span>
            </div>
          </div>
        </template>

        <template v-else-if="activeRecordTab === 'issues'">
          <h3 class="text-xl font-black text-navy-900">Validation issues</h3>
          <p class="mt-1 text-sm text-slate-500">Fix these before the records can be used for career recommendations.</p>
          <div class="mt-6 divide-y divide-slate-100 rounded-lg border border-slate-200">
            <div v-for="issue in recordIssues" :key="issue.title" class="grid gap-3 p-4 md:grid-cols-[1fr_120px] md:items-center">
              <div>
                <p class="font-black text-navy-900">{{ issue.title }}</p>
                <p class="mt-1 text-sm text-slate-500">{{ issue.copy }}</p>
              </div>
              <span class="w-fit rounded-full px-3 py-1 text-xs font-black" :class="issue.className">{{ issue.count }}</span>
            </div>
          </div>
        </template>

        <template v-else>
          <div class="flex flex-col justify-between gap-3 md:flex-row md:items-start">
            <div>
              <h3 class="text-xl font-black text-navy-900">Import history</h3>
              <p class="mt-1 text-sm text-slate-500">Recent result uploads, sync jobs, and document imports.</p>
            </div>
            <button class="rounded-md border border-slate-200 px-4 py-2 text-sm font-black text-navy-900 transition hover:border-emerald-300 hover:text-emerald-700" type="button">Export Log</button>
          </div>
          <div class="mt-6 divide-y divide-slate-100 rounded-lg border border-slate-200">
            <div v-for="item in recordImports" :key="item.batch" class="grid gap-3 p-4 text-sm md:grid-cols-[1.2fr_0.8fr_0.7fr_0.8fr_0.7fr] md:items-center">
              <p class="font-black text-navy-900">{{ item.batch }}</p>
              <p class="font-semibold text-slate-600">{{ item.type }}</p>
              <p class="font-black text-navy-900">{{ item.records }}</p>
              <span class="w-fit rounded-full px-3 py-1 text-xs font-black" :class="item.statusClass">{{ item.status }}</span>
              <p class="font-semibold text-slate-500">{{ item.date }}</p>
            </div>
          </div>
        </template>
      </section>
    </template>

    <template v-else-if="activePage === 'recommendations'">
      <div class="grid gap-4 md:grid-cols-3">
        <article v-for="path in careerPaths" :key="path.name" class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p class="text-sm font-bold uppercase tracking-wide text-emerald-700">{{ path.name }}</p>
          <p class="mt-3 text-3xl font-black text-navy-900">{{ path.count }}</p>
          <p class="mt-2 text-sm leading-6 text-slate-500">{{ path.copy }}</p>
        </article>
      </div>

      <DataTable
        title="Recommendation Review"
        description="Low confidence and high impact recommendations that may need school review."
        :columns="['Student', 'Path', 'Confidence', 'Gap', 'Status']"
        :rows="recommendationRows"
      />
    </template>

    <template v-else-if="activePage === 'integrations'">
      <div class="grid gap-4 md:grid-cols-4">
        <article v-for="stat in integrationStats" :key="stat.label" class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <p class="text-sm font-semibold text-slate-500">{{ stat.label }}</p>
          <p class="mt-3 text-2xl font-black text-navy-900">{{ stat.value }}</p>
          <p class="mt-2 text-xs font-bold text-emerald-700">{{ stat.note }}</p>
        </article>
      </div>

      <section class="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
        <div class="flex flex-wrap gap-2">
          <button
            v-for="tab in integrationTabs"
            :key="tab.id"
            class="rounded-md px-4 py-2 text-sm font-black transition"
            :class="activeIntegrationTab === tab.id ? 'bg-navy-900 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-navy-900'"
            type="button"
            @click="activeIntegrationTab = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>
      </section>

      <section class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <template v-if="activeIntegrationTab === 'keys'">
          <div class="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
            <div>
              <h3 class="text-xl font-black text-navy-900">API Keys</h3>
              <p class="mt-1 text-sm text-slate-500">Use school-scoped keys for server-side integrations.</p>
            </div>
            <button class="rounded-md bg-navy-900 px-4 py-2 text-sm font-bold text-white" type="button">Generate Key</button>
          </div>
          <div class="mt-6 grid gap-4 lg:grid-cols-2">
            <div v-for="key in apiKeys" :key="key.name" class="rounded-lg bg-slate-50 p-5">
              <div class="flex items-center justify-between gap-3">
                <p class="font-black text-navy-900">{{ key.name }}</p>
                <span class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">{{ key.status }}</span>
              </div>
              <code class="mt-4 block break-all rounded-md bg-white px-3 py-3 text-xs font-bold text-slate-500">{{ key.key }}</code>
              <div class="mt-4 grid gap-2 text-xs font-bold text-slate-500">
                <p class="flex justify-between gap-3"><span>Environment</span><span class="text-navy-900">{{ key.environment }}</span></p>
                <p class="flex justify-between gap-3"><span>Last used</span><span class="text-navy-900">{{ key.lastUsed }}</span></p>
              </div>
            </div>
          </div>
        </template>

        <template v-else-if="activeIntegrationTab === 'webhooks'">
          <div class="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
            <div>
              <h3 class="text-xl font-black text-navy-900">Webhooks</h3>
              <p class="mt-1 text-sm text-slate-500">Notify the school system when students, results, or recommendations change.</p>
            </div>
            <button class="rounded-md bg-navy-900 px-4 py-2 text-sm font-bold text-white" type="button">Add Webhook</button>
          </div>
          <div class="mt-6 divide-y divide-slate-100 rounded-lg border border-slate-200">
            <div v-for="hook in webhooks" :key="hook.name" class="grid gap-4 p-4 md:grid-cols-[1fr_140px_140px] md:items-center">
              <div>
                <p class="font-black text-navy-900">{{ hook.name }}</p>
                <p class="mt-1 break-all text-sm text-slate-500">{{ hook.url }}</p>
              </div>
              <p class="text-sm font-bold text-slate-500">{{ hook.events }}</p>
              <span class="w-fit rounded-full px-3 py-1 text-xs font-black" :class="hook.statusClass">{{ hook.status }}</span>
            </div>
          </div>
        </template>

        <template v-else-if="activeIntegrationTab === 'systems'">
          <h3 class="text-xl font-black text-navy-900">Connected systems</h3>
          <p class="mt-1 text-sm text-slate-500">School services connected to this CASEC account.</p>
          <div class="mt-6 grid gap-4 lg:grid-cols-3">
            <article v-for="system in connectedSystems" :key="system.name" class="rounded-lg bg-slate-50 p-5">
              <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-sm font-black text-navy-900">{{ system.initials }}</div>
              <p class="mt-4 font-black text-navy-900">{{ system.name }}</p>
              <p class="mt-2 text-sm leading-6 text-slate-500">{{ system.copy }}</p>
              <p class="mt-4 text-xs font-black uppercase tracking-wide text-emerald-700">{{ system.status }}</p>
            </article>
          </div>
        </template>

        <template v-else>
          <div class="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
            <div>
              <h3 class="text-xl font-black text-navy-900">API logs</h3>
              <p class="mt-1 text-sm text-slate-500">Recent requests from connected school systems.</p>
            </div>
            <button class="rounded-md border border-slate-200 px-4 py-2 text-sm font-black text-navy-900 transition hover:border-emerald-300 hover:text-emerald-700" type="button">Export Logs</button>
          </div>
          <div class="mt-6 divide-y divide-slate-100 rounded-lg border border-slate-200">
            <div v-for="log in apiLogs" :key="`${log.time}-${log.endpoint}`" class="grid gap-3 p-4 text-sm md:grid-cols-[1fr_110px_120px_110px] md:items-center">
              <p class="font-black text-navy-900">{{ log.endpoint }}</p>
              <p class="font-bold text-slate-500">{{ log.method }}</p>
              <span class="w-fit rounded-full px-3 py-1 text-xs font-black" :class="log.statusClass">{{ log.status }}</span>
              <p class="font-semibold text-slate-500">{{ log.time }}</p>
            </div>
          </div>
        </template>
      </section>
    </template>

    <template v-else-if="activePage === 'profile'">
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
        <template v-if="activeSettingsTab === 'general'">
          <h3 class="text-xl font-black text-navy-900">General settings</h3>
          <p class="mt-1 text-sm text-slate-500">Manage school identity, extension URL, departments, and recommendation rules.</p>
          <div class="mt-6 grid gap-4 md:grid-cols-2">
            <label v-for="field in schoolFields" :key="field.label" class="grid gap-2 text-sm font-semibold text-slate-700">
              {{ field.label }}
              <input class="rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" :value="field.value" type="text" />
            </label>
          </div>
        </template>

        <template v-else-if="activeSettingsTab === 'branding'">
          <div class="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
            <div class="rounded-lg bg-slate-50 p-6">
              <h3 class="text-xl font-black text-navy-900">School branding</h3>
              <p class="mt-1 text-sm text-slate-500">Upload the school logo used across the student extension, documentation portal, and recommendation pages.</p>
              <div class="mt-6 flex h-44 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-white">
                <div class="text-center">
                  <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-lg font-black text-navy-900">RU</div>
                  <p class="mt-4 text-sm font-black text-navy-900">Current school logo</p>
                  <p class="mt-1 text-xs font-bold text-slate-500">PNG, JPG, or SVG</p>
                </div>
              </div>
              <div class="mt-5 flex flex-wrap gap-3">
                <button class="rounded-md bg-navy-900 px-4 py-2 text-sm font-bold text-white" type="button">Upload Logo</button>
                <button class="rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-navy-900" type="button">Remove Logo</button>
              </div>
            </div>

            <div>
              <h4 class="text-sm font-black uppercase tracking-wide text-slate-500">Brand application</h4>
              <div class="mt-4 grid gap-4 md:grid-cols-2">
                <div v-for="item in brandingTargets" :key="item.name" class="rounded-lg border border-slate-200 bg-slate-50 p-5">
                  <p class="font-black text-navy-900">{{ item.name }}</p>
                  <p class="mt-2 text-sm leading-6 text-slate-500">{{ item.copy }}</p>
                  <p class="mt-4 text-xs font-black uppercase tracking-wide text-emerald-700">{{ item.status }}</p>
                </div>
              </div>
            </div>
          </div>
        </template>

        <template v-else>
          <h3 class="text-xl font-black text-navy-900">Signup and access</h3>
          <p class="mt-1 text-sm text-slate-500">Control how students and school admins access this CASEC account.</p>
          <div class="mt-6 rounded-lg bg-slate-50 p-5">
            <p class="text-sm font-black text-navy-900">Student signup rules</p>
            <div class="mt-4 grid gap-3 md:grid-cols-3">
              <label v-for="rule in signupRules" :key="rule" class="flex items-center justify-between rounded-md bg-white p-4 text-sm font-semibold text-slate-700">
                {{ rule }}
                <input class="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" type="checkbox" checked />
              </label>
            </div>
          </div>
          <div class="mt-6 grid gap-4 md:grid-cols-2">
            <div v-for="admin in adminAccess" :key="admin.title" class="rounded-lg border border-slate-200 bg-white p-5">
              <p class="font-black text-navy-900">{{ admin.title }}</p>
              <p class="mt-2 text-sm leading-6 text-slate-500">{{ admin.copy }}</p>
            </div>
          </div>
        </template>
      </section>
    </template>

    <template v-else-if="activePage === 'reports'">
      <div class="grid gap-4 md:grid-cols-4">
        <article v-for="stat in reportStats" :key="stat.label" class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <p class="text-sm font-semibold text-slate-500">{{ stat.label }}</p>
          <p class="mt-3 text-2xl font-black text-navy-900">{{ stat.value }}</p>
          <p class="mt-2 text-xs font-bold text-emerald-700">{{ stat.note }}</p>
        </article>
      </div>

      <section class="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
        <div class="flex flex-wrap gap-2">
          <button
            v-for="tab in reportTabs"
            :key="tab.id"
            class="rounded-md px-4 py-2 text-sm font-black transition"
            :class="activeReportTab === tab.id ? 'bg-navy-900 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-navy-900'"
            type="button"
            @click="activeReportTab = tab.id"
          >
            {{ tab.label }}
          </button>
        </div>
      </section>

      <section class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <template v-if="activeReportTab === 'exports'">
          <div class="flex flex-col justify-between gap-3 md:flex-row md:items-start">
            <div>
              <h3 class="text-xl font-black text-navy-900">Export reports</h3>
              <p class="mt-1 text-sm text-slate-500">Download readiness, recommendation, data quality, and integration reports.</p>
            </div>
            <button class="rounded-md bg-navy-900 px-4 py-2 text-sm font-bold text-white" type="button">Create Report</button>
          </div>
          <div class="mt-6 divide-y divide-slate-100 rounded-lg border border-slate-200">
            <div v-for="report in reports" :key="report.name" class="grid gap-3 p-4 text-sm md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_120px] md:items-center">
              <p class="font-black text-navy-900">{{ report.name }}</p>
              <p class="font-semibold text-slate-600">{{ report.type }}</p>
              <p class="font-semibold text-slate-500">{{ report.period }}</p>
              <span class="w-fit rounded-full px-3 py-1 text-xs font-black" :class="report.statusClass">{{ report.status }}</span>
              <button class="w-fit rounded-md border border-slate-200 px-3 py-2 text-xs font-black text-navy-900 transition hover:border-emerald-300 hover:text-emerald-700" type="button">{{ report.action }}</button>
            </div>
          </div>
        </template>

        <template v-else-if="activeReportTab === 'scheduled'">
          <h3 class="text-xl font-black text-navy-900">Scheduled reports</h3>
          <p class="mt-1 text-sm text-slate-500">Automated reports sent to school admins and department leads.</p>
          <div class="mt-6 grid gap-4 md:grid-cols-3">
            <article v-for="item in scheduledReports" :key="item.name" class="rounded-lg bg-slate-50 p-5">
              <p class="font-black text-navy-900">{{ item.name }}</p>
              <p class="mt-2 text-sm leading-6 text-slate-500">{{ item.copy }}</p>
              <p class="mt-4 text-xs font-black uppercase tracking-wide text-emerald-700">{{ item.frequency }}</p>
            </article>
          </div>
        </template>

        <template v-else>
          <h3 class="text-xl font-black text-navy-900">Report insights</h3>
          <p class="mt-1 text-sm text-slate-500">Quick summary of what the latest reports are saying.</p>
          <div class="mt-6 grid gap-4 md:grid-cols-3">
            <article v-for="item in reportInsights" :key="item.title" class="rounded-lg bg-slate-50 p-5">
              <p class="text-xs font-black uppercase tracking-wide text-slate-500">{{ item.label }}</p>
              <p class="mt-3 text-2xl font-black text-navy-900">{{ item.value }}</p>
              <p class="mt-2 text-sm leading-6 text-slate-500">{{ item.copy }}</p>
            </article>
          </div>
        </template>
      </section>
    </template>

    <EmptyPage v-else icon="dashboard" title="Page not found" copy="Choose another item from the school console." />
  </PortalShell>
</template>

<script setup>
import { computed, defineComponent, h, ref } from 'vue'
import EmptyPage from '../../components/portal/EmptyPage.vue'
import PortalIcon from '../../components/portal/PortalIcon.vue'
import PortalShell from '../../components/portal/PortalShell.vue'

const DataTable = defineComponent({
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    columns: { type: Array, required: true },
    rows: { type: Array, required: true },
  },
  setup(props) {
    return () => h('section', { class: 'rounded-lg border border-slate-200 bg-white p-6 shadow-sm' }, [
      h('div', { class: 'flex flex-col justify-between gap-4 sm:flex-row sm:items-center' }, [
        h('div', [
          h('h3', { class: 'text-xl font-black text-navy-900' }, props.title),
          h('p', { class: 'mt-1 text-sm text-slate-500' }, props.description),
        ]),
      ]),
      h('div', { class: 'mt-6 overflow-x-auto rounded-lg border border-slate-200' }, [
        h('table', { class: 'w-full min-w-[760px] text-left text-sm' }, [
          h('thead', { class: 'bg-slate-50 text-xs uppercase tracking-wide text-slate-500' }, [
            h('tr', props.columns.map((column) => h('th', { class: 'px-4 py-3', key: column }, column))),
          ]),
          h('tbody', { class: 'divide-y divide-slate-100' }, props.rows.map((row, index) => h('tr', { key: `${row[0]}-${index}` }, row.map((cell) => h('td', { class: 'px-4 py-3 text-slate-600' }, cell))))),
        ]),
      ]),
    ])
  },
})

const activePage = ref('dashboard')
const selectedStudent = ref(null)
const activeStudentTab = ref('directory')
const activeRecordTab = ref('upload')
const activeIntegrationTab = ref('keys')
const activeSettingsTab = ref('general')
const activeReportTab = ref('exports')
const menu = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
  { id: 'students', label: 'Students', icon: 'students' },
  { id: 'records', label: 'Academic Records', icon: 'records' },
  { id: 'recommendations', label: 'AI Recommendations', icon: 'recommendations' },
  { id: 'integrations', label: 'Integrations', icon: 'integrations' },
  { id: 'profile', label: 'Settings', icon: 'settings' },
  { id: 'reports', label: 'Reports', icon: 'reports' },
]
const currentMenu = computed(() => menu.find((item) => item.id === activePage.value) ?? menu[0])
const pageTitle = computed(() => currentMenu.value.label === 'Dashboard' ? 'School Integration Overview' : currentMenu.value.label)
const openStudent = (student) => {
  selectedStudent.value = student
}
const closeStudent = () => {
  selectedStudent.value = null
}
const recordTabs = [
  { id: 'upload', label: 'Upload' },
  { id: 'mapping', label: 'Mapping' },
  { id: 'issues', label: 'Issues' },
  { id: 'history', label: 'History' },
]
const integrationTabs = [
  { id: 'keys', label: 'API Keys' },
  { id: 'webhooks', label: 'Webhooks' },
  { id: 'systems', label: 'Systems' },
  { id: 'logs', label: 'Logs' },
]
const settingsTabs = [
  { id: 'general', label: 'General' },
  { id: 'branding', label: 'Branding' },
  { id: 'access', label: 'Access' },
]
const reportTabs = [
  { id: 'exports', label: 'Exports' },
  { id: 'scheduled', label: 'Scheduled' },
  { id: 'insights', label: 'Insights' },
]
const studentTabs = [
  { id: 'directory', label: 'Directory' },
  { id: 'upload', label: 'Upload' },
  { id: 'sources', label: 'Sources' },
]

const dashboardStats = [
  { label: 'Students Synced', value: '12,430', note: '+420 this week' },
  { label: 'Results Imported', value: '8,204', note: '92% complete' },
  { label: 'Recommendations', value: '6,918', note: '87% avg confidence' },
  { label: 'API Uptime', value: '99.8%', note: 'Healthy' },
  { label: 'Missing Results', value: '312', note: 'Needs attention' },
  { label: 'Readiness Avg.', value: '74%', note: '+6% this term' },
]

const integrationHealth = [
  { name: 'Student sync', copy: 'Last successful sync ran 12 minutes ago.', status: 'Connected' },
  { name: 'Academic results import', copy: 'Year 1 and Year 2 records are complete.', status: 'Processing' },
  { name: 'Recommendation engine', copy: 'AI recommendations are active for eligible profiles.', status: 'Active' },
]

const attentionItems = [
  { title: '312 students missing results', copy: 'Mostly 300 and 400 level students from three departments.' },
  { title: '148 profiles need completion', copy: 'Students have not added skills, projects, or career interests.' },
  { title: '23 low confidence recommendations', copy: 'Require profile updates or result corrections before publishing.' },
]

const syncTrend = [
  { day: 'Mon', students: '54%', results: '42%' },
  { day: 'Tue', students: '62%', results: '48%' },
  { day: 'Wed', students: '70%', results: '58%' },
  { day: 'Thu', students: '76%', results: '64%' },
  { day: 'Fri', students: '88%', results: '72%' },
  { day: 'Sat', students: '64%', results: '52%' },
  { day: 'Sun', students: '48%', results: '39%' },
]

const pathDistribution = [
  { name: 'Data & Technology', value: '2,340', percent: 72, color: '#062a3f' },
  { name: 'Finance & Advisory', value: '890', percent: 51, color: '#10b981' },
  { name: 'Policy & Research', value: '612', percent: 38, color: '#64748b' },
  { name: 'Education & Community', value: '486', percent: 31, color: '#0f766e' },
]

const dashboardLogs = [
  {
    time: '12:42 PM',
    method: 'POST',
    endpoint: '/api/v1/results/import',
    copy: 'Final Year Results batch queued for validation.',
    status: '202 Accepted',
    statusClass: 'bg-emerald-50 text-emerald-700',
  },
  {
    time: '12:18 PM',
    method: 'GET',
    endpoint: '/api/v1/recommendations/stu_2048',
    copy: 'AI recommendation generated with 91% confidence.',
    status: '200 OK',
    statusClass: 'bg-emerald-50 text-emerald-700',
  },
  {
    time: '11:54 AM',
    method: 'PATCH',
    endpoint: '/api/v1/students/profile',
    copy: '148 profiles marked incomplete after sync check.',
    status: '207 Review',
    statusClass: 'bg-amber-50 text-amber-700',
  },
  {
    time: '11:20 AM',
    method: 'POST',
    endpoint: '/api/v1/sync/students',
    copy: 'Computer Science student directory synced successfully.',
    status: '200 OK',
    statusClass: 'bg-emerald-50 text-emerald-700',
  },
]

const studentStats = [
  { label: 'Total Students', value: '12,430', note: '+420 imported this week' },
  { label: 'Ready Profiles', value: '8,742', note: '70% recommendation ready' },
  { label: 'Missing Data', value: '312', note: 'Needs academic records' },
  { label: 'New Uploads', value: '1,008', note: 'Processing today' },
]

const studentImportSources = [
  { name: 'API student sync', status: 'Connected', copy: 'Student biodata syncs every 30 minutes from the school information system.' },
  { name: 'Bulk upload template', status: 'Ready', copy: 'CSV and XLSX uploads are mapped to matric number, level, department, email, and phone.' },
  { name: 'Manual registration', status: 'Enabled', copy: 'Students can complete their profile after matric number verification.' },
]

const studentUploadFields = ['Matric number', 'Full name', 'School email', 'Department', 'Level', 'Phone number', 'Entry year', 'Status']

const students = [
  {
    name: 'Amara Okonkwo',
    initials: 'AO',
    matric: 'RUN/CMP/20/1042',
    email: 'amara.okonkwo@run.edu.ng',
    department: 'Computer Science',
    level: '400',
    resultStatus: 'Complete',
    statusClass: 'bg-emerald-50 text-emerald-700',
    recommendation: 'Product Data Analyst',
    recommendationCopy: 'Strong academic performance in statistics, databases, and software project work points toward analytics roles in product-led teams.',
    confidence: '94%',
    metrics: [
      { label: 'CGPA', value: '4.61', note: 'Top 8% department' },
      { label: 'Skill Match', value: '88%', note: 'Analytics ready' },
      { label: 'Profile', value: '96%', note: 'Complete' },
    ],
    timeline: [
      { title: 'Recommendation published', copy: 'AI path reviewed and approved by school admin.' },
      { title: 'Final year result imported', copy: 'Academic records synced through the results import API.' },
      { title: 'Profile completed', copy: 'Student added projects, skills, and internship interests.' },
    ],
  },
  {
    name: 'David Ojo',
    initials: 'DO',
    matric: 'RUN/ACC/20/2215',
    email: 'david.ojo@run.edu.ng',
    department: 'Accounting',
    level: '400',
    resultStatus: 'Complete',
    statusClass: 'bg-emerald-50 text-emerald-700',
    recommendation: 'Finance Trainee',
    recommendationCopy: 'Course results and stated interests align with audit, financial control, and graduate trainee openings.',
    confidence: '91%',
    metrics: [
      { label: 'CGPA', value: '4.22', note: 'Strong finance core' },
      { label: 'Skill Match', value: '82%', note: 'Interview prep next' },
      { label: 'Profile', value: '89%', note: 'Nearly complete' },
    ],
    timeline: [
      { title: 'Career path generated', copy: 'Recommendation engine matched student with finance and advisory roles.' },
      { title: 'Year 4 results verified', copy: 'Final year upload matched existing matric number.' },
      { title: 'CV review requested', copy: 'Student requested support from the careers office.' },
    ],
  },
  {
    name: 'Yewande Esho',
    initials: 'YE',
    matric: 'RUN/ECO/21/0874',
    email: 'yewande.esho@run.edu.ng',
    department: 'Economics',
    level: '300',
    resultStatus: 'Missing Year 2',
    statusClass: 'bg-amber-50 text-amber-700',
    recommendation: 'Policy Research Assistant',
    recommendationCopy: 'Recommendation is pending a cleaner academic record, but research and writing indicators are promising.',
    confidence: '68%',
    metrics: [
      { label: 'CGPA', value: '3.84', note: 'Partial record' },
      { label: 'Skill Match', value: '64%', note: 'Needs samples' },
      { label: 'Profile', value: '71%', note: 'Add projects' },
    ],
    timeline: [
      { title: 'Data issue flagged', copy: 'Year 2 results are missing from the latest import.' },
      { title: 'Draft recommendation created', copy: 'AI generated a provisional path pending record completion.' },
      { title: 'Profile reminder sent', copy: 'Student received a prompt to add research interests.' },
    ],
  },
  {
    name: 'Ngozi Kalu',
    initials: 'NK',
    matric: 'RUN/CMP/20/1188',
    email: 'ngozi.kalu@run.edu.ng',
    department: 'Computer Science',
    level: '400',
    resultStatus: 'Complete',
    statusClass: 'bg-emerald-50 text-emerald-700',
    recommendation: 'Software Support Specialist',
    recommendationCopy: 'Good programming foundation with stronger fit for implementation, customer support, and technical documentation roles.',
    confidence: '62%',
    metrics: [
      { label: 'CGPA', value: '3.58', note: 'Stable performance' },
      { label: 'Skill Match', value: '59%', note: 'Portfolio needed' },
      { label: 'Profile', value: '78%', note: 'Add projects' },
    ],
    timeline: [
      { title: 'Low confidence review', copy: 'Recommendation needs stronger portfolio and skill evidence.' },
      { title: 'Result import completed', copy: 'Academic record is complete across all years.' },
      { title: 'Career guidance suggested', copy: 'Student should book a session before publishing path.' },
    ],
  },
]

const recordStats = [
  { label: 'Records Stored', value: '42,816', note: 'Across 12,430 students' },
  { label: 'Mapped Courses', value: '1,204', note: '96% matched to departments' },
  { label: 'Validation Issues', value: '184', note: 'Blocks 312 students' },
  { label: 'Imports This Month', value: '18', note: '14 completed' },
]

const recordQueue = [
  { name: 'Final Year Results - 2026', progress: 68, copy: 'Validating matric numbers, course codes, scores, and grade boundaries.' },
  { name: 'Computer Science carryover update', progress: 34, copy: 'Reconciling updated scores with previous semester records.' },
]

const recordMappings = [
  { source: 'matric_number', target: 'student.identifier', status: 'Mapped' },
  { source: 'course_code', target: 'academic.courseCode', status: 'Mapped' },
  { source: 'score_total', target: 'academic.score', status: 'Mapped' },
  { source: 'grade_letter', target: 'academic.grade', status: 'Mapped' },
  { source: 'academic_session', target: 'academic.session', status: 'Mapped' },
]

const recordIssues = [
  { title: 'Unmatched matric numbers', copy: 'Records uploaded for students that are not yet in the directory.', count: '86 rows', className: 'bg-amber-50 text-amber-700' },
  { title: 'Missing course codes', copy: 'Some rows have scores and grades but no course identifier.', count: '54 rows', className: 'bg-amber-50 text-amber-700' },
  { title: 'Invalid score range', copy: 'Scores outside accepted limits need registrar review.', count: '18 rows', className: 'bg-rose-50 text-rose-700' },
  { title: 'Duplicate semester records', copy: 'Repeated courses found in the same student semester.', count: '26 rows', className: 'bg-slate-100 text-slate-700' },
]

const recordImports = [
  { batch: 'Year 1 Results - 2022', type: 'CSV Upload', records: '2,410', status: 'Completed', statusClass: 'bg-emerald-50 text-emerald-700', date: 'Apr 15' },
  { batch: 'Year 2 Results - 2023', type: 'API Sync', records: '2,285', status: 'Completed', statusClass: 'bg-emerald-50 text-emerald-700', date: 'Apr 16' },
  { batch: 'Final Year Results - 2026', type: 'Document Upload', records: '1,008', status: 'Processing', statusClass: 'bg-amber-50 text-amber-700', date: 'Apr 17' },
  { batch: 'Carryover Update', type: 'CSV Upload', records: '312', status: 'Needs Review', statusClass: 'bg-rose-50 text-rose-700', date: 'Apr 17' },
]

const careerPaths = [
  { name: 'Data & Technology', count: '2,340', copy: 'Most recommended across Computer Science, Maths, and Engineering departments.' },
  { name: 'Finance & Advisory', count: '890', copy: 'Strong fit across Accounting, Economics, and Business students.' },
  { name: 'Policy & Research', count: '612', copy: 'Emerging path for Social Sciences and Communication students.' },
]

const recommendationRows = [
  ['Ngozi Kalu', 'Software Support', '62%', 'Portfolio', 'Needs Review'],
  ['Yewande Esho', 'Policy Research', '68%', 'Research samples', 'Pending Profile'],
  ['David Ojo', 'Finance Trainee', '91%', 'Interview prep', 'Published'],
]

const integrationStats = [
  { label: 'API Requests', value: '48.2k', note: '+12% this month' },
  { label: 'Connected Systems', value: '4', note: 'All healthy' },
  { label: 'Webhook Success', value: '98.7%', note: 'Last 7 days' },
  { label: 'Avg Latency', value: '182ms', note: 'Stable' },
]

const apiKeys = [
  { name: 'Production Key', key: 'sk_school_live_run_********************************', status: 'Active', environment: 'Live', lastUsed: '12 min ago' },
  { name: 'Sandbox Key', key: 'sk_school_test_run_********************************', status: 'Active', environment: 'Sandbox', lastUsed: '2 hrs ago' },
]

const webhooks = [
  { name: 'Student profile updates', url: 'https://run.edu.ng/casec/webhooks/students', events: '3 events', status: 'Active', statusClass: 'bg-emerald-50 text-emerald-700' },
  { name: 'Result import status', url: 'https://run.edu.ng/casec/webhooks/results', events: '2 events', status: 'Active', statusClass: 'bg-emerald-50 text-emerald-700' },
  { name: 'Recommendation published', url: 'https://run.edu.ng/casec/webhooks/recommendations', events: '1 event', status: 'Paused', statusClass: 'bg-amber-50 text-amber-700' },
]

const connectedSystems = [
  { name: 'Student Information System', initials: 'SIS', copy: 'Student biodata, level, department, and matric number verification.', status: 'Connected' },
  { name: 'Result Management Portal', initials: 'RMS', copy: 'Academic results, course scores, grades, semester, and session data.', status: 'Connected' },
  { name: 'CASEC Student Extension', initials: 'EXT', copy: 'School-branded signup and profile completion for verified students.', status: 'Live' },
]

const apiLogs = [
  { endpoint: '/students', method: 'POST', status: '200 OK', statusClass: 'bg-emerald-50 text-emerald-700', time: '12 min ago' },
  { endpoint: '/results/import', method: 'POST', status: '202 Accepted', statusClass: 'bg-emerald-50 text-emerald-700', time: '32 min ago' },
  { endpoint: '/recommendations/stu_123', method: 'GET', status: '200 OK', statusClass: 'bg-emerald-50 text-emerald-700', time: '1 hr ago' },
  { endpoint: '/webhooks/results', method: 'POST', status: '409 Retry', statusClass: 'bg-amber-50 text-amber-700', time: '2 hrs ago' },
]

const schoolFields = [
  { label: 'School Name', value: 'Redeemer\'s University' },
  { label: 'Extension URL', value: 'run.careers.example' },
  { label: 'Primary Domain', value: 'run.edu.ng' },
  { label: 'Admin Email', value: 'admin@run.edu.ng' },
  { label: 'Student Identifier', value: 'Matric Number' },
  { label: 'Recommendation Mode', value: 'Review before publish' },
]

const brandingTargets = [
  { name: 'Student portal', copy: 'Logo appears in the student extension and authenticated portal header.', status: 'Enabled' },
  { name: 'Documentation portal', copy: 'Used in API docs, integration guides, and school onboarding pages.', status: 'Enabled' },
  { name: 'Email notifications', copy: 'Applied to report exports, invitation emails, and recommendation notices.', status: 'Ready' },
  { name: 'Employer view', copy: 'Displays school identity when employers review school-linked graduates.', status: 'Optional' },
]

const signupRules = ['Require school email', 'Verify matric number', 'Allow profile completion']

const adminAccess = [
  { title: 'Admin roles', copy: 'Assign registrar, career office, and super admin access for this school account.' },
  { title: 'Approval workflow', copy: 'Choose whether recommendations publish automatically or require school review first.' },
]

const reportStats = [
  { label: 'Reports Generated', value: '28', note: 'This month' },
  { label: 'Scheduled Exports', value: '6', note: 'Weekly and monthly' },
  { label: 'Department Reports', value: '12', note: 'Ready to download' },
  { label: 'Open Insights', value: '4', note: 'Need follow-up' },
]

const reports = [
  { name: 'Career Readiness Report', type: 'Readiness', period: 'Current Session', status: 'Ready', statusClass: 'bg-emerald-50 text-emerald-700', action: 'Download' },
  { name: 'Department Recommendation Report', type: 'AI Recommendations', period: 'April 2026', status: 'Ready', statusClass: 'bg-emerald-50 text-emerald-700', action: 'Download' },
  { name: 'Missing Data Report', type: 'Data Quality', period: 'Current Session', status: 'Ready', statusClass: 'bg-emerald-50 text-emerald-700', action: 'Download' },
  { name: 'API Sync Report', type: 'Integration', period: 'Last 30 Days', status: 'Processing', statusClass: 'bg-amber-50 text-amber-700', action: 'View' },
]

const scheduledReports = [
  { name: 'Weekly readiness summary', copy: 'Sent to the careers office with student readiness movement and key gaps.', frequency: 'Every Monday' },
  { name: 'Department recommendation digest', copy: 'Shared with department heads for final-year cohorts and approval review.', frequency: 'Monthly' },
  { name: 'Integration health export', copy: 'API uptime, failed webhooks, and sync quality report for technical admins.', frequency: 'Every Friday' },
]

const reportInsights = [
  { label: 'Readiness', title: 'Students above readiness threshold', value: '74%', copy: 'Most improvement came from final-year students completing profiles and project entries.' },
  { label: 'Data quality', title: 'Profiles missing records', value: '312', copy: 'Economics and Computer Science still have the largest result gaps to resolve.' },
  { label: 'Recommendations', title: 'High-confidence career paths', value: '6,918', copy: 'Technology and finance remain the strongest recommendation clusters this term.' },
]
</script>
