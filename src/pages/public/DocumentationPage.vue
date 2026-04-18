<template>
  <main class="fixed inset-0 flex flex-col overflow-hidden bg-white text-slate-900">
    <header class="flex-shrink-0 border-b border-slate-200 bg-white">
      <div class="flex h-16 items-center justify-between px-6">
        <button class="flex items-center gap-3" type="button" @click="navigateTo('/')">
          <span class="flex h-9 w-9 items-center justify-center rounded-md bg-navy-900 text-xs font-black text-white">CI</span>
          <span class="font-heading text-xl font-black text-navy-900">CASEC Docs</span>
        </button>

        <div class="flex items-center gap-3">
          <span class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">API v1.0</span>
          <button class="rounded-md bg-navy-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-navy-800" type="button" @click="navigateTo('/schools/signup')">Register School</button>
          <button class="rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-navy-900 transition hover:bg-slate-50" type="button" @click="navigateTo('/')">Back to site</button>
        </div>
      </div>
    </header>

    <div class="flex min-h-0 flex-1 overflow-hidden">
      <aside class="w-72 flex-shrink-0 overflow-hidden border-r border-slate-200 bg-slate-50 px-4 py-6">
        <nav class="grid gap-6">
          <div v-for="group in docGroups" :key="group.title">
            <p class="mb-2 px-3 text-xs font-black uppercase tracking-wide text-slate-400">{{ group.title }}</p>
            <div class="grid gap-1">
              <button
                v-for="item in group.items"
                :key="item.id"
                class="rounded-md px-3 py-2 text-left text-sm font-bold transition"
                :class="activePage === item.id ? 'bg-navy-900 text-white' : 'text-slate-600 hover:bg-white hover:text-navy-900'"
                type="button"
                @click="activePage = item.id"
              >
                {{ item.label }}
              </button>
            </div>
          </div>
        </nav>
      </aside>

      <section class="min-h-0 min-w-0 flex-1 overflow-y-auto overscroll-contain px-8 py-8">
        <div class="max-w-5xl">
          <div class="mb-8 rounded-lg border border-emerald-200 bg-emerald-50 p-5">
            <p class="text-sm font-black text-emerald-800">Ask AI about this API</p>
            <p class="mt-1 text-sm leading-6 text-emerald-700">Use these references to connect school systems, import academic records, generate career recommendations, and manage employer workflows.</p>
          </div>

          <article>
            <p class="text-xs font-black uppercase tracking-wide text-emerald-700">{{ currentDoc.group }}</p>
            <h1 class="mt-3 text-4xl font-black leading-tight text-navy-900">{{ currentDoc.title }}</h1>
            <p class="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{{ currentDoc.intro }}</p>

            <div v-if="currentDoc.note" class="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5">
              <p class="font-black text-navy-900">{{ currentDoc.note.title }}</p>
              <p class="mt-2 text-sm leading-6 text-slate-600">{{ currentDoc.note.copy }}</p>
            </div>

            <div class="mt-10 grid gap-10">
              <section v-for="section in currentDoc.sections" :key="section.heading">
                <h2 class="text-2xl font-black text-navy-900">{{ section.heading }}</h2>
                <p v-if="section.copy" class="mt-3 max-w-3xl leading-7 text-slate-600">{{ section.copy }}</p>

                <div v-if="section.endpoint" class="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <div class="flex flex-wrap items-center gap-3">
                    <span class="rounded-md px-3 py-1 text-xs font-black" :class="methodClass(section.endpoint.method)">{{ section.endpoint.method }}</span>
                    <code class="break-all text-sm font-black text-navy-900">{{ section.endpoint.path }}</code>
                  </div>
                </div>

                <pre v-if="section.code" class="docs-code mt-5 overflow-x-auto rounded-lg p-5 text-sm leading-7"><code>{{ section.code }}</code></pre>

                <div v-if="section.fields" class="mt-5 overflow-hidden rounded-lg border border-slate-200">
                  <table class="w-full text-left text-sm">
                    <thead class="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                      <tr>
                        <th class="px-4 py-3">Field</th>
                        <th class="px-4 py-3">Type</th>
                        <th class="px-4 py-3">Description</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                      <tr v-for="field in section.fields" :key="field.name">
                        <td class="px-4 py-3 font-black text-navy-900">{{ field.name }}</td>
                        <td class="px-4 py-3 text-slate-500">{{ field.type }}</td>
                        <td class="px-4 py-3 text-slate-600">{{ field.description }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </article>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import { navigateTo } from '../../utils/navigation'

const activePage = ref('introduction')

const docGroups = [
  {
    title: 'API Reference',
    items: [
      { id: 'introduction', label: 'Introduction' },
      { id: 'environments', label: 'Environments' },
      { id: 'errors', label: 'Errors' },
    ],
  },
  {
    title: 'Getting Started',
    items: [
      { id: 'schools', label: 'School Extension' },
      { id: 'authentication', label: 'Authentication' },
      { id: 'webhooks', label: 'Webhooks' },
    ],
  },
  {
    title: 'Core APIs',
    items: [
      { id: 'students', label: 'Students' },
      { id: 'results', label: 'Academic Results' },
      { id: 'recommendations', label: 'AI Recommendations' },
      { id: 'employers', label: 'Employers' },
      { id: 'reports', label: 'Outcome Reports' },
    ],
  },
]

const docs = {
  introduction: {
    group: 'API Reference',
    title: 'Introduction',
    intro: 'The CASEC API helps schools connect student records, academic results, career recommendations, employer roles, and outcome reports.',
    note: {
      title: 'How the platform is organized',
      copy: 'Every school gets a scoped extension and API credentials. Students belong to a school, employers publish roles, and AI recommendations connect academic records to career actions.',
    },
    sections: [
      {
        heading: 'Base URLs',
        copy: 'Use sandbox while testing imports, recommendation calls, and employer workflows.',
        code: 'Sandbox:    https://sandbox.api.casec.test\nProduction: https://api.casec.test',
      },
      {
        heading: 'Resource model',
        copy: 'The core resources are schools, students, results, recommendations, employers, roles, applications, events, and reports.',
      },
    ],
  },
  environments: {
    group: 'API Reference',
    title: 'Environments',
    intro: 'Sandbox and production environments are separated so schools can test integrations safely before going live.',
    sections: [
      {
        heading: 'Sandbox',
        copy: 'Sandbox records do not affect live students, employers, or recommendations.',
        code: 'https://sandbox.api.casec.test',
      },
      {
        heading: 'Production',
        copy: 'Production access is enabled after API key approval and school verification.',
        code: 'https://api.casec.test',
      },
    ],
  },
  errors: {
    group: 'API Reference',
    title: 'Errors',
    intro: 'The API returns structured JSON errors with predictable HTTP status codes.',
    sections: [
      {
        heading: 'Error response',
        code: '{\n  "error": "invalid_request",\n  "message": "matricNumber is required",\n  "requestId": "req_92ka1"\n}',
      },
      {
        heading: 'Status codes',
        fields: [
          { name: '400', type: 'Bad Request', description: 'The request payload is invalid.' },
          { name: '401', type: 'Unauthorized', description: 'API key is missing or invalid.' },
          { name: '404', type: 'Not Found', description: 'The requested resource does not exist.' },
          { name: '422', type: 'Validation Error', description: 'The payload failed business rules.' },
        ],
      },
    ],
  },
  schools: {
    group: 'Getting Started',
    title: 'School Extension',
    intro: 'Create a school extension before syncing students or importing results. The extension controls branding, signup rules, departments, and scoped access.',
    sections: [
      {
        heading: 'Create school',
        endpoint: { method: 'POST', path: '/api/v1/schools' },
        code: '{\n  "name": "Redeemers University",\n  "slug": "run",\n  "extension": "run.careers.example"\n}',
      },
      {
        heading: 'Fields',
        fields: [
          { name: 'name', type: 'string', description: 'Official school name.' },
          { name: 'slug', type: 'string', description: 'Unique identifier for API paths.' },
          { name: 'extension', type: 'string', description: 'Hosted portal extension for the school.' },
        ],
      },
    ],
  },
  authentication: {
    group: 'Getting Started',
    title: 'Authentication',
    intro: 'Use school-scoped bearer tokens. Keep tokens server-side and rotate them from the admin portal.',
    sections: [
      {
        heading: 'Headers',
        code: 'Authorization: Bearer sk_school_live_xxxxx\nX-School-Id: run\nContent-Type: application/json',
      },
      {
        heading: 'Token scope',
        copy: 'A school token can only access records, recommendations, reports, and employer approvals assigned to that school.',
      },
    ],
  },
  webhooks: {
    group: 'Getting Started',
    title: 'Webhooks',
    intro: 'Subscribe to platform events when students sign up, results are imported, recommendations are generated, or applications are submitted.',
    sections: [
      {
        heading: 'Events',
        code: 'student.created\nresults.imported\nrecommendation.generated\napplication.submitted\nemployer.match.created',
      },
      {
        heading: 'Payload',
        code: '{\n  "event": "recommendation.generated",\n  "schoolId": "run",\n  "studentId": "stu_123",\n  "createdAt": "2026-04-17T10:30:00Z"\n}',
      },
    ],
  },
  students: {
    group: 'Core APIs',
    title: 'Students',
    intro: 'Create or sync students from a school system. Students can later complete skills, interests, projects, documents, and preferences from the portal.',
    sections: [
      {
        heading: 'Create student',
        endpoint: { method: 'POST', path: '/api/v1/schools/{schoolId}/students' },
        code: '{\n  "matricNumber": "RUN/2024/CSC/001",\n  "email": "student@run.edu.ng",\n  "department": "Computer Science",\n  "level": "400"\n}',
      },
      {
        heading: 'Fields',
        fields: [
          { name: 'matricNumber', type: 'string', description: 'Unique school-issued student identifier.' },
          { name: 'email', type: 'string', description: 'School or personal email address.' },
          { name: 'department', type: 'string', description: 'Academic department or programme.' },
          { name: 'level', type: 'string', description: 'Current academic level.' },
        ],
      },
    ],
  },
  results: {
    group: 'Core APIs',
    title: 'Academic Results',
    intro: 'Import academic records from year one through graduation. Results become one of the signals used for career path recommendations.',
    sections: [
      {
        heading: 'Import results',
        endpoint: { method: 'POST', path: '/api/v1/results/import' },
        code: '{\n  "studentId": "stu_123",\n  "session": "2025/2026",\n  "semester": "First",\n  "courses": [\n    { "code": "CSC401", "score": 82, "grade": "A" }\n  ]\n}',
      },
      {
        heading: 'Import options',
        copy: 'Schools can sync through API, upload CSV files, or submit structured documents mapped to the result schema.',
      },
    ],
  },
  recommendations: {
    group: 'Core APIs',
    title: 'AI Recommendations',
    intro: 'Generate career paths, confidence scores, skill gaps, recommended resources, and opportunity matches for a student.',
    sections: [
      {
        heading: 'Get recommendation',
        endpoint: { method: 'GET', path: '/api/v1/recommendations/{studentId}' },
        code: '{\n  "topPath": "Data Analytics",\n  "confidence": 0.87,\n  "skillGaps": ["SQL", "Portfolio", "Interview Prep"],\n  "nextActions": ["Book CV review", "Apply to Data Science Intern"]\n}',
      },
      {
        heading: 'Signals',
        fields: [
          { name: 'academicRecords', type: 'array', description: 'Course performance and grade patterns.' },
          { name: 'profile', type: 'object', description: 'Skills, projects, interests, certifications, and documents.' },
          { name: 'opportunityActivity', type: 'object', description: 'Saved roles, applications, and viewed categories.' },
        ],
      },
    ],
  },
  employers: {
    group: 'Core APIs',
    title: 'Employers',
    intro: 'Employers can publish roles, retrieve candidate matches, and manage applications after school approval.',
    sections: [
      {
        heading: 'Create role',
        endpoint: { method: 'POST', path: '/api/v1/employers/roles' },
        code: '{\n  "title": "Graduate Data Analyst",\n  "type": "Graduate Role",\n  "skills": ["SQL", "Python", "Reporting"],\n  "schools": ["run"]\n}',
      },
      {
        heading: 'Get role matches',
        endpoint: { method: 'GET', path: '/api/v1/employers/roles/{roleId}/matches' },
        code: '{\n  "roleId": "role_123",\n  "matches": [\n    { "studentId": "stu_123", "fit": 0.92, "path": "Data Analytics" }\n  ]\n}',
      },
    ],
  },
  reports: {
    group: 'Core APIs',
    title: 'Outcome Reports',
    intro: 'Schools can retrieve career readiness, recommendation, engagement, employer, application, and placement summaries.',
    sections: [
      {
        heading: 'Dashboard report',
        endpoint: { method: 'GET', path: '/api/v1/outcomes/dashboard' },
        code: '{\n  "studentsSynced": 12042,\n  "recommendationsGenerated": 8204,\n  "activeEmployers": 340,\n  "applicationsSubmitted": 1260\n}',
      },
      {
        heading: 'Report filters',
        fields: [
          { name: 'department', type: 'string', description: 'Filter by department or programme.' },
          { name: 'level', type: 'string', description: 'Filter by academic level.' },
          { name: 'dateRange', type: 'object', description: 'Filter by reporting period.' },
        ],
      },
    ],
  },
}

const currentDoc = computed(() => docs[activePage.value] ?? docs.introduction)

const methodClass = (method) => {
  const classes = {
    GET: 'bg-blue-100 text-blue-700',
    POST: 'bg-emerald-100 text-emerald-700',
    PUT: 'bg-amber-100 text-amber-700',
    DELETE: 'bg-red-100 text-red-700',
  }

  return classes[method] ?? 'bg-slate-100 text-slate-700'
}
</script>

<style scoped>
.docs-code {
  background: #071f2f !important;
  border: 1px solid #123449;
  color: #d1fae5 !important;
}

.docs-code code {
  color: inherit !important;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  white-space: pre;
}

nav > div:first-child {
  margin-top: 12px;
}
</style>
