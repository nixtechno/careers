<template>
  <div class="sample-two-page">
<!-- =====================================================
       NAVBAR
  ===================================================== -->
  <nav :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    scrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3' : 'bg-transparent py-5']">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">

        <!-- Logo -->
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-navy-900 flex items-center justify-center flex-shrink-0" style="background:#1e2063">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L18 6.5V10C18 14.42 14.5 18.62 10 19.87C5.5 18.62 2 14.42 2 10V6.5L10 2Z" fill="#2dd4bf"/>
              <path d="M7 10L9 12L13 8" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div>
            <span class="editorial-heading text-lg" style="color:#1e2063">CareerHub</span>
            <div class="text-xs text-slate-400 font-medium -mt-0.5 hidden sm:block">University Career Centre</div>
          </div>
        </div>

        <!-- Desktop nav -->
        <div class="hidden lg:flex items-center gap-7">
          <a href="#" class="nav-link">Opportunities</a>
          <a href="#" class="nav-link">Employers</a>
          <a href="#" class="nav-link">Alumni</a>
          <a href="#" class="nav-link">Career Support</a>
          <a href="#" class="nav-link">About</a>
        </div>

        <!-- CTA group -->
        <div class="hidden lg:flex items-center gap-3">
          <a href="#" class="btn-ghost" style="padding:8px 18px;font-size:13px">Sign In</a>
          <a href="#" class="btn-primary" style="padding:9px 20px;font-size:13px">
            Get Started
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>

        <!-- Mobile toggle -->
        <button @click="mobileOpen = !mobileOpen" class="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors">
          <svg v-if="!mobileOpen" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M3 6h16M3 11h16M3 16h16" stroke="#334155" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
          <svg v-else width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M5 5l12 12M17 5L5 17" stroke="#334155" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <transition name="fade">
        <div v-if="mobileOpen" class="lg:hidden mt-4 pb-4 border-t border-slate-100">
          <div class="flex flex-col gap-1 pt-3">
            <a href="#" class="text-sm font-medium text-slate-600 py-2.5 px-3 rounded-lg hover:bg-slate-50 hover:text-slate-900">Opportunities</a>
            <a href="#" class="text-sm font-medium text-slate-600 py-2.5 px-3 rounded-lg hover:bg-slate-50 hover:text-slate-900">Employers</a>
            <a href="#" class="text-sm font-medium text-slate-600 py-2.5 px-3 rounded-lg hover:bg-slate-50 hover:text-slate-900">Alumni</a>
            <a href="#" class="text-sm font-medium text-slate-600 py-2.5 px-3 rounded-lg hover:bg-slate-50 hover:text-slate-900">Career Support</a>
            <a href="#" class="text-sm font-medium text-slate-600 py-2.5 px-3 rounded-lg hover:bg-slate-50 hover:text-slate-900">About</a>
            <div class="flex gap-3 mt-3 pt-3 border-t border-slate-100">
              <a href="#" class="btn-ghost flex-1 text-center justify-center">Sign In</a>
              <a href="#" class="btn-primary flex-1 text-center justify-center">Get Started</a>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </nav>

  <!-- =====================================================
       HERO SECTION
  ===================================================== -->
  <section class="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20" style="background:#0f1240">
    <!-- Background layers -->
    <div class="absolute inset-0" style="background:linear-gradient(135deg,#0f1240 0%,#1a1a5e 50%,#0d3b6e 100%)"></div>
    <div class="absolute inset-0 grid-dots opacity-10"></div>
    <div class="absolute top-0 right-0 w-2/3 h-full opacity-20" style="background:radial-gradient(ellipse at 80% 30%,#6469f1 0%,transparent 60%)"></div>
    <div class="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-15" style="background:radial-gradient(ellipse at 20% 80%,#2dd4bf 0%,transparent 60%)"></div>

    <!-- Decorative arc -->
    <div class="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 border-2 border-white hidden xl:block" style="right:-80px"></div>
    <div class="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-5 border border-white hidden xl:block" style="right:40px"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
      <div class="grid lg:grid-cols-12 gap-12 items-center">

        <!-- Left: Content -->
        <div class="lg:col-span-6 xl:col-span-5">
          <!-- Eyebrow -->
          <div class="flex items-center gap-3 mb-8">
            <span class="eyebrow" style="background:rgba(100,105,241,0.18);color:#a5bafc">
              <svg width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="4" fill="#6469f1"/></svg>
              University Career Centre Portal
            </span>
          </div>

          <!-- Headline â€” staggered layout -->
          <h1 class="editorial-heading mb-6" style="font-size:clamp(2.4rem,4vw,3.4rem);color:#fff">
            <span class="block" style="color:rgba(255,255,255,0.55);font-size:0.55em;font-weight:500;letter-spacing:0.01em;margin-bottom:8px">Your career, </span>
            Your Future
            <span class="block" style="color:#2dd4bf">Starts Here.</span>
          </h1>

          <p class="mb-8 leading-relaxed" style="color:rgba(255,255,255,0.6);font-size:1.05rem;max-width:420px">
            The institutional platform connecting students, alumni, employers, and career advisors â€” all in one credentialed ecosystem.
          </p>

          <div class="flex flex-wrap gap-3 mb-12">
            <a href="#" class="btn-teal">Explore Opportunities</a>
            <a href="#" class="btn-ghost" style="color:#fff;border-color:rgba(255,255,255,0.2);background:rgba(255,255,255,0.06)">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6.5" stroke="white" stroke-width="1.2"/>
                <path d="M6.5 6l3 2-3 2V6z" fill="white"/>
              </svg>
              See How It Works
            </a>
          </div>

          <!-- Trust strip -->
          <div class="pt-6 border-t" style="border-color:rgba(255,255,255,0.1)">
            <p class="text-xs font-semibold uppercase tracking-widest mb-4" style="color:rgba(255,255,255,0.35)">Trusted by leading universities</p>
            <div class="flex flex-wrap gap-4 items-center">
              <span v-for="uni in ['Unilag', 'OAU', 'ABU', 'UI', 'Covenant']" :key="uni"
                class="text-sm font-semibold" style="color:rgba(255,255,255,0.45)">{{ uni }}</span>
            </div>
          </div>
        </div>

        <!-- Right: Hero dashboard mockup -->
        <div class="lg:col-span-6 xl:col-span-7 relative">
          <div class="hero-dashboard animate-float" style="max-width:600px;margin:0 auto">
            <!-- Dashboard header bar -->
            <div class="flex items-center justify-between px-5 py-3.5" style="background:#1e2063;border-bottom:1px solid rgba(255,255,255,0.08)">
              <div class="flex gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
              </div>
              <div class="flex items-center gap-2 bg-slate-800/40 rounded-lg px-3 py-1.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="5" cy="5" r="4" stroke="#64748b" stroke-width="1.2"/><path d="M8.5 8.5l2 2" stroke="#64748b" stroke-width="1.2" stroke-linecap="round"/></svg>
                <span class="text-xs text-slate-400">careerhub.edu.ng</span>
              </div>
              <div class="w-20"></div>
            </div>

            <!-- Dashboard content -->
            <div class="p-5" style="background:#f8fafc">
              <!-- Welcome bar -->
              <div class="flex items-center justify-between mb-5">
                <div>
                  <p class="text-xs text-slate-400 font-medium">Welcome back,</p>
                  <p class="font-bold text-slate-800 text-sm">Amara Okonkwo</p>
                </div>
                <div class="flex items-center gap-2">
                  <span class="badge badge-teal">3 New Matches</span>
                  <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white" style="background:#1e2063">AO</div>
                </div>
              </div>

              <!-- Mini stat row -->
              <div class="grid grid-cols-3 gap-3 mb-5">
                <div v-for="s in heroStats" :key="s.label" class="widget" style="padding:12px">
                  <p class="text-xs text-slate-400 mb-1">{{ s.label }}</p>
                  <p class="font-bold text-slate-800" style="font-size:1.2rem">{{ s.value }}</p>
                  <div class="flex items-center gap-1 mt-1">
                    <span class="text-xs font-semibold" :style="{color: s.up ? '#16a34a':'#dc2626'}">{{ s.change }}</span>
                  </div>
                </div>
              </div>

              <!-- Jobs list preview -->
              <div class="widget mb-3">
                <div class="flex items-center justify-between mb-3">
                  <p class="text-xs font-bold text-slate-700 uppercase tracking-wide">Recommended Jobs</p>
                  <span class="text-xs text-blue-600 font-semibold cursor-pointer">View all</span>
                </div>
                <div class="space-y-2.5">
                  <div v-for="job in heroJobs" :key="job.title" class="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
                    <div class="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold text-white flex-shrink-0" :style="{background: job.color}">{{ job.co[0] }}</div>
                    <div class="flex-1 min-w-0">
                      <p class="text-xs font-semibold text-slate-800 truncate">{{ job.title }}</p>
                      <p class="text-xs text-slate-400">{{ job.co }} Â· {{ job.loc }}</p>
                    </div>
                    <span class="badge" :class="job.badge">{{ job.type }}</span>
                  </div>
                </div>
              </div>

              <!-- CV progress -->
              <div class="widget" style="padding:12px">
                <div class="flex items-center justify-between mb-2">
                  <p class="text-xs font-bold text-slate-700">CV Completion</p>
                  <span class="text-xs font-bold" style="color:#1e2063">78%</span>
                </div>
                <div class="w-full bg-slate-100 rounded-full h-2">
                  <div class="h-2 rounded-full" style="width:78%;background:linear-gradient(90deg,#6469f1,#2dd4bf)"></div>
                </div>
                <p class="text-xs text-slate-400 mt-2">Add your skills section to reach 90%</p>
              </div>
            </div>
          </div>

          <!-- Floating metric cards -->
          <div class="absolute -left-6 top-16 card p-3 hidden xl:block" style="min-width:140px">
            <div class="flex items-center gap-2 mb-1">
              <span class="w-6 h-6 rounded-lg flex items-center justify-center" style="background:#e0e9ff">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10l3-3 2.5 2L10 5" stroke="#6469f1" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
              <p class="text-xs text-slate-500 font-medium">Interviews</p>
            </div>
            <p class="editorial-heading text-xl" style="color:#1e2063">2,840</p>
            <p class="text-xs font-medium" style="color:#16a34a">â†‘ 18% this month</p>
          </div>

          <div class="absolute -right-4 bottom-20 card p-3 hidden xl:block" style="min-width:150px">
            <div class="flex items-center gap-2 mb-1">
              <span class="w-6 h-6 rounded-lg flex items-center justify-center" style="background:#ccfbf1">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 2v8M3 7l3 3 3-3" stroke="#14b8a6" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
              <p class="text-xs text-slate-500 font-medium">Placements</p>
            </div>
            <p class="editorial-heading text-xl" style="color:#1e2063">1,204</p>
            <p class="text-xs font-medium" style="color:#16a34a">â†‘ 34% year-on-year</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
      <p class="text-xs font-medium text-white uppercase tracking-widest">Scroll</p>
      <div class="w-px h-8 bg-white/40 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-3 bg-white animate-bounce" style="animation-duration:1.5s"></div>
      </div>
    </div>
  </section>

  <!-- =====================================================
       IMPACT / STATS SECTION
  ===================================================== -->
  <section class="relative py-0 overflow-hidden" style="background:#1e2063">
    <!-- Continuing rhythm from hero with a dark band -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-y lg:divide-y-0" style="border-color:rgba(255,255,255,0.1)">
        <div v-for="stat in impactStats" :key="stat.label" class="stat-card text-center" style="border-radius:0;background:transparent;border:none;padding:32px 24px">
          <div class="text-4xl lg:text-5xl editorial-heading mb-2" style="color:#fff">{{ stat.value }}</div>
          <div class="text-sm font-semibold mb-1" style="color:#2dd4bf">{{ stat.label }}</div>
          <div class="text-xs" style="color:rgba(255,255,255,0.4)">{{ stat.sub }}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- =====================================================
       PLATFORM CAPABILITIES â€” FEATURE COMPOSITION
  ===================================================== -->
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header â€” left aligned -->
      <div class="grid lg:grid-cols-2 gap-12 items-end mb-16">
        <div>
          <span class="eyebrow mb-4 inline-flex">Platform Capabilities</span>
          <div class="section-line mb-5"></div>
          <h2 class="editorial-heading" style="font-size:clamp(1.9rem,3.5vw,2.8rem);color:#141440">
            Everything you need,<br>
            <em style="font-style:normal;color:#6469f1">built for universities.</em>
          </h2>
        </div>
        <div>
          <p class="text-slate-500 leading-relaxed" style="font-size:1.05rem">
            A comprehensive digital career infrastructure purpose-built for higher education institutions â€” integrated, intelligent, and scalable.
          </p>
          <a href="#" class="btn-primary mt-6 inline-flex">Explore All Features</a>
        </div>
      </div>

      <!-- Feature bento grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        <!-- Large featured card -->
        <div class="lg:col-span-2 lg:row-span-2 card p-8 relative overflow-hidden" style="min-height:340px">
          <div class="absolute top-0 right-0 w-64 h-64 opacity-5" style="background:radial-gradient(circle,#6469f1,transparent)"></div>
          <span class="eyebrow mb-4 inline-flex">Featured</span>
          <h3 class="editorial-heading text-2xl mb-3" style="color:#141440">Smart Job & Internship Listings</h3>
          <p class="text-slate-500 leading-relaxed mb-6" style="max-width:420px">
            AI-matched opportunities from verified employers. Students see roles curated to their degree, skills, and career goals â€” not just keyword matches.
          </p>
          <!-- Mini table preview -->
          <div class="widget overflow-hidden">
            <div class="flex items-center justify-between mb-3">
              <p class="text-xs font-bold text-slate-600 uppercase tracking-wide">Live Opportunities</p>
              <span class="badge badge-teal">412 Active</span>
            </div>
            <table class="w-full text-xs">
              <thead>
                <tr class="text-slate-400 border-b border-slate-100">
                  <th class="text-left pb-2 font-semibold">Role</th>
                  <th class="text-left pb-2 font-semibold hidden sm:table-cell">Company</th>
                  <th class="text-left pb-2 font-semibold">Type</th>
                  <th class="text-left pb-2 font-semibold hidden sm:table-cell">Deadline</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-50">
                <tr v-for="r in previewRoles" :key="r.role" class="hover:bg-slate-50 cursor-pointer">
                  <td class="py-2 font-semibold text-slate-700">{{ r.role }}</td>
                  <td class="py-2 text-slate-400 hidden sm:table-cell">{{ r.co }}</td>
                  <td class="py-2"><span class="badge" :class="r.badge">{{ r.type }}</span></td>
                  <td class="py-2 text-slate-400 hidden sm:table-cell">{{ r.deadline }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <a href="#" class="btn-primary mt-5 inline-flex">Browse Opportunities</a>
        </div>

        <!-- Small card: CV Builder -->
        <div class="card p-6" style="background:linear-gradient(135deg,#f0f4ff,#e8f5f3)">
          <div class="w-10 h-10 rounded-2xl mb-4 flex items-center justify-center" style="background:#1e2063">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="3" y="2" width="14" height="16" rx="2" stroke="#fff" stroke-width="1.4"/>
              <path d="M7 7h6M7 10h6M7 13h4" stroke="#2dd4bf" stroke-width="1.4" stroke-linecap="round"/>
            </svg>
          </div>
          <h3 class="font-bold text-slate-800 mb-2">AI CV Builder</h3>
          <p class="text-sm text-slate-500 leading-relaxed">Intelligent templates, real-time feedback, and ATS optimisation for every graduate.</p>
          <a href="#" class="btn-ghost mt-4 inline-flex" style="padding:7px 14px;font-size:12px">Build Your CV â†’</a>
        </div>

        <!-- Small card: Employer Dashboard -->
        <div class="card p-6">
          <div class="w-10 h-10 rounded-2xl mb-4 flex items-center justify-center" style="background:#ccfbf1">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="5" width="16" height="12" rx="2" stroke="#14b8a6" stroke-width="1.4"/>
              <path d="M7 5V4a1 1 0 011-1h4a1 1 0 011 1v1" stroke="#14b8a6" stroke-width="1.4"/>
              <path d="M6 11h2M10 11h4" stroke="#14b8a6" stroke-width="1.2" stroke-linecap="round"/>
            </svg>
          </div>
          <h3 class="font-bold text-slate-800 mb-2">Employer Dashboard</h3>
          <p class="text-sm text-slate-500 leading-relaxed">Post roles, manage applications, and access a vetted pipeline of university talent.</p>
          <a href="#" class="btn-ghost mt-4 inline-flex" style="padding:7px 14px;font-size:12px">Partner With Us â†’</a>
        </div>

        <!-- Small card: Appointments -->
        <div class="card p-6" style="background:#1e2063;color:#fff">
          <div class="w-10 h-10 rounded-2xl mb-4 flex items-center justify-center" style="background:rgba(45,212,191,0.18)">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="4" width="16" height="14" rx="2" stroke="#2dd4bf" stroke-width="1.4"/>
              <path d="M7 2v4M13 2v4M2 9h16" stroke="#2dd4bf" stroke-width="1.4" stroke-linecap="round"/>
              <path d="M6 13h2M10 13h4" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/>
            </svg>
          </div>
          <h3 class="font-bold text-white mb-2">Appointment Booking</h3>
          <p class="text-sm leading-relaxed" style="color:rgba(255,255,255,0.6)">Students book 1-on-1 sessions with career advisors and mentors â€” instantly, online.</p>
          <a href="#" class="btn-ghost mt-4 inline-flex" style="padding:7px 14px;font-size:12px;color:#2dd4bf;border-color:rgba(45,212,191,0.3)">Book a Session â†’</a>
        </div>

        <!-- Small card: Alumni networking -->
        <div class="card p-6">
          <div class="w-10 h-10 rounded-2xl mb-4 flex items-center justify-center" style="background:#f3e8ff">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="7" cy="8" r="3" stroke="#7c3aed" stroke-width="1.4"/>
              <circle cx="13" cy="8" r="3" stroke="#7c3aed" stroke-width="1.4"/>
              <path d="M2 17c0-2.5 2-4 5-4M18 17c0-2.5-2-4-5-4M10 17c0-2-1.5-3.5-3-4" stroke="#7c3aed" stroke-width="1.4" stroke-linecap="round"/>
            </svg>
          </div>
          <h3 class="font-bold text-slate-800 mb-2">Alumni Network</h3>
          <p class="text-sm text-slate-500 leading-relaxed">Connect with graduated peers, find mentors, and expand your professional circle.</p>
          <a href="#" class="btn-ghost mt-4 inline-flex" style="padding:7px 14px;font-size:12px">Explore Network â†’</a>
        </div>

        <!-- Wide card: Resources -->
        <div class="md:col-span-2 card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div class="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style="background:#fef3c7">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 19V7a2 2 0 012-2h12a2 2 0 012 2v12M4 19h16M4 19a2 2 0 002 2h12a2 2 0 002-2" stroke="#b45309" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2" stroke="#b45309" stroke-width="1.5"/>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="font-bold text-slate-800 mb-1">Career Resources & Events</h3>
            <p class="text-sm text-slate-500">Workshops, guides, mock interviews, skill courses, and career fairs â€” all curated for your institution.</p>
          </div>
          <a href="#" class="btn-secondary flex-shrink-0" style="padding:8px 16px;font-size:13px">Browse Resources</a>
        </div>
      </div>
    </div>
  </section>

  <!-- =====================================================
       USER PATHWAYS SECTION
  ===================================================== -->
  <section class="py-24 relative overflow-hidden" style="background:#f8fafc">
    <div class="absolute inset-0 grid-dots opacity-40"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-14">
        <span class="eyebrow mb-4 inline-flex">Your Role on the Platform</span>
        <h2 class="editorial-heading mt-4" style="font-size:clamp(1.9rem,3.5vw,2.8rem);color:#141440">One platform,<br>every stakeholder.</h2>
        <p class="text-slate-500 mt-4 max-w-xl mx-auto">Whether you're launching your career, hiring top graduates, or giving back as an alumnus â€” CareerHub is built for you.</p>
      </div>

      <!-- Tab control -->
      <div class="flex justify-center mb-10">
        <div class="tab-group">
          <div v-for="role in roles" :key="role.key"
            class="tab-item" :class="{active: activeRole === role.key}"
            @click="activeRole = role.key">{{ role.label }}</div>
        </div>
      </div>

      <!-- Role content -->
      <transition name="fade" mode="out-in">
        <div :key="activeRole" class="grid lg:grid-cols-12 gap-8 items-stretch">
          <!-- Left panel -->
          <div class="lg:col-span-5 card p-8" style="background:#1e2063">
            <span class="eyebrow mb-4 inline-flex" style="background:rgba(45,212,191,0.15);color:#2dd4bf">
              {{ currentRole.eyebrow }}
            </span>
            <h3 class="editorial-heading text-2xl text-white mb-4">{{ currentRole.heading }}</h3>
            <p class="text-sm leading-relaxed mb-6" style="color:rgba(255,255,255,0.6)">{{ currentRole.description }}</p>
            <ul class="space-y-3 mb-8">
              <li v-for="feat in currentRole.features" :key="feat" class="flex items-start gap-3">
                <span class="w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style="background:rgba(45,212,191,0.15)">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="#2dd4bf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </span>
                <span class="text-sm" style="color:rgba(255,255,255,0.75)">{{ feat }}</span>
              </li>
            </ul>
            <a href="#" class="btn-teal">{{ currentRole.cta }}</a>
          </div>

          <!-- Right: mini dashboard for this role -->
          <div class="lg:col-span-7 grid grid-cols-2 gap-4">
            <div v-for="widget in currentRole.widgets" :key="widget.title" class="card p-5 hover-lift">
              <div class="flex items-center gap-2 mb-3">
                <span class="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" :style="{background: widget.iconBg}">
                  <span class="text-base">{{ widget.icon }}</span>
                </span>
                <p class="text-xs font-bold text-slate-700 uppercase tracking-wide">{{ widget.title }}</p>
              </div>
              <p class="text-2xl editorial-heading mb-1" :style="{color: widget.color}">{{ widget.value }}</p>
              <p class="text-xs text-slate-400">{{ widget.sub }}</p>
              <div class="mt-3 pt-3 border-t border-slate-100">
                <div class="w-full bg-slate-100 rounded-full h-1.5">
                  <div class="h-1.5 rounded-full" :style="{width: widget.pct + '%', background: widget.color}"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>

  <!-- =====================================================
       OPPORTUNITIES PREVIEW
  ===================================================== -->
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header row -->
      <div class="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-10">
        <div>
          <span class="eyebrow eyebrow-teal mb-4 inline-flex">Live Opportunities</span>
          <h2 class="editorial-heading mt-3" style="font-size:clamp(1.8rem,3vw,2.5rem);color:#141440">
            Your next opportunity<br>is already here.
          </h2>
        </div>
        <!-- Filter bar -->
        <div class="flex flex-wrap gap-3 items-center">
          <div class="relative">
            <svg class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="6" cy="6" r="4.5" stroke="#94a3b8" stroke-width="1.3"/>
              <path d="M9.5 9.5l2.5 2.5" stroke="#94a3b8" stroke-width="1.3" stroke-linecap="round"/>
            </svg>
            <input type="text" placeholder="Search rolesâ€¦" class="input-field pl-9" style="width:200px;padding-top:8px;padding-bottom:8px"/>
          </div>
          <select class="select-field" style="width:130px;padding-top:8px;padding-bottom:8px">
            <option>All Types</option>
            <option>Internship</option>
            <option>Graduate</option>
            <option>Fellowship</option>
          </select>
          <button class="btn-primary" style="padding:8px 16px;font-size:13px">Search</button>
        </div>
      </div>

      <!-- Opportunity type tabs -->
      <div class="tab-group mb-8 w-fit">
        <div v-for="t in oppTypes" :key="t" class="tab-item" :class="{active: activeOppType === t}" @click="activeOppType = t">{{ t }}</div>
      </div>

      <!-- Cards grid -->
      <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
        <div v-for="opp in filteredOpportunities" :key="opp.title" class="opp-card">
          <!-- Card header -->
          <div class="flex items-start justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white flex-shrink-0" :style="{background: opp.color}">
                {{ opp.company[0] }}
              </div>
              <div>
                <p class="text-xs text-slate-400 font-medium">{{ opp.company }}</p>
                <p class="text-xs text-slate-300">{{ opp.location }}</p>
              </div>
            </div>
            <span class="badge" :class="opp.typeBadge">{{ opp.type }}</span>
          </div>

          <!-- Role -->
          <h4 class="font-bold text-slate-800 mb-2 leading-snug">{{ opp.title }}</h4>
          <p class="text-xs text-slate-400 leading-relaxed mb-4">{{ opp.desc }}</p>

          <!-- Meta chips -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tag in opp.tags" :key="tag" class="badge badge-slate">{{ tag }}</span>
          </div>

          <!-- Footer -->
          <div class="flex items-center justify-between pt-3 border-t border-slate-100">
            <div class="flex items-center gap-1.5 text-xs text-slate-400">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1.5" y="2.5" width="9" height="8" rx="1" stroke="#94a3b8" stroke-width="1"/><path d="M4 1.5v2M8 1.5v2M1.5 5.5h9" stroke="#94a3b8" stroke-width="1" stroke-linecap="round"/></svg>
              Closes {{ opp.deadline }}
            </div>
            <a href="#" class="btn-ghost" style="padding:5px 12px;font-size:11px">Apply â†’</a>
          </div>
        </div>
      </div>

      <div class="text-center mt-10">
        <a href="#" class="btn-secondary">View All 412 Opportunities</a>
      </div>
    </div>
  </section>

  <!-- =====================================================
       CAREER TOOLS SECTION â€” EDITORIAL LAYOUT
  ===================================================== -->
  <section class="py-24 relative overflow-hidden" style="background:#141440">
    <div class="absolute inset-0 opacity-10" style="background:radial-gradient(ellipse at 70% 50%,#6469f1,transparent 60%)"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <!-- Split header -->
      <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <span class="eyebrow eyebrow-teal mb-4 inline-flex">Career Tools</span>
          <div class="section-line mb-5"></div>
          <h2 class="editorial-heading text-white" style="font-size:clamp(1.9rem,3.5vw,2.8rem)">
            Tools that actually<br>move careers forward.
          </h2>
        </div>
        <p class="text-lg leading-relaxed" style="color:rgba(255,255,255,0.5)">
          From crafting your first CV to preparing for final-round interviews â€” every tool is designed with the realities of early-career job seeking in mind.
        </p>
      </div>

      <!-- Tools grid â€” alternating weight -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div v-for="(tool, i) in careerTools" :key="tool.name"
          class="card-dark p-7 relative overflow-hidden hover-lift"
          :class="i === 0 ? 'md:col-span-2 lg:col-span-1' : ''">
          <div class="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full" :style="{background: tool.accent, filter:'blur(20px)'}"></div>
          <div class="w-12 h-12 rounded-2xl mb-5 flex items-center justify-center" :style="{background: tool.iconBg}">
            <span class="text-2xl">{{ tool.icon }}</span>
          </div>
          <h3 class="font-bold text-white text-lg mb-2">{{ tool.name }}</h3>
          <p class="text-sm leading-relaxed mb-4" style="color:rgba(255,255,255,0.55)">{{ tool.desc }}</p>
          <div class="flex flex-wrap gap-2 mb-5">
            <span v-for="tag in tool.tags" :key="tag" class="badge" style="background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.6)">{{ tag }}</span>
          </div>
          <a href="#" class="btn-ghost" style="padding:7px 14px;font-size:12px;color:#2dd4bf;border-color:rgba(45,212,191,0.25)">
            {{ tool.cta }}
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- =====================================================
       DESIGN SYSTEM PREVIEW SECTION
  ===================================================== -->
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14">
        <span class="eyebrow mb-4 inline-flex">Platform Design System</span>
        <h2 class="editorial-heading mt-4" style="font-size:clamp(1.8rem,3vw,2.4rem);color:#141440">Built with a unified<br>visual language.</h2>
        <p class="text-slate-500 mt-4 max-w-xl mx-auto">Every page, dashboard, and interaction follows the same design principles â€” consistent, credible, and carefully crafted.</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Buttons showcase -->
        <div class="card p-6">
          <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Buttons</p>
          <div class="flex flex-wrap gap-3">
            <button class="btn-primary">Primary</button>
            <button class="btn-secondary">Secondary</button>
            <button class="btn-ghost">Ghost</button>
            <button class="btn-teal">Accent</button>
          </div>
        </div>

        <!-- Badges showcase -->
        <div class="card p-6">
          <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Badges & Tags</p>
          <div class="flex flex-wrap gap-2">
            <span class="badge badge-navy">Full-time</span>
            <span class="badge badge-teal">Internship</span>
            <span class="badge badge-amber">Fellowship</span>
            <span class="badge badge-rose">Urgent</span>
            <span class="badge badge-green">Hired</span>
            <span class="badge badge-purple">Alumni</span>
            <span class="badge badge-slate">Remote</span>
          </div>
        </div>

        <!-- Eyebrows / labels -->
        <div class="card p-6">
          <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Section Labels</p>
          <div class="flex flex-col gap-3">
            <span class="eyebrow inline-flex w-fit">Platform Capabilities</span>
            <span class="eyebrow eyebrow-teal inline-flex w-fit">Live Opportunities</span>
            <span class="eyebrow eyebrow-amber inline-flex w-fit">Featured Resource</span>
          </div>
        </div>

        <!-- Form controls -->
        <div class="card p-6">
          <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Form Controls</p>
          <div class="space-y-3">
            <input type="text" class="input-field" placeholder="Search by role or companyâ€¦"/>
            <select class="select-field">
              <option>Select department</option>
              <option>Engineering</option>
              <option>Finance</option>
            </select>
          </div>
        </div>

        <!-- Alert / banner -->
        <div class="card p-6">
          <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Info Banners</p>
          <div class="space-y-3">
            <div class="info-banner">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="flex-shrink-0 mt-0.5"><circle cx="8" cy="8" r="6.5" stroke="#3233a3" stroke-width="1.2"/><path d="M8 7v4M8 5.5v.5" stroke="#3233a3" stroke-width="1.2" stroke-linecap="round"/></svg>
              <span>Your CV profile is 78% complete. Add your skills to attract more employers.</span>
            </div>
            <div class="info-banner" style="background:#dcfce7;border-color:#86efac;color:#15803d">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="flex-shrink-0 mt-0.5"><circle cx="8" cy="8" r="6.5" stroke="#15803d" stroke-width="1.2"/><path d="M5 8l2.5 2.5L11 6" stroke="#15803d" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <span>Application submitted! Deloitte will review within 5 business days.</span>
            </div>
          </div>
        </div>

        <!-- Widget preview -->
        <div class="card p-6">
          <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Dashboard Widgets</p>
          <div class="space-y-3">
            <div class="widget">
              <div class="flex items-center justify-between mb-2">
                <p class="text-xs font-bold text-slate-600">Applications Sent</p>
                <span class="badge badge-teal">â†‘ 12%</span>
              </div>
              <p class="text-2xl editorial-heading" style="color:#1e2063">24</p>
              <div class="w-full bg-slate-100 rounded-full h-1.5 mt-2">
                <div class="h-1.5 rounded-full" style="width:60%;background:#6469f1"></div>
              </div>
            </div>
            <div class="widget">
              <div class="flex items-center justify-between mb-2">
                <p class="text-xs font-bold text-slate-600">Interview Invites</p>
                <span class="badge badge-green">Active</span>
              </div>
              <p class="text-2xl editorial-heading" style="color:#1e2063">7</p>
              <div class="w-full bg-slate-100 rounded-full h-1.5 mt-2">
                <div class="h-1.5 rounded-full" style="width:35%;background:#14b8a6"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty state -->
        <div class="card p-6 md:col-span-2 lg:col-span-1">
          <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Empty State</p>
          <div class="empty-state border border-dashed border-slate-200 rounded-xl" style="padding:24px">
            <div class="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 13h6M12 10v6M12 21a9 9 0 110-18 9 9 0 010 18z" stroke="#cbd5e1" stroke-width="1.5" stroke-linecap="round"/></svg>
            </div>
            <p class="text-sm font-semibold text-slate-400 mb-1">No saved jobs yet</p>
            <p class="text-xs text-slate-300 mb-3">Bookmark opportunities to review them later.</p>
            <button class="btn-secondary" style="padding:7px 14px;font-size:12px">Explore Jobs</button>
          </div>
        </div>

        <!-- Profile card preview -->
        <div class="card p-6 md:col-span-2">
          <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Profile / Alumni Cards</p>
          <div class="grid sm:grid-cols-2 gap-4">
            <div v-for="person in sampleProfiles" :key="person.name" class="flex items-start gap-3 p-4 rounded-xl border border-slate-100 hover-lift">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white flex-shrink-0" :style="{background: person.color}">
                {{ person.name[0] }}
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between gap-2 mb-0.5">
                  <p class="text-sm font-bold text-slate-800 truncate">{{ person.name }}</p>
                  <span class="badge" :class="person.badge">{{ person.role }}</span>
                </div>
                <p class="text-xs text-slate-400">{{ person.company }}</p>
                <p class="text-xs text-slate-300 mt-0.5">Class of {{ person.year }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- =====================================================
       TESTIMONIALS / SUCCESS STORIES
  ===================================================== -->
  <section class="py-24 relative overflow-hidden" style="background:#f8fafc">
    <div class="absolute inset-0 grid-dots opacity-30"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-12 gap-10 items-start mb-14">
        <div class="lg:col-span-5">
          <span class="eyebrow mb-4 inline-flex">Success Stories</span>
          <div class="section-line mb-5"></div>
          <h2 class="editorial-heading" style="font-size:clamp(1.9rem,3.5vw,2.6rem);color:#141440">
            Real outcomes.<br>Real people.
          </h2>
          <p class="text-slate-500 mt-4 leading-relaxed">
            Thousands of students and alumni have used CareerHub to land their dream roles, connect with mentors, and build lasting careers.
          </p>
        </div>
        <div class="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4 lg:mt-2">
          <div v-for="s in successStats" :key="s.label" class="card p-4 text-center">
            <p class="editorial-heading text-2xl mb-1" style="color:#1e2063">{{ s.value }}</p>
            <p class="text-xs text-slate-400 font-medium">{{ s.label }}</p>
          </div>
        </div>
      </div>

      <!-- Testimonials grid â€” varied layout -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <!-- Large testimonial -->
        <div class="card p-7 lg:row-span-2 flex flex-col" style="background:#1e2063">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center text-base font-bold text-white flex-shrink-0" style="background:#6469f1">AO</div>
            <div>
              <p class="font-bold text-white">Amara Okonkwo</p>
              <p class="text-xs" style="color:rgba(255,255,255,0.5)">Software Engineer, Google</p>
              <p class="text-xs" style="color:rgba(255,255,255,0.35)">Class of 2023 Â· Unilag</p>
            </div>
          </div>
          <blockquote class="flex-1 text-sm leading-relaxed mb-5" style="color:rgba(255,255,255,0.7)">
            "CareerHub completely changed how I approached my job search. The AI CV tool helped me reframe my experience, and within three weeks I had interview calls from companies I genuinely admired. I didn't expect to land a role at Google in my first year out. The platform made it feel achievable."
          </blockquote>
          <div class="pt-4 border-t" style="border-color:rgba(255,255,255,0.08)">
            <div class="flex items-center gap-2">
              <span class="badge" style="background:rgba(45,212,191,0.18);color:#2dd4bf">Placed via CareerHub</span>
              <span class="text-xs" style="color:rgba(255,255,255,0.3)">March 2024</span>
            </div>
          </div>
        </div>

        <!-- Regular testimonial -->
        <div v-for="t in testimonials" :key="t.name" class="card p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white flex-shrink-0" :style="{background: t.color}">
              {{ t.name[0] }}
            </div>
            <div>
              <p class="text-sm font-bold text-slate-800">{{ t.name }}</p>
              <p class="text-xs text-slate-400">{{ t.role }}</p>
              <p class="text-xs text-slate-300">{{ t.org }}</p>
            </div>
          </div>
          <p class="text-sm text-slate-600 leading-relaxed mb-3">{{ t.quote }}</p>
          <span class="badge" :class="t.badge">{{ t.tag }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- =====================================================
       FINAL CTA SECTION
  ===================================================== -->
  <section class="py-24 relative overflow-hidden" style="background:#0f1240">
    <div class="absolute inset-0" style="background:linear-gradient(135deg,#0f1240,#1a1a5e 50%,#0d3b6e)"></div>
    <div class="absolute top-0 right-0 w-2/3 h-full opacity-15" style="background:radial-gradient(ellipse at 90% 20%,#6469f1,transparent 55%)"></div>
    <div class="absolute bottom-0 left-0 w-1/3 h-2/3 opacity-10" style="background:radial-gradient(ellipse at 10% 90%,#2dd4bf,transparent 55%)"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16">
        <span class="eyebrow mb-5 inline-flex" style="background:rgba(45,212,191,0.15);color:#2dd4bf">Get Started Today</span>
        <h2 class="editorial-heading text-white mt-4 mb-6" style="font-size:clamp(2.2rem,4vw,3.5rem);max-width:700px;margin-left:auto;margin-right:auto">
          Your career journey<br>deserves a serious platform.
        </h2>
        <p class="max-w-xl mx-auto leading-relaxed mb-10" style="color:rgba(255,255,255,0.55);font-size:1.05rem">
          Whether you're a student taking your first step, an employer seeking talent, or an alumnus looking to give back â€” join thousands already on CareerHub.
        </p>
      </div>

      <!-- Three CTA cards -->
      <div class="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        <div v-for="cta in ctaCards" :key="cta.heading" class="card-dark p-7 text-center hover-lift">
          <div class="w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center" :style="{background: cta.iconBg}">
            <span class="text-2xl">{{ cta.icon }}</span>
          </div>
          <h3 class="font-bold text-white mb-2">{{ cta.heading }}</h3>
          <p class="text-sm mb-5" style="color:rgba(255,255,255,0.5)">{{ cta.desc }}</p>
          <a href="#" class="btn-ghost w-full text-center justify-center" :style="{color: cta.accentColor, borderColor: cta.borderColor}">
            {{ cta.action }}
          </a>
        </div>
      </div>

      <p class="text-center text-xs mt-10" style="color:rgba(255,255,255,0.25)">
        Free for students Â· No credit card required Â· Institutional SSO support
      </p>
    </div>
  </section>

  <!-- =====================================================
       FOOTER
  ===================================================== -->
  <footer style="background:#0b0e2f;color:rgba(255,255,255,0.5)">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Top: Logo + description + links -->
      <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        <!-- Brand -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-9 h-9 rounded-xl flex items-center justify-center" style="background:#1e2063">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L18 6.5V10C18 14.42 14.5 18.62 10 19.87C5.5 18.62 2 14.42 2 10V6.5L10 2Z" fill="#2dd4bf"/>
                <path d="M7 10L9 12L13 8" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span class="editorial-heading text-lg text-white">CareerHub</span>
          </div>
          <p class="text-sm leading-relaxed mb-5" style="max-width:260px">
            The university career centre platform built for the next generation of African professionals.
          </p>
          <div class="flex gap-3">
            <a v-for="social in socials" :key="social" href="#"
              class="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
              style="background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.5)">
              <span class="text-xs font-bold">{{ social }}</span>
            </a>
          </div>
        </div>

        <!-- Link groups -->
        <div v-for="group in footerGroups" :key="group.heading">
          <p class="text-xs font-bold uppercase tracking-widest text-white mb-4">{{ group.heading }}</p>
          <ul class="space-y-2.5">
            <li v-for="link in group.links" :key="link">
              <a href="#" class="text-sm hover:text-white transition-colors">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style="border-color:rgba(255,255,255,0.06)">
        <p class="text-xs">Â© 2025 CareerHub. All rights reserved.</p>
        <div class="flex gap-6 text-xs">
          <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" class="hover:text-white transition-colors">Cookie Settings</a>
        </div>
      </div>
    </div>
  </footer>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const scrolled = ref(false);
    const mobileOpen = ref(false);
    const activeRole = ref('student');
    const activeOppType = ref('All');
const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

    onMounted(() => {
      handleScroll();
      window.addEventListener('scroll', handleScroll);
    });

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

    const heroStats = [
      { label: 'Applications', value: '24', change: 'â†‘ 4 this week', up: true },
      { label: 'Profile Views', value: '186', change: 'â†‘ 22%', up: true },
      { label: 'Saved Jobs', value: '12', change: 'â†‘ 3 new', up: true },
    ];

    const heroJobs = [
      { title: 'Product Analyst', co: 'Paystack', loc: 'Lagos', type: 'Full-time', badge: 'badge-navy', color: '#6469f1' },
      { title: 'Data Science Intern', co: 'Flutterwave', loc: 'Remote', type: 'Internship', badge: 'badge-teal', color: '#14b8a6' },
      { title: 'Graduate Engineer', co: 'Shell', loc: 'PH', type: 'Graduate', badge: 'badge-amber', color: '#d97706' },
    ];

    const impactStats = [
      { value: '14,200+', label: 'Students Registered', sub: 'Across 8 universities' },
      { value: '3,800+', label: 'Opportunities Listed', sub: 'From 420+ employers' },
      { value: '1,204', label: 'Successful Placements', sub: 'In the last 12 months' },
      { value: '98%', label: 'Employer Satisfaction', sub: 'Verified talent pipeline' },
    ];

    const previewRoles = [
      { role: 'Product Manager', co: 'Paystack', type: 'Full-time', badge: 'badge-navy', deadline: '20 Jan' },
      { role: 'UX Designer', co: 'Andela', type: 'Contract', badge: 'badge-purple', deadline: '25 Jan' },
      { role: 'Data Intern', co: 'Access Bank', type: 'Internship', badge: 'badge-teal', deadline: '28 Jan' },
      { role: 'Policy Fellow', co: 'TechNaija', type: 'Fellowship', badge: 'badge-amber', deadline: '1 Feb' },
    ];

    const roles = [
      { key: 'student', label: 'Students' },
      { key: 'employer', label: 'Employers' },
      { key: 'alumni', label: 'Alumni' },
      { key: 'officer', label: 'Career Officers' },
    ];

    const roleData = {
      student: {
        eyebrow: 'Student Portal',
        heading: 'Launch your career with confidence.',
        description: 'Access personalised job matches, build a professional CV, book advisory sessions, and track your progress â€” all from one dashboard.',
        features: ['AI-powered job and internship matching', 'Professional CV builder with ATS scoring', 'Book 1-on-1 career advisory sessions', 'Attend virtual and campus career events', 'Connect with alumni mentors in your field'],
        cta: 'Create Student Profile',
        widgets: [
          { title: 'Job Matches', value: '48', sub: 'Updated daily based on your profile', icon: 'ðŸŽ¯', iconBg: '#e0e9ff', color: '#1e2063', pct: 80 },
          { title: 'CV Score', value: '78%', sub: 'Add skills to boost visibility', icon: 'ðŸ“„', iconBg: '#ccfbf1', color: '#14b8a6', pct: 78 },
          { title: 'Sessions Booked', value: '3', sub: 'Next: Wednesday 10am', icon: 'ðŸ“…', iconBg: '#fef3c7', color: '#d97706', pct: 60 },
          { title: 'Applications', value: '12', sub: '3 under review this week', icon: 'ðŸ“¨', iconBg: '#f3e8ff', color: '#7e22ce', pct: 50 },
        ]
      },
      employer: {
        eyebrow: 'Employer Portal',
        heading: 'Access a verified pool of graduate talent.',
        description: 'Post roles, review shortlisted candidates, and engage with a pre-vetted student and alumni pipeline. No cold sourcing required.',
        features: ['Post internship and graduate roles instantly', 'AI-sorted candidate shortlists by role fit', 'Campus engagement and event tools', 'Employer branding page on the portal', 'Analytics dashboard for all your listings'],
        cta: 'Partner as an Employer',
        widgets: [
          { title: 'Active Listings', value: '7', sub: 'Across 3 role types', icon: 'ðŸ“‹', iconBg: '#e0e9ff', color: '#1e2063', pct: 70 },
          { title: 'Applicants', value: '214', sub: '48 shortlisted by AI', icon: 'ðŸ‘¥', iconBg: '#ccfbf1', color: '#14b8a6', pct: 90 },
          { title: 'Avg Time to Hire', value: '14d', sub: '31% faster than market', icon: 'âš¡', iconBg: '#fef3c7', color: '#d97706', pct: 68 },
          { title: 'Profile Views', value: '1.4k', sub: 'In the last 30 days', icon: 'ðŸ‘', iconBg: '#f3e8ff', color: '#7e22ce', pct: 55 },
        ]
      },
      alumni: {
        eyebrow: 'Alumni Network',
        heading: 'Give back. Stay connected. Keep growing.',
        description: 'Offer mentorship, post opportunities, and stay engaged with your alma mater and the generation coming after you.',
        features: ['List yourself as a mentor in your field', 'Post exclusive alumni opportunities', 'Join alumni chapters and industry groups', 'Offer referrals within the network', 'Access institutional career events'],
        cta: 'Join Alumni Network',
        widgets: [
          { title: 'Mentees', value: '6', sub: 'Active mentoring relationships', icon: 'ðŸ¤', iconBg: '#f3e8ff', color: '#7e22ce', pct: 60 },
          { title: 'Referrals Given', value: '18', sub: '4 led to placements', icon: 'ðŸ”—', iconBg: '#ccfbf1', color: '#14b8a6', pct: 75 },
          { title: 'Network Size', value: '340', sub: 'Alumni connections', icon: 'ðŸŒ', iconBg: '#e0e9ff', color: '#1e2063', pct: 85 },
          { title: 'Events Attended', value: '11', sub: 'In the last year', icon: 'ðŸŽ“', iconBg: '#fef3c7', color: '#d97706', pct: 45 },
        ]
      },
      officer: {
        eyebrow: 'Career Centre',
        heading: 'Manage your career centre at scale.',
        description: 'Run appointments, monitor student engagement, manage employer relationships, and produce impact reports â€” from one admin dashboard.',
        features: ['Full appointment booking management system', 'Student progress tracking and analytics', 'Employer relationship management tools', 'Event scheduling and attendance tracking', 'Institution-wide reporting and export'],
        cta: 'Set Up Your Centre',
        widgets: [
          { title: 'Students Active', value: '3.2k', sub: 'This academic session', icon: 'ðŸŽ“', iconBg: '#e0e9ff', color: '#1e2063', pct: 80 },
          { title: 'Appointments', value: '184', sub: 'Booked this month', icon: 'ðŸ“…', iconBg: '#ccfbf1', color: '#14b8a6', pct: 65 },
          { title: 'Employer Partners', value: '62', sub: 'Active across 8 sectors', icon: 'ðŸ¢', iconBg: '#fef3c7', color: '#d97706', pct: 70 },
          { title: 'Placement Rate', value: '74%', sub: 'Year-on-year +9%', icon: 'ðŸ“ˆ', iconBg: '#f3e8ff', color: '#7e22ce', pct: 74 },
        ]
      },
    };

    const currentRole = computed(() => roleData[activeRole.value]);

    const oppTypes = ['All', 'Internships', 'Graduate', 'Scholarships', 'Fellowships'];
    const opportunities = [
      { title: 'Product Design Intern', company: 'Flutterwave', location: 'Lagos, Nigeria', type: 'Internship', typeBadge: 'badge-teal', color: '#14b8a6', desc: 'Join the product team to design customer-facing payment flows. Open to penultimate and final-year design students.', tags: ['Design', 'Figma', 'Remote-friendly'], deadline: 'Feb 10', category: 'Internships' },
      { title: 'Graduate Software Engineer', company: 'MTN Nigeria', location: 'Abuja, Nigeria', type: 'Graduate', typeBadge: 'badge-navy', color: '#1e2063', desc: 'A 24-month structured graduate programme in software engineering with mentorship from senior engineers.', tags: ['Engineering', 'Full Stack', 'Structured'], deadline: 'Feb 15', category: 'Graduate' },
      { title: 'Commonwealth Scholarship', company: 'Commonwealth Foundation', location: 'United Kingdom', type: 'Scholarship', typeBadge: 'badge-amber', color: '#d97706', desc: 'Fully funded postgraduate scholarships for Nigerian students in the UK. Covers tuition, accommodation, and living expenses.', tags: ['Fully Funded', 'Masters', 'PhD'], deadline: 'Mar 1', category: 'Scholarships' },
      { title: 'Policy Innovation Fellow', company: 'NPC Nigeria', location: 'Abuja, Nigeria', type: 'Fellowship', typeBadge: 'badge-purple', color: '#7e22ce', desc: 'A competitive 6-month fellowship for graduates passionate about public policy and governance innovation.', tags: ['Policy', 'Governance', 'Stipend'], deadline: 'Feb 20', category: 'Fellowships' },
      { title: 'Data Science Intern', company: 'Access Bank', location: 'Lagos, Nigeria', type: 'Internship', typeBadge: 'badge-teal', color: '#0d9488', desc: 'Work with the analytics team building predictive models to support retail banking operations.', tags: ['Python', 'SQL', 'Analytics'], deadline: 'Feb 12', category: 'Internships' },
      { title: 'Finance Graduate Trainee', company: 'PwC Nigeria', location: 'Lagos, Nigeria', type: 'Graduate', typeBadge: 'badge-navy', color: '#3233a3', desc: "Join PwC's graduate programme in audit and assurance. ICAN/ACCA sponsorship included.", tags: ['Finance', 'Audit', 'ICAN'], deadline: 'Mar 5', category: 'Graduate' },
    ];

    const filteredOpportunities = computed(() => {
      if (activeOppType.value === 'All') return opportunities;
      return opportunities.filter(o => o.category === activeOppType.value);
    });

    const careerTools = [
      { name: 'AI-Powered CV Builder', desc: 'Build a professional, ATS-optimised CV in minutes. Get real-time feedback, tailored language suggestions, and a confidence score before you send.', icon: 'ðŸ“„', accent: '#6469f1', iconBg: 'rgba(100,105,241,0.18)', tags: ['ATS Optimised', 'Real-time Feedback', 'PDF Export'], cta: 'Build Your CV â†’' },
      { name: 'Mock Interview Simulator', desc: 'Practice with industry-specific questions, receive AI feedback on your responses, and build interview confidence before the real thing.', icon: 'ðŸŽ¤', accent: '#2dd4bf', iconBg: 'rgba(45,212,191,0.18)', tags: ['AI Feedback', 'Video Support', 'Role-specific'], cta: 'Start Practicing â†’' },
      { name: 'Career Pathways Guide', desc: 'Explore structured career roadmaps by field, industry, or qualification â€” see exactly what it takes to reach your goal.', icon: 'ðŸ—ºï¸', accent: '#d97706', iconBg: 'rgba(217,119,6,0.18)', tags: ['Roadmaps', 'Sector Guides', 'Salary Data'], cta: 'Explore Pathways â†’' },
      { name: 'Skill Development Hub', desc: 'Curated learning resources, certifications, and short courses aligned with the skills employers actually demand.', icon: 'ðŸ…', accent: '#7e22ce', iconBg: 'rgba(126,34,206,0.18)', tags: ['Certifications', 'Curated Courses', 'Skills Map'], cta: 'Develop Skills â†’' },
      { name: 'Events & Career Fairs', desc: 'Register for on-campus career fairs, virtual employer sessions, networking evenings, and alumni roundtables.', icon: 'ðŸ—“ï¸', accent: '#dc2626', iconBg: 'rgba(220,38,38,0.15)', tags: ['Virtual & In-Person', 'Employer Talks', 'Networking'], cta: 'View Events â†’' },
    ];

    const successStats = [
      { value: '1,204', label: 'Students Placed' },
      { value: '94%', label: 'Would Recommend' },
      { value: '3.2x', label: 'Faster Placement' },
    ];

    const testimonials = [
      { name: 'Chukwuemeka Eze', role: 'Investment Analyst, Coronation', org: 'OAU Â· Class of 2022', quote: 'The employer connections alone were worth everything. I got my internship through a CareerHub event and converted it to a full offer.', color: '#3233a3', badge: 'badge-navy', tag: 'Employer Connection' },
      { name: 'Zainab Mahmoud', role: 'HR Director, NestlÃ© Nigeria', org: 'Employer Partner', quote: "We've hired 14 graduates through CareerHub in 18 months. The candidate quality and the platform's ease of use are genuinely impressive.", color: '#14b8a6', badge: 'badge-teal', tag: 'Employer Testimonial' },
      { name: 'Fatimah Al-Hassan', role: 'Commonwealth Scholar, LSE', org: 'ABU Â· Class of 2023', quote: 'I found the scholarship on CareerHub, used the CV tool to polish my application, and landed a full scholarship to the LSE. I owe the platform a lot.', color: '#7e22ce', badge: 'badge-purple', tag: 'Scholarship Recipient' },
      { name: 'Tunde Adeyemi', role: 'Career Officer, Covenant University', org: 'Career Centre', quote: "Managing 4,000 students' career journeys used to be chaotic. CareerHub gave our centre structure, visibility, and measurable outcomes.", color: '#d97706', badge: 'badge-amber', tag: 'Career Officer' },
    ];

    const sampleProfiles = [
      { name: 'Ngozi Obi', company: 'Google Â· Lagos', role: 'Alumni', badge: 'badge-purple', year: '2021', color: '#6469f1' },
      { name: 'Kola Adewale', company: 'Shell Â· Port Harcourt', role: 'Mentor', badge: 'badge-teal', year: '2019', color: '#14b8a6' },
      { name: 'Yewande Bello', company: 'Jumia Â· Abuja', role: 'Alumni', badge: 'badge-purple', year: '2022', color: '#d97706' },
      { name: 'Ibrahim Sani', company: 'Access Bank Â· Lagos', role: 'Mentor', badge: 'badge-teal', year: '2018', color: '#3233a3' },
    ];

    const ctaCards = [
      { heading: 'For Students', desc: 'Create your profile, find opportunities, and track your career progress.', icon: 'ðŸŽ“', iconBg: 'rgba(100,105,241,0.18)', action: 'Create Student Account', accentColor: '#a5bafc', borderColor: 'rgba(165,186,252,0.3)' },
      { heading: 'For Employers', desc: 'Post roles, access vetted talent, and build your campus presence.', icon: 'ðŸ¢', iconBg: 'rgba(45,212,191,0.18)', action: 'Become a Partner', accentColor: '#2dd4bf', borderColor: 'rgba(45,212,191,0.3)' },
      { heading: 'For Alumni', desc: 'Mentor students, share opportunities, and stay connected.', icon: 'ðŸŒ', iconBg: 'rgba(217,119,6,0.15)', action: 'Join the Network', accentColor: '#fbbf24', borderColor: 'rgba(251,191,36,0.25)' },
    ];

    const socials = ['Tw', 'Li', 'Ig', 'Fb'];

    const footerGroups = [
      { heading: 'Platform', links: ['Opportunities', 'CV Builder', 'Appointments', 'Resources', 'Events'] },
      { heading: 'For Employers', links: ['Post a Role', 'Employer Dashboard', 'Campus Events', 'Pricing', 'Partner Stories'] },
      { heading: 'Institutions', links: ['Register Your University', 'Career Centre Setup', 'Reporting', 'API Access', 'Support'] },
    ]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

/* =====================================================
       DESIGN SYSTEM â€” CSS VARIABLES & GLOBAL TOKENS
    ===================================================== */
    .sample-two-page {
      --color-navy-950: #141440;
      --color-navy-900: #1e2063;
      --color-navy-800: #3233a3;
      --color-navy-700: #3d3bc9;
      --color-teal-400: #2dd4bf;
      --color-teal-500: #14b8a6;
      --color-slate-50: #f8fafc;
      --color-slate-100: #f1f5f9;
      --color-slate-200: #e2e8f0;
      --color-slate-400: #94a3b8;
      --color-slate-600: #475569;
      --color-slate-700: #334155;
      --color-slate-800: #1e293b;
      --color-white: #ffffff;

      --shadow-card: 0 1px 3px rgba(0,0,0,0.05), 0 8px 32px rgba(20,20,64,0.06);
      --shadow-card-hover: 0 4px 6px rgba(0,0,0,0.04), 0 16px 48px rgba(20,20,64,0.12);
      --shadow-hero: 0 20px 80px rgba(20,20,64,0.18);
      --radius-card: 16px;
      --radius-xl: 20px;
      --radius-2xl: 24px;
      min-height: 100vh;
      background: #f8fafc;
      color: #1e293b;
      font-family: 'Poppins', sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    html { scroll-behavior: smooth; }

    /* =====================================================
       DESIGN TOKENS â€” COMPONENT CLASSES
    ===================================================== */

    /* Buttons */
    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 11px 24px;
      background: #1e2063;
      color: #fff;
      border-radius: 10px;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 14px;
      letter-spacing: -0.01em;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .btn-primary:hover {
      background: #141440;
      transform: translateY(-1px);
      box-shadow: 0 8px 24px rgba(30,32,99,0.28);
    }

    .btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 11px 24px;
      background: #f1f5f9;
      color: #1e293b;
      border-radius: 10px;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 14px;
      letter-spacing: -0.01em;
      border: 1.5px solid #e2e8f0;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .btn-secondary:hover {
      background: #e2e8f0;
      border-color: #cbd5e1;
      transform: translateY(-1px);
    }

    .btn-ghost {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 11px 24px;
      background: transparent;
      color: #1e2063;
      border-radius: 10px;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 14px;
      letter-spacing: -0.01em;
      border: 1.5px solid #c7d7fe;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .btn-ghost:hover {
      background: #e0e9ff;
    }

    .btn-teal {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 11px 24px;
      background: #14b8a6;
      color: #fff;
      border-radius: 10px;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 14px;
      letter-spacing: -0.01em;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .btn-teal:hover {
      background: #0d9488;
      transform: translateY(-1px);
      box-shadow: 0 8px 24px rgba(20,184,166,0.32);
    }

    /* Section eyebrow label */
    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 5px 14px;
      background: #e0e9ff;
      color: #3233a3;
      border-radius: 100px;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .eyebrow-teal {
      background: #ccfbf1;
      color: #0d9488;
    }

    .eyebrow-amber {
      background: #fef3c7;
      color: #b45309;
    }

    /* Cards */
    .card {
      background: #fff;
      border-radius: var(--radius-card);
      border: 1px solid #e2e8f0;
      box-shadow: var(--shadow-card);
      transition: box-shadow 0.2s ease, transform 0.2s ease;
    }
    .card:hover {
      box-shadow: var(--shadow-card-hover);
      transform: translateY(-2px);
    }

    .card-dark {
      background: #1e2063;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: var(--radius-card);
      color: #fff;
    }

    /* Badges */
    .badge {
      display: inline-flex;
      align-items: center;
      padding: 3px 10px;
      border-radius: 100px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .badge-navy { background: #e0e9ff; color: #3233a3; }
    .badge-teal { background: #ccfbf1; color: #0d9488; }
    .badge-amber { background: #fef3c7; color: #b45309; }
    .badge-rose { background: #ffe4e6; color: #be123c; }
    .badge-slate { background: #f1f5f9; color: #475569; }
    .badge-green { background: #dcfce7; color: #15803d; }
    .badge-purple { background: #f3e8ff; color: #7e22ce; }

    /* Input fields */
    .input-field {
      width: 100%;
      padding: 10px 14px;
      background: #fff;
      border: 1.5px solid #e2e8f0;
      border-radius: 10px;
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      color: #1e293b;
      outline: none;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }
    .input-field:focus {
      border-color: #6469f1;
      box-shadow: 0 0 0 3px rgba(100,105,241,0.12);
    }
    .input-field::placeholder { color: #94a3b8; }

    .select-field {
      width: 100%;
      padding: 10px 14px;
      background: #fff;
      border: 1.5px solid #e2e8f0;
      border-radius: 10px;
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      color: #1e293b;
      outline: none;
      cursor: pointer;
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2394a3b8' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 14px center;
      transition: border-color 0.2s ease;
    }
    .select-field:focus { border-color: #6469f1; }

    /* Opportunity card */
    .opp-card {
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 14px;
      padding: 20px;
      transition: all 0.2s ease;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }
    .opp-card:hover {
      border-color: #a5bafc;
      box-shadow: 0 8px 32px rgba(30,32,99,0.1);
      transform: translateY(-2px);
    }

    /* Stat card */
    .stat-card {
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 14px;
      padding: 24px;
      backdrop-filter: blur(10px);
    }

    /* Dashboard widget */
    .widget {
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 14px;
      padding: 18px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    }

    /* Info banner */
    .info-banner {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 14px 18px;
      background: #e0e9ff;
      border: 1px solid #a5bafc;
      border-radius: 12px;
      font-size: 14px;
      color: #3233a3;
    }

    /* Tab / segmented control */
    .tab-group {
      display: flex;
      background: #f1f5f9;
      border-radius: 10px;
      padding: 4px;
      gap: 2px;
    }
    .tab-item {
      padding: 8px 18px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      color: #64748b;
    }
    .tab-item.active {
      background: #fff;
      color: #1e2063;
      box-shadow: 0 1px 4px rgba(0,0,0,0.1);
    }
    .tab-item:hover:not(.active) { color: #334155; }

    /* Empty state */
    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40px;
      text-align: center;
      color: #94a3b8;
    }

    /* Navbar styles */
    .nav-link {
      font-size: 14px;
      font-weight: 500;
      color: #475569;
      text-decoration: none;
      padding: 6px 4px;
      border-bottom: 2px solid transparent;
      transition: color 0.15s ease, border-color 0.15s ease;
      white-space: nowrap;
    }
    .nav-link:hover { color: #1e2063; border-bottom-color: #6469f1; }

    /* Grid patterns */
    .grid-dots {
      background-image: radial-gradient(circle, #c7d7fe 1px, transparent 1px);
      background-size: 24px 24px;
    }

    /* Section decorators */
    .section-line {
      width: 48px;
      height: 3px;
      background: linear-gradient(90deg, #6469f1, #2dd4bf);
      border-radius: 100px;
    }

    /* Editorial heading */
    .editorial-heading {
      font-family: 'Poppins', sans-serif;
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1.1;
    }

    /* Scrollbar */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #f8fafc; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 100px; }

    /* Transitions */
    .fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
    .fade-enter-from, .fade-leave-to { opacity: 0; }

    /* Hero dashboard mockup */
    .hero-dashboard {
      background: #fff;
      border-radius: 20px;
      box-shadow: 0 32px 80px rgba(20,20,64,0.18), 0 0 0 1px rgba(20,20,64,0.06);
      overflow: hidden;
    }

    /* Hover group */
    .hover-lift { transition: transform 0.2s ease, box-shadow 0.2s ease; }
    .hover-lift:hover { transform: translateY(-3px); box-shadow: var(--shadow-card-hover); }

    /* Responsive helpers */
    @media (max-width: 768px) {
      .editorial-heading { letter-spacing: -0.02em; }
    }
</style>
