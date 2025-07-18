import React from 'react';
    import { Helmet } from 'react-helmet';
    import PageAnimator from '@/components/shared/PageAnimator';
    import ProductCard from '@/components/shared/ProductCard';
    import NewsletterSignup from '@/components/shared/NewsletterSignup';
    import { Button } from '@/components/ui/button';
    import { Zap, Tag, ArrowRight } from 'lucide-react';
    import { NavLink } from 'react-router-dom';

    const featuredProducts = [
      { id: 1, name: 'Pro-Grade 4K Drone', description: 'Capture stunning aerial shots with this professional-grade drone.', rating: 5, discount: 25, link: '#', alt: 'Pro-Grade 4K Drone' },
      { id: 2, name: 'Smart Fitness Watch', description: 'Track your health and fitness goals with style and precision.', rating: 4, discount: 15, link: '#', alt: 'Smart Fitness Watch' },
      { id: 3, name: 'Ergonomic Office Chair', description: 'Stay comfortable and productive during long work hours.', rating: 5, discount: 30, link: '#', alt: 'Ergonomic Office Chair' },
    ];

    const seasonalPromotions = [
      { id: 1, name: 'Summer Tech Sale', description: 'Up to 50% off on the latest gadgets and electronics for your summer adventures.', link: '/deals', cta: 'Shop Summer Deals' },
      { id: 2, name: 'Back-to-School Essentials', description: 'Gear up for the new semester with amazing deals on laptops, tablets, and more.', link: '/deals', cta: 'View Essentials' },
    ];

    const HomePage = () => {
      return (
        <PageAnimator>
          <Helmet>
            <title>1MarketLive - Top Deals & Honest Reviews</title>
            <meta name="description" content="Your ultimate guide to the best affiliate products. We provide honest reviews, top-10 lists, and exclusive deals to help you make smart purchases." />
          </Helmet>
          
          <div className={`relative overflow-hidden`}>
            <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute -z-10 bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e4f,transparent)]"></div>

            <div className="container mx-auto px-4">
              <section className="text-center py-20 md:py-28">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-500">
                  Smart Shopping Starts Here
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
                  Discover top-rated products with our in-depth reviews and find unbeatable prices with our curated deals.
                </p>
                <div className="flex justify-center gap-4">
                  <Button asChild size="lg">
                    <NavLink to="/reviews"><Zap className="mr-2 h-5 w-5" /> Browse Reviews</NavLink>
                  </Button>
                  <Button asChild size="lg" variant="secondary">
                    <NavLink to="/deals"><Tag className="mr-2 h-5 w-5" /> See Top Deals</NavLink>
                  </Button>
                </div>
              </section>

              <section className="py-16">
                <h2 className="text-3xl font-bold text-center mb-10">Featured Offers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>

              <section className="py-16">
                <div className="bg-secondary/30 rounded-lg p-8 md:p-12">
                  <h2 className="text-3xl font-bold text-center mb-10">Seasonal Promotions</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {seasonalPromotions.map(promo => (
                      <div key={promo.id} className="bg-card p-6 rounded-lg text-center flex flex-col items-center transition-transform duration-300 hover:scale-105">
                        <h3 className="text-xl font-bold text-primary mb-2">{promo.name}</h3>
                        <p className="text-muted-foreground flex-grow mb-4">{promo.description}</p>
                        <Button asChild variant="link" className="text-primary">
                          <NavLink to={promo.link}>{promo.cta} <ArrowRight className="ml-2 h-4 w-4" /></NavLink>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="py-16">
                <NewsletterSignup />
              </section>
            </div>
          </div>
        </PageAnimator>
      );
    };

    export default HomePage;