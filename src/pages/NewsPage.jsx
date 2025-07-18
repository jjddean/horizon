import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Clock, Volume2, Maximize, TrendingUp, Globe, DollarSign, ExternalLink, Tv, Zap, X } from 'lucide-react';
import { motion } from 'framer-motion';

// Simple Badge component
const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-blue-600 text-white",
    destructive: "bg-red-600 text-white",
    secondary: "bg-gray-200 text-gray-800",
    outline: "border border-gray-300 text-gray-700"
  };
  
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

// Simple Dialog component
const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={() => onOpenChange(false)} />
      <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 z-10 rounded-sm opacity-70 hover:opacity-100 bg-white p-1"
        >
          <X className="h-4 w-4" />
        </button>
        {children}
      </div>
    </div>
  );
};

// Simple Tabs component
const Tabs = ({ value, onValueChange, children }) => {
  return <div data-value={value} data-onvaluechange={onValueChange}>{children}</div>;
};

const TabsList = ({ children, className = "" }) => {
  return <div className={`flex border-b ${className}`}>{children}</div>;
};

const TabsTrigger = ({ value, children, className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium hover:bg-gray-100 ${className}`}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ value, activeTab, children, className = "" }) => {
  if (value !== activeTab) return null;
  return <div className={className}>{children}</div>;
};

// Live TV Stream component
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

// News Channel data
const NewsChannels = [
  {
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
  {
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
  {
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
  {
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
];

// Main NewsPage component
export default function NewsPage() {
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [isStreamActive, setIsStreamActive] = useState(false);
  const [viewMode, setViewMode] = useState('sidebar');

  const handleChannelSelect = (channel) => {
    setSelectedChannel(channel);
    setActiveTab('overview');
    setIsStreamActive(false);
    setViewMode('sidebar');
  };

  const handleFullPageToggle = () => {
    setViewMode(viewMode === 'sidebar' ? 'fullpage' : 'sidebar');
  };

  const handleClose = () => {
    setSelectedChannel(null);
    setViewMode('sidebar');
    setIsStreamActive(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-slate-900">
            Enhanced Financial News Center
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Live TV streaming, real-time news analysis, and market impact tracking - all in one powerful interface
          </p>
          <div className="flex justify-center gap-4">
            <Badge variant="destructive" className="animate-pulse text-sm px-3 py-1">
              <Zap className="w-4 h-4 mr-1" />
              Live Streaming
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              <TrendingUp className="w-4 h-4 mr-1" />
              Market Analysis
            </Badge>
            <Badge variant="outline" className="text-sm px-3 py-1">
              <Globe className="w-4 h-4 mr-1" />
              Global Coverage
            </Badge>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Live Streaming</h3>
              <p className="text-slate-600 text-sm">
                Watch live financial news broadcasts directly in your browser. Click any channel to access the full streaming interface.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Impact Analysis</h3>
              <p className="text-slate-600 text-sm">
                Stories are categorized by market impact level (High, Medium, Low) to help you prioritize what matters most.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">MSN-Style Interface</h3>
              <p className="text-slate-600 text-sm">
                Sidebar popup first, then expand to full page - just like MSN for the perfect user experience.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Channel Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Financial News Networks</h2>
              <p className="text-slate-600">Live coverage from top financial news sources</p>
            </div>
            <Badge variant="destructive" className="animate-pulse">
              <Play className="w-3 h-3 mr-1" />
              Live Updates
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {NewsChannels.map((channel) => (
              <Card 
                key={channel.id}
                className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] overflow-hidden border-2 hover:border-blue-400"
                onClick={() => handleChannelSelect(channel)}
              >
                <CardContent className="p-0">
                  <div className={`h-40 bg-gradient-to-br ${channel.color} relative overflow-hidden`}>
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
                    <p className="text-slate-600 text-sm line-clamp-2">{channel.description}</p>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
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

        {/* MSN-Style Modal */}
        <Dialog open={!!selectedChannel} onOpenChange={handleClose}>
          {selectedChannel && (
            <div className={`${viewMode === 'sidebar' ? 'fixed right-4 top-4 w-96 h-[85vh]' : 'w-full h-full'} transition-all duration-300`}>
              {/* Header */}
              <div className="p-4 border-b flex items-center gap-3">
                <img 
                  src={selectedChannel.logo} 
                  alt={selectedChannel.name}
                  className="w-12 h-8 object-contain bg-white rounded p-1"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{selectedChannel.name}</h3>
                  {viewMode === 'fullpage' && (
                    <p className="text-sm text-gray-600">{selectedChannel.description}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  {selectedChannel.isLive && (
                    <Badge variant="destructive" className="animate-pulse text-xs">
                      <Play className="w-2 h-2 mr-1" />
                      LIVE
                    </Badge>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleFullPageToggle}
                    className="text-xs"
                  >
                    <Maximize className="w-3 h-3 mr-1" />
                    {viewMode === 'sidebar' ? 'Expand' : 'Collapse'}
                  </Button>
                </div>
              </div>

              {/* Tabs */}
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="px-4">
                  <TabsTrigger 
                    value="overview"
                    onClick={() => setActiveTab('overview')}
                    className={activeTab === 'overview' ? 'bg-blue-100' : ''}
                  >
                    {viewMode === 'sidebar' ? 'Info' : 'Overview'}
                  </TabsTrigger>
                  <TabsTrigger 
                    value="stream"
                    onClick={() => setActiveTab('stream')}
                    className={activeTab === 'stream' ? 'bg-blue-100' : ''}
                  >
                    {viewMode === 'sidebar' ? 'Live' : 'Live Stream'}
                  </TabsTrigger>
                  {viewMode === 'fullpage' && (
                    <>
                      <TabsTrigger 
                        value="stories"
                        onClick={() => setActiveTab('stories')}
                        className={activeTab === 'stories' ? 'bg-blue-100' : ''}
                      >
                        Recent Stories
                      </TabsTrigger>
                      <TabsTrigger 
                        value="analysis"
                        onClick={() => setActiveTab('analysis')}
                        className={activeTab === 'analysis' ? 'bg-blue-100' : ''}
                      >
                        Market Impact
                      </TabsTrigger>
                    </>
                  )}
                </TabsList>

                {/* Tab Content */}
                <div className="flex-1 overflow-y-auto">
                  <TabsContent value="overview" activeTab={activeTab} className={viewMode === 'sidebar' ? 'p-4' : 'p-6'}>
                    <div className={`rounded-xl bg-gradient-to-r ${selectedChannel.color} text-white ${viewMode === 'sidebar' ? 'p-4' : 'p-6'}`}>
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {selectedChannel.category}
                      </Badge>
                      <h3 className={`font-bold mb-2 ${viewMode === 'sidebar' ? 'text-lg' : 'text-2xl'}`}>
                        {selectedChannel.headline}
                      </h3>
                      {viewMode === 'fullpage' && (
                        <p className="text-white/90 mb-4">{selectedChannel.description}</p>
                      )}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          <span>{selectedChannel.lastUpdated}</span>
                        </div>
                        {viewMode === 'sidebar' && (
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => {
                              setIsStreamActive(!isStreamActive);
                              setActiveTab('stream');
                            }}
                            className="text-xs"
                          >
                            <Volume2 className="w-3 h-3 mr-1" />
                            {isStreamActive ? 'Stop' : 'Watch'}
                          </Button>
                        )}
                      </div>
                    </div>

                    {viewMode === 'sidebar' && (
                      <div className="mt-4 space-y-3">
                        <div className="text-sm text-gray-600">{selectedChannel.description}</div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">{selectedChannel.stories.length} recent stories</span>
                          <Button variant="ghost" size="sm" onClick={handleFullPageToggle} className="text-xs">
                            View All
                          </Button>
                        </div>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="stream" activeTab={activeTab} className={viewMode === 'sidebar' ? 'p-4' : 'p-6'}>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className={viewMode === 'sidebar' ? 'text-sm font-semibold' : 'text-lg font-semibold'}>
                          Live Broadcast
                        </h3>
                        <Badge variant={isStreamActive ? "destructive" : "outline"} className="text-xs">
                          {isStreamActive ? "Streaming" : "Offline"}
                        </Badge>
                      </div>
                      
                      {isStreamActive ? (
                        <LiveTVStream embedUrl={selectedChannel.embedUrl} isActive={isStreamActive} />
                      ) : (
                        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <Play className={`mx-auto mb-3 text-gray-400 ${viewMode === 'sidebar' ? 'w-8 h-8' : 'w-16 h-16'}`} />
                            <p className={`text-gray-600 mb-3 ${viewMode === 'sidebar' ? 'text-xs' : ''}`}>
                              {viewMode === 'sidebar' ? 'Click to start streaming' : 'Click "Watch Live" to start streaming'}
                            </p>
                            <Button 
                              onClick={() => setIsStreamActive(true)}
                              size={viewMode === 'sidebar' ? "sm" : "default"}
                            >
                              <Play className={`mr-2 ${viewMode === 'sidebar' ? 'w-3 h-3' : 'w-4 h-4'}`} />
                              {viewMode === 'sidebar' ? 'Watch' : 'Start Live Stream'}
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  {viewMode === 'fullpage' && (
                    <>
                      <TabsContent value="stories" activeTab={activeTab} className="p-6">
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Recent Stories</h3>
                          <div className="space-y-4">
                            {selectedChannel.stories.map((story, index) => (
                              <Card key={index} className="p-4">
                                <div className="flex justify-between items-start mb-3">
                                  <h5 className="font-semibold text-lg flex-1 pr-4">{story.title}</h5>
                                  <div className="flex gap-2">
                                    <Badge variant="outline" className="text-xs">{story.category}</Badge>
                                    <Badge className={`text-xs ${story.impact === 'high' ? 'bg-red-100 text-red-800' : story.impact === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                                      {story.impact} impact
                                    </Badge>
                                  </div>
                                </div>
                                <p className="text-gray-600 mb-3">{story.summary}</p>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-1 text-xs text-gray-500">
                                    <Clock className="w-3 h-3" />
                                    {story.timestamp}
                                  </div>
                                  <Button variant="ghost" size="sm">Read More</Button>
                                </div>
                              </Card>
                            ))}
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="analysis" activeTab={activeTab} className="p-6">
                        <div className="space-y-6">
                          <h3 className="text-lg font-semibold">Market Impact Analysis</h3>
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                              <div className="text-2xl font-bold text-red-600">
                                {selectedChannel.stories.filter(s => s.impact === 'high').length}
                              </div>
                              <div className="text-sm text-gray-600">High Impact</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-yellow-600">
                                {selectedChannel.stories.filter(s => s.impact === 'medium').length}
                              </div>
                              <div className="text-sm text-gray-600">Medium Impact</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-green-600">
                                {selectedChannel.stories.filter(s => s.impact === 'low').length}
                              </div>
                              <div className="text-sm text-gray-600">Low Impact</div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </>
                  )}
                </div>
              </Tabs>
            </div>
          )}
        </Dialog>
      </div>
    </div>
  );
}