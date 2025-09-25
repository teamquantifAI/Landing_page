'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Scale, AlertTriangle, UserCheck, Zap, Ban, CreditCard, Shield, Globe, FileText, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50/30">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-amber-400/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-bl from-yellow-300/10 to-amber-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Header */}
      <header className="relative bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 shadow-2xl overflow-hidden">
        {/* Header Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="container mx-auto px-6 py-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/"
              className="inline-flex items-center space-x-2 text-black/80 hover:text-black transition-all duration-300 mb-8 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center space-x-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 rounded-2xl blur-xl"></div>
              <img
                src="/images/logo.svg"
                alt="quantifAI Logo"
                width={64}
                height={64}
                className="w-16 h-16 relative z-10 drop-shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-black text-black mb-2 tracking-tight drop-shadow-lg">Terms of Service</h1>
              <p className="text-xl text-black/70 font-medium">QUANTIFAI, LLC</p>
            </div>
          </motion.div>

        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-20 max-w-6xl relative z-10">
        {/* Main Heading Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 mb-12 relative overflow-hidden"
        >
          {/* Card Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-400/20 to-transparent rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 mb-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">QUANTIFAI, LLC TERMS OF SERVICE</h2>
                <div className="flex items-center space-x-2 mt-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-sm text-gray-600 font-medium">Last Updated: September 18, 2025</p>
                </div>
              </div>
            </motion.div>
            
            <div className="space-y-6 text-gray-700">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg leading-relaxed font-medium text-gray-800"
              >
                We are QUANTIFAI, LLC ("QUANTIFAI," "we," or "us"), and we appreciate your visiting our website.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="leading-relaxed"
              >
                These Terms of Service ("Terms") govern your access and use of this website and any digital services owned, operated, or offered by QUANTIFAI or its affiliates (collectively, the "Services"). By accessing or using the QUANTIFAI website or Services, you agree to these Terms. If you do not agree, please do not access or use the QUANTIFAI website or Services.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="leading-relaxed"
              >
                We may update these Terms at any time, without prior notice, in our sole discretion. Any changes will be effective immediately upon posting. Please check this page periodically to stay informed.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Privacy Policy Reference Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl border border-white/30 p-8 md:p-10 mb-8 relative overflow-hidden hover:shadow-2xl transition-all duration-500"
        >
          <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Privacy Policy</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
              </p>
            </div>
          </div>
        </motion.div>

        {/* License to Use Our Services Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/30 p-8 md:p-10 mb-8 relative overflow-hidden hover:shadow-2xl transition-all duration-500"
        >
          <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-green-400/20 to-transparent rounded-full blur-xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">License to Use Our Services</h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-6 border border-green-200/50">
                <h3 className="text-lg font-bold text-green-900 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  License Grant
                </h3>
                <p className="text-green-700 text-sm leading-relaxed">
                  We grant you a limited, nonexclusive, nontransferable, revocable license to access and use the QUANTIFAI website and Services solely for your personal, informational, and noncommercial use.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-6 border border-red-200/50">
                <h3 className="text-lg font-bold text-red-900 mb-3 flex items-center">
                  <Ban className="w-5 h-5 mr-2" />
                  You agree not to:
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-red-700">Resell, redistribute, or commercially exploit the Services.</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-red-700">Modify or create derivative works from our content or software.</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-red-700">Use data mining, robots, or similar methods to extract data.</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-red-700">Use the Services for unlawful, harmful, or abusive purposes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Intellectual Property Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/30 p-8 md:p-10 mb-8 relative overflow-hidden hover:shadow-2xl transition-all duration-500"
        >
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-400/20 to-transparent rounded-full blur-xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Intellectual Property</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                All content, software, trademarks, service marks, trade names, logos, and other intellectual property displayed on or related to the Services are the property of QUANTIFAI or its licensors.
              </p>
              <p className="leading-relaxed">
                Nothing in these Terms grants you rights to use the QUANTIFAI name, logo, or branding, whether or not it is registered as a trademark. Unauthorized use may violate intellectual property and other applicable laws.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Third-Party Content and Services Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/30 p-8 md:p-10 mb-8 relative overflow-hidden hover:shadow-2xl transition-all duration-500"
        >
          <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-purple-400/20 to-transparent rounded-full blur-xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Third-Party Content and Services</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Our Services may include links to or integrations with third-party websites, applications, or events ("Third-Party Content"). QUANTIFAI does not control, endorse, or assume responsibility for any Third-Party Content. Your interactions with third parties are solely between you and those third parties, and their terms and policies will apply.
              </p>
            </div>
          </div>
        </motion.div>

        {/* User Content and Conduct Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/30 p-8 md:p-10 mb-8 relative overflow-hidden hover:shadow-2xl transition-all duration-500"
        >
          <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-amber-400/20 to-transparent rounded-full blur-xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">User Content and Conduct</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-6 border border-amber-200/50">
                <h3 className="text-lg font-bold text-amber-900 mb-3 flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Content License
                </h3>
                <p className="text-amber-700 text-sm leading-relaxed">
                  You may have the ability to upload, share, or submit content ("User Content"). By posting User Content, you grant QUANTIFAI a worldwide, royalty-free, nonexclusive license to use, reproduce, distribute, and display that content in connection with the Services.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-6 border border-red-200/50">
                <h3 className="text-lg font-bold text-red-900 mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  You are solely responsible for your User Content and agree not to post or share anything that is:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-2">
                    <Ban className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-red-700 text-sm">Unlawful, defamatory, obscene, threatening, harassing, or otherwise objectionable.</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Ban className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-red-700 text-sm">Misleading or fraudulent.</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Ban className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-red-700 text-sm">Harmful to the security or functioning of the Services (e.g., viruses, malware, spam).</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Ban className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-red-700 text-sm">Infringing on the intellectual property or privacy rights of others.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 rounded-2xl p-4 border border-yellow-200/50">
                <p className="text-yellow-800 text-sm leading-relaxed flex items-start">
                  <Shield className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  We reserve the right, but not the obligation, to remove or restrict User Content at our discretion.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer of Warranties Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/30 p-8 md:p-10 mb-8 relative overflow-hidden hover:shadow-2xl transition-all duration-500"
        >
          <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-orange-400/20 to-transparent rounded-full blur-xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Disclaimer of Warranties</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                The QUANTIFAI website and Services are provided "as is" and "as available" without warranties of any kind, express or implied. We do not guarantee that the Services will be error-free, secure, or uninterrupted. To the fullest extent permitted by law, we disclaim all warranties, including merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Fintech Disclaimer Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-3xl shadow-xl p-8 md:p-10 mb-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-400/20 to-transparent rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-red-900">Fintech Disclaimer</h2>
            </div>
            
            <div className="bg-white/50 rounded-2xl p-6 border border-red-200/50">
              <p className="text-red-800 font-medium leading-relaxed">
                QUANTIFAI provides technology and analytics tools for informational and educational purposes only. We do not provide financial, investment, legal, accounting, or tax advice. Nothing on the QUANTIFAI website or Services should be considered an offer, solicitation, or recommendation to buy, sell, or hold any security or financial product. You are solely responsible for your own investment decisions. Please consult a licensed financial advisor or other qualified professional before making any financial decisions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Remaining Sections in a Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Limitation of Liability */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 p-6 relative overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-400/20 to-transparent rounded-full blur-lg"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg mb-4">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Limitation of Liability</h3>
              <div className="space-y-3">
                <p className="text-gray-700 text-sm font-semibold">To the fullest extent permitted by law:</p>
                <div className="bg-orange-50/50 rounded-lg p-3 border-l-4 border-orange-500">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <p className="text-orange-800 text-sm">QUANTIFAI and its affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, lost data, or loss of business opportunities.</p>
                  </div>
                </div>
                <div className="bg-orange-50/50 rounded-lg p-3 border-l-4 border-orange-500">
                  <div className="flex items-start space-x-2">
                    <CreditCard className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <p className="text-orange-800 text-sm">Our total liability to you for any claim arising out of or relating to your use of the Services will not exceed one U.S. dollar (US$1.00).</p>
                  </div>
                </div>
                <p className="text-gray-500 text-xs italic">Some jurisdictions do not allow limitations on liability, so these limitations may not apply to you.</p>
              </div>
            </div>
          </motion.div>

          {/* Arbitration and Dispute Resolution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 p-6 relative overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-400/20 to-transparent rounded-full blur-lg"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg mb-4">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Arbitration and Dispute Resolution</h3>
              <div className="space-y-3">
                <div className="bg-blue-50/50 rounded-lg p-3 border-l-4 border-blue-500">
                  <p className="text-blue-800 text-sm">Any dispute arising out of or relating to these Terms or the Services will be resolved exclusively through binding individual arbitration under the rules of the American Arbitration Association.</p>
                </div>
                <div className="bg-red-50/50 rounded-lg p-3 border-l-4 border-red-500">
                  <div className="flex items-start space-x-2">
                    <Ban className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-red-800 text-sm font-bold">No Class Actions:</p>
                      <p className="text-red-700 text-sm">You agree that disputes will be resolved only on an individual basis, not as part of a class, consolidated, or representative action.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border-l-4 border-gray-400">
                  <div className="flex items-start space-x-2">
                    <Globe className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">The arbitration will take place in Campbell, California, unless otherwise agreed.</p>
                  </div>
                </div>
                <div className="bg-yellow-50/50 rounded-lg p-3 border-l-4 border-yellow-500">
                  <div className="flex items-start space-x-2">
                    <Scale className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <p className="text-yellow-800 text-sm">If arbitration is not enforceable for any reason, disputes will be resolved in the state or federal courts located in California, and you consent to their jurisdiction.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Governing Law */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 p-6 relative overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-teal-400/20 to-transparent rounded-full blur-lg"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg mb-4">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Governing Law</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                These Terms will be governed by and interpreted in accordance with the laws of the State of California, without regard to conflict of law principles.
              </p>
            </div>
          </motion.div>

          {/* Termination */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 p-6 relative overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-red-400/20 to-transparent rounded-full blur-lg"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg mb-4">
                <Ban className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Termination</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We may suspend or terminate your access to the Services at any time, for any reason, without notice or liability. You may stop using the Services at any time.
              </p>
            </div>
          </motion.div>

          {/* Children's Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 p-6 relative overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-pink-400/20 to-transparent rounded-full blur-lg"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg mb-4">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Children's Privacy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The Services are not directed to individuals under the age of 13. We do not knowingly collect information from children.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Entire Agreement Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/30 p-8 md:p-10 mb-12 relative overflow-hidden hover:shadow-2xl transition-all duration-500"
        >
          <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tl from-green-400/20 to-transparent rounded-full blur-xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Entire Agreement</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                These Terms, along with our Privacy Policy, constitute the entire agreement between you and QUANTIFAI regarding the Services. They supersede any prior agreements or understandings.
              </p>
            </div>
          </div>
        </motion.div>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img
              src="/images/logo.svg"
              alt="quantifAI Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold">quantifAI</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 quantifAI. All rights reserved.
          </p>
        </div>
        
        {/* Bottom Gradient Line */}
        <div className="h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600"></div>
      </footer>
    </div>
  )
}