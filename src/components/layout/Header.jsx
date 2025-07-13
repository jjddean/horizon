import React, { useState } from 'react';
    import { NavLink } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Zap, Menu, X, Gift, Star, Info, Cpu, ShoppingBag, ChevronDown, Heart } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { useToast } from '@/components/ui/use-toast';

    const NavItem = ({ to, children, onClick }) => (
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
            isActive ? 'text-primary' : 'text-muted-foreground'
          }`
        }
      >
        {children}
      </NavLink>
    );

    const Header = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [isMarketplaceOpen, setIsMarketplaceOpen] = useState(false);
      const { toast } = useToast();

      const toggleMenu = () => setIsOpen(!isOpen);
      const closeMenu = () => setIsOpen(false);
      const toggleMarketplace = () => setIsMarketplaceOpen(!isMarketplaceOpen);

      const handleGetStartedClick = () => {
        toast({
          title: '🚧 Feature In Progress',
          description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        });
      };

      return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center">
            <NavLink to="/" className="mr-6 flex items-center space-x-2" onClick={closeMenu}>
              <Zap className="h-6 w-6 text-primary" />
              <span className="font-bold sm:inline-block text-lg">1MarketLive®</span>
            </NavLink>
            <nav className="hidden md:flex items-center gap-6 flex-1">
              <NavItem to="/reviews">
                <Star className="h-4 w-4" /> Reviews
              </NavItem>
              <NavItem to="/deals">
                <Gift className="h-4 w-4" /> Deals
              </NavItem>
              <div className="relative group">
                <button
                  className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                  onMouseEnter={() => setIsMarketplaceOpen(true)}
                  onMouseLeave={() => setIsMarketplaceOpen(false)}
                >
                  <ShoppingBag className="h-4 w-4" /> Marketplace
                  <ChevronDown className="h-3 w-3" />
                </button>
                {isMarketplaceOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg z-50"
                    onMouseEnter={() => setIsMarketplaceOpen(true)}
                    onMouseLeave={() => setIsMarketplaceOpen(false)}
                  >
                    <NavLink
                      to="/marketplace"
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
                    >
                      <ShoppingBag className="inline h-4 w-4 mr-2" />
                      All Products
                    </NavLink>
                    <NavLink
                      to="/marketplace/health"
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
                    >
                      <Heart className="inline h-4 w-4 mr-2" />
                      Health & Wellness
                    </NavLink>
                  </div>
                )}
              </div>
              <NavItem to="/ai-tools">
                <Cpu className="h-4 w-4" /> AI Tools
              </NavItem>
              <NavItem to="/about">
                <Info className="h-4 w-4" /> About
              </NavItem>
            </nav>
            <div className="flex flex-1 items-center justify-end space-x-4">
              <Button onClick={handleGetStartedClick}>Get Started</Button>
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
              className="md:hidden p-4 border-t border-border/40"
            >
              <nav className="grid gap-4">
                <NavItem to="/" onClick={closeMenu}>Home</NavItem>
                <NavItem to="/reviews" onClick={closeMenu}>Reviews</NavItem>
                <NavItem to="/deals" onClick={closeMenu}>Deals</NavItem>
                <NavItem to="/marketplace" onClick={closeMenu}>Marketplace</NavItem>
                <NavItem to="/marketplace/health" onClick={closeMenu}>Health & Wellness</NavItem>
                <NavItem to="/ai-tools" onClick={closeMenu}>AI Tools</NavItem>
                <NavItem to="/about" onClick={closeMenu}>About</NavItem>
              </nav>
            </motion.div>
          )}
        </header>
      );
    };

    export default Header;