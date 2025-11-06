import { Metadata } from 'next';
import { Cpu, Database, FileText, MessageSquare, Calendar, BarChart3, Workflow, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata: Metadata = {
  title: 'Solutions - AI Agent Capabilities | TaskRig',
  description: 'Discover how TaskRig\'s AI agents automate workflows, process data, and optimize operations across your organization.',
};

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Deploy agents that execute multi-step processes autonomously, from data collection to final delivery.',
      capabilities: [
        'End-to-end process orchestration',
        'Conditional logic and decision trees',
        'Error handling and retry mechanisms',
        'Real-time progress monitoring',
      ],
      useCases: [
        'Order processing and fulfillment',
        'Invoice generation and distribution',
        'Report compilation and delivery',
        'Quality assurance checks',
      ],
    },
    {
      icon: Database,
      title: 'Data Processing',
      description: 'Intelligent agents that extract, transform, and analyze data from multiple sources with precision.',
      capabilities: [
        'Multi-source data aggregation',
        'Pattern recognition and anomaly detection',
        'Automated data validation',
        'Structured output generation',
      ],
      useCases: [
        'Inventory reconciliation',
        'Performance metrics compilation',
        'Compliance reporting',
        'Data migration and cleanup',
      ],
    },
    {
      icon: MessageSquare,
      title: 'Communication Automation',
      description: 'AI agents that handle routine communications, notifications, and stakeholder updates.',
      capabilities: [
        'Context-aware message generation',
        'Multi-channel distribution',
        'Response tracking and follow-up',
        'Personalization at scale',
      ],
      useCases: [
        'Customer status updates',
        'Team notifications',
        'Stakeholder reporting',
        'Reminder and alert systems',
      ],
    },
    {
      icon: Calendar,
      title: 'Scheduling & Coordination',
      description: 'Autonomous agents that manage schedules, coordinate resources, and optimize allocation.',
      capabilities: [
        'Constraint-based scheduling',
        'Resource optimization',
        'Conflict resolution',
        'Dynamic rescheduling',
      ],
      useCases: [
        'Shift planning and management',
        'Equipment allocation',
        'Maintenance scheduling',
        'Meeting coordination',
      ],
    },
    {
      icon: FileText,
      title: 'Document Processing',
      description: 'Agents that read, extract, and process information from documents with high accuracy.',
      capabilities: [
        'OCR and text extraction',
        'Data field identification',
        'Format standardization',
        'Validation and verification',
      ],
      useCases: [
        'Invoice processing',
        'Form data extraction',
        'Contract review',
        'Compliance documentation',
      ],
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'AI-powered agents that analyze trends, generate insights, and provide actionable recommendations.',
      capabilities: [
        'Trend analysis and forecasting',
        'Performance benchmarking',
        'Automated insight generation',
        'Custom metric tracking',
      ],
      useCases: [
        'Operational dashboards',
        'Performance reporting',
        'Predictive maintenance',
        'Resource utilization analysis',
      ],
    },
  ];

  const industries = [
    {
      name: 'Manufacturing',
      icon: Cpu,
      description: 'Optimize production schedules, manage inventory, and automate quality control processes.',
      benefits: ['30% reduction in downtime', 'Real-time production tracking', 'Automated quality checks'],
    },
    {
      name: 'Logistics',
      icon: Zap,
      description: 'Streamline route planning, automate dispatch, and optimize fleet utilization.',
      benefits: ['25% faster delivery times', 'Reduced fuel costs', 'Improved resource allocation'],
    },
    {
      name: 'Field Services',
      icon: Calendar,
      description: 'Automate scheduling, optimize technician routes, and manage work orders efficiently.',
      benefits: ['40% more jobs per day', 'Reduced travel time', 'Better customer satisfaction'],
    },
    {
      name: 'Healthcare',
      icon: FileText,
      description: 'Automate patient scheduling, process medical records, and manage facility operations.',
      benefits: ['Reduced administrative burden', 'Faster patient processing', 'Improved compliance'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(64, 150, 255, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            AI Agents That Work for You
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Deploy autonomous agents that handle complex workflows, process data at scale, 
            and optimize operations—all without human intervention.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Core Capabilities</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Our AI agents are designed to handle the most demanding operational tasks with precision and reliability.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow group">
                <CardHeader>
                  <solution.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">Key Features</h4>
                    <ul className="space-y-2">
                      {solution.capabilities.map((cap, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">▸</span>
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-secondary">Use Cases</h4>
                    <ul className="space-y-2">
                      {solution.useCases.map((useCase, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-secondary mr-2">•</span>
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Industry Solutions</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Tailored AI agent deployments for specific industry challenges.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <industry.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{industry.name}</h3>
                  <p className="text-muted-foreground mb-6">{industry.description}</p>
                  
                  <div className="space-y-2">
                    {industry.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Implementation Process</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We analyze your workflows and identify automation opportunities.' },
              { step: '02', title: 'Design', description: 'Custom agent configuration tailored to your specific requirements.' },
              { step: '03', title: 'Deploy', description: 'Seamless integration with your existing systems and processes.' },
              { step: '04', title: 'Optimize', description: 'Continuous monitoring and refinement for peak performance.' },
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary/20 mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how TaskRig's AI agents can solve your specific challenges.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 glow"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
