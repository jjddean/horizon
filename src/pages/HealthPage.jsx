import React from 'react';
import { Helmet } from 'react-helmet';
import PageAnimator from '@/components/shared/PageAnimator';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ArrowRight, Calendar, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const healthTools = [
  {
    name: 'Lumen',
    description: 'AI-powered metabolism tracker using a breath sensor.',
    link: 'https://www.lumen.me',
    payout: 'Monthly',
    highlight: 'Affiliate program via ShareASale'
  },
  {
    name: 'InsideTracker',
    description: 'AI-driven blood testing and wellness insights platform.',
    link: 'https://www.insidetracker.com',
    payout: 'Monthly',
    highlight: 'Affiliate program available'
  },
  {
    name: 'Care/of',
    description: 'Personalized vitamin packs based on quiz & AI analysis.',
    link: 'https://takecareof.com',
    payout: 'Monthly',
    highlight: 'Affiliate via Rakuten or Impact'
  },
  {
    name: 'Viome',
    description: 'AI-based gut and microbiome testing with nutrition recommendations.',
    link: 'https://www.viome.com',
    payout: 'Monthly',
    highlight: 'Active affiliate program'
  },
  {
    name: 'Oura Ring',
    description: 'Smart health ring tracking sleep, readiness, and recovery.',
    link: 'https://ouraring.com',
    payout: 'Monthly',
    highlight: 'Affiliate program available'
  },
  {
    name: 'ZOE',
    description: 'AI-powered personalized nutrition based on blood sugar & microbiome.',
    link: 'https://joinzoe.com',
    payout: 'Monthly',
    highlight: 'Affiliate/partner program available'
  },
  {
    name: 'Wellory',
    description: 'AI-supported nutrition coaching app.',
    link: 'https://www.wellory.com',
    payout: 'Monthly',
    highlight: 'Partner program offered'
  },
  {
    name: 'Eight Sleep',
    description: 'Smart mattress and AI sleep tracking system.',
    link: 'https://www.eightsleep.com',
    payout: 'Monthly',
    highlight: 'Affiliate via ShareASale'
  },
  {
    name: 'Headspace',
    description: 'Meditation and mental wellness app with AI personalization.',
    link: 'https://www.headspace.com',
    payout: 'Monthly',
    highlight: 'Affiliate via Impact'
  },
  {
    name: 'WHOOP',
    description: 'Health wearable with AI-based recovery, strain & sleep analytics.',
    link: 'https://www.whoop.com',
    payout: 'Monthly',
    highlight: 'Affiliate program supported'
  },
  {
    name: 'BetterHelp',
    description: 'AI-enhanced mental health therapy platform (matching + tracking).',
    link: 'https://www.betterhelp.com',
    payout: 'Monthly',
    highlight: 'Affiliate via CJ Affiliate'
  },
  {
    name: 'Levels Health',
    description: 'AI-based metabolic monitoring with continuous glucose tracking.',
    link: 'https://www.levelshealth.com',
    payout: 'Monthly',
    highlight: 'Invite + partner referral program'
  },
  {
    name: 'Nutrisense',
    description: 'Real-time glucose monitoring + AI food impact insights.',
    link: 'https://www.nutrisense.io',
    payout: 'Monthly',
    highlight: 'Affiliate program available'
  },
  {
    name: 'Ava',
    description: 'AI wearable for women\'s health and fertility tracking.',
    link: 'https://www.avawomen.com',
    payout: 'Monthly',
    highlight: 'Affiliate via ShareASale'
  },
  {
    name: 'Tempdrop',
    description: 'Smart wearable for AI-powered fertility and ovulation tracking.',
    link: 'https://www.tempdrop.com',
    payout: 'Monthly',
    highlight: 'Affiliate program available'
  }
];

const HealthToolCard = ({ tool }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0px 10px 30px -5px rgba(99, 102, 241, 0.2)" }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col bg-card border-border hover:border-primary/50 transition-colors duration-300">
        <CardHeader>
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-500" />
            {tool.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow space-y-4">
          <p className="text-sm text-muted-foreground">{tool.description}</p>
          <div className="flex items-center text-xs text-muted-foreground gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{tool.payout} Payout</span>
            </div>
          </div>
          <div className="flex items-start gap-2 text-sm bg-secondary/30 p-3 rounded-md">
            <Star className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
            <p className="text-foreground/90">{tool.highlight}</p>
          </div>
        </CardContent>
        <CardFooter className="p-4 bg-secondary/30 mt-auto">
          <Button asChild className="w-full">
            <a href={tool.link} target="_blank" rel="noopener noreferrer sponsored">
              Visit Site <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const HealthPage = () => {
  return (
    <PageAnimator>
      <Helmet>
        <title>Health & Wellness Tools - 1MarketLive</title>
        <meta name="description" content="Discover AI-powered health and wellness tools for metabolism tracking, sleep optimization, nutrition coaching, and mental health support." />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <section className="text-center py-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="h-12 w-12 text-red-500" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Health & Wellness</h1>
          </div>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            AI-powered tools to optimize your health, track your wellness, and improve your quality of life.
          </p>
        </section>

        <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthTools.map(tool => (
              <HealthToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </section>

        <section className="py-16 text-center">
          <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-lg p-8">
            <Heart className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Transform Your Health Journey</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These AI-powered health tools use cutting-edge technology to provide personalized insights, 
              track your progress, and help you make informed decisions about your wellness.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-sm">
              <div className="bg-background/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">🧬 Personalized Insights</h3>
                <p className="text-muted-foreground">AI analyzes your unique data to provide tailored recommendations</p>
              </div>
              <div className="bg-background/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">📊 Real-time Tracking</h3>
                <p className="text-muted-foreground">Monitor your health metrics continuously with smart wearables</p>
              </div>
              <div className="bg-background/50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">🎯 Goal Achievement</h3>
                <p className="text-muted-foreground">Set and reach your wellness goals with AI-powered coaching</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageAnimator>
  );
};

export default HealthPage;