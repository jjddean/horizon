import React, { useState } from 'react';
    import { NavLink } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Zap, Menu, X, Gift, Star, Info, Cpu, ShoppingBag, ChevronDown, Heart, BookOpen, Settings, Monitor, Tv } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { useToast } from '@/components/ui/use-toast';

    const NavItem = ({ to, children, onClick }) => (
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-400 ${
            isActive ? 'text-blue-400' : 'text-gray-300'
          }`
        }
      >
        {children}
      </NavLink>
    );

    const Header = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [activeDropdown, setActiveDropdown] = useState(null);
      const { toast } = useToast();

      const toggleMenu = () => setIsOpen(!isOpen);
      const closeMenu = () => setIsOpen(false);
      
      const handleDropdownToggle = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
      };

      const closeDropdowns = () => {
        setActiveDropdown(null);
      };

      const handleGetStartedClick = () => {
        toast({
          title: '🚧 Feature In Progress',
          description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        });
      };

      return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-700/40 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
          <div className="container flex h-16 items-center">
            <NavLink to="/" className="mr-6 flex items-center space-x-2" onClick={closeMenu}>
              <Zap className="h-6 w-6 text-blue-400" />
              <span className="font-bold sm:inline-block text-lg text-white">1MarketLive®</span>
            </NavLink>
            <nav className="hidden md:flex items-center gap-6 flex-1">
              <div className="relative group">
                <button
                  className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-400 text-gray-300"
                  onClick={() => handleDropdownToggle('resources')}
                >
                  <BookOpen className="h-4 w-4" /> Resources
                  <ChevronDown className="h-3 w-3" />
                </button>
                {activeDropdown === 'resources' && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-50"
                  >
                    <button
                      onClick={handleGetStartedClick}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-colors"
                    >
                      Guides & Tutorials
                    </button>
                    <button
                      onClick={handleGetStartedClick}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-colors"
                    >
                      Blog
                    </button>
                    <button
                      onClick={handleGetStartedClick}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-colors"
                    >
                      Free Tools
                    </button>
                    <button
                      onClick={handleGetStartedClick}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-colors"
                    >
                      Community
                    </button>
                  </div>
                )}
              </div>
              <div className="relative group">
                <button
                  className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-400 text-gray-300"
                  onClick={() => handleDropdownToggle('solutions')}
                >
                  <Settings className="h-4 w-4" /> Solutions
                  <ChevronDown className="h-3 w-3" />
                </button>
                {activeDropdown === 'solutions' && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-50"
                  >
                    <button
                      onClick={handleGetStartedClick}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-colors"
                    >
                      Platform Integrations
                    </button>
                    <button
                      onClick={handleGetStartedClick}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-colors"
                    >
                      AI Automation
                    </button>
                    <NavLink
                      to="/reviews"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-colors"
                      onClick={closeDropdowns}
                    >
                      Reviews
                    </NavLink>
                    <NavLink
                      to="/deals"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-colors"
                      onClick={closeDropdowns}
                    >
                      Deals
                    </NavLink>
                  </div>
                )}
              </div>
              <div className="relative group">
                <button
                  className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-400 text-gray-300"
                  onClick={() => handleDropdownToggle('marketplace')}
                >
                  <ShoppingBag className="h-4 w-4" /> Marketplace
                  <ChevronDown className="h-3 w-3" />
                </button>
                {activeDropdown === 'marketplace' && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-md shadow-lg z-50"
                  >
                    <NavLink
                      to="/marketplace"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-colors"
                      onClick={closeDropdowns}
                    >
                      <ShoppingBag className="inline h-4 w-4 mr-2" />
                      Shop by Category
                    </NavLink>
                    <NavLink
                      to="/ai-tools"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-colors"
                      onClick={closeDropdowns}
                    >
                      <Cpu className="inline h-4 w-4 mr-2" />
                      AI Tools
                    </NavLink>
                    <NavLink
                      to="/deals"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-colors"
                      onClick={closeDropdowns}
                    >
                      <Gift className="inline h-4 w-4 mr-2" />
                      Deals
                    </NavLink>
                    <NavLink
                      to="/marketplace/health"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-colors"
                      onClick={closeDropdowns}
                    >
                      <Heart className="inline h-4 w-4 mr-2" />
                      Health & Wellness
                    </NavLink>
                    <button
                      onClick={handleGetStartedClick}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-700/50 transition-colors"
                    >
                      Affiliate Program
                    </button>
                  </div>
                )}
              </div>
              <NavItem to="/news">
                <Tv className="h-4 w-4" /> Financial News
              </NavItem>
              <NavItem to="/about">
                <Info className="h-4 w-4" /> About
              </NavItem>
            </nav>
            <div className="flex flex-1 items-center justify-end space-x-4">
              <Button 
                onClick={handleGetStartedClick}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Get Started
              </Button>
              <div className="md:hidden">
                <Button onClick={toggleMenu} variant="ghost" size="icon">
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden p-4 border-t border-gray-700/40 bg-gray-800"
            >
              <nav className="grid gap-4">
                <NavItem to="/" onClick={closeMenu}>Home</NavItem>
                <NavItem to="/reviews" onClick={closeMenu}>Reviews</NavItem>
                <NavItem to="/deals" onClick={closeMenu}>Deals</NavItem>
                <NavItem to="/marketplace" onClick={closeMenu}>Marketplace</NavItem>
                <NavItem to="/marketplace/health" onClick={closeMenu}>Health & Wellness</NavItem>
                <NavItem to="/ai-tools" onClick={closeMenu}>AI Tools</NavItem>
                <NavItem to="/news" onClick={closeMenu}>Financial News</NavItem>
                <NavItem to="/about" onClick={closeMenu}>About</NavItem>
              </nav>
            </motion.div>
          )}
        </header>
      );
    };

    export default Header;