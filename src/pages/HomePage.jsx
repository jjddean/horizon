import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Zap, Tag, ShoppingCart, Bot, TrendingUp, Users, Star, ArrowRight, CheckCircle, Globe, HeartHandshake as Handshake, Link, Percent, Brain, BarChart3, Edit, Search, Mail, Share2, PieChart, Settings, ShoppingBag, Package, Monitor, Palette, Smartphone, Sparkles, Rocket, Target, Layers, Cpu, Database, Workflow, Gauge, Shield, Infinity } from 'lucide-react';

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  // Mouse tracking for interactive cursor
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  // Animated text variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    })
  };

  // Stagger container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Card hover variants
  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Floating animation
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Interactive cursor component
  const Cursor = () => (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 bg-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
        scale: cursorVariant === "hover" ? 2 : 1
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28
      }}
    />
  );

  // Animated counter component
  const AnimatedCounter = ({ end, duration = 2 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref);

    useEffect(() => {
      if (inView) {
        let startTime;
        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, [inView, end, duration]);

    return <span ref={ref}>{count}</span>;
  };

  // Morphing SVG component
  const MorphingSVG = () => (
    <motion.svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      className="absolute top-20 right-20 opacity-20"
    >
      <motion.path
        d="M20,50 Q50,20 80,50 Q50,80 20,50"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="2"
        animate={{
          d: [
            "M20,50 Q50,20 80,50 Q50,80 20,50",
            "M20,30 Q50,10 80,30 Q50,60 20,30",
            "M20,50 Q50,20 80,50 Q50,80 20,50"
          ]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </motion.svg>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden" ref={containerRef}>
      <Cursor />
      
      {/* Hero Section with Cinematic Intro */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
        style={{ opacity, scale }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <MorphingSVG />

        <motion.div 
          className="text-center z-10 max-w-6xl mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Kinetic Typography */}
          <motion.div className="mb-8">
            <motion.h1 
              className="text-6xl md:text-8xl font-black mb-6 leading-tight"
              variants={textVariants}
              custom={0}
            >
              <motion.span 
                className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                1MarketLive
              </motion.span>
            </motion.h1>
            
            <motion.div
              variants={textVariants}
              custom={1}
              className="text-2xl md:text-4xl font-light text-gray-300 mb-4"
            >
              Your E-commerce{" "}
              <motion.span
                className="text-blue-400 font-bold"
                animate={{
                  scale: [1, 1.05, 1],
                  color: ["#60a5fa", "#a78bfa", "#60a5fa"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Powerhouse
              </motion.span>
            </motion.div>
          </motion.div>

          <motion.p 
            className="text-xl md:text-2xl mb-12 text-gray-400 max-w-4xl mx-auto leading-relaxed"
            variants={textVariants}
            custom={2}
          >
            A next-gen, AI-powered affiliate and dropshipping marketplace. 
            Discover top-selling products, automate listings, and integrate with 
            Amazon, Shopify, and more.
          </motion.p>

          {/* CTA Buttons with Advanced Hover Effects */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            variants={textVariants}
            custom={3}
          >
            <motion.button
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setCursorVariant("hover")}
              onHoverEnd={() => setCursorVariant("default")}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Start Shopping
              </span>
            </motion.button>

            <motion.button
              className="group border-2 border-blue-400 text-blue-400 hover:text-white px-8 py-4 rounded-full font-semibold text-lg relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setCursorVariant("hover")}
              onHoverEnd={() => setCursorVariant("default")}
            >
              <motion.div
                className="absolute inset-0 bg-blue-400"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0.5, originY: 0.5 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <Tag className="w-5 h-5" />
                See Top Deals
              </span>
            </motion.button>
          </motion.div>

          {/* Feature Icons with Floating Animation */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            {[
              { icon: "🌐", text: "All Product Genres" },
              { icon: "🤝", text: "Platform Integration" },
              { icon: "🔗", text: "Affiliate & Dropship" },
              { icon: "🤖", text: "AI Automation" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <motion.div 
                  className="text-4xl mb-3"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>
                <div className="text-sm text-gray-400">{item.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-blue-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Stats Section with Animated Counters */}
      <motion.section 
        className="py-20 bg-gray-800/50 backdrop-blur-sm"
        style={{ y: y1 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: 50000, suffix: "+", label: "Active Users" },
              { number: 1000000, suffix: "+", label: "Products Listed" },
              { number: 25, suffix: "+", label: "Platform Integrations" },
              { number: 99, suffix: "%", label: "Uptime Guarantee" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="p-6"
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-blue-400 mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <AnimatedCounter end={stat.number} />
                  {stat.suffix}
                </motion.div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* AI Business Partner Section with Advanced Animations */}
      <motion.section 
        className="py-20 px-4 bg-gray-900"
        style={{ y: y2 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Your Complete{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Business Partner
              </span>
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From product discovery to automated operations, our AI handles everything 
              so you can focus on growing your business.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: ShoppingCart,
                title: "Smart Marketplace",
                description: "AI-curated product listings across all top-selling genres with real-time market analysis and trend predictions.",
                features: ["Electronics & Tech", "Fashion & Lifestyle", "Home & Garden", "Health & Beauty"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Link,
                title: "Platform Integrations",
                description: "Seamlessly connect with Shopify, Amazon, eBay, and 50+ other platforms with one-click setup.",
                features: ["Shopify Integration", "Amazon FBA Support", "eBay & Etsy Connect", "WooCommerce Sync"],
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Percent,
                title: "Affiliate & Dropshipping",
                description: "Automated affiliate marketing and dropshipping with intelligent profit optimization and supplier management.",
                features: ["Commission Tracking", "Supplier Network", "Profit Optimization", "Order Automation"],
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Bot,
                title: "AI Listing Automation",
                description: "Automatically generate product listings, optimize SEO, and update inventory across all platforms.",
                features: ["Auto Product Descriptions", "SEO Optimization", "Price Monitoring", "Inventory Management"],
                color: "from-orange-500 to-red-500"
              },
              {
                icon: Brain,
                title: "AI Productivity Tools",
                description: "Comprehensive suite of AI tools for content creation, data analysis, and workflow automation.",
                features: ["Content Generator", "Data Analytics", "Email Automation", "Social Media Tools"],
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description: "Real-time business insights with predictive analytics and performance optimization recommendations.",
                features: ["Sales Forecasting", "Customer Insights", "ROI Tracking", "Performance Reports"],
                color: "from-teal-500 to-blue-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 overflow-hidden"
                onHoverStart={() => setCursorVariant("hover")}
                onHoverEnd={() => setCursorVariant("default")}
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                
                <motion.div
                  className={`text-4xl mb-6 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="w-12 h-12" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="text-sm text-gray-500 flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <motion.div
                        className="w-1.5 h-1.5 bg-blue-400 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Platform Integrations with Morphing Cards */}
      <motion.section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Seamless{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Platform Integrations
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Connect with all major e-commerce platforms and marketplaces with 
              one-click integration and automated synchronization.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: "🛍️", name: "Shopify", desc: "Full Integration", color: "from-green-500 to-emerald-500" },
              { icon: "📦", name: "Amazon", desc: "FBA Support", color: "from-orange-500 to-yellow-500" },
              { icon: "💻", name: "eBay", desc: "Auto Listings", color: "from-blue-500 to-cyan-500" },
              { icon: "🔗", name: "WooCommerce", desc: "WordPress", color: "from-purple-500 to-pink-500" },
              { icon: "🎨", name: "Etsy", desc: "Creative Market", color: "from-pink-500 to-rose-500" },
              { icon: "📱", name: "Facebook", desc: "Social Commerce", color: "from-indigo-500 to-blue-500" }
            ].map((platform, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
                }}
                className={`bg-gradient-to-br ${platform.color} rounded-xl p-6 text-center shadow-lg border border-white/10`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div 
                  className="text-3xl mb-3"
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  {platform.icon}
                </motion.div>
                <h3 className="font-bold text-white">{platform.name}</h3>
                <p className="text-xs text-white/80 mt-1">{platform.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Dual Hub Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  🔗
                </motion.span>
                Affiliate Marketing Hub
              </h3>
              
              {[
                { icon: Percent, title: "Commission Tracking", desc: "Real-time tracking of affiliate commissions and performance metrics" },
                { icon: Link, title: "Link Management", desc: "Automated affiliate link generation and optimization" },
                { icon: BarChart3, title: "Performance Analytics", desc: "Advanced analytics for affiliate campaign optimization" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(147, 51, 234, 0.5)" }}
                  >
                    <item.icon className="w-5 h-5 text-purple-400" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <motion.span
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  📦
                </motion.span>
                Dropshipping Automation
              </h3>
              
              {[
                { icon: Package, title: "Supplier Network", desc: "Connect with verified suppliers and automate order fulfillment" },
                { icon: Database, title: "Inventory Sync", desc: "Real-time inventory synchronization across all platforms" },
                { icon: TrendingUp, title: "Profit Optimization", desc: "AI-powered pricing strategies for maximum profitability" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.5)" }}
                  >
                    <item.icon className="w-5 h-5 text-blue-400" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* AI Tools Section with Liquid Morphing Effects */}
      <motion.section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI-Powered Business Tools
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive suite of AI tools designed to automate your workflow 
              and boost productivity across all business operations.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Edit,
                title: "Content Generator",
                description: "AI-powered content creation for product descriptions, blog posts, and marketing materials.",
                features: ["Product descriptions", "SEO-optimized content", "Marketing copy", "Social media posts"],
                color: "from-emerald-500 to-teal-500"
              },
              {
                icon: Search,
                title: "SEO Optimizer",
                description: "Automated SEO optimization with keyword research, meta tags, and content optimization.",
                features: ["Keyword research", "Meta tag generation", "Content optimization", "Ranking tracking"],
                color: "from-blue-500 to-indigo-500"
              },
              {
                icon: Mail,
                title: "Email Marketing",
                description: "Automated email campaigns with personalization and performance tracking.",
                features: ["Campaign automation", "Personalization", "A/B testing", "Performance analytics"],
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Share2,
                title: "Social Media Manager",
                description: "Automated social media posting and engagement across all major platforms.",
                features: ["Multi-platform posting", "Content scheduling", "Engagement tracking", "Hashtag optimization"],
                color: "from-orange-500 to-red-500"
              },
              {
                icon: PieChart,
                title: "Data Analytics",
                description: "Advanced analytics and insights with predictive modeling and trend analysis.",
                features: ["Sales forecasting", "Customer insights", "Trend analysis", "Performance metrics"],
                color: "from-cyan-500 to-blue-500"
              },
              {
                icon: Settings,
                title: "Workflow Automation",
                description: "Complete workflow automation with custom triggers and actions.",
                features: ["Custom workflows", "Trigger automation", "Task scheduling", "Process optimization"],
                color: "from-violet-500 to-purple-500"
              }
            ].map((tool, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  rotateX: 5,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
                }}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Liquid morphing background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10`}
                  animate={{
                    borderRadius: ["20px", "40px 20px", "20px 40px", "20px"]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className={`text-4xl mb-6 bg-gradient-to-r ${tool.color} bg-clip-text text-transparent`}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <tool.icon className="w-12 h-12" />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
                  {tool.title}
                </h3>
                
                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                  {tool.description}
                </p>
                
                <ul className="space-y-1">
                  {tool.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="text-sm text-gray-500 flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <motion.div
                        className="w-1.5 h-1.5 bg-blue-400 rounded-full"
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: idx * 0.3 
                        }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA with Particle Effects */}
      <motion.section 
        className="relative py-20 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
              animate={{
                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%"
              }}
            />
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p 
            className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of successful entrepreneurs who have already revolutionized 
            their e-commerce operations with our AI-powered platform.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 group-hover:text-white transition-colors">
                Start Free Trial
              </span>
            </motion.button>
            
            <motion.button
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Demo
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="flex justify-center items-center space-x-8 text-purple-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center">
              <CheckCircle className="mr-2 w-5 h-5" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <Shield className="mr-2 w-5 h-5" />
              <span>30-day money-back guarantee</span>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;