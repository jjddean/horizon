import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Play, Clock, Volume2, Maximize, TrendingUp, Globe, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';

const LiveTVStream = ({ embedUrl, isActive }) => {
  if (!isActive) return null;
  
  return (
    <div className="aspect-video bg-black rounded-lg overflow-hidden">
      <iframe
        src={embedUrl}
        className="w-full h-full"
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="Live News Stream"
      />
    </div>
  );
};

const NewsChannel = {
  CNN: {
    id: 'cnn',
    name: 'CNN',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/200px-CNN.svg.png',
    color: 'from-red-500 to-red-600',
    category: 'Breaking News',
    isLive: true,
    headline: 'Global Markets React to Federal Reserve Decision',
    description: 'Live coverage of global financial markets and breaking business news affecting your investments.',
    lastUpdated: '2 min ago',
    embedUrl: 'https://www.youtube.com/embed/live_stream?channel=UCupvZG-5ko_eiXAupbDfxWw',
    stories: [
      { title: 'Federal Reserve Holds Interest Rates Steady', summary: 'The Fed maintains current rates while signaling potential changes ahead...', timestamp: '5 min ago', category: 'Markets', impact: 'high' },
      { title: 'Tech Giants Rally in After-Hours Trading', summary: 'Major technology companies see significant gains following earnings...', timestamp: '12 min ago', category: 'Tech', impact: 'medium' },
      { title: 'Oil Prices Surge on Supply Concerns', summary: 'Crude oil jumps 3% as geopolitical tensions affect supply chains...', timestamp: '18 min ago', category: 'Energy', impact: 'high' }
    ]
  },
  BLOOMBERG: {
    id: 'bloomberg',
    name: 'Bloomberg TV',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Bloomberg_Logo.svg/200px-Bloomberg_Logo.svg.png',
    color: 'from-green-600 to-green-700',
    category: 'Financial News',
    isLive: true,
    headline: 'Market Open: Dow Futures Point to Higher Open',
    description: 'Real-time financial news and market analysis from industry experts worldwide.',
    lastUpdated: '1 min ago',
    embedUrl: 'https://www.youtube.com/embed/live_stream?channel=UCIALMKvObZNtJ6AmdCLP7Lg',
    stories: [
      { title: 'Dow Futures Signal Strong Opening', summary: 'Pre-market indicators suggest a positive start to trading...', timestamp: '3 min ago', category: 'Markets', impact: 'medium' },
      { title: 'Cryptocurrency Market Rebounds 15%', summary: 'Bitcoin and major altcoins recover from recent selloff...', timestamp: '10 min ago', category: 'Crypto', impact: 'high' },
      { title: 'IPO Pipeline Strengthens for Q1', summary: 'Several companies prepare for public offerings in coming months...', timestamp: '16 min ago', category: 'IPOs', impact: 'low' }
    ]
  },
  CNBC: {
    id: 'cnbc',
    name: 'CNBC',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/85/CNBC_logo.svg/200px-CNBC_logo.svg.png',
    color: 'from-blue-600 to-blue-700',
    category: 'Business News',
    isLive: true,
    headline: 'Earnings Season Preview: What Investors Should Watch',
    description: 'Comprehensive business news coverage and market insights from Wall Street.',
    lastUpdated: '4 min ago',
    embedUrl: 'https://www.youtube.com/embed/live_stream?channel=UCrp_UI8XtuYfpiqluWLD7Lw',
    stories: [
      { title: 'Q4 Earnings Season Kicks Off', summary: 'Major corporations begin reporting quarterly results...', timestamp: '8 min ago', category: 'Earnings', impact: 'high' },
      { title: 'Consumer Confidence Reaches New High', summary: 'Latest survey shows increased optimism among consumers...', timestamp: '15 min ago', category: 'Economy', impact: 'medium' },
      { title: 'Green Energy Stocks Surge', summary: 'Renewable energy sector sees significant investment inflow...', timestamp: '22 min ago', category: 'Energy', impact: 'medium' }
    ]
  },
  FOX_BUSINESS: {
    id: 'fox-business',
    name: 'Fox Business',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Fox_Business.svg/200px-Fox_Business.svg.png',
    color: 'from-orange-500 to-orange-600',
    category: 'Market Analysis',
    isLive: true,
    headline: 'Small-Cap Stocks Outperform Amid Economic Optimism',
    description: 'Market analysis and business news focused on economic trends and opportunities.',
    lastUpdated: '6 min ago',
    embedUrl: 'https://www.youtube.com/embed/live_stream?channel=UCCXoCcu9Rp7NPbTzIvogpZg',
    stories: [
      { title: 'Small-Cap Rally Continues', summary: 'Russell 2000 index hits fresh highs on growth optimism...', timestamp: '11 min ago', category: 'Markets', impact: 'medium' },
      { title: 'Inflation Data Shows Cooling Trend', summary: 'Latest CPI figures suggest price pressures are easing...', timestamp: '17 min ago', category: 'Economy', impact: 'high' },
      { title: 'Manufacturing Sector Expands', summary: 'PMI data indicates robust manufacturing activity...', timestamp: '24 min ago', category: 'Manufacturing', impact: 'low' }
    ]
  }
};

const getImpactColor = (impact) => {
  switch (impact) {
    case 'high': return 'text-red-600 bg-red-50';
    case 'medium': return 'text-yellow-600 bg-yellow-50';
    case 'low': return 'text-green-600 bg-green-50';
    default: return 'text-gray-600 bg-gray-50';
  }
};

const getImpactIcon = (impact) => {
  switch (impact) {
    case 'high': return <TrendingUp className="w-3 h-3" />;
    case 'medium': return <Globe className="w-3 h-3" />;
    case 'low': return <DollarSign className="w-3 h-3" />;
    default: return <Clock className="w-3 h-3" />;
  }
};

export function TVChannelGrid({ className }) {
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isStreamActive, setIsStreamActive] = useState(false);

  const channels = Object.values(NewsChannel);

  useEffect(() => {
    // Auto-refresh news data every 30 seconds
    const interval = setInterval(() => {
      // In a real app, this would fetch fresh data
      console.log('Refreshing news data...');
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleChannelSelect = (channel) => {
    setSelectedChannel(channel);
    setActiveTab('overview');
    setIsStreamActive(false);
  };

  return (
    <>
      <div className={cn("space-y-6", className)}>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Financial News Networks</h2>
            <p className="text-muted-foreground">Live coverage from top financial news sources</p>
          </div>
          <Badge variant="destructive" className="animate-pulse">
            <Play className="w-3 h-3 mr-1" />
            Live Updates
          </Badge>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {channels.map((channel) => (
            <Card 
              key={channel.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] overflow-hidden border-2 hover:border-primary/20"
              onClick={() => handleChannelSelect(channel)}
            >
              <CardContent className="p-0">
                <div className={cn("h-40 bg-gradient-to-br", channel.color, "relative overflow-hidden")}>
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex items-center gap-3">
                    <div className="w-16 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                      <img 
                        src={channel.logo} 
                        alt={channel.name}
                        className="w-14 h-8 object-contain"
                        onError={(e) => {
                          e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="56" height="32" viewBox="0 0 56 32"><rect width="56" height="32" fill="%23f3f4f6"/><text x="28" y="16" text-anchor="middle" fill="%23374151" font-size="8">${channel.name}</text></svg>`;
                        }}
                      />
                    </div>
                    {channel.isLive && (
                      <Badge variant="destructive" className="animate-pulse shadow-lg">
                        <Play className="w-3 h-3 mr-1" />
                        LIVE
                      </Badge>
                    )}
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-xl mb-1">{channel.name}</h3>
                    <p className="text-white/90 text-sm font-medium">{channel.category}</p>
                  </div>

                  <div className="absolute top-4 right-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleChannelSelect(channel);
                        setIsStreamActive(true);
                        setActiveTab('stream');
                      }}
                    >
                      <Maximize className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h4 className="font-semibold text-lg line-clamp-2 leading-tight">{channel.headline}</h4>
                  <p className="text-muted-foreground text-sm line-clamp-2">{channel.description}</p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Updated {channel.lastUpdated}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {channel.stories.length} stories
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Enhanced Pop-out Modal */}
      <Dialog open={!!selectedChannel} onOpenChange={() => setSelectedChannel(null)}>
        <DialogContent className="max-w-7xl max-h-[90vh] overflow-hidden p-0">
          {selectedChannel && (
            <div className="flex flex-col h-full">
              <DialogHeader className="p-6 pb-4 border-b">
                <div className="flex items-center gap-4">
                  <img 
                    src={selectedChannel.logo} 
                    alt={selectedChannel.name}
                    className="w-20 h-12 object-contain bg-white rounded-lg p-2 shadow-sm"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="48" viewBox="0 0 80 48"><rect width="80" height="48" fill="%23f3f4f6"/><text x="40" y="24" text-anchor="middle" fill="%23374151" font-size="10">${selectedChannel.name}</text></svg>`;
                    }}
                  />
                  <div className="flex-1">
                    <DialogTitle className="text-2xl">{selectedChannel.name}</DialogTitle>
                    <p className="text-muted-foreground">{selectedChannel.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {selectedChannel.isLive && (
                      <Badge variant="destructive" className="animate-pulse">
                        <Play className="w-3 h-3 mr-1" />
                        LIVE
                      </Badge>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setIsStreamActive(!isStreamActive);
                        setActiveTab('stream');
                      }}
                    >
                      <Volume2 className="w-4 h-4 mr-2" />
                      {isStreamActive ? 'Stop Stream' : 'Watch Live'}
                    </Button>
                  </div>
                </div>
              </DialogHeader>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
                <TabsList className="w-full justify-start rounded-none border-b px-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="stream">Live Stream</TabsTrigger>
                  <TabsTrigger value="stories">Recent Stories</TabsTrigger>
                  <TabsTrigger value="analysis">Market Impact</TabsTrigger>
                </TabsList>

                <div className="flex-1 overflow-y-auto">
                  <TabsContent value="overview" className="p-6 space-y-6 mt-0">
                    {/* Featured Story */}
                    <div className={cn("p-6 rounded-xl bg-gradient-to-r", selectedChannel.color, "text-white")}>
                      <Badge variant="secondary" className="mb-3">
                        {selectedChannel.category}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-3">{selectedChannel.headline}</h3>
                      <p className="text-white/90 mb-4 text-lg">{selectedChannel.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>Updated {selectedChannel.lastUpdated}</span>
                        </div>
                        <Button variant="secondary" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Read Full Story
                        </Button>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <Card className="p-4 text-center">
                        <div className="text-2xl font-bold text-green-600">Live</div>
                        <div className="text-sm text-muted-foreground">Broadcast Status</div>
                      </Card>
                      <Card className="p-4 text-center">
                        <div className="text-2xl font-bold">{selectedChannel.stories.length}</div>
                        <div className="text-sm text-muted-foreground">Recent Stories</div>
                      </Card>
                      <Card className="p-4 text-center">
                        <div className="text-2xl font-bold">24/7</div>
                        <div className="text-sm text-muted-foreground">Coverage</div>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="stream" className="p-6 mt-0">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Live Broadcast</h3>
                        <Badge variant={isStreamActive ? "destructive" : "outline"}>
                          {isStreamActive ? "Streaming" : "Offline"}
                        </Badge>
                      </div>
                      
                      {isStreamActive ? (
                        <LiveTVStream embedUrl={selectedChannel.embedUrl} isActive={isStreamActive} />
                      ) : (
                        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <Play className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                            <p className="text-gray-600 mb-4">Click "Watch Live" to start streaming</p>
                            <Button onClick={() => setIsStreamActive(true)}>
                              <Play className="w-4 h-4 mr-2" />
                              Start Live Stream
                            </Button>
                          </div>
                        </div>
                      )}
                      
                      <p className="text-sm text-muted-foreground">
                        Note: Live streams are provided via YouTube and other platforms. Quality may vary based on your internet connection.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="stories" className="p-6 mt-0">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Recent Stories</h3>
                      <div className="space-y-4">
                        {selectedChannel.stories.map((story, index) => (
                          <Card key={index} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                            <div className="flex justify-between items-start mb-3">
                              <h5 className="font-semibold text-lg flex-1 pr-4">{story.title}</h5>
                              <div className="flex gap-2">
                                <Badge variant="outline" className="text-xs">
                                  {story.category}
                                </Badge>
                                <Badge className={cn("text-xs", getImpactColor(story.impact))}>
                                  {getImpactIcon(story.impact)}
                                  <span className="ml-1">{story.impact} impact</span>
                                </Badge>
                              </div>
                            </div>
                            <p className="text-muted-foreground mb-3">{story.summary}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Clock className="w-3 h-3" />
                                {story.timestamp}
                              </div>
                              <Button variant="ghost" size="sm">
                                Read More
                              </Button>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="analysis" className="p-6 mt-0">
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold">Market Impact Analysis</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="p-4">
                          <h4 className="font-semibold mb-2 text-red-600">High Impact Stories</h4>
                          <div className="space-y-2">
                            {selectedChannel.stories.filter(s => s.impact === 'high').map((story, i) => (
                              <div key={i} className="text-sm">
                                <div className="font-medium">{story.title}</div>
                                <div className="text-muted-foreground">{story.category}</div>
                              </div>
                            ))}
                          </div>
                        </Card>
                        
                        <Card className="p-4">
                          <h4 className="font-semibold mb-2 text-yellow-600">Medium Impact Stories</h4>
                          <div className="space-y-2">
                            {selectedChannel.stories.filter(s => s.impact === 'medium').map((story, i) => (
                              <div key={i} className="text-sm">
                                <div className="font-medium">{story.title}</div>
                                <div className="text-muted-foreground">{story.category}</div>
                              </div>
                            ))}
                          </div>
                        </Card>
                      </div>

                      <Card className="p-4">
                        <h4 className="font-semibold mb-3">Coverage Summary</h4>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-red-600">
                              {selectedChannel.stories.filter(s => s.impact === 'high').length}
                            </div>
                            <div className="text-sm text-muted-foreground">High Impact</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-yellow-600">
                              {selectedChannel.stories.filter(s => s.impact === 'medium').length}
                            </div>
                            <div className="text-sm text-muted-foreground">Medium Impact</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-green-600">
                              {selectedChannel.stories.filter(s => s.impact === 'low').length}
                            </div>
                            <div className="text-sm text-muted-foreground">Low Impact</div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}