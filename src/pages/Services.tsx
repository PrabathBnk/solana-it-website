
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Shield, Cloud, Users, Database, Settings, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions built with cutting-edge technologies to meet your specific business needs.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Legacy System Modernization'],
      technologies: ['React', 'Node.js', 'Python', 'Java', 'Flutter']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets from evolving threats.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Consulting', '24/7 Monitoring'],
      technologies: ['SIEM', 'Firewall Management', 'Encryption', 'Identity Management']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for optimal performance and cost efficiency.',
      features: ['Cloud Migration', 'Infrastructure Management', 'DevOps Implementation', 'Cost Optimization'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker']
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic IT guidance to optimize your business operations and technology investments.',
      features: ['Digital Transformation', 'Technology Strategy', 'Process Optimization', 'Vendor Management'],
      technologies: ['Enterprise Architecture', 'ITIL', 'Agile', 'Lean']
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics solutions.',
      features: ['Business Intelligence', 'Data Warehousing', 'Predictive Analytics', 'Real-time Dashboards'],
      technologies: ['SQL', 'Power BI', 'Tableau', 'Python', 'R']
    },
    {
      icon: Settings,
      title: 'DevOps & Automation',
      description: 'Streamline your development and deployment processes with modern DevOps practices.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Automated Testing'],
      technologies: ['Jenkins', 'GitLab', 'Terraform', 'Ansible', 'Prometheus']
    }
  ];

  const workProcess = [
    { step: '01', title: 'Discovery & Planning', description: 'We analyze your requirements and create a comprehensive project roadmap.' },
    { step: '02', title: 'Design & Architecture', description: 'Our experts design scalable solutions tailored to your business needs.' },
    { step: '03', title: 'Development & Testing', description: 'We build and rigorously test your solution using industry best practices.' },
    { step: '04', title: 'Deployment & Support', description: 'We deploy your solution and provide ongoing support and maintenance.' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-blue text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Comprehensive IT solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 gradient-blue rounded-full flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button className="w-full gradient-blue text-white">
                      Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our IT services can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-blue-600 hover:text-blue-700">
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
