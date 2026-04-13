<template>
  <PublicLayout>
    <section class="bg-[#f7faf8] py-20">
      <div class="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <span class="rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-emerald-700">Support CASEC</span>
          <h1 class="mt-6 text-4xl font-black leading-tight text-navy-900 md:text-5xl">{{ isBankPage ? 'Bank transfer details' : 'Donate to career readiness' }}</h1>
          <p class="mt-5 leading-8 text-slate-600">Support student employability programmes, career fairs, guidance sessions, and opportunity access for Redeemer's University students.</p>
        </div>

        <div class="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
          <div v-if="isBankPage">
            <h2 class="text-2xl font-black text-navy-900">Donation Account</h2>
            <div class="mt-6 grid gap-4">
              <div v-for="item in bankDetails" :key="item.label" class="rounded-md bg-slate-50 p-4">
                <p class="text-xs font-bold uppercase tracking-wide text-slate-500">{{ item.label }}</p>
                <p class="mt-1 text-lg font-black text-navy-900">{{ item.value }}</p>
              </div>
            </div>
          </div>

          <form v-else class="grid gap-4">
            <h2 class="text-2xl font-black text-navy-900">Donation Form</h2>
            <input class="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" placeholder="Full name" type="text" />
            <input class="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100" placeholder="Email address" type="email" />
            <select class="rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100">
              <option>Career fair sponsorship</option>
              <option>Student scholarship support</option>
              <option>Career resource development</option>
            </select>
            <button class="rounded-md bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800" type="button" @click="donationStarted = true">Continue Donation</button>
            <InfoBanner v-if="donationStarted" variant="success" title="Donation request prepared" message="CASEC can connect this form to a payment provider when ready." />
          </form>
        </div>
      </div>
    </section>
  </PublicLayout>
</template>

<script setup>
import { computed, ref } from 'vue'
import PublicLayout from '../../components/sample-one/PublicLayout.vue'
import InfoBanner from '../../components/shared/InfoBanner.vue'

const props = defineProps({
  mode: { type: String, default: 'online' },
})

const isBankPage = computed(() => props.mode === 'bank')
const donationStarted = ref(false)
const bankDetails = [
  { label: 'Account Name', value: 'Redeemer\'s University Career Services Centre' },
  { label: 'Bank', value: 'Zenith Bank' },
  { label: 'Account Number', value: '0000000000' },
  { label: 'Reference', value: 'CASEC Donation' },
]
</script>
