'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { TrendingUp, Zap, Mail, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const navItems = [
    { name: 'Features', href: '#features', icon: Zap },
    { name: 'Benefits', href: '#why-quantifai', icon: TrendingUp },
    { name: 'Contact Us', href: '#contact', icon: Mail },
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      const headerHeight = 80 // Account for fixed header height
      const targetPosition = targetElement.offsetTop - headerHeight
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
      
      // Close mobile menu after navigation
      setMobileMenuOpen(false)
    }
  }

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    // Close mobile menu after navigation
    setMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-yellow-100'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" onClick={handleScrollToTop} className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src="/images/logo.svg"
                alt="quantifAI Logo"
                width={48}
                height={48}
                className="w-12 h-12 group-hover:scale-105 transition-all duration-300"
                onError={(e) => {
                  console.error('Logo failed to load:', e);
                }}
                onLoad={() => {
                  console.log('Logo loaded successfully');
                }}
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-bold" style={{color: '#000000'}}>quantifAI</span>
            </div>
          </Link>

          {/* Navigation & Early Access */}
          <div className="flex items-center space-x-3 sm:space-x-6">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="group flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-yellow-600 transition-all duration-300 hover:bg-yellow-50 cursor-pointer"
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>
            
            {/* Early Access Button - Hidden on mobile, visible on desktop */}
            <Link
              href="https://calendly.com/mariana-quantifai/quantifai"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Early Access
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="Toggle mobile menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-gray-100"
          >
            <div className="bg-white/95 backdrop-blur-lg shadow-lg">
              <nav className="container mx-auto px-6 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-all duration-200 cursor-pointer"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </motion.a>
                ))}
                
                {/* Mobile Early Access Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-3 pb-2"
                >
                  <Link
                    href="https://calendly.com/mariana-quantifai/quantifai"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                  >
                    Early Access
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  )
}

export default Header
