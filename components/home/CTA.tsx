import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(64, 150, 255, 0.2) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Operations?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join forward-thinking organizations that are automating complex workflows 
          and achieving operational excellence with AI agents.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <Button size="lg" className="glow-strong text-lg px-8 py-6">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/solutions">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Explore Solutions
            </Button>
          </Link>
        </div>

        <p className="text-sm text-muted-foreground mt-8">
          No credit card required • 30-day pilot program available
        </p>
      </div>
    </section>
  );
}
