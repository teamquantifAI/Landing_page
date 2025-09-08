'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, Tech Corp',
      image: '/api/placeholder/60/60', // Placeholder for now
      rating: 5,
      text: 'Exceptional financial planning service that helped me diversify my investment strategy. Their expertise turned my finances around, and I\'ve achieved my long-term wealth-building goals.',
    },
    {
      name: 'Michael Chen',
      role: 'Investment Manager',
      image: '/api/placeholder/60/60', // Placeholder for now
      rating: 5,
      text: 'Professional, knowledgeable, and results-driven. I couldn\'t be happier with their investment expertise and long-term wealth-building strategies.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Entrepreneur',
      image: '/api/placeholder/60/60', // Placeholder for now  
      rating: 5,
      text: 'Their risk management strategies gave me peace of mind. My investments are now well-positioned for both growth and protection from market volatility.',
    },
  ]

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by hundreds of satisfied clients worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-6 h-6 text-yellow-400 opacity-50" />
              </div>

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-b-2xl opacity-20"></div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16 pt-16 border-t border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">500+</div>
              <div className="text-gray-600">Satisfied Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">15</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
