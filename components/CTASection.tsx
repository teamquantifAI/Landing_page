'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Sparkles, TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const CTASection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fff;stop-opacity:0.1' /%3E%3Cstop offset='100%25' style='stop-color:%23fff;stop-opacity:0.05' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='20' cy='20' r='2' fill='url(%23grad)'/%3E%3Ccircle cx='80' cy='80' r='2' fill='url(%23grad)'/%3E%3Ccircle cx='20' cy='80' r='2' fill='url(%23grad)'/%3E%3Ccircle cx='80' cy='20' r='2' fill='url(%23grad)'/%3E%3Ccircle cx='50' cy='50' r='3' fill='url(%23grad)'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Animated Floating Elements with Better Effects */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 -right-16 w-64 h-64 bg-gradient-to-tl from-yellow-300/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute -bottom-10 left-1/3 w-48 h-48 bg-gradient-to-tr from-orange-300/25 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Sparkle Effects */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-20 right-1/4 text-white/20"
      >
        <Sparkles size={40} />
      </motion.div>
      
      <motion.div
        animate={{ 
          rotate: -360,
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-20 left-1/4 text-white/15"
      >
        <TrendingUp size={50} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
          >
            Ready to Transform Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 to-white mt-2">
              Financial Future?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Schedule a free consultation with our expert financial advisors today
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="https://calendly.com/mariana-quantifai/quantifai"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center px-10 py-5 bg-white text-gray-900 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-white/30 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              {/* Button Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/20 group-hover:via-amber-400/20 group-hover:to-orange-400/20 transition-all duration-500"></div>
              
              {/* Button Content */}
              <div className="relative flex items-center">
                <Calendar className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">100% Free Consultation</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
