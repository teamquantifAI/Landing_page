'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Search, TrendingUp, Users, ArrowUpRight } from 'lucide-react'

const WhyQuantifAISection = () => {
  const benefits = [
    {
      icon: Search,
      title: 'Total Portfolio Transparency',
      description: 'Every trade comes with a rationale. Our AI breaks down market conditions, asset behaviors, and strategy alignment — so you always know the \'why\' behind the \'what.\'',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: TrendingUp,
      title: 'Optimize for Better Outcomes',
      description: 'See exactly where portfolios can improve. quantifAI analyzes your client\'s current holdings and uncovers optimization opportunities based on their unique risk tolerance and investment goals.',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Users,
      title: 'Build Stronger Client Relationships',
      description: 'Confident answers, clear insights. quantifAI equips you to lead more meaningful conversations, deepen trust, and turn questions into connection.',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: ArrowUpRight,
      title: 'Always One Step Ahead',
      description: 'Whether you\'re optimizing an existing portfolio or welcoming a new client, quantifAI shows you the gaps, the opportunities, and the smarter path forward.',
      bgColor: 'bg-yellow-50'
    }
  ]

  return (
    <section className="py-20 bg-white" id="why-quantifai">
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
              Why quantifAI?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Understand every move in your portfolio. When clients ask, "Why this asset? Why this trade?" you'll have the answer.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group p-8 rounded-2xl ${benefit.bgColor} hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyQuantifAISection