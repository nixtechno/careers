<template>
  <section class="bg-[#f7faf8] py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p class="text-sm font-bold uppercase tracking-wide text-emerald-700">AI career recommendations</p>
          <h2 class="mt-4 max-w-2xl text-4xl font-black leading-tight text-navy-900 lg:text-5xl">
            Recommendations that follow students from year one to graduation.
          </h2>
          <p class="mt-5 max-w-xl leading-8 text-slate-600">
            The recommendation engine reads academic progress, interests, projects, skills, documents, and opportunity activity to guide each student toward realistic career paths.
          </p>

          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            <div v-for="item in signals" :key="item.title" class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <p class="text-sm font-black text-navy-900">{{ item.title }}</p>
              <p class="mt-2 text-sm leading-6 text-slate-600">{{ item.copy }}</p>
            </div>
          </div>
        </div>

        <div class="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl">
          <div class="border-b border-slate-200 bg-navy-900 p-5 text-white">
            <p class="text-xs font-bold uppercase tracking-wide text-emerald-300">Student recommendation profile</p>
            <div class="mt-3 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <h3 class="text-2xl font-black">Amara Okonkwo</h3>
                <p class="mt-1 text-sm text-slate-300">Computer Science · Final Year</p>
              </div>
              <span class="w-fit rounded-full bg-emerald-400 px-3 py-1 text-xs font-black text-navy-900">87% career fit</span>
            </div>
          </div>

          <div class="grid gap-5 p-5">
            <div class="rounded-lg bg-slate-50 p-5">
              <p class="text-xs font-bold uppercase tracking-wide text-slate-500">Recommended path</p>
              <h4 class="mt-2 text-2xl font-black text-navy-900">Data Analytics</h4>
              <p class="mt-3 text-sm leading-6 text-slate-600">Strong quantitative performance, Python interest, and internship activity make this the strongest path.</p>
            </div>

            <div class="grid gap-3 sm:grid-cols-3">
              <div v-for="metric in metrics" :key="metric.label" class="rounded-md border border-slate-200 p-4">
                <p class="text-xs font-bold uppercase tracking-wide text-slate-500">{{ metric.label }}</p>
                <p class="mt-2 text-xl font-black text-navy-900">{{ metric.value }}</p>
              </div>
            </div>

            <div class="rounded-lg border border-slate-200">
              <div class="border-b border-slate-200 px-5 py-4">
                <p class="font-black text-navy-900">Next best actions</p>
              </div>
              <div class="divide-y divide-slate-100">
                <div v-for="action in actions" :key="action.title" class="grid gap-3 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <p class="font-bold text-navy-900">{{ action.title }}</p>
                    <p class="mt-1 text-sm text-slate-500">{{ action.copy }}</p>
                  </div>
                  <span class="w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">{{ action.type }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const signals = [
  { title: 'Academic signal', copy: 'Year-by-year results show strengths, weak spots, and career-readiness patterns.' },
  { title: 'Profile signal', copy: 'Skills, interests, projects, certifications, documents, and saved roles add personal context.' },
  { title: 'Opportunity signal', copy: 'Applications, employer demand, and market categories help shape practical recommendations.' },
  { title: 'Guidance signal', copy: 'Career sessions, events, and resources help refine what the student should do next.' },
]

const metrics = [
  { label: 'Skill readiness', value: '74%' },
  { label: 'Employer demand', value: 'High' },
  { label: 'Gap areas', value: '3' },
]

const actions = [
  { title: 'Complete SQL readiness module', copy: 'Improves fit for analytics roles and graduate analyst tracks.', type: 'Skill gap' },
  { title: 'Book CV review', copy: 'Prepare application documents before the next internship deadline.', type: 'Guidance' },
  { title: 'Apply to Data Science Intern', copy: 'Recommended based on course strength and saved opportunity activity.', type: 'Opportunity' },
]
</script>
