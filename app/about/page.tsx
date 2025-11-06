import { Metadata } from 'next';
import { Target, Users, Zap, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About TaskRig - Our Mission & Team',
  description: 'Learn about TaskRig\'s mission to revolutionize operations through intelligent AI agents.',
};

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Precision-Driven',
      description: 'We build AI agents that execute tasks with accuracy and consistency, eliminating human error from repetitive processes.',
    },
    {
      icon: Zap,
      title: 'Speed & Efficiency',
      description: 'Our solutions are designed to accelerate workflows, reducing task completion times from hours to minutes.',
    },
    {
      icon: Shield,
      title: 'Reliability First',
      description: 'Every agent is built with robust error handling and monitoring to ensure continuous, dependable operation.',
    },
    {
      icon: Users,
      title: 'Human-Centric',
      description: 'We augment human capabilities, freeing teams to focus on strategic work that requires creativity and judgment.',
    },
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former operations lead at a Fortune 500 logistics company. Built TaskRig to solve the automation challenges he faced daily.',
    },
    {
      name: 'Sarah Martinez',
      role: 'CTO & Co-Founder',
      bio: 'AI researcher with 10+ years in machine learning. Previously led autonomous systems development at a leading tech firm.',
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Product',
      bio: 'Product strategist who has launched multiple B2B SaaS platforms. Passionate about building tools that solve real problems.',
    },
    {
      name: 'Dr. Emily Wong',
      role: 'Chief AI Scientist',
      bio: 'PhD in Computer Science with focus on multi-agent systems. Published researcher in autonomous decision-making.',
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
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Building the Future of Autonomous Operations
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            TaskRig was founded on a simple belief: organizations shouldn't waste human potential on repetitive tasks. 
            We're building AI agents that handle the heavy lifting, so teams can focus on what truly matters.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We're on a mission to eliminate operational friction through intelligent automation. 
                Every day, millions of hours are lost to manual, repetitive tasks that could be handled by AI.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                TaskRig empowers organizations to deploy autonomous agents that work 24/7, executing complex 
                workflows with precision and adapting to changing conditions in real-time.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe the future of work is collaborative—humans and AI working together, each doing what they do best.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden border border-border glow">
              <img 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Our Values</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            These principles guide everything we build and every decision we make.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:glow">
                <CardContent className="p-8">
                  <value.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Meet the Team</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            We're a diverse group of engineers, researchers, and operators united by a passion for solving hard problems.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mb-4 flex items-center justify-center text-3xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl text-muted-foreground mb-8">
            We're always looking for talented individuals who share our vision. 
            If you're passionate about AI and want to build the future of work, we'd love to hear from you.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 glow"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
