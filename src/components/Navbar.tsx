
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300', 
        isScrolled ? 'bg-background/95 backdrop-blur shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container py-4 flex items-center justify-between">
        <a href="#" className="text-xl md:text-2xl font-bold text-primary">
          DevPortfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <a key={index} href={item.href} className="nav-link font-medium">
              {item.label}
            </a>
          ))}
          <Button asChild>
            <a href="/lovable-uploads/374958c8-6ef0-4f98-8b53-4f2634bbb522.png" target="_blank" rel="noopener noreferrer">Resume</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu />
        </Button>

        {/* Mobile Navigation */}
        <div className={cn(
          'fixed inset-y-0 right-0 w-64 bg-background shadow-lg transform transition-transform ease-in-out duration-300 md:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}>
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-end mb-8">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setMobileMenuOpen(false)}
              >
                ✕
              </Button>
            </div>
            <nav className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href} 
                  className="text-lg font-medium nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="mt-4" asChild>
                <a href="/lovable-uploads/374958c8-6ef0-4f98-8b53-4f2634bbb522.png" target="_blank" rel="noopener noreferrer">Resume</a>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
