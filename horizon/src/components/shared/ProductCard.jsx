import React from 'react';
    import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { Star, Zap } from 'lucide-react';
    import { motion } from 'framer-motion';

    const ProductCard = ({ product }) => {
      return (
        <motion.div
          whileHover={{ y: -5, boxShadow: "0px 10px 30px -5px rgba(99, 102, 241, 0.2)" }}
          transition={{ duration: 0.3 }}
          className="h-full"
        >
          <Card className="overflow-hidden h-full flex flex-col bg-card border-border hover:border-primary/50 transition-colors duration-300">
            <CardHeader className="p-0 relative">
              {product.discount && (
                <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground px-2 py-1 text-xs font-bold rounded-md z-10">
                  {product.discount}% OFF
                </div>
              )}
              <div className="overflow-hidden">
                <img  
                  class="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500" 
                  alt={product.alt}
                 src="https://images.unsplash.com/photo-1559223669-e0065fa7f142" />
              </div>
            </CardHeader>
            <CardContent className="p-4 flex-grow">
              <CardTitle className="text-lg font-bold mb-2">{product.name}</CardTitle>
              <div className="flex items-center gap-2 text-sm text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill={i < product.rating ? 'currentColor' : 'none'} className="w-4 h-4" />
                ))}
                <span className="text-muted-foreground">({product.rating}.0)</span>
              </div>
              <p className="text-sm text-muted-foreground">{product.description}</p>
            </CardContent>
            <CardFooter className="p-4 bg-secondary/30 mt-auto">
              <Button asChild className="w-full">
                <a href={product.link} target="_blank" rel="noopener noreferrer sponsored">
                  <Zap className="mr-2 h-4 w-4" /> Check Deal
                </a>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      );
    };

    export default ProductCard;