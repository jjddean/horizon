import React from 'react';
    import { Helmet } from 'react-helmet';
    import PageAnimator from '@/components/shared/PageAnimator';
    import AffiliateDisclosure from '@/components/shared/AffiliateDisclosure';

    const AboutPage = () => {
      return (
        <PageAnimator>
          <Helmet>
            <title>About Us - 1MarketLive</title>
            <meta name="description" content="Learn about the mission of 1MarketLive: to provide transparent, honest, and valuable recommendations to help consumers." />
          </Helmet>
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Our Mission: Honest Commerce</h1>
              <p className="text-lg text-muted-foreground mb-8">
                In a crowded online world, finding trustworthy advice is tough. That's why we created 1MarketLive.
              </p>
            </div>
            <div className="max-w-2xl mx-auto space-y-6 text-foreground/90 mt-12 bg-secondary/20 p-8 rounded-lg">
              <p>
                We're a team of product enthusiasts, tech experts, and bargain hunters dedicated to cutting through the noise. Our goal is simple: to provide you with clear, unbiased, and thorough reviews of products we believe in. We spend countless hours testing, comparing, and analyzing so you don't have to.
              </p>
              <p>
                Transparency is at the core of everything we do. When you click a link on our site and make a purchase, we may earn a small commission. This model allows us to keep our content free and our reviews independent, without bombarding you with annoying ads.
              </p>
              <div className="pt-4">
                <AffiliateDisclosure />
              </div>
              <p>
                Thank you for trusting us to be your guide in the world of online shopping. We're excited to help you find your next great purchase.
              </p>
            </div>
          </div>
        </PageAnimator>
      );
    };

    export default AboutPage;