<template>
  <div class="bg-white font-sans antialiased">
    <StickyNavbar />

    <main>
      <HeroSection />
      <TrustSection />
      <CareerCentreSection />
      <CapabilitiesSection />
      <UserPathwaysSection />
      <OpportunitiesPreview />
      <CampusEventsSection />
      <ResourcesSection />
      <TestimonialsSection />
      <FinalCTASection />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import StickyNavbar from '../components/sample-one/StickyNavbar.vue'
import HeroSection from '../components/sample-one/HeroSection.vue'
import TrustSection from '../components/sample-one/TrustSection.vue'
import CareerCentreSection from '../components/sample-one/CareerCentreSection.vue'
import CapabilitiesSection from '../components/sample-one/CapabilitiesSection.vue'
import UserPathwaysSection from '../components/sample-one/UserPathwaysSection.vue'
import OpportunitiesPreview from '../components/sample-one/OpportunitiesPreview.vue'
import CampusEventsSection from '../components/sample-one/CampusEventsSection.vue'
import ResourcesSection from '../components/sample-one/ResourcesSection.vue'
import TestimonialsSection from '../components/sample-one/TestimonialsSection.vue'
import FinalCTASection from '../components/sample-one/FinalCTASection.vue'
import AppFooter from '../components/sample-one/AppFooter.vue'
</script>
