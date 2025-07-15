import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Tag, ShoppingCart, Bot, TrendingUp, Users, Star, ArrowRight, CheckCircle, Globe, HeartHandshake as Handshake, Link, Percent, Brain, BarChart3, Edit, Search, Mail, Share2, PieChart, Settings, ShoppingBag, Package, Monitor, Palette, Smartphone } from 'lucide-react';

const HomePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              1MarketLive: Your E-commerce Powerhouse
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
              Shop top products and AI tools with seamless integrations, automation, and honest reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Start Shopping
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center gap-2"
              >
                <Tag className="w-5 h-5" />
                See Top Deals
              </motion.button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">🌐</div>
                <div className="text-sm text-gray-300">All Product Genres</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">🤝</div>
                <div className="text-sm text-gray-300">Platform Integration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">🔗</div>
                <div className="text-sm text-gray-300">Affiliate & Dropship</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">🤖</div>
                <div className="text-sm text-gray-300">AI Automation</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Your Complete AI Business Partner Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Complete <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AI Business Partner</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From product discovery to automated operations, our AI handles everything so you can focus on growing your business.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-gray-700 rounded-2xl p-8 hover:bg-gray-600 transition-colors">
              <div className="text-blue-400 text-4xl mb-6">
                <ShoppingCart className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Marketplace</h3>
              <p className="text-gray-300 mb-6">AI-curated product listings across all top-selling genres with real-time market analysis and trend predictions.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Electronics & Tech</li>
                <li>• Fashion & Lifestyle</li>
                <li>• Home & Garden</li>
                <li>• Health & Beauty</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-700 rounded-2xl p-8 hover:bg-gray-600 transition-colors">
              <div className="text-blue-400 text-4xl mb-6">
                <Link className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Platform Integrations</h3>
              <p className="text-gray-300 mb-6">Seamlessly connect with Shopify, Amazon, eBay, and 50+ other platforms with one-click setup.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Shopify Integration</li>
                <li>• Amazon FBA Support</li>
                <li>• eBay & Etsy Connect</li>
                <li>• WooCommerce Sync</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-700 rounded-2xl p-8 hover:bg-gray-600 transition-colors">
              <div className="text-blue-400 text-4xl mb-6">
                <Percent className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Affiliate & Dropshipping</h3>
              <p className="text-gray-300 mb-6">Automated affiliate marketing and dropshipping with intelligent profit optimization and supplier management.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Commission Tracking</li>
                <li>• Supplier Network</li>
                <li>• Profit Optimization</li>
                <li>• Order Automation</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-700 rounded-2xl p-8 hover:bg-gray-600 transition-colors">
              <div className="text-blue-400 text-4xl mb-6">
                <Bot className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Listing Automation</h3>
              <p className="text-gray-300 mb-6">Automatically generate product listings, optimize SEO, and update inventory across all platforms.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Auto Product Descriptions</li>
                <li>• SEO Optimization</li>
                <li>• Price Monitoring</li>
                <li>• Inventory Management</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-700 rounded-2xl p-8 hover:bg-gray-600 transition-colors">
              <div className="text-blue-400 text-4xl mb-6">
                <Brain className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Productivity Tools</h3>
              <p className="text-gray-300 mb-6">Comprehensive suite of AI tools for content creation, data analysis, and workflow automation.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Content Generator</li>
                <li>• Data Analytics</li>
                <li>• Email Automation</li>
                <li>• Social Media Tools</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-700 rounded-2xl p-8 hover:bg-gray-600 transition-colors">
              <div className="text-blue-400 text-4xl mb-6">
                <BarChart3 className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Analytics</h3>
              <p className="text-gray-300 mb-6">Real-time business insights with predictive analytics and performance optimization recommendations.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Sales Forecasting</li>
                <li>• Customer Insights</li>
                <li>• ROI Tracking</li>
                <li>• Performance Reports</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Shop by Category Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Top-Selling Product Genres</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover trending products across all major categories with AI-powered market intelligence and profit predictions.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div variants={fadeInUp} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors border border-gray-700">
              <div className="text-purple-400 text-3xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-white mb-2">Electronics & Tech</h3>
              <p className="text-gray-400 text-sm mb-4">Latest gadgets, smartphones, laptops, and tech accessories</p>
              <div className="flex justify-between items-center">
                <span className="text-green-400 font-semibold">+15% Growth</span>
                <span className="text-gray-500 text-sm">12.3K Products</span>
              </div>
              <div className="mt-4 flex space-x-2">
                <button className="text-blue-400 hover:text-blue-300 text-sm">Buy via Amazon</button>
                <button className="text-blue-400 hover:text-blue-300 text-sm">Add to Cart</button>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors border border-gray-700">
              <div className="text-purple-400 text-3xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-white mb-2">Home & Garden</h3>
              <p className="text-gray-400 text-sm mb-4">Smart home devices, furniture, and garden essentials</p>
              <div className="flex justify-between items-center">
                <span className="text-green-400 font-semibold">+18% Growth</span>
                <span className="text-gray-500 text-sm">15.1K Products</span>
              </div>
              <div className="mt-4 flex space-x-2">
                <button className="text-blue-400 hover:text-blue-300 text-sm">Buy via Amazon</button>
                <button className="text-blue-400 hover:text-blue-300 text-sm">Add to Cart</button>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors border border-gray-700">
              <div className="text-purple-400 text-3xl mb-4">👗</div>
              <h3 className="text-xl font-bold text-white mb-2">Fashion & Lifestyle</h3>
              <p className="text-gray-400 text-sm mb-4">Trendy clothing, accessories, and lifestyle products</p>
              <div className="flex justify-between items-center">
                <span className="text-green-400 font-semibold">+22% Growth</span>
                <span className="text-gray-500 text-sm">8.7K Products</span>
              </div>
              <div className="mt-4 flex space-x-2">
                <button className="text-blue-400 hover:text-blue-300 text-sm">Buy via Amazon</button>
                <button className="text-blue-400 hover:text-blue-300 text-sm">Add to Cart</button>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors border border-gray-700">
              <div className="text-purple-400 text-3xl mb-4">🎮</div>
              <h3 className="text-xl font-bold text-white mb-2">Gaming & Entertainment</h3>
              <p className="text-gray-400 text-sm mb-4">Video games, gaming accessories, and entertainment</p>
              <div className="flex justify-between items-center">
                <span className="text-green-400 font-semibold">+28% Growth</span>
                <span className="text-gray-500 text-sm">4.2K Products</span>
              </div>
              <div className="mt-4 flex space-x-2">
                <button className="text-blue-400 hover:text-blue-300 text-sm">Buy via Amazon</button>
                <button className="text-blue-400 hover:text-blue-300 text-sm">Add to Cart</button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Platform Integrations Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seamless <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Platform Integrations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with all major e-commerce platforms and marketplaces with one-click integration and automated synchronization.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16"
          >
            <motion.div variants={fadeInUp} className="bg-green-900/20 rounded-xl p-6 text-center hover:bg-green-900/30 transition-colors border border-green-700">
              <div className="text-green-400 text-3xl mb-3">🛍️</div>
              <h3 className="font-bold text-green-300">Shopify</h3>
              <p className="text-xs text-green-400 mt-1">Full Integration</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-orange-900/20 rounded-xl p-6 text-center hover:bg-orange-900/30 transition-colors border border-orange-700">
              <div className="text-orange-400 text-3xl mb-3">📦</div>
              <h3 className="font-bold text-orange-300">Amazon</h3>
              <p className="text-xs text-orange-400 mt-1">FBA Support</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-blue-900/20 rounded-xl p-6 text-center hover:bg-blue-900/30 transition-colors border border-blue-700">
              <div className="text-blue-400 text-3xl mb-3">💻</div>
              <h3 className="font-bold text-blue-300">eBay</h3>
              <p className="text-xs text-blue-400 mt-1">Auto Listings</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-purple-900/20 rounded-xl p-6 text-center hover:bg-purple-900/30 transition-colors border border-purple-700">
              <div className="text-purple-400 text-3xl mb-3">🔗</div>
              <h3 className="font-bold text-purple-300">WooCommerce</h3>
              <p className="text-xs text-purple-400 mt-1">WordPress</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-pink-900/20 rounded-xl p-6 text-center hover:bg-pink-900/30 transition-colors border border-pink-700">
              <div className="text-pink-400 text-3xl mb-3">🎨</div>
              <h3 className="font-bold text-pink-300">Etsy</h3>
              <p className="text-xs text-pink-400 mt-1">Creative Market</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-indigo-900/20 rounded-xl p-6 text-center hover:bg-indigo-900/30 transition-colors border border-indigo-700">
              <div className="text-indigo-400 text-3xl mb-3">📱</div>
              <h3 className="font-bold text-indigo-300">Facebook</h3>
              <p className="text-xs text-indigo-400 mt-1">Social Commerce</p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white">🔗 Affiliate Marketing Hub</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-900/30 rounded-full flex items-center justify-center">
                    <Percent className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Commission Tracking</h4>
                    <p className="text-sm text-gray-400">Real-time tracking of affiliate commissions and performance metrics</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-900/30 rounded-full flex items-center justify-center">
                    <Link className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Link Management</h4>
                    <p className="text-sm text-gray-400">Automated affiliate link generation and optimization</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-900/30 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Performance Analytics</h4>
                    <p className="text-sm text-gray-400">Advanced analytics for affiliate campaign optimization</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white">📦 Dropshipping Automation</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-900/30 rounded-full flex items-center justify-center">
                    <Package className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Supplier Network</h4>
                    <p className="text-sm text-gray-400">Connect with verified suppliers and automate order fulfillment</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-900/30 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Inventory Sync</h4>
                    <p className="text-sm text-gray-400">Real-time inventory synchronization across all platforms</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-900/30 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Profit Optimization</h4>
                    <p className="text-sm text-gray-400">AI-powered pricing strategies for maximum profitability</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Tools & Automation Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AI-Powered Business Tools</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive suite of AI tools designed to automate your workflow and boost productivity across all business operations.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors border border-gray-700">
              <div className="text-blue-400 text-4xl mb-6">
                <Edit className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Content Generator</h3>
              <p className="text-gray-300 mb-4">AI-powered content creation for product descriptions, blog posts, and marketing materials.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Product descriptions</li>
                <li>• SEO-optimized content</li>
                <li>• Marketing copy</li>
                <li>• Social media posts</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors border border-gray-700">
              <div className="text-blue-400 text-4xl mb-6">
                <Search className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">SEO Optimizer</h3>
              <p className="text-gray-300 mb-4">Automated SEO optimization with keyword research, meta tags, and content optimization.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Keyword research</li>
                <li>• Meta tag generation</li>
                <li>• Content optimization</li>
                <li>• Ranking tracking</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors border border-gray-700">
              <div className="text-blue-400 text-4xl mb-6">
                <Mail className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Email Marketing</h3>
              <p className="text-gray-300 mb-4">Automated email campaigns with personalization and performance tracking.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Campaign automation</li>
                <li>• Personalization</li>
                <li>• A/B testing</li>
                <li>• Performance analytics</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors border border-gray-700">
              <div className="text-blue-400 text-4xl mb-6">
                <Share2 className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Social Media Manager</h3>
              <p className="text-gray-300 mb-4">Automated social media posting and engagement across all major platforms.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Multi-platform posting</li>
                <li>• Content scheduling</li>
                <li>• Engagement tracking</li>
                <li>• Hashtag optimization</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors border border-gray-700">
              <div className="text-blue-400 text-4xl mb-6">
                <PieChart className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Data Analytics</h3>
              <p className="text-gray-300 mb-4">Advanced analytics and insights with predictive modeling and trend analysis.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Sales forecasting</li>
                <li>• Customer insights</li>
                <li>• Trend analysis</li>
                <li>• Performance metrics</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors border border-gray-700">
              <div className="text-blue-400 text-4xl mb-6">
                <Settings className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Workflow Automation</h3>
              <p className="text-gray-300 mb-4">Complete workflow automation with custom triggers and actions.</p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Custom workflows</li>
                <li>• Trigger automation</li>
                <li>• Task scheduling</li>
                <li>• Process optimization</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Exclusive Deals Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Exclusive <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Deals</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Save big on trending products and premium AI tools with our curated deals.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl p-8 border border-red-700">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">50% OFF</span>
                <span className="text-gray-400 text-sm">Limited Time</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Tech Products Flash Sale</h3>
              <p className="text-gray-300 mb-6">Shop trending electronics, gadgets, and smart devices at unbeatable prices.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <Tag className="w-4 h-4" />
                Claim Deal
              </motion.button>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-blue-700">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">FREE TRIAL</span>
                <span className="text-gray-400 text-sm">7 Days</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Premium AI Tools</h3>
              <p className="text-gray-300 mb-6">Try our complete suite of AI automation tools risk-free for a full week.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <Bot className="w-4 h-4" />
                Start Free Trial
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;