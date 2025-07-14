import React from 'react';
import { Helmet } from 'react-helmet';
import PageAnimator from '@/components/shared/PageAnimator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Star, ExternalLink } from 'lucide-react';

const marketplaceItems = [
  {
    id: 1,
    name: 'Premium Tech Bundle',
    description: 'Complete tech setup including laptop, accessories, and software licenses.',
    price: '$1,299',
    originalPrice: '$1,599',
    rating: 5,
    vendor: 'TechPro Store',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661',
    link: '#'
  },
  {
    id: 2,
    name: 'Smart Home Starter Kit',
    description: 'Everything you need to get started with home automation.',
    price: '$399',
    originalPrice: '$499',
    rating: 4,
    vendor: 'SmartLiving Co',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64',
    link: '#'
  },
  {
    id: 3,
    name: 'Fitness Tracker Pro',
    description: 'Advanced fitness tracking with heart rate monitoring and GPS.',
    price: '$199',
    originalPrice: '$249',
    rating: 5,
    vendor: 'FitTech Solutions',
    image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d',
    link: '#'
  },
  {
    id: 4,
    name: 'Wireless Audio Set',
    description: 'Premium wireless headphones and portable speaker combo.',
    price: '$299',
    originalPrice: '$399',
    rating: 4,
    vendor: 'AudioMax',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    link: '#'
  },
  {
    id: 5,
    name: 'Gaming Essentials Pack',
    description: 'Mechanical keyboard, gaming mouse, and RGB mousepad.',
    price: '$149',
    originalPrice: '$199',
    rating: 5,
    vendor: 'GameGear Pro',
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a',
    link: '#'
  },
  {
    id: 6,
    name: 'Photography Kit',
    description: 'Professional camera accessories and editing software bundle.',
    price: '$599',
    originalPrice: '$799',
    rating: 4,
    vendor: 'PhotoPro Studio',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd',
    link: '#'
  }
];

const MarketplacePage = () => {
  return (
    <PageAnimator>
      <Helmet>
        <title>Marketplace - 1MarketLive</title>
        <meta name="description" content="Discover curated product bundles and exclusive marketplace deals. Shop verified vendors and get the best value for your money." />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <section className="text-center py-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShoppingBag className="h-12 w-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Shop by Category</h1>
          </div>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Discover trending products across all major categories with AI-powered market intelligence and profit predictions.
          </p>
        </section>

        <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border hover:border-primary/50 transition-colors duration-300">
              <div className="text-primary text-3xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-2">Tech</h3>
              <p className="text-muted-foreground text-sm mb-4">Smartphones, wearables, laptops, and cutting-edge gadgets</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-green-600 font-semibold">+15% Growth</span>
                <span className="text-muted-foreground text-sm">12.3K Products</span>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">Buy via Amazon</Button>
                <Button size="sm" className="flex-1">Add to Cart</Button>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-lg border border-border hover:border-primary/50 transition-colors duration-300">
              <div className="text-primary text-3xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-2">Home</h3>
              <p className="text-muted-foreground text-sm mb-4">Smart home devices, decor, furniture, and kitchen appliances</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-green-600 font-semibold">+18% Growth</span>
                <span className="text-muted-foreground text-sm">15.1K Products</span>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">Buy via Amazon</Button>
                <Button size="sm" className="flex-1">Add to Cart</Button>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-lg border border-border hover:border-primary/50 transition-colors duration-300">
              <div className="text-primary text-3xl mb-4">👗</div>
              <h3 className="text-xl font-bold mb-2">Fashion</h3>
              <p className="text-muted-foreground text-sm mb-4">Trendy clothing, accessories, jewelry, and lifestyle products</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-green-600 font-semibold">+22% Growth</span>
                <span className="text-muted-foreground text-sm">8.7K Products</span>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">Buy via Amazon</Button>
                <Button size="sm" className="flex-1">Add to Cart</Button>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-lg border border-border hover:border-primary/50 transition-colors duration-300">
              <div className="text-primary text-3xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-2">Gadgets</h3>
              <p className="text-muted-foreground text-sm mb-4">Gaming gear, innovative tech gadgets, and entertainment items</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-green-600 font-semibold">+28% Growth</span>
                <span className="text-muted-foreground text-sm">4.2K Products</span>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">Buy via Amazon</Button>
                <Button size="sm" className="flex-1">Add to Cart</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <h2 className="text-2xl font-bold mb-6">Featured Product Bundles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketplaceItems.map(item => (
              <Card key={item.id} className="overflow-hidden h-full flex flex-col bg-card border-border hover:border-primary/50 transition-colors duration-300">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground px-2 py-1 text-xs font-bold rounded-md">
                    SAVE {Math.round(((parseInt(item.originalPrice.slice(1)) - parseInt(item.price.slice(1))) / parseInt(item.originalPrice.slice(1))) * 100)}%
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold">{item.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">by {item.vendor}</p>
                </CardHeader>
                
                <CardContent className="flex-grow space-y-4">
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} fill={i < item.rating ? 'currentColor' : 'none'} className="w-4 h-4" />
                    ))}
                    <span className="text-muted-foreground">({item.rating}.0)</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{item.originalPrice}</span>
                  </div>
                </CardContent>
                
                <div className="p-4 bg-secondary/30 mt-auto">
                  <Button asChild className="w-full">
                    <a href={item.link} target="_blank" rel="noopener noreferrer sponsored">
                      <ShoppingBag className="mr-2 h-4 w-4" /> 
                      Buy Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16 text-center">
          <div className="bg-secondary/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Join Our Affiliate Program</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Earn commissions by promoting our curated products. Access exclusive deals, 
              tracking tools, and marketing materials to maximize your earnings.
            </p>
            <Button size="lg">
              Join Affiliate Program
            </Button>
          </div>
        </section>
      </div>
    </PageAnimator>
  );
};

export default MarketplacePage;