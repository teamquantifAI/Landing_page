import React from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        {/* Additional sections will be added here as we build them */}
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">More sections coming soon...</h2>
            <p className="text-xl text-gray-600">
              Features, benefits, testimonials, and more will be added to complete the landing page.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-yellow-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
