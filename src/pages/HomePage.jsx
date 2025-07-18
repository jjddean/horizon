import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import AiToolCard from '../components/shared/AiToolCard';
import ProductCard from '../components/shared/ProductCard';
import NewsletterSignup from '../components/shared/NewsletterSignup';
import AffiliateDisclosure from '../components/shared/AffiliateDisclosure';
import { ArrowRight, Star, TrendingUp, Zap } from 'lucide-react';

const HomePage = () => {
  const featuredTools = [
    {
      id: 1,
      name: "ChatGPT Plus",
      description: "Advanced AI assistant for writing, coding, and analysis",
      category: "Writing",
      rating: 4.8,
      price: "$20/month",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      affiliateUrl: "#",
      features: ["Advanced reasoning", "Code interpreter", "Image generation"]
    },
    {
      id: 2,
      name: "Midjourney",
      description: "Create stunning AI-generated artwork and images",
      category: "Design",
      rating: 4.9,
      price: "$10/month",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      affiliateUrl: "#",
      features: ["High-quality images", "Multiple styles", "Commercial use"]
    },
    {
      id: 3,
      name: "Notion AI",
      description: "Intelligent writing assistant integrated with Notion",
      category: "Productivity",
      rating: 4.7,
      price: "$8/month",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      affiliateUrl: "#",
      features: ["Writing assistance", "Data analysis", "Task automation"]
    }
  ];

  const featuredDeals = [
    {
      id: 1,
      title: "AI Writing Suite Bundle",
      description: "Complete writing toolkit with Grammarly, Jasper, and Copy.ai",
      originalPrice: 149,
      salePrice: 89,
      discount: 40,
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      affiliateUrl: "#",
      expiresAt: "2024-12-31"
    },
    {
      id: 2,
      title: "Design Pro Package",
      description: "Canva Pro + Adobe Creative Suite + Figma Professional",
      originalPrice: 299,
      salePrice: 199,
      discount: 33,
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      affiliateUrl: "#",
      expiresAt: "2024-12-25"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Discover the Best AI Tools of 2024
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Your Gateway to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI Excellence</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover, compare, and access the most powerful AI tools and exclusive deals. 
            Stay ahead with curated reviews and insider insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Explore AI Tools
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline">
              View Latest Deals
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">AI Tools Reviewed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
              <div className="text-gray-600">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$2M+</div>
              <div className="text-gray-600">Savings Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured AI Tools
            </h2>
            <p className="text-xl text-gray-600">
              Hand-picked tools that are transforming industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTools.map((tool) => (
              <AiToolCard key={tool.id} tool={tool} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Tools
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Hot Deals Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              Limited Time Offers
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Exclusive AI Deals
            </h2>
            <p className="text-xl text-gray-600">
              Save big on premium AI tools and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredDeals.map((deal) => (
              <ProductCard key={deal.id} product={deal} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              View All Deals
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <NewsletterSignup />
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <AffiliateDisclosure />
    </div>
  );
};

export default HomePage;