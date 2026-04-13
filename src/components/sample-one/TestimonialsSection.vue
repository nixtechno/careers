<template>
  <section class="bg-white py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid gap-10 md:grid-cols-2">
        <div class="rounded-2xl bg-navy-900 p-8 text-white">
          <img
            class="mb-6 h-64 w-full rounded-lg object-cover"
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80"
            alt="Redeemer's University student preparing career documents"
          />
          <svg class="mb-4 h-10 w-10 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p class="text-xl leading-relaxed">"The career centre helped me understand my options, improve my CV, and prepare for employer conversations before graduation."</p>
          <div class="mt-6 flex items-center gap-4">
            <img
              class="h-12 w-12 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
              alt="Student testimonial portrait"
            />
            <div>
              <p class="font-semibold">David A.</p>
              <p class="text-sm text-slate-300">Redeemer's University, Class of 2024</p>
            </div>
          </div>
        </div>
        <div class="grid gap-6">
          <div v-for="quote in quotes" :key="quote.person" class="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <div class="flex items-center gap-3">
              <img class="h-12 w-12 rounded-full object-cover" :src="quote.image" :alt="quote.alt" />
              <div>
                <p class="font-semibold">"{{ quote.text }}"</p>
                <p class="text-sm text-slate-500">- {{ quote.person }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const quotes = [
  {
    text: 'The webinars gave me a clearer path for internship applications',
    person: 'Oluwaseun K., Class of 2023',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    alt: 'Student testimonial portrait',
  },
  {
    text: 'Mentoring students keeps me connected to the university community',
    person: 'Sarah O., Alumna Mentor',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    alt: 'Alumni mentor portrait',
  },
  {
    text: 'Career events help us meet students who are prepared and motivated',
    person: 'Employer Partner',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    alt: 'Employer partner portrait',
  },
]
</script>
