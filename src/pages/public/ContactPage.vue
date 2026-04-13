<template>
  <PublicLayout>
    <section class="bg-[#f7faf8] py-20">
      <div class="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <span class="rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-emerald-700">Contact CASEC</span>
          <h1 class="mt-6 text-4xl font-black leading-tight text-navy-900 md:text-5xl">Talk to the Career Services Centre.</h1>
          <p class="mt-5 leading-8 text-slate-600">Reach out for student guidance, employer partnerships, alumni support, or donation enquiries.</p>
          <div class="mt-8 grid gap-4">
            <div v-for="item in contacts" :key="item.label" class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <p class="text-xs font-bold uppercase tracking-wide text-slate-500">{{ item.label }}</p>
              <p class="mt-1 font-black text-navy-900">{{ item.value }}</p>
            </div>
          </div>
        </div>

        <form class="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
          <h2 class="text-2xl font-black text-navy-900">Send a message</h2>
          <div class="mt-6 grid gap-4">
            <input class="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" placeholder="Full name" type="text" />
            <input class="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" placeholder="Email address" type="email" />
            <select class="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100">
              <option>Student guidance</option>
              <option>Employer partnership</option>
              <option>Donation enquiry</option>
              <option>General enquiry</option>
            </select>
            <textarea class="min-h-36 rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" placeholder="How can we help?"></textarea>
            <button class="rounded-md bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800" type="button" @click="messageSent = true">Submit Message</button>
            <p v-if="messageSent" class="rounded-md bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">Message received. The CASEC team will follow up through the contact details provided.</p>
          </div>
        </form>
      </div>
    </section>
  </PublicLayout>
</template>

<script setup>
import { ref } from 'vue'
import PublicLayout from '../../components/sample-one/PublicLayout.vue'

const messageSent = ref(false)
const contacts = [
  { label: 'Email', value: 'casec@run.edu.ng' },
  { label: 'Campus', value: 'Redeemer\'s University, Ede, Osun State' },
  { label: 'Office Hours', value: 'Monday to Friday, 9:00 AM - 4:00 PM' },
]
</script>
