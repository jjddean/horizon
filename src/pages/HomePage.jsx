import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, ShoppingBag, Cpu, Heart, Star, ArrowRight, Tv } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              1MarketLive<span className="text-blue-400">®</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your ultimate destination for reviews, deals, marketplace solutions, and live financial news
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Zap className="w-5 h-5 mr-2" />
                Get Started
              </Button>
              <NavLink to="/news">
                <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                  <Tv className="w-5 h-5 mr-2" />
                  Watch Financial News
                </Button>
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Explore Our Platform
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Financial News - NEW FEATURE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <NavLink to="/news">
                <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Tv className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Financial News</h3>
                    <p className="text-gray-400 mb-4">
                      Live TV streaming from CNN, Bloomberg, CNBC, and Fox Business with real-time market analysis
                    </p>
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300">
                      <span className="text-sm font-medium">Watch Live</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </NavLink>
            </motion.div>

            {/* Reviews */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <NavLink to="/reviews">
                <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Reviews</h3>
                    <p className="text-gray-400 mb-4">
                      Honest, detailed reviews of products and services to help you make informed decisions
                    </p>
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300">
                      <span className="text-sm font-medium">Read Reviews</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </NavLink>
            </motion.div>

            {/* Deals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <NavLink to="/deals">
                <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Deals</h3>
                    <p className="text-gray-400 mb-4">
                      Discover the best deals and discounts across various categories and platforms
                    </p>
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300">
                      <span className="text-sm font-medium">Find Deals</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </NavLink>
            </motion.div>

            {/* Marketplace */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <NavLink to="/marketplace">
                <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <ShoppingBag className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Marketplace</h3>
                    <p className="text-gray-400 mb-4">
                      Explore our curated marketplace with products across multiple categories
                    </p>
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300">
                      <span className="text-sm font-medium">Shop Now</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </NavLink>
            </motion.div>

            {/* AI Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <NavLink to="/ai-tools">
                <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">AI Tools</h3>
                    <p className="text-gray-400 mb-4">
                      Cutting-edge AI tools and solutions to enhance your productivity and workflow
                    </p>
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300">
                      <span className="text-sm font-medium">Explore Tools</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </NavLink>
            </motion.div>

            {/* Health & Wellness */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <NavLink to="/marketplace/health">
                <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Health & Wellness</h3>
                    <p className="text-gray-400 mb-4">
                      Premium health and wellness products to support your lifestyle and well-being
                    </p>
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </NavLink>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who trust 1MarketLive® for their needs
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Zap className="w-5 h-5 mr-2" />
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
}