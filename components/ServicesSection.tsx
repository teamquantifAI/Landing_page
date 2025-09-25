'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Target, Users, TrendingUp, Shield, Clock, CheckCircle } from 'lucide-react'

const ServicesSection = () => {
  const features = [
    {
      title: 'AI-powered portfolio analysis and insights'
    },
    {
      title: 'Clear explanations for every investment decision'
    },
    {
      title: 'Personalized optimization recommendations'
    },
    {
      title: 'Client-friendly visualizations and reports'
    },
    {
      title: 'Time-saving automation of routine analysis'
    },
    {
      title: 'Enhanced client trust and satisfaction'
    }
  ]

  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Transform How You Manage Client Portfolios
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              quantifAI gives financial advisors the power to explain complex investment decisions with clarity and 
              confidence, building deeper client trust and delivering better outcomes.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2 leading-snug">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default ServicesSection
