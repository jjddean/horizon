import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Header from '@/components/layout/Header';
    import Footer from '@/components/layout/Footer';
    import HomePage from '@/pages/HomePage';
    import ReviewsPage from '@/pages/ReviewsPage';
    import DealsPage from '@/pages/DealsPage';
    import AiToolsPage from '@/pages/AiToolsPage';
    import AboutPage from '@/pages/AboutPage';
    import NotFoundPage from '@/pages/NotFoundPage';
    import { Toaster } from '@/components/ui/toaster';

    function App() {
      return (
        <Router>
          <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/reviews" element={<ReviewsPage />} />
                <Route path="/deals" element={<DealsPage />} />
                <Route path="/ai-tools" element={<AiToolsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
            <Toaster />
          </div>
        </Router>
      );
    }

    export default App;