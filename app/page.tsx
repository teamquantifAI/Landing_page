import React from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import WhyQuantifAISection from '@/components/WhyQuantifAISection'
import DashboardSection from '@/components/DashboardSection'
import ContactFormSection from '@/components/ContactFormSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyQuantifAISection />
        <DashboardSection />
        <ContactFormSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
