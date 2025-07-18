import React from 'react';
import { TVChannelGrid } from './TVChannelGrid';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlayCircle, TrendingUp, Globe, Zap } from 'lucide-react';

export function NewsDemo() {
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
                <PlayCircle className="w-6 h-6 text-red-600" />
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
              <h3 className="font-semibold text-lg mb-2">Multi-Tab Interface</h3>
              <p className="text-slate-600 text-sm">
                Overview, Live Stream, Recent Stories, and Market Impact analysis - all organized in an intuitive tabbed interface.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Demo Instructions */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Try the Demo!</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2 flex items-center">
                  <PlayCircle className="w-5 h-5 mr-2 text-blue-600" />
                  Quick Stream Access
                </h4>
                <p className="text-sm text-slate-600 mb-3">
                  Click the maximize button (⛶) on any channel card to jump directly to the live stream view.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                  Detailed Analysis
                </h4>
                <p className="text-sm text-slate-600 mb-3">
                  Click anywhere on a channel card to open the full pop-out interface with multiple tabs of information.
                </p>
              </div>
            </div>
            <div className="text-center mt-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <PlayCircle className="w-4 h-4 mr-2" />
                Start Exploring Below
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Main TV Channel Grid */}
        <TVChannelGrid />

        {/* Technical Details */}
        <Card className="bg-slate-50 border-slate-200 mt-12">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Technical Features</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">🎯 Smart Features</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Auto-refresh news data every 30 seconds</li>
                  <li>• Responsive design for all screen sizes</li>
                  <li>• Fallback image handling for broken logos</li>
                  <li>• Smooth animations and transitions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">🔧 Implementation</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• YouTube live streaming integration</li>
                  <li>• Radix UI components for accessibility</li>
                  <li>• Tailwind CSS for styling</li>
                  <li>• React hooks for state management</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-slate-500 text-sm">
          <p>This demo showcases a top-tier financial news interface with live streaming capabilities.</p>
          <p className="mt-1">Perfect for financial dashboards, trading platforms, and investment applications.</p>
        </div>
      </div>
    </div>
  );
}