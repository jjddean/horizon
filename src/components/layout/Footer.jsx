import React from 'react';
    import { NavLink } from 'react-router-dom';
    import { Zap } from 'lucide-react';
    import AffiliateDisclosure from '@/components/shared/AffiliateDisclosure';
    import { useToast } from '@/components/ui/use-toast';

    const Footer = () => {
      const { toast } = useToast();

      const handleFeatureClick = () => {
        toast({
          title: '🚧 Feature In Progress',
          description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        });
      };

      return (
        <footer className="border-t border-border/40 bg-background/95">
          <div className="container py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <NavLink to="/" className="flex items-center space-x-2">
                  <Zap className="h-6 w-6 text-primary" />
                  <span className="font-bold text-lg">1MarketLive</span>
                </NavLink>
                <p className="text-sm text-muted-foreground">
                  Your trusted source for honest reviews and unbeatable deals.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-4">Quick Links</p>
                <nav className="space-y-2 flex flex-col">
                  <NavLink to="/reviews" className="text-sm text-muted-foreground hover:text-primary transition-colors">Reviews</NavLink>
                  <NavLink to="/deals" className="text-sm text-muted-foreground hover:text-primary transition-colors">Deals</NavLink>
                  <NavLink to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</NavLink>
                </nav>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-4">Legal</p>
                <nav className="space-y-2 flex flex-col">
                  <button onClick={handleFeatureClick} className="text-left text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</button>
                  <button onClick={handleFeatureClick} className="text-left text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</button>
                </nav>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-4">Connect</p>
                <div className="flex space-x-4">
                  <button onClick={handleFeatureClick} className="text-sm text-muted-foreground hover:text-primary transition-colors">Twitter</button>
                  <button onClick={handleFeatureClick} className="text-sm text-muted-foreground hover:text-primary transition-colors">Facebook</button>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-border/40 pt-8 text-center">
              <AffiliateDisclosure />
              <p className="text-sm text-muted-foreground mt-4">
                &copy; {new Date().getFullYear()} 1MarketLive. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;