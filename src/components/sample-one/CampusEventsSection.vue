<template>
  <section class="bg-[#f7faf8] py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <p class="text-sm font-bold uppercase tracking-wide text-emerald-700">Campus engagement</p>
          <h2 class="mt-4 max-w-2xl text-4xl font-black leading-tight text-navy-900 lg:text-5xl">
            Events, workshops, and advisory sessions for student success.
          </h2>
        </div>
        <p class="max-w-xl leading-8 text-slate-600">
          Keep students close to real opportunities with career fairs, employer talks, mentorship sessions, and one-on-one support from the career centre.
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div class="grid gap-5">
          <article v-for="event in events" :key="event.title" class="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <div class="grid gap-0 sm:grid-cols-[180px_1fr]">
              <img class="h-48 w-full object-cover sm:h-full" :src="event.image" :alt="event.alt" />
              <div class="flex flex-col items-start gap-5 p-5">
                <div class="flex h-20 w-20 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-navy-900 text-white">
                  <span class="text-3xl font-black">{{ event.day }}</span>
                  <span class="text-xs font-bold uppercase tracking-wide text-emerald-200">{{ event.month }}</span>
                </div>
                <div>
                  <p class="text-xs font-bold uppercase tracking-wide text-emerald-700">{{ event.type }}</p>
                  <h3 class="mt-1 text-xl font-black text-navy-900">{{ event.title }}</h3>
                  <p class="mt-2 leading-7 text-slate-600">{{ event.copy }}</p>
                </div>
                <a :href="withBase('/events')" class="rounded-md border border-slate-300 px-4 py-2 text-sm font-bold text-navy-900 transition hover:bg-slate-50" @click.prevent="navigateTo('/events')">Read More</a>
              </div>
            </div>
          </article>
        </div>

        <aside class="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <img
            class="h-52 w-full object-cover"
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80"
            alt="Career representative advising a student"
          />
          <div class="p-6">
          <p class="text-sm font-bold uppercase tracking-wide text-emerald-700">Book a session</p>
          <h3 class="mt-3 text-2xl font-black text-navy-900">Meet with a career representative.</h3>
          <p class="mt-3 leading-7 text-slate-600">
            Students can request a guidance session for CV review, career planning, internships, graduate applications, or scholarship preparation.
          </p>

          <form class="mt-6 grid gap-4">
            <label class="grid gap-2 text-sm font-semibold text-slate-700">
              Full Name
              <input class="rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" type="text" placeholder="Your name" />
            </label>
            <label class="grid gap-2 text-sm font-semibold text-slate-700">
              Email Address
              <input class="rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" type="email" placeholder="student@run.edu.ng" />
            </label>
            <label class="grid gap-2 text-sm font-semibold text-slate-700">
              Preferred Date
              <input class="rounded-md border border-slate-300 px-4 py-3 text-sm font-normal outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" type="date" />
            </label>
            <button class="mt-2 rounded-md bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800" type="button" @click="navigateTo('/student')">Book Now</button>
          </form>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup>
import { navigateTo, withBase } from '../../utils/navigation'

const events = [
  {
    day: '15',
    month: 'Mar',
    type: 'Conference',
    title: 'Tech Conference 2025',
    copy: 'A practical forum with industry experts covering emerging roles, digital skills, and technology career pathways.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
    alt: 'Students attending a technology conference',
  },
  {
    day: '22',
    month: 'Apr',
    type: 'Career fair',
    title: 'Career Fair & Workshop',
    copy: 'Students meet recruiters, attend employability workshops, and learn how to present themselves professionally.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80',
    alt: 'Recruiters speaking with students at a career fair',
  },
  {
    day: '05',
    month: 'May',
    type: 'Summit',
    title: 'Entrepreneurship Summit',
    copy: 'Founders and alumni share lessons on building ventures, finding opportunities, and turning ideas into work.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=900&q=80',
    alt: 'Students listening during an entrepreneurship summit',
  },
]
</script>
