'use client'

import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ArrowRight, Brain, TrendingUp, Shield, Sparkles, Play, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const HeroSection = () => {
  const controls = useAnimation()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleScrollToNext = () => {
    // Get the hero section height to scroll to the next section
    const heroSection = document.querySelector('section')
    if (heroSection) {
      const nextSectionTop = heroSection.offsetHeight
      window.scrollTo({
        top: nextSectionTop - 80, // Account for fixed header
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' }
    })
  }, [controls])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 25,
        y: (e.clientY - window.innerHeight / 2) / 25,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const stats = [
    { value: '85%', label: 'Time Saved on Analysis', icon: TrendingUp },
    { value: '3.2x', label: 'Performance Improvement', icon: Brain },
    { value: '100%', label: 'Portfolio Transparency', icon: Shield },
  ]

  const floatingElements = [
    { icon: Brain, delay: 0, x: 20, y: -30 },
    { icon: TrendingUp, delay: 0.5, x: -25, y: 40 },
    { icon: Shield, delay: 1, x: 30, y: 20 },
    { icon: Sparkles, delay: 1.5, x: -20, y: -20 },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-yellow-50/20 to-amber-100/30">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-hero-pattern animate-pulse"></div>
        <div 
          className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-amber-500/10 rounded-full blur-3xl transform"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            width: '150%',
            height: '150%',
            top: '-25%',
            left: '-25%',
          }}
        />
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 0.6,
            scale: 1,
            x: [element.x, element.x + 10, element.x],
            y: [element.y, element.y - 10, element.y],
          }}
          transition={{
            duration: 4,
            delay: element.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            top: `${20 + index * 15}%`,
            left: `${10 + index * 20}%`,
          }}
        >
          <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center">
            <element.icon className="w-8 h-8 text-yellow-500" />
          </div>
        </motion.div>
      ))}

      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            className="text-center mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-amber-100 border border-yellow-200 rounded-full px-4 py-2 mb-8"
            >
              <Sparkles className="w-4 h-4 text-yellow-600" />
              <span className="text-sm font-medium text-yellow-700">Now in Beta • AI-Powered Portfolio Insights</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8 leading-tight"
            >
              Transform Your <span className="relative"><span className="gradient-text">Portfolio</span><motion.div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1, duration: 0.8 }} /></span> with Intelligence
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Empower financial advisors with{' '}
              <span className="font-semibold text-gray-800">transparent AI insights</span>,{' '}
              <span className="font-semibold text-gray-800">real-time optimization</span>, and{' '}
              <span className="font-semibold text-gray-800">client-ready explanations</span>{' '}
              for every investment decision.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Link
                href="https://calendly.com/mariana-quantifai/quantifai"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-bold rounded-full shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105 transition-all duration-300"
              >
                <span className="mr-2">Get Early Access</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-amber-400 blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </Link>

            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="group bg-white/60 backdrop-blur-lg rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl border border-white/20 hover:border-yellow-200 transform hover:scale-105 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-gray-800 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              onClick={handleScrollToNext}
              className="inline-flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg cursor-pointer hover:bg-white hover:scale-110 transition-all duration-300"
            >
              <ChevronDown className="w-6 h-6 text-gray-600" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
