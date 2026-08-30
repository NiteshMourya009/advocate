import React from 'react'
import Hero from '../sections/Hero'
import QuickContactBar from '../sections/QuickContactBar'
import StatsSection from '../sections/StatsSection'
import AboutSection from '../sections/AboutSection'
import PracticeAreasSection from '../sections/PracticeAreasSection'
import AdvocatesSection from '../sections/AdvocatesSection'
import WhyChooseUsSection from '../sections/WhyChooseUsSection'
import InsightsSection from '../sections/InsightsSection'
import TestimonialsSection from '../sections/TestimonialsSection'
import ConsultationCTA from '../sections/ConsultationCTA'
import OfficeLocationSection from '../sections/OfficeLocationSection'
import ConsultationFormSection from '../sections/ConsultationFormSection'

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#F7F4EE]">
      <Hero />
      <QuickContactBar />
      <StatsSection />
      <AboutSection />
      <PracticeAreasSection showAll={false} enableFilter={false} />
      <AdvocatesSection />
      <WhyChooseUsSection />
      <InsightsSection />
      <TestimonialsSection />
      <ConsultationCTA />
      <OfficeLocationSection />
      <ConsultationFormSection />
    </main>
  )
}
