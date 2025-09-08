'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Shield, PiggyBank, ArrowRight } from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Investment Planning',
      description: 'Personalized investment strategies designed to maximize returns while managing risk as per your unique financial goals and investment behavior.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation strategies to protect your portfolio from market volatility and unexpected events.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
    {
      icon: PiggyBank,
      title: 'Retirement Planning',
      description: 'Strategic retirement planning with optimized savings and wealth preservation designed to secure comfortable retirement savings and wealth planning systems.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to your unique needs and goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`group relative p-8 rounded-2xl ${service.bgColor} border ${service.borderColor} hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <motion.div
                className="flex items-center text-yellow-600 font-semibold group-hover:text-yellow-700 cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.div>
              
              {/* Decorative element */}
              <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
