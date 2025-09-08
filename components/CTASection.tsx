'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Calendar } from 'lucide-react'
import Link from 'next/link'

const CTASection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-32 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Ready to Transform Your{' '}
            <span className="text-yellow-300">Financial Future?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed"
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
              href="#book-consultation"
              className="group inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-lg shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
              Book Free Consultation
            </Link>

            <Link
              href="tel:+1-555-123-4567"
              className="group inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
              Call (555) 123-4567
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 pt-8 border-t border-white/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">15+ Years</div>
                <div className="text-sm">Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">$2.5B+</div>
                <div className="text-sm">Assets Managed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">500+</div>
                <div className="text-sm">Happy Clients</div>
              </div>
            </div>
          </motion.div>

          {/* Small Print */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-sm text-white/60 mt-8"
          >
            No commitment required • Free 30-minute consultation • Personalized financial strategy
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
