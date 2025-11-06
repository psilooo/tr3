import { Zap, Shield, BarChart3, Workflow, Clock, Cpu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Features() {
  const features = [
    {
      icon: Workflow,
      title: 'End-to-End Automation',
      description: 'Agents handle complete workflows from start to finish, making decisions and adapting to changing conditions.',
    },
    {
      icon: Zap,
      title: 'Real-Time Execution',
      description: 'Process tasks instantly with sub-second response times and parallel execution capabilities.',
    },
    {
      icon: Shield,
      title: 'Built-In Reliability',
      description: 'Robust error handling, automatic retries, and comprehensive monitoring ensure continuous operation.',
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Track efficiency gains, identify bottlenecks, and optimize workflows with detailed insights.',
    },
    {
      icon: Clock,
      title: '24/7 Operation',
      description: 'Agents work around the clock without breaks, handling peak loads and off-hours tasks seamlessly.',
    },
    {
      icon: Cpu,
      title: 'Smart Integration',
      description: 'Connect with existing systems through APIs, webhooks, and custom integrations.',
    },
  ];

  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for <span className="text-gradient">Operational Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI agents are designed to handle the complexity of real-world operations with precision and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow group"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
