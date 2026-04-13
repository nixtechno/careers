<template>
  <section class="bg-slate-50 py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mb-12 text-center">
        <span class="text-sm font-semibold uppercase text-emerald-600">Design system preview</span>
        <h2 class="font-heading mt-2 text-3xl font-bold text-navy-900 lg:text-4xl">A unified UI language for the entire platform</h2>
      </div>
      <div class="grid gap-10 lg:grid-cols-2">
        <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 class="mb-4 font-semibold text-navy-900">Interactive Components</h3>
          <div class="mb-6 flex flex-wrap gap-3">
            <button class="btn-primary">Primary</button>
            <button class="btn-secondary">Secondary</button>
            <button class="btn-ghost">Ghost</button>
            <span class="badge">New</span>
            <span class="badge-outline">Beta</span>
          </div>
          <div class="mt-4">
            <div class="search-bar">
              <input type="text" placeholder="Search opportunities..." class="w-full rounded-xl border border-slate-200 p-3 focus:outline-none focus:ring-1 focus:ring-emerald-400" />
              <button class="absolute right-3 top-3 text-slate-400">Search</button>
            </div>
          </div>
          <div class="mt-6 grid grid-cols-2 gap-3">
            <div class="dashboard-widget"><p class="text-xs text-slate-400">Applications</p><p class="text-2xl font-bold">124</p></div>
            <div class="dashboard-widget"><p class="text-xs text-slate-400">Interviews</p><p class="text-2xl font-bold">12</p></div>
          </div>
        </div>
        <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 class="mb-4 font-semibold text-navy-900">Form Controls & Data Preview</h3>
          <div class="space-y-4">
            <select class="w-full rounded-xl border border-slate-200 bg-white p-3"><option>Filter by role type</option></select>
            <div class="flex items-center gap-2"><input id="remote-only" type="checkbox" class="rounded" /><label for="remote-only">Show only remote roles</label></div>
            <div class="overflow-x-auto">
              <table class="min-w-full text-sm">
                <thead><tr class="border-b"><th class="py-2 text-left">Role</th><th class="text-left">Deadline</th></tr></thead>
                <tbody><tr><td class="py-2">Design Intern</td><td>May 10</td></tr><tr><td class="py-2">Analyst Grad</td><td>Jun 1</td></tr></tbody>
              </table>
            </div>
            <div class="empty-state">
              <p class="text-slate-400">No saved jobs yet</p>
              <button class="mt-1 text-sm text-emerald-600">Explore opportunities</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
