import React from 'react';
    import { Helmet } from 'react-helmet';
    import PageAnimator from '@/components/shared/PageAnimator';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { Tag } from 'lucide-react';

    const deals = [
      { id: 1, title: '50% Off Summer Tech Sale', description: 'Massive discounts on drones, cameras, and outdoor gadgets.', store: 'TechGiant', code: 'SUMMER50', link: '#' },
      { id: 2, title: '30% Off Home Office Upgrades', description: 'Get the best deals on ergonomic chairs, monitors, and more.', store: 'OfficeWorld', code: 'HOME30', link: '#' },
      { id: 3, title: 'Buy One Get One Free on Smart Watches', description: 'Limited time offer on select fitness trackers.', store: 'FitTech', code: 'BOGO', link: '#' },
      { id: 4, title: 'Flash Sale: 60% Off Gaming Laptops', description: 'Top-tier gaming performance for less. Ends tonight!', store: 'GameVerse', code: 'FLASH60', link: '#' },
    ];

    const DealsPage = () => {
      return (
        <PageAnimator>
          <Helmet>
            <title>Exclusive Deals - 1MarketLive</title>
            <meta name="description" content="Don't miss out on the hottest deals and coupon codes for your favorite products. Updated daily!" />
          </Helmet>
          <div className="container mx-auto px-4 py-8">
            <section className="text-center py-12">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Today's Hottest Deals</h1>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                Exclusive offers and discounts, curated just for you.
              </p>
            </section>
            <section className="py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {deals.map(deal => (
                  <Card key={deal.id} className="bg-secondary/30 hover:border-primary/50 transition-colors duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Tag className="h-6 w-6 text-primary" /> {deal.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{deal.description}</p>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-bold">{deal.store}</p>
                          <p className="text-sm text-muted-foreground">CODE: <span className="text-primary font-mono bg-background/50 px-2 py-1 rounded">{deal.code}</span></p>
                        </div>
                        <Button asChild>
                          <a href={deal.link} target="_blank" rel="noopener noreferrer sponsored">Claim Deal</a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </PageAnimator>
      );
    };

    export default DealsPage;