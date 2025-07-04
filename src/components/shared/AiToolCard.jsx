import React from 'react';
    import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { ArrowRight, Calendar, Star } from 'lucide-react';
    import { motion } from 'framer-motion';

    const AiToolCard = ({ tool }) => {
      return (
        <motion.div
          whileHover={{ y: -5, boxShadow: "0px 10px 30px -5px rgba(99, 102, 241, 0.2)" }}
          transition={{ duration: 0.3 }}
          className="h-full"
        >
          <Card className="overflow-hidden h-full flex flex-col bg-card border-border hover:border-primary/50 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-bold">{tool.name}</CardTitle>
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

    export default AiToolCard;