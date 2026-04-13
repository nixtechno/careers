<template>
  <div class="bg-white font-sans antialiased">
    <!-- Navbar Component -->
    <StickyNavbar />
    
    <main>
      <!-- 1. Hero Section - Composed, Split Layout -->
      <HeroSection />
      
      <!-- 2. Institutional Trust / Impact Section -->
      <TrustSection />
      
      <!-- 3. Platform Capabilities - Asymmetrical & Featured -->
      <CapabilitiesSection />
      
      <!-- 4. User Pathways - Role-based Journey -->
      <UserPathwaysSection />
      
      <!-- 5. Opportunities Preview - Real Product Feel -->
      <OpportunitiesPreview />
      
      <!-- 6. Career Tools & Resources - Editorial Style -->
      <ResourcesSection />
      
      <!-- 7. UI Foundation / Component Showcase -->
      <UIShowcaseSection />
      
      <!-- 8. Success Stories - Mixed Layout -->
      <TestimonialsSection />
      
      <!-- 9. Final CTA - Persuasive & Polished -->
      <FinalCTASection />
    </main>
    
    <!-- Footer Component -->
    <AppFooter />
  </div>
</template>

<script setup>
import StickyNavbar from './components/StickyNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import TrustSection from './components/TrustSection.vue'
import CapabilitiesSection from './components/CapabilitiesSection.vue'
import UserPathwaysSection from './components/UserPathwaysSection.vue'
import OpportunitiesPreview from './components/OpportunitiesPreview.vue'
import ResourcesSection from './components/ResourcesSection.vue'
import UIShowcaseSection from './components/UIShowcaseSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import FinalCTASection from './components/FinalCTASection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700&family=Manrope:wght@400;500;600;700;800&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    html {
        font-family: 'Inter', system-ui, sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    .font-heading {
        font-family: 'Manrope', system-ui, sans-serif;
    }
}
</style>



<!-- components/StickyNavbar.vue -->
<template>
    <header class="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <nav class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 lg:h-20">
                <!-- Logo / Brand -->
                <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center">
                        <span class="text-white font-bold text-lg">CC</span>
                    </div>
                    <span class="font-heading font-bold text-xl text-navy-900">CareerConnect<span
                            class="text-emerald-600">+</span></span>
                </div>

                <!-- Desktop Navigation -->
                <div class="hidden lg:flex items-center space-x-8">
                    <a href="#" class="text-slate-600 hover:text-navy-900 transition text-sm font-medium">Home</a>
                    <a href="#"
                        class="text-slate-600 hover:text-navy-900 transition text-sm font-medium">Opportunities</a>
                    <a href="#" class="text-slate-600 hover:text-navy-900 transition text-sm font-medium">Employers</a>
                    <a href="#" class="text-slate-600 hover:text-navy-900 transition text-sm font-medium">Alumni</a>
                    <a href="#" class="text-slate-600 hover:text-navy-900 transition text-sm font-medium">Career
                        Support</a>
                    <a href="#" class="text-slate-600 hover:text-navy-900 transition text-sm font-medium">About</a>
                </div>

                <!-- CTA Buttons -->
                <div class="hidden lg:flex items-center gap-3">
                    <button class="text-slate-700 hover:text-navy-900 text-sm font-medium transition">Sign In</button>
                    <button
                        class="bg-navy-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-navy-800 transition shadow-sm">Get
                        Started</button>
                </div>

                <!-- Mobile Menu Button -->
                <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden p-2 rounded-lg hover:bg-slate-100">
                    <svg class="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            <!-- Mobile Menu -->
            <div v-if="mobileMenuOpen" class="lg:hidden py-4 border-t border-slate-200 animate-fadeIn">
                <div class="flex flex-col space-y-4">
                    <a href="#"
                        class="text-slate-600 hover:text-navy-900 transition text-sm font-medium px-2 py-1">Home</a>
                    <a href="#"
                        class="text-slate-600 hover:text-navy-900 transition text-sm font-medium px-2 py-1">Opportunities</a>
                    <a href="#"
                        class="text-slate-600 hover:text-navy-900 transition text-sm font-medium px-2 py-1">Employers</a>
                    <a href="#"
                        class="text-slate-600 hover:text-navy-900 transition text-sm font-medium px-2 py-1">Alumni</a>
                    <a href="#"
                        class="text-slate-600 hover:text-navy-900 transition text-sm font-medium px-2 py-1">Career
                        Support</a>
                    <div class="pt-2 flex flex-col gap-2">
                        <button class="text-slate-700 text-left px-2 py-2 text-sm font-medium">Sign In</button>
                        <button
                            class="bg-navy-900 text-white px-4 py-2 rounded-full text-sm font-semibold text-center">Get
                            Started</button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue'
const mobileMenuOpen = ref(false)
</script>








<!-- components/HeroSection.vue -->
<template>
  <section class="relative overflow-hidden bg-white">
    <!-- Background Pattern -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50/40 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy-50/30 rounded-full blur-3xl"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left Content -->
        <div>
          <div class="inline-flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full text-xs font-medium text-slate-700 mb-6">
            <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            University of Excellence
          </div>
          <h1 class="font-heading text-4xl lg:text-6xl font-bold tracking-tight text-navy-900 leading-tight">
            Launch your future with<br />
            <span class="text-emerald-600">career intelligence</span>
          </h1>
          <p class="text-slate-600 text-lg mt-6 leading-relaxed max-w-lg">
            The centralized career ecosystem connecting students, alumni, and top employers through smart matching, verified opportunities, and actionable insights.
          </p>
          
          <!-- Quick Action Row -->
          <div class="flex flex-wrap gap-4 mt-8">
            <button class="bg-navy-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-navy-800 transition shadow-md">Explore Opportunities →</button>
            <button class="border border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition">For Employers</button>
          </div>
          
          <!-- Trust Strip -->
          <div class="flex items-center gap-6 mt-10 pt-6 border-t border-slate-200">
            <div class="flex -space-x-2">
              <div class="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
              <div class="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
              <div class="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
            </div>
            <div class="text-sm text-slate-500">
              Trusted by <span class="font-semibold text-navy-900">2,500+</span> students and <span class="font-semibold text-navy-900">180+</span> employers
            </div>
          </div>
        </div>
        
        <!-- Right: Dashboard Preview -->
        <div class="relative">
          <div class="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <div class="bg-slate-50 px-5 py-3 border-b border-slate-200 flex items-center justify-between">
              <div class="flex gap-1.5">
                <div class="w-3 h-3 rounded-full bg-red-400"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div class="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <span class="text-xs text-slate-500 font-mono">student-dashboard</span>
            </div>
            <div class="p-5">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <p class="text-xs text-slate-500 uppercase tracking-wide">Welcome back</p>
                  <p class="font-semibold text-navy-900">Alex Morgan</p>
                </div>
                <div class="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full">4 new matches</div>
              </div>
              <div class="space-y-3">
                <div class="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div><p class="font-medium">Product Design Intern</p><p class="text-xs text-slate-500">Creative Studio · Remote</p></div>
                  <button class="text-xs bg-white border px-3 py-1 rounded-full">Apply</button>
                </div>
                <div class="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div><p class="font-medium">Data Analyst Graduate</p><p class="text-xs text-slate-500">FinTech Corp · Hybrid</p></div>
                  <button class="text-xs bg-white border px-3 py-1 rounded-full">Apply</button>
                </div>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-100 flex justify-between text-xs text-slate-500">
                <span>🎯 78% profile strength</span>
                <span class="text-emerald-600">Complete your CV →</span>
              </div>
            </div>
          </div>
          <!-- Floating Metric Card -->
          <div class="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-3 border border-slate-200 hidden lg:block">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700">📊</div>
              <div><p class="text-xs text-slate-500">Avg. response rate</p><p class="font-bold text-navy-900">64% higher</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<!-- components/TrustSection.vue -->
<template>
  <section class="py-16 bg-white border-y border-slate-100">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div class="p-4">
          <p class="text-3xl lg:text-4xl font-bold text-navy-900">12k+</p>
          <p class="text-slate-500 text-sm mt-1">Active Students</p>
        </div>
        <div class="p-4">
          <p class="text-3xl lg:text-4xl font-bold text-navy-900">340+</p>
          <p class="text-slate-500 text-sm mt-1">Partner Employers</p>
        </div>
        <div class="p-4">
          <p class="text-3xl lg:text-4xl font-bold text-navy-900">2,800+</p>
          <p class="text-slate-500 text-sm mt-1">Internships Posted</p>
        </div>
        <div class="p-4">
          <p class="text-3xl lg:text-4xl font-bold text-navy-900">94%</p>
          <p class="text-slate-500 text-sm mt-1">Employer Satisfaction</p>
        </div>
      </div>
      <div class="flex justify-center mt-10">
        <div class="bg-slate-50 rounded-full px-6 py-2 text-sm text-slate-600 border border-slate-200">
          🏆 Recognized as "Best University Career Platform 2024"
        </div>
      </div>
    </div>
  </section>
</template>




<!-- components/CapabilitiesSection.vue -->
<template>
  <section class="py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-left mb-16">
        <span class="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Platform capabilities</span>
        <h2 class="font-heading text-3xl lg:text-4xl font-bold text-navy-900 mt-2 max-w-2xl">Everything you need to build a thriving career</h2>
      </div>
      
      <!-- Asymmetrical Grid -->
      <div class="grid lg:grid-cols-3 gap-6 auto-rows-min">
        <!-- Featured Large Card -->
        <div class="lg:col-span-2 lg:row-span-2 bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition">
          <div class="flex justify-between items-start">
            <div class="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center text-2xl">📋</div>
            <span class="bg-emerald-50 text-emerald-700 text-xs px-3 py-1 rounded-full">Featured</span>
          </div>
          <h3 class="text-2xl font-bold text-navy-900 mt-6">Smart Job & Internship Engine</h3>
          <p class="text-slate-600 mt-2 leading-relaxed">AI-powered recommendations based on your skills, preferences, and career trajectory. Real-time alerts for new opportunities.</p>
          <div class="mt-6 flex flex-wrap gap-2">
            <span class="badge">Machine Learning</span>
            <span class="badge">Auto-apply</span>
            <span class="badge">Salary Insights</span>
          </div>
          <div class="mt-8 pt-4 border-t border-slate-100 flex justify-between items-center">
            <span class="text-sm text-slate-500">Trusted by career offices</span>
            <button class="text-emerald-600 font-medium text-sm">Learn more →</button>
          </div>
        </div>
        
        <!-- Smaller Cards -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div class="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-xl">✍️</div>
          <h3 class="text-lg font-bold text-navy-900 mt-4">CV Builder</h3>
          <p class="text-slate-500 text-sm mt-1">ATS-friendly templates + real-time feedback</p>
        </div>
        
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div class="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center text-xl">📅</div>
          <h3 class="text-lg font-bold text-navy-900 mt-4">Appointment Booking</h3>
          <p class="text-slate-500 text-sm mt-1">1:1 with career advisors & mock interviews</p>
        </div>
        
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div class="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-xl">🤝</div>
          <h3 class="text-lg font-bold text-navy-900 mt-4">Alumni Network</h3>
          <p class="text-slate-500 text-sm mt-1">Mentorship & exclusive networking events</p>
        </div>
        
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div class="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-xl">📊</div>
          <h3 class="text-lg font-bold text-navy-900 mt-4">Employer Dashboard</h3>
          <p class="text-slate-500 text-sm mt-1">Post jobs, track applicants, campus hiring</p>
        </div>
      </div>
    </div>
  </section>
</template>




<!-- components/UserPathwaysSection.vue -->
<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-14">
        <span class="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Unified ecosystem</span>
        <h2 class="font-heading text-3xl lg:text-4xl font-bold text-navy-900 mt-2">Designed for every stakeholder</h2>
      </div>
      
      <!-- Tabbed Interface Style -->
      <div class="flex flex-wrap justify-center gap-2 border-b border-slate-200 mb-12">
        <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id" :class="['px-6 py-3 text-sm font-medium rounded-t-lg transition', activeTab === tab.id ? 'bg-navy-900 text-white' : 'text-slate-600 hover:text-navy-900']">
          {{ tab.name }}
        </button>
      </div>
      
      <div class="bg-slate-50 rounded-2xl p-6 lg:p-10 border border-slate-200">
        <div class="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 class="text-2xl font-bold text-navy-900">{{ currentPathway.title }}</h3>
            <p class="text-slate-600 mt-3 leading-relaxed">{{ currentPathway.description }}</p>
            <ul class="mt-6 space-y-3">
              <li v-for="item in currentPathway.features" :key="item" class="flex items-center gap-3 text-slate-700">
                <span class="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-xs">✓</span> {{ item }}
              </li>
            </ul>
            <button class="mt-8 bg-white border border-slate-300 text-navy-900 px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-100 transition">Explore pathway →</button>
          </div>
          <div class="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
            <div class="text-sm text-slate-400 mb-2">Preview Dashboard</div>
            <div class="h-32 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 text-sm">[ Mock UI Element ]</div>
            <div class="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div class="p-2 bg-slate-50 rounded"><span class="font-semibold">Key metric</span><br />85% engagement</div>
              <div class="p-2 bg-slate-50 rounded"><span class="font-semibold">Recent activity</span><br />2 applications</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
const activeTab = ref('student')
const tabs = [
  { id: 'student', name: 'Students' },
  { id: 'employer', name: 'Employers' },
  { id: 'alumni', name: 'Alumni' },
  { id: 'officer', name: 'Career Officers' }
]
const pathways = {
  student: { title: 'Personalized career launchpad', description: 'From internship search to full-time offers, access tools, insights, and support tailored to your journey.', features: ['Smart job matching', 'CV builder & interview prep', 'Event registration & workshops'] },
  employer: { title: 'Streamlined campus recruitment', description: 'Connect with top talent, manage applications, and build your employer brand on campus.', features: ['Job posting & promotion', 'Candidate filtering system', 'On-campus interview scheduling'] },
  alumni: { title: 'Give back & grow your network', description: 'Mentor current students, offer opportunities, and stay connected to your alma mater.', features: ['Mentorship matching', 'Exclusive job board for alumni', 'Networking events'] },
  officer: { title: 'Centralized administration', description: 'Track student outcomes, manage employer relationships, and generate insightful reports.', features: ['Analytics dashboard', 'Appointment management', 'Resource library control'] }
}
const currentPathway = computed(() => pathways[activeTab.value])
</script>




<!-- components/OpportunitiesPreview.vue -->
<template>
  <section class="py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex justify-between items-end flex-wrap gap-4 mb-12">
        <div>
          <span class="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Live opportunities</span>
          <h2 class="font-heading text-3xl lg:text-4xl font-bold text-navy-900 mt-2">Internships & graduate roles</h2>
        </div>
        <button class="text-emerald-600 font-medium border-b border-emerald-300">View all opportunities →</button>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="job in jobs" :key="job.title" class="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition">
          <div class="flex justify-between items-start">
            <div><h3 class="font-bold text-navy-900">{{ job.title }}</h3><p class="text-sm text-slate-500 mt-0.5">{{ job.company }}</p></div>
            <span class="badge">{{ job.type }}</span>
          </div>
          <div class="flex items-center gap-3 text-xs text-slate-500 mt-3">
            <span>📍 {{ job.location }}</span>
            <span>⏰ {{ job.deadline }}</span>
          </div>
          <div class="flex flex-wrap gap-1 mt-3">
            <span v-for="tag in job.tags" :key="tag" class="text-xs bg-slate-100 px-2 py-0.5 rounded-full">{{ tag }}</span>
          </div>
          <button class="w-full mt-4 border border-slate-300 text-slate-700 py-2 rounded-lg text-sm font-medium hover:bg-slate-50">Quick Apply</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const jobs = [
  { title: 'Software Engineering Intern', company: 'Google', type: 'Internship', location: 'Remote', deadline: 'May 15', tags: ['Python', 'Full-time'] },
  { title: 'Product Marketing Grad', company: 'HubSpot', type: 'Graduate', location: 'Dublin', deadline: 'Jun 1', tags: ['Marketing', 'Entry level'] },
  { title: 'Data Science Fellowship', company: 'Research Lab', type: 'Fellowship', location: 'Boston', deadline: 'Apr 28', tags: ['PhD', 'Stipend'] }
]
</script>




<!-- components/ResourcesSection.vue -->
<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span class="text-emerald-600 font-semibold text-sm uppercase">Career toolkit</span>
          <h2 class="font-heading text-3xl lg:text-4xl font-bold text-navy-900 mt-2">Build skills, master interviews, land offers</h2>
          <p class="text-slate-600 mt-4">Access a rich library of video guides, templates, and interactive tools crafted by industry experts and career coaches.</p>
          <div class="mt-8 space-y-4">
            <div class="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition"><div class="w-10 h-10 bg-navy-100 rounded-lg flex items-center justify-center">📄</div><div><h4 class="font-semibold">CV & Cover Letter Templates</h4><p class="text-sm text-slate-500">15+ ATS-optimized designs</p></div></div>
            <div class="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition"><div class="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">🎤</div><div><h4 class="font-semibold">Mock Interview Simulator</h4><p class="text-sm text-slate-500">Practice with AI feedback</p></div></div>
            <div class="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition"><div class="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">📚</div><div><h4 class="font-semibold">Industry Guides</h4><p class="text-sm text-slate-500">Finance, Tech, Consulting, Healthcare</p></div></div>
          </div>
        </div>
        <div class="bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden">
          <div class="absolute top-0 right-0 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl"></div>
          <div class="relative z-10">
            <p class="text-emerald-300 text-sm uppercase tracking-wide">Trending resource</p>
            <p class="text-2xl font-bold mt-2">"Negotiating Your First Offer"</p>
            <p class="text-slate-300 mt-2">45-min masterclass with recruiters from top firms.</p>
            <button class="mt-5 bg-white text-navy-900 px-5 py-2 rounded-full text-sm font-semibold">Watch preview →</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>




<!-- components/UIShowcaseSection.vue -->
<template>
  <section class="py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-12">
        <span class="text-emerald-600 font-semibold text-sm uppercase">Design system preview</span>
        <h2 class="font-heading text-3xl lg:text-4xl font-bold text-navy-900 mt-2">A unified UI language for the entire platform</h2>
      </div>
      <div class="grid lg:grid-cols-2 gap-10">
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h3 class="font-semibold text-navy-900 mb-4">Interactive Components</h3>
          <div class="flex flex-wrap gap-3 mb-6"><button class="btn-primary">Primary</button><button class="btn-secondary">Secondary</button><button class="btn-ghost">Ghost</button><span class="badge">New</span><span class="badge-outline">Beta</span></div>
          <div class="mt-4"><div class="search-bar"><input type="text" placeholder="Search opportunities..." class="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-400"><button class="absolute right-3 top-3 text-slate-400">🔍</button></div></div>
          <div class="mt-6 grid grid-cols-2 gap-3"><div class="dashboard-widget"><p class="text-xs text-slate-400">Applications</p><p class="text-2xl font-bold">124</p></div><div class="dashboard-widget"><p class="text-xs text-slate-400">Interviews</p><p class="text-2xl font-bold">12</p></div></div>
        </div>
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h3 class="font-semibold text-navy-900 mb-4">Form Controls & Data Preview</h3>
          <div class="space-y-4"><select class="w-full p-3 border border-slate-200 rounded-xl bg-white"><option>Filter by role type</option></select><div class="flex items-center gap-2"><input type="checkbox" id="test" class="rounded"><label for="test">Show only remote roles</label></div><div class="overflow-x-auto"><table class="min-w-full text-sm"><thead><tr class="border-b"><th class="text-left py-2">Role</th><th class="text-left">Deadline</th></tr></thead><tbody><tr><td class="py-2">Design Intern</td><td>May 10</td></tr><tr><td class="py-2">Analyst Grad</td><td>Jun 1</td></tr></tbody></table></div><div class="empty-state p-6 text-center border border-dashed rounded-xl"><p class="text-slate-400">No saved jobs yet</p><button class="text-emerald-600 text-sm mt-1">Explore opportunities</button></div></div>
        </div>
      </div>
    </div>
  </section>
</template>



<!-- components/TestimonialsSection.vue -->
<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-10">
        <div class="bg-navy-900 rounded-2xl p-8 text-white"><svg class="w-10 h-10 text-emerald-400 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg><p class="text-xl leading-relaxed">“The platform transformed how I approach my job search. The CV builder alone got me 3 interviews in two weeks.”</p><div class="mt-6 flex items-center gap-4"><div class="w-12 h-12 bg-slate-700 rounded-full"></div><div><p class="font-semibold">Priya Sharma</p><p class="text-sm text-slate-300">Computer Science, '25</p></div></div></div>
        <div class="grid gap-6"><div class="bg-slate-50 p-6 rounded-xl border border-slate-200"><div class="flex items-center gap-3"><div class="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">🏢</div><div><p class="font-semibold">"Hiring quality has improved significantly"</p><p class="text-sm text-slate-500">— Michael Chen, Talent Lead at FinCorp</p></div></div></div><div class="bg-slate-50 p-6 rounded-xl border border-slate-200"><div class="flex items-center gap-3"><div class="w-10 h-10 bg-navy-100 rounded-full flex items-center justify-center">🎓</div><div><p class="font-semibold">"Alumni networking helped me land my dream role"</p><p class="text-sm text-slate-500">— Jessica Okafor, Alumni Mentor</p></div></div></div><div class="bg-slate-50 p-6 rounded-xl border border-slate-200"><div class="flex items-center gap-3"><div class="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">📈</div><div><p class="font-semibold">"Career office efficiency increased by 40%"</p><p class="text-sm text-slate-500">— Dr. Emily Rodriguez, Director of Careers</p></div></div></div></div>
      </div>
    </div>
  </section>
</template>


<!-- components/FinalCTASection.vue -->
<template>
  <section class="py-24 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
    <div class="max-w-5xl mx-auto px-6 text-center">
      <h2 class="font-heading text-3xl lg:text-5xl font-bold">Ready to accelerate your career journey?</h2>
      <p class="text-slate-300 text-lg mt-4 max-w-2xl mx-auto">Join thousands of students and alumni who have transformed their professional futures.</p>
      <div class="flex flex-wrap justify-center gap-4 mt-10">
        <button class="bg-emerald-500 text-navy-900 px-8 py-3 rounded-full font-bold hover:bg-emerald-400 transition shadow-lg">Get Started Free</button>
        <button class="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition">Partner With Us</button>
      </div>
      <p class="text-slate-400 text-sm mt-8">No commitment. Free for current students and alumni.</p>
    </div>
  </section>
</template>



<!-- components/AppFooter.vue -->
<template>
  <footer class="bg-white border-t border-slate-200 py-12">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8">
        <div><div class="flex items-center gap-2"><div class="w-8 h-8 bg-navy-900 rounded-lg"></div><span class="font-bold text-navy-900 text-lg">CareerConnect+</span></div><p class="text-slate-500 text-sm mt-4">Empowering university careers since 2020.</p></div>
        <div><h4 class="font-semibold text-navy-900">Platform</h4><ul class="mt-3 space-y-2 text-sm text-slate-500"><li>Opportunities</li><li>For Employers</li><li>Alumni Network</li></ul></div>
        <div><h4 class="font-semibold text-navy-900">Resources</h4><ul class="mt-3 space-y-2 text-sm text-slate-500"><li>Career Guides</li><li>Events</li><li>Support</li></ul></div>
        <div><h4 class="font-semibold text-navy-900">Legal</h4><ul class="mt-3 space-y-2 text-sm text-slate-500"><li>Privacy</li><li>Terms</li><li>Accessibility</li></ul></div>
      </div>
      <div class="border-t border-slate-100 mt-10 pt-6 text-center text-sm text-slate-400">© 2025 CareerConnect+ — University Career Ecosystem</div>
    </div>
  </footer>
</template>





/* tailwind.config.js - Add to your existing config */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bccde0',
          300: '#9bb4d0',
          400: '#7b9bc0',
          500: '#5b82a8',
          600: '#3b6b8f',
          700: '#1f4e6f',
          800: '#0e3a56',
          900: '#062a3f',
        },
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}



/* Add these global component styles to your main CSS file */
@layer components {
  .btn-primary {
    @apply bg-navy-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-navy-800 transition shadow-sm;
  }
  .btn-secondary {
    @apply border border-slate-300 text-slate-700 px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-50 transition;
  }
  .btn-ghost {
    @apply text-slate-600 hover:text-navy-900 px-4 py-2 rounded-full text-sm font-medium transition;
  }
  .badge {
    @apply bg-slate-100 text-slate-700 text-xs px-2.5 py-0.5 rounded-full font-medium;
  }
  .badge-outline {
    @apply border border-slate-300 text-slate-600 text-xs px-2.5 py-0.5 rounded-full;
  }
  .dashboard-widget {
    @apply bg-slate-50 p-3 rounded-xl border border-slate-100;
  }
  .search-bar {
    @apply relative flex items-center;
  }
  .empty-state {
    @apply text-center py-12 border border-dashed border-slate-200 rounded-xl bg-slate-50;
  }
}