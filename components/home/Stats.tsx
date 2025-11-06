import { Card, CardContent } from '@/components/ui/card';

export default function Stats() {
  const stats = [
    {
      value: '65%',
      label: 'Average Efficiency Gain',
      description: 'Organizations see significant productivity improvements within the first month',
    },
    {
      value: '24/7',
      label: 'Continuous Operation',
      description: 'Agents work around the clock without downtime or performance degradation',
    },
    {
      value: '<2 weeks',
      label: 'Time to Value',
      description: 'Most deployments are live and delivering results in under two weeks',
    },
    {
      value: '99.9%',
      label: 'Accuracy Rate',
      description: 'Industry-leading precision in task execution and decision-making',
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proven <span className="text-gradient">Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Organizations across industries are achieving measurable outcomes with TaskRig.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-bold text-gradient mb-3">{stat.value}</div>
                <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
