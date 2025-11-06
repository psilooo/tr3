import { Search, Wrench, Rocket, TrendingUp } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: 'Identify Workflows',
      description: 'We analyze your operations to find high-impact automation opportunities.',
    },
    {
      icon: Wrench,
      title: 'Configure Agents',
      description: 'Custom-built agents tailored to your specific processes and requirements.',
    },
    {
      icon: Rocket,
      title: 'Deploy & Monitor',
      description: 'Seamless integration with real-time monitoring and performance tracking.',
    },
    {
      icon: TrendingUp,
      title: 'Optimize & Scale',
      description: 'Continuous improvement and expansion to additional workflows.',
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple <span className="text-gradient">Implementation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From discovery to deployment, we make it easy to start automating your operations.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30" />

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 relative z-10 border-4 border-background">
                  <step.icon className="w-12 h-12 text-primary" />
                </div>
                <div className="absolute top-14 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary z-0">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
