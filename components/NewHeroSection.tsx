'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Users, DollarSign, Award } from 'lucide-react'
import Link from 'next/link'

const NewHeroSection = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients', color: 'from-blue-400 to-blue-600' },
    { icon: DollarSign, value: '$2.5B', label: 'Assets Under Management', color: 'from-green-400 to-green-600' },
    { icon: TrendingUp, value: '25%', label: 'Average Annual Returns', color: 'from-yellow-400 to-yellow-600' },
    { icon: Award, value: '15', label: 'Years of Experience', color: 'from-purple-400 to-purple-600' },
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-yellow-50/50 to-amber-100/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Transform Your{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  Financial Future
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
              >
                Expert financial consulting services designed to maximize your wealth and secure your long-term financial success through data-driven investment strategies for sustainable growth.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#get-started"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-bold rounded-lg shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Start Your Journey
              </Link>
              <Link
                href="#watch-demo"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-white hover:border-yellow-300 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Portfolio Performance Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-yellow-200 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-gray-900 font-semibold text-lg">Portfolio Performance</h3>
                <span className="text-green-600 font-bold text-xl">+24.7%</span>
              </div>
              
              {/* Mock Chart */}
              <div className="relative h-48 flex items-end justify-between space-x-2">
                {[65, 78, 85, 72, 90, 88, 95, 82, 91, 97, 89, 94].map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    className={`flex-1 rounded-t-sm ${
                      index === 11 ? 'bg-gradient-to-t from-yellow-500 to-yellow-400' : 
                      height > 85 ? 'bg-gradient-to-t from-green-500 to-green-400' : 
                      'bg-gradient-to-t from-blue-500 to-blue-400'
                    }`}
                  />
                ))}
              </div>
              
              <div className="flex justify-between text-xs text-gray-400 mt-4">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
              className="bg-white/70 backdrop-blur-lg rounded-xl p-6 text-center border border-yellow-100 hover:border-yellow-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default NewHeroSection
