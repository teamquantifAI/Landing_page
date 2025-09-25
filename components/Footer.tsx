'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Benefits', href: '#why-quantifai' },
    { name: 'Early Access', href: 'https://calendly.com/mariana-quantifai/quantifai' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ]

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Company Info */}
          <div>
            <Link href="/" onClick={handleScrollToTop} className="flex items-center space-x-2 mb-6">
              <img
                src="/images/logo.svg"
                alt="quantifAI Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">quantifAI</span>
            </Link>
            
            <p className="text-gray-400 leading-relaxed">
              AI-powered portfolio insights for financial advisors. Deliver smarter, more transparent investment decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/quantifaico/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-amber-500 rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <div className="text-gray-400 text-sm">
            © 2025 quantifAI. All rights reserved.
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600"></div>
    </footer>
  )
}

export default Footer
