import React from 'react';
    import { Helmet } from 'react-helmet';
    import PageAnimator from '@/components/shared/PageAnimator';
    import AiToolCard from '@/components/shared/AiToolCard';

    const aiTools = [
      { name: 'ChatGPT', description: 'Advanced conversational AI from OpenAI.', link: 'https://openai.com/chatgpt', payout: 'Weekly', highlight: 'Highlight ease of integration' },
      { name: 'Jasper AI', description: 'AI copywriting and content generation platform.', link: 'https://jasper.ai', payout: 'Monthly', highlight: 'Good for blogging audiences' },
      { name: 'Midjourney', description: 'AI-based image generation tool for creative professionals.', link: 'https://midjourney.com', payout: 'Monthly', highlight: 'Include sample images' },
      { name: 'Copy.ai', description: 'AI writing assistant for social and marketing copy.', link: 'https://copy.ai', payout: 'Weekly', highlight: 'Free trial available' },
      { name: 'Grammarly', description: 'AI grammar, spelling, and writing improvement tool.', link: 'https://grammarly.com', payout: 'Weekly', highlight: 'Widely trusted' },
      { name: 'Surfer SEO', description: 'AI-powered on-page SEO optimization platform.', link: 'https://surferseo.com', payout: 'Monthly', highlight: 'Include SEO performance tips' },
      { name: 'Writesonic', description: 'Content writing and ad copy platform using AI.', link: 'https://writesonic.com', payout: 'Monthly', highlight: 'Offers free credits' },
      { name: 'Synthesia', description: 'AI video creation platform using avatars and text-to-speech.', link: 'https://synthesia.io', payout: 'Quarterly', highlight: 'Ideal for explainer videos' },
      { name: 'Quillbot', description: 'AI paraphrasing and summarization tool.', link: 'https://quillbot.com', payout: 'Monthly', highlight: 'Good for academic audiences' },
      { name: 'Pictory', description: 'Converts long-form content into short videos using AI.', link: 'https://pictory.ai', payout: 'Monthly', highlight: 'Great for social media clips' },
    ];

    const AiToolsPage = () => {
      return (
        <PageAnimator>
          <Helmet>
            <title>Top AI Tools - 1MarketLive</title>
            <meta name="description" content="Discover the best AI tools for content creation, SEO, video generation, and more. Compare features and find the right tool for your needs." />
          </Helmet>
          <div className="container mx-auto px-4 py-8">
            <section className="text-center py-12">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Curated AI Tools & Platforms</h1>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                Boost your productivity with our top picks of AI-powered software.
              </p>
            </section>
            <section className="py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiTools.map(tool => (
                  <AiToolCard key={tool.name} tool={tool} />
                ))}
              </div>
            </section>
          </div>
        </PageAnimator>
      );
    };

    export default AiToolsPage;