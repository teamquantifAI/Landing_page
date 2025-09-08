import React from 'react'
import Header from '@/components/Header'
import NewHeroSection from '@/components/NewHeroSection'
import ServicesSection from '@/components/ServicesSection'
import DashboardSection from '@/components/DashboardSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <NewHeroSection />
        <ServicesSection />
        <DashboardSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
