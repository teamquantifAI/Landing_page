'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Investment Planning', href: '#investment-planning' },
        { name: 'Risk Management', href: '#risk-management' },
        { name: 'Retirement Planning', href: '#retirement-planning' },
        { name: 'Tax Planning', href: '#tax-planning' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Team', href: '#team' },
        { name: 'Careers', href: '#careers' },
        { name: 'Blog', href: '#blog' },
      ]
    },
    {
      title: 'Contact',
      links: [
        { name: 'Contact Us', href: '#contact', icon: Mail },
        { name: '(555) 123-4567', href: 'tel:+15551234567', icon: Phone },
        { name: '123 Financial St, NYC', href: '#location', icon: MapPin },
      ]
    }
  ]

  const socialLinks = [
    { name: 'Facebook', href: '#facebook', icon: Facebook },
    { name: 'Twitter', href: '#twitter', icon: Twitter },
    { name: 'LinkedIn', href: '#linkedin', icon: Linkedin },
    { name: 'Instagram', href: '#instagram', icon: Instagram },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                F
              </div>
              <span className="text-xl font-bold">FinanceFlow</span>
            </Link>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner in financial success. Building wealth, securing futures.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                    >
                      {link.icon && <link.icon className="w-4 h-4 mr-2" />}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 FinanceFlow. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link href="#privacy" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#terms" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="#cookies" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600"></div>
    </footer>
  )
}

export default Footer
