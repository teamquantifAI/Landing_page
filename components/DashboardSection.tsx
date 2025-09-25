'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from 'lucide-react'

const DashboardSection = () => {
  const dashboardData = {
    totalBalance: '$947,329',
    monthlyReturn: '$23,647',
    monthlyReturnPercent: '+2.4%',
    riskScore: 'Low',
    portfolioItems: [
      { name: 'Total Balance', value: '$947,329', change: '+5.2%', positive: true },
      { name: 'Monthly Returns', value: '$23,647', change: '+2.4%', positive: true },
      { name: 'Risk Score', value: 'Low', change: 'Stable', positive: true },
    ]
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real-Time Financial Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor your investments and track performance with our advanced&nbsp;analytics&nbsp;platform
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Side - Portfolio Overview Chart */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Portfolio Overview</h3>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">Last 6 months</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Growth</span>
                    </div>
                  </div>
                </div>
                
                {/* Mock Chart Area */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 h-80 relative overflow-hidden">
                  {/* Chart Lines */}
                  <div className="absolute bottom-0 left-0 w-full h-full">
                    <svg className="w-full h-full" viewBox="0 0 400 300">
                      <motion.path
                        d="M 20 250 Q 100 200 150 180 T 250 150 T 350 100"
                        stroke="#10b981"
                        strokeWidth="3"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                      />
                      <defs>
                        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 0.3 }} />
                          <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 0 }} />
                        </linearGradient>
                      </defs>
                      <motion.path
                        d="M 20 250 Q 100 200 150 180 T 250 150 T 350 100 L 350 280 L 20 280 Z"
                        fill="url(#chartGradient)"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                      />
                    </svg>
                  </div>
                  
                  {/* Chart Labels */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-between text-xs text-gray-500 px-4">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Portfolio Stats */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 border border-green-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-green-700 font-medium">Total Balance</span>
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-900 mb-1">
                    {dashboardData.totalBalance}
                  </div>
                  <div className="text-sm text-green-600 flex items-center">
                    <span className="font-semibold">+5.2%</span>
                    <span className="ml-1">this month</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-700 font-medium">Monthly Returns</span>
                    <DollarSign className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-900 mb-1">
                    {dashboardData.monthlyReturn}
                  </div>
                  <div className="text-sm text-blue-600 flex items-center">
                    <span className="font-semibold">+2.4%</span>
                    <span className="ml-1">vs last month</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-purple-700 font-medium">Risk Score</span>
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-purple-900 mb-1">
                    {dashboardData.riskScore}
                  </div>
                  <div className="text-sm text-purple-600">
                    <span className="font-semibold">Stable</span>
                    <span className="ml-1">portfolio</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DashboardSection
