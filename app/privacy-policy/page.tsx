'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Shield, Lock, Eye, Users, Database, Globe, FileText, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
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
              <h1 className="text-5xl md:text-6xl font-black text-black mb-2 tracking-tight drop-shadow-lg">Privacy Policy</h1>
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
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">QUANTIFAI, LLC PRIVACY POLICY</h2>
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
                We are QUANTIFAI, LLC ("QUANTIFAI", "we", or "us") and we appreciate your visiting our website.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="leading-relaxed"
              >
                This is our privacy policy ("Privacy Policy"). It is intended to explain our practices concerning the manner and ways in which your information and data, and other information and data concerning you and others, is accessed, gathered, collected, stored and used by us and our affiliated companies (collectively, our "Affiliates") including, without limitation, websites or digital services owned, operated or offered by, through, on behalf of, or in conjunction with QUANTIFAI or its Affiliates, including, without limitation, any website, or digital service through which this Privacy Policy appears (each a "Service," collectively the "Services"). "Users" are persons that access and use the Services.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="leading-relaxed"
              >
                By access and using the QUANTIFAI website and using the Services, you agree to the terms and conditions of this Privacy Policy. If you do not agree to the terms and conditions of this Privacy Policy, please do not access or use the QUANTIFAI website or use the Services.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="leading-relaxed"
              >
                This Privacy Policy is subject to change at any time and from time to time without notice in our sole and absolute discretion and without notice. You can determine when this Privacy Policy was last revised by referring to the "Last Updated" legend at the top of this page. Any changes to our Privacy Policy will become effective upon our posting of the revised Privacy Policy on the QUANTIFAI website. If you don't agree to any changes in our Privacy Policy, please stop using the QUANTIFAI website and the Services. Your access and use of the QUANTIFAI website or use of the Services following such changes constitutes your acceptance of the revised Privacy Policy then in effect. You should in any event periodically review this Privacy Policy to assure that it aligns with your needs and expectations, as they may also change from time to time.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Privacy Policy Coverage Card */}
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Privacy Policy Coverage</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                This Privacy Policy covers QUANTIFAI's access, gathering and use of personal identifiable information ("PII") when you access and use the QUANTIFAI website and when you use Services. PII is information that identifies you as an individual. PII is of many different types, but includes information and data about you that is generally not publicly available, or that you may not generally disclose or intend to disclose to others for any one or a number of reasons. In addition, your general attitude and approach to PII may change from time to time.
              </p>
              <p className="leading-relaxed">
                This policy does not apply to the policies, procedures and practices of third parties that QUANTIFAI does not own or control (e.g. third party websites accessible or linked to or through the QUANTIFAI website), or to individuals that QUANTIFAI does not employ, manage or control. We do not monitor their actions, and we are not responsible and will not be liable for their actions or omissions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Collection of Data Card */}
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
                <Database className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Collection of Data</h2>
            </div>

            {/* Data categories in a beautiful grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 border border-blue-200/50">
                <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Data You Provide to Us
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-blue-800">Registration</p>
                      <p className="text-blue-700">We collect, store and use PII such as name, address, IP address, geo-location, title, phone number, organization name and type, country, field of interest, and credit card that Users voluntarily supply while accessing and using the QUANTIFAI website or using the Services.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-blue-800">Social Media</p>
                      <p className="text-blue-700">If Users access or log-in to one of the Services from or through a social media service, the PII we collect may also include the User ID and/or user name associated with that service and any other information Users have permitted the service to share with us.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-6 border border-purple-200/50">
                <h3 className="text-lg font-bold text-purple-900 mb-3 flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Data Automatically or Passively Collected by Us
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-purple-800">Server Logs</p>
                      <p className="text-purple-700">When Users access and interact with the Services, we receive and record certain "traffic data" on our server logs such as IP address, time stamp of visit, page visited or service used, geolocation, or unique device identifier.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-purple-800">Cookies</p>
                      <p className="text-purple-700">We and third-party services may use cookies, pixel tags and other similar technologies to provide content, advertising, functionality, or measure and analyze advertisement and traffic metrics.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-6 border border-amber-200/50">
                <h3 className="text-lg font-bold text-amber-900 mb-3 flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Usage Data
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-800">Advertising Networks and Platforms</p>
                      <p className="text-amber-700">Advertisers and advertising networks may use cookies and similar technologies to deliver targeted ads.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-800">Analytics and Reporting</p>
                      <p className="text-amber-700">Server log, cookies, and usage data may be shared with analytics providers to understand and improve user experience.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl p-6 border border-red-200/50">
                <h3 className="text-lg font-bold text-red-900 mb-3 flex items-center">
                  <Database className="w-5 h-5 mr-2" />
                  Other Sources
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-red-700">• <strong>Third-Party Information Usage</strong> – We may forward your PII to third parties such as payment processors or order fulfillment providers.</p>
                  <p className="text-red-700">• <strong>Publicly Available Information</strong> – We may supplement information with publicly available data.</p>
                  <p className="text-red-700">• <strong>Legal Uses of Information</strong> – We may use PII to protect and enforce our rights or comply with applicable laws.</p>
                  <p className="text-red-700">• <strong>Mergers and/or Sale of Assets</strong> – If QUANTIFAI sells, transfers or merges assets or business, we may transfer User PII as part of that transaction.</p>
                  <p className="text-red-700">• <strong>Publication of Reports</strong> – We may release aggregated non-PII to show usage trends.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* User Access and Control Card */}
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
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">User Access and Control</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-2xl p-6 border border-indigo-200/50">
                <h3 className="font-bold text-indigo-900 mb-2">Receiving Electronic Communications</h3>
                <p className="text-indigo-700 text-sm">Users may opt-out of marketing communications by following unsubscribe instructions.</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-2xl p-6 border border-indigo-200/50">
                <h3 className="font-bold text-indigo-900 mb-2">Cancelling the Account</h3>
                <p className="text-indigo-700 text-sm">If a User deletes their account, we may retain backup information to comply with applicable laws, technical, contractual, or financial obligations.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Remaining Sections - Compact Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Children's Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 p-6 relative overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-pink-400/20 to-transparent rounded-full blur-lg"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg mb-3">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Children's Privacy</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                The QUANTIFAI website and the Services are not directed to individuals under the age of thirteen (13). You must be thirteen (13) years and older to register on the QUANTIFAI website or use the Services. As a result, QUANTIFAI does not specifically collect information about children.
              </p>
            </div>
          </motion.div>

          {/* Security Issues */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 p-6 relative overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-red-400/20 to-transparent rounded-full blur-lg"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg mb-3">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Security Issues</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                No data transmission over the Internet or data storage system can be guaranteed to be 100% secure. Please do not send us sensitive information through insecure channels. If you have reason to believe that your interaction with us is no longer secure, you must immediately notify us of the problem.
              </p>
            </div>
          </motion.div>

          {/* Jurisdictional Issues */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 p-6 relative overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-teal-400/20 to-transparent rounded-full blur-lg"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg mb-3">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Jurisdictional Issues</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                We do not represent that the QUANTIFAI website or the Services, or any part thereof, are appropriate or available for use in any particular jurisdiction. Those who choose to access or use the QUANTIFAI website or use the Services do so on their own initiative and at their own risk, and are responsible for complying with all laws. By accessing or using the QUANTIFAI website or using the Services and submitting any PII, you consent to the transfer of PII to other countries, which may provide a different level of security than your country of residence.
              </p>
            </div>
          </motion.div>
        </div>
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