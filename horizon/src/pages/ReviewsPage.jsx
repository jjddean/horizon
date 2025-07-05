import React from 'react';
    import { Helmet } from 'react-helmet';
    import PageAnimator from '@/components/shared/PageAnimator';
    import ProductCard from '@/components/shared/ProductCard';

    const reviewProducts = [
      { id: 1, name: 'Pro-Grade 4K Drone', description: 'Capture stunning aerial shots with this professional-grade drone.', rating: 5, discount: 25, link: '#', alt: 'Pro-Grade 4K Drone' },
      { id: 2, name: 'Smart Fitness Watch', description: 'Track your health and fitness goals with style and precision.', rating: 4, discount: 15, link: '#', alt: 'Smart Fitness Watch' },
      { id: 3, name: 'Ergonomic Office Chair', description: 'Stay comfortable and productive during long work hours.', rating: 5, discount: 30, link: '#', alt: 'Ergonomic Office Chair' },
      { id: 4, name: 'Noise-Cancelling Headphones', description: 'Immerse yourself in audio with these top-tier headphones.', rating: 5, discount: 20, link: '#', alt: 'Noise-Cancelling Headphones' },
      { id: 5, name: 'Portable Power Bank', description: 'Keep your devices charged on the go with this compact power bank.', rating: 4, discount: 10, link: '#', alt: 'Portable Power Bank' },
      { id: 6, name: 'Smart Home Hub', description: 'Control your smart devices with this central hub.', rating: 4, discount: 18, link: '#', alt: 'Smart Home Hub' },
    ];

    const ReviewsPage = () => {
      return (
        <PageAnimator>
          <Helmet>
            <title>Product Reviews - 1MarketLive</title>
            <meta name="description" content="Find in-depth, honest reviews for the latest tech gadgets, home goods, and more. Make an informed decision with our expert analysis." />
          </Helmet>
          <div className="container mx-auto px-4 py-8">
            <section className="text-center py-12">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">In-Depth Product Reviews</h1>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                We test and analyze so you can shop with confidence.
              </p>
            </section>
            <section className="py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reviewProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          </div>
        </PageAnimator>
      );
    };

    export default ReviewsPage;