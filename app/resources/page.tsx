import { Metadata } from 'next';
import { BookOpen, FileText, Video, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata: Metadata = {
  title: 'Resources - Documentation & Case Studies | TaskRig',
  description: 'Access TaskRig documentation, case studies, and learning resources for AI agent deployment.',
};

export default function ResourcesPage() {
  const caseStudies = [
    {
      title: 'Manufacturing Efficiency Boost',
      industry: 'Manufacturing',
      metric: '35% reduction in production delays',
      description: 'A mid-sized manufacturer deployed TaskRig agents to automate production scheduling and quality control, resulting in significant efficiency gains.',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Logistics Route Optimization',
      industry: 'Logistics',
      metric: '28% decrease in fuel costs',
      description: 'A regional logistics company used AI agents to optimize delivery routes and automate dispatch, cutting costs and improving delivery times.',
      image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Field Service Transformation',
      industry: 'Field Services',
      metric: '42% increase in daily jobs',
      description: 'A field service provider automated scheduling and route planning, enabling technicians to complete more jobs per day.',
      image: 'https://images.pexels.com/photos/5691607/pexels-photo-5691607.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const documentation = [
    {
      icon: BookOpen,
      title: 'Getting Started Guide',
      description: 'Learn the fundamentals of deploying and managing AI agents in your organization.',
      link: '#',
    },
    {
      icon: FileText,
      title: 'API Documentation',
      description: 'Complete reference for integrating TaskRig agents with your existing systems.',
      link: '#',
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for common use cases and configurations.',
      link: '#',
    },
    {
      icon: Download,
      title: 'Whitepapers',
      description: 'In-depth technical papers on AI agent architecture and best practices.',
      link: '#',
    },
  ];

  const blogPosts = [
    {
      title: 'The Future of Autonomous Operations',
      date: 'March 15, 2025',
      excerpt: 'Exploring how AI agents are reshaping operational workflows across industries.',
      readTime: '5 min read',
    },
    {
      title: 'Building Reliable AI Agents',
      date: 'March 8, 2025',
      excerpt: 'Best practices for designing agents that handle edge cases and errors gracefully.',
      readTime: '7 min read',
    },
    {
      title: 'Measuring ROI from AI Automation',
      date: 'March 1, 2025',
      excerpt: 'A framework for quantifying the business impact of autonomous agent deployment.',
      readTime: '6 min read',
    },
    {
      title: 'Multi-Agent Coordination Strategies',
      date: 'February 22, 2025',
      excerpt: 'How to orchestrate multiple AI agents working together on complex workflows.',
      readTime: '8 min read',
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
            Resources & Learning
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Everything you need to successfully deploy and manage AI agents in your organization.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="case-studies" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
              <TabsTrigger value="documentation">Documentation</TabsTrigger>
              <TabsTrigger value="blog">Blog</TabsTrigger>
            </TabsList>
            
            {/* Case Studies Tab */}
            <TabsContent value="case-studies" className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
                <p className="text-muted-foreground mb-8">
                  See how organizations are achieving measurable results with TaskRig AI agents.
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {caseStudies.map((study, index) => (
                    <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={study.image} 
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <div className="text-sm text-primary mb-2">{study.industry}</div>
                        <CardTitle className="text-xl">{study.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-gradient mb-4">{study.metric}</div>
                        <p className="text-muted-foreground">{study.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            {/* Documentation Tab */}
            <TabsContent value="documentation" className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Documentation</h2>
                <p className="text-muted-foreground mb-8">
                  Comprehensive guides and technical documentation for TaskRig platform.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {documentation.map((doc, index) => (
                    <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                      <CardContent className="p-8">
                        <doc.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-2xl font-bold mb-3">{doc.title}</h3>
                        <p className="text-muted-foreground mb-4">{doc.description}</p>
                        <span className="text-primary font-semibold group-hover:underline">
                          Access Resource →
                        </span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            {/* Blog Tab */}
            <TabsContent value="blog" className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
                <p className="text-muted-foreground mb-8">
                  Thoughts on AI automation, operational excellence, and the future of work.
                </p>
                
                <div className="space-y-6">
                  {blogPosts.map((post, index) => (
                    <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group">
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                              {post.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{post.date}</span>
                              <span>•</span>
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{post.excerpt}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Need Help Getting Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our team is ready to guide you through your AI automation journey.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 glow"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </div>
  );
}
