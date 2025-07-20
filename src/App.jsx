import React from 'react';
import { Search, Settings, Cloud, Sun, MapPin, ChevronDown, ChevronRight, PlayCircle, Heart, Share2, MessageSquare, ThumbsUp, Bookmark, Zap, Tag, ArrowRight } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-700/40 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container mx-auto flex h-16 items-center px-4">
          <div className="flex items-center space-x-2 mr-6">
            <Zap className="h-6 w-6 text-blue-400" />
            <span className="font-bold text-lg text-white">1MarketLive®</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 flex-1">
            <div className="relative group">
              <button className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-400 text-gray-300">
                📖 Resources
                <ChevronDown className="h-3 w-3" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-400 text-gray-300">
                ⚙️ Solutions
                <ChevronDown className="h-3 w-3" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-400 text-gray-300">
                🛍️ Marketplace
                <ChevronDown className="h-3 w-3" />
              </button>
            </div>
            <button className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-400 text-gray-300">
              ℹ️ About
            </button>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-400 mb-4">
              1MarketLive
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your E-commerce Powerhouse
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Shop top products and AI tools with seamless integrations, automation, and honest reviews.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center">
              <Zap className="w-5 h-5 mr-2" />
              Start Shopping
            </button>
            <button className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 px-8 py-3 rounded-full font-medium flex items-center justify-center">
              <Tag className="w-5 h-5 mr-2" />
              See Top Deals
            </button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                🌐
              </div>
              <h3 className="text-white font-semibold mb-2">All Product Genres</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                🤝
              </div>
              <h3 className="text-white font-semibold mb-2">Platform Integration</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                🔗
              </div>
              <h3 className="text-white font-semibold mb-2">Affiliate & Dropship</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                🤖
              </div>
              <h3 className="text-white font-semibold mb-2">AI Automation</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;