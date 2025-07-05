
    import React from 'react';
    import { Helmet } from 'react-helmet';
    import PageAnimator from '@/components/shared/PageAnimator';
    import { Button } from '@/components/ui/button';
    import { NavLink } from 'react-router-dom';
    import { AlertTriangle } from 'lucide-react';

    const NotFoundPage = () => {
      return (
        <PageAnimator>
          <Helmet>
            <title>404 - Page Not Found</title>
            <meta name="description" content="The page you were looking for could not be found." />
          </Helmet>
          <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center h-[60vh]">
            <AlertTriangle className="h-24 w-24 text-destructive mb-8" />
            <h1 className="text-6xl font-extrabold tracking-tight mb-4">404</h1>
            <p className="text-2xl font-semibold mb-2">Page Not Found</p>
            <p className="text-muted-foreground mb-8">
              Oops! The page you are looking for does not exist or has been moved.
            </p>
            <Button asChild>
              <NavLink to="/">Go Back Home</NavLink>
            </Button>
          </div>
        </PageAnimator>
      );
    };

    export default NotFoundPage;
  