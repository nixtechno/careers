<template>
  <section class="sample-one-capabilities bg-white py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-16 grid items-end gap-12 lg:grid-cols-2">
        <div>
          <span class="eyebrow mb-4 inline-flex">Platform Capabilities</span>
          <div class="section-line mb-5"></div>
          <h2 class="editorial-heading" style="font-size: clamp(1.9rem, 3.5vw, 2.8rem); color: #062a3f">
            Everything a career centre needs,<br />
            <em style="font-style: normal; color: #059669">built for student success.</em>
          </h2>
        </div>
        <div>
          <p class="leading-relaxed text-slate-500" style="font-size: 1.05rem">
            A practical centre for career guidance, employability development, employer engagement, and student transition into the workforce.
          </p>
          <a href="#" class="btn-primary mt-6 inline-flex">Explore All Features</a>
        </div>
      </div>

      <div class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article class="about-panel relative overflow-hidden rounded-2xl p-8 sm:p-10">
          <div class="absolute right-0 top-0 h-72 w-72 opacity-20" style="background: radial-gradient(circle, #10b981, transparent 64%)"></div>
          <div class="relative">
            <span class="eyebrow mb-5 inline-flex">Why it exists</span>
          <h3 class="editorial-heading max-w-2xl text-3xl text-white">
              A connected university career centre, not another list of links.
            </h3>
            <p class="mt-5 max-w-2xl text-base leading-8" style="color: rgba(255, 255, 255, 0.68)">
              RUN CASEC brings students, alumni, employers, and career officers into one shared experience. Every opportunity, event, appointment, resource, and outcome supports the same goal: helping students prepare for professional life after graduation.
            </p>

            <div class="mt-10 grid gap-4 sm:grid-cols-3">
              <div v-for="stat in stats" :key="stat.label" class="stat-tile">
                <p class="editorial-heading text-3xl text-white">{{ stat.value }}</p>
                <p class="mt-1 text-sm" style="color: rgba(255, 255, 255, 0.55)">{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </article>

        <aside class="rounded-2xl border border-slate-200 bg-slate-50 p-7">
          <p class="text-sm font-bold uppercase tracking-wide text-emerald-700">Built around outcomes</p>
          <h3 class="mt-4 text-2xl font-black text-navy-900">The centre keeps the whole journey visible.</h3>
          <p class="mt-4 leading-7 text-slate-600">
            From first-year exploration to graduate placement, the career centre can see where students need guidance, which opportunities are active, and how employer relationships are creating real outcomes.
          </p>

          <div class="mt-7 space-y-4">
            <div v-for="point in proofPoints" :key="point.title" class="proof-row">
              <span class="proof-mark">{{ point.step }}</span>
              <div>
                <p class="font-bold text-slate-800">{{ point.title }}</p>
                <p class="mt-1 text-sm leading-6 text-slate-500">{{ point.copy }}</p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div class="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div class="grid gap-4 md:grid-cols-4">
          <div v-for="step in journey" :key="step.title" class="journey-step">
            <span class="journey-number">{{ step.number }}</span>
            <h4 class="mt-4 font-black text-slate-800">{{ step.title }}</h4>
            <p class="mt-2 text-sm leading-6 text-slate-500">{{ step.copy }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '4x', label: 'clearer student support' },
  { value: '360°', label: 'student journey view' },
  { value: '1 hub', label: 'for guidance and opportunities' },
]

const proofPoints = [
  {
    step: '01',
    title: 'Students know where to begin',
    copy: 'Opportunities, resources, events, and appointments sit in one guided career centre flow.',
  },
  {
    step: '02',
    title: 'Employers meet prepared students',
    copy: 'The centre connects trusted partners to students with relevant interests, skills, and career goals.',
  },
  {
    step: '03',
    title: 'Career officers see impact',
    copy: 'Advisory activity, events, applications, and placements become easier to track and improve.',
  },
]

const journey = [
  { number: '01', title: 'Discover', copy: 'Students explore scholarships, internships, graduate roles, events, and resources.' },
  { number: '02', title: 'Prepare', copy: 'Guidance sessions, CV support, and webinars help them become application-ready.' },
  { number: '03', title: 'Connect', copy: 'Employers, alumni, and career representatives meet students with the right context.' },
  { number: '04', title: 'Measure', copy: 'The centre tracks engagement, placements, and outcomes with clearer data.' },
]
</script>

<style scoped>
.sample-one-capabilities {
  --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.05), 0 8px 32px rgba(6, 42, 63, 0.06);
  --shadow-card-hover: 0 4px 6px rgba(0, 0, 0, 0.04), 0 16px 48px rgba(6, 42, 63, 0.12);
  color: #1e293b;
}

.editorial-heading {
  font-family: 'Poppins', system-ui, sans-serif;
  font-weight: 800;
  letter-spacing: 0;
  line-height: 1.1;
}

.eyebrow {
  align-items: center;
  background: #f1f5f9;
  border-radius: 100px;
  color: #334155;
  font-size: 12px;
  font-weight: 700;
  gap: 8px;
  letter-spacing: 0.06em;
  padding: 5px 14px;
  text-transform: uppercase;
}

.section-line {
  background: linear-gradient(90deg, #062a3f, #10b981);
  border-radius: 100px;
  height: 3px;
  width: 48px;
}

.about-panel {
  background: linear-gradient(135deg, #062a3f 0%, #0e3a56 58%, #065f46 100%);
  box-shadow: var(--shadow-card-hover);
}

.stat-tile {
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  padding: 18px;
}

.proof-row {
  display: flex;
  gap: 14px;
}

.proof-mark {
  align-items: center;
  background: #ecfdf5;
  border-radius: 8px;
  color: #047857;
  display: inline-flex;
  flex: 0 0 auto;
  font-size: 12px;
  font-weight: 800;
  height: 32px;
  justify-content: center;
  width: 38px;
}

.journey-step {
  border-radius: 12px;
  padding: 18px;
  transition: background 0.2s ease;
}

.journey-step:hover {
  background: #f8fafc;
}

.journey-number {
  align-items: center;
  background: #f1f5f9;
  border-radius: 9999px;
  color: #062a3f;
  display: inline-flex;
  font-size: 12px;
  font-weight: 900;
  height: 44px;
  justify-content: center;
  width: 44px;
}

.btn-primary,
.btn-secondary,
.btn-ghost {
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  display: inline-flex;
  font-family: 'Poppins', system-ui, sans-serif;
  font-size: 14px;
  font-weight: 600;
  gap: 8px;
  letter-spacing: 0;
  padding: 11px 24px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-primary {
  background: #062a3f;
  border: none;
  color: #fff;
}

.btn-primary:hover {
  background: #0e3a56;
  box-shadow: 0 8px 24px rgba(6, 42, 63, 0.24);
  transform: translateY(-1px);
}

.btn-secondary {
  background: #f1f5f9;
  border: 1.5px solid #e2e8f0;
  color: #1e293b;
}

.btn-secondary:hover {
  background: #e2e8f0;
  border-color: #cbd5e1;
  transform: translateY(-1px);
}

.btn-ghost {
  background: transparent;
  border: 1.5px solid #a7f3d0;
  color: #047857;
}

.btn-ghost:hover {
  background: #ecfdf5;
}
</style>
