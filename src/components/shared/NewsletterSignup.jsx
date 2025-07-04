
    import React from 'react';
    import { Input } from '@/components/ui/input';
    import { Button } from '@/components/ui/button';
    import { useToast } from '@/components/ui/use-toast';
    import { Mail } from 'lucide-react';

    const NewsletterSignup = () => {
      const { toast } = useToast();

      const handleSubmit = (e) => {
        e.preventDefault();
        toast({
          title: '🚧 Feature In Progress',
          description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        });
      };

      return (
        <div className="bg-secondary p-8 rounded-lg text-center">
          <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Stay Updated!</h2>
          <p className="text-muted-foreground mb-6">
            Join our newsletter to get the latest deals and reviews straight to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" required className="flex-1" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      );
    };

    export default NewsletterSignup;
  