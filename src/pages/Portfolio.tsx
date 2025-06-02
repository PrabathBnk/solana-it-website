
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Built a scalable e-commerce solution serving 100K+ users daily with real-time inventory management and secure payment processing.',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe'],
      results: ['300% increase in sales', '50% reduction in page load time', '99.9% uptime'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Healthcare Management System',
      category: 'Software Development',
      description: 'Developed a comprehensive patient management system for healthcare providers with HIPAA compliance and telemedicine capabilities.',
      image: '/placeholder.svg',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker', 'Azure'],
      results: ['40% reduction in admin time', 'HIPAA compliant', '500+ healthcare providers'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Financial Analytics Dashboard',
      category: 'Data Analytics',
      description: 'Created a real-time financial analytics dashboard for investment firms with advanced reporting and risk assessment features.',
      image: '/placeholder.svg',
      technologies: ['Angular', 'Python', 'Power BI', 'SQL Server', 'Azure'],
      results: ['Real-time data processing', '60% faster reporting', '25+ financial metrics'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Cybersecurity Monitoring Platform',
      category: 'Cybersecurity',
      description: 'Implemented a comprehensive security monitoring system with threat detection and automated response capabilities.',
      image: '/placeholder.svg',
      technologies: ['Python', 'Elasticsearch', 'Kibana', 'Machine Learning', 'AWS'],
      results: ['99% threat detection rate', '24/7 monitoring', '50% reduction in incidents'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Cloud Infrastructure Automation',
      category: 'DevOps',
      description: 'Automated cloud infrastructure deployment and management for a Fortune 500 company using Infrastructure as Code.',
      image: '/placeholder.svg',
      technologies: ['Terraform', 'Ansible', 'Kubernetes', 'Jenkins', 'AWS'],
      results: ['80% faster deployments', '60% cost reduction', 'Zero-downtime updates'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Mobile Banking Application',
      category: 'Mobile Development',
      description: 'Developed a secure mobile banking application with biometric authentication and real-time transaction processing.',
      image: '/placeholder.svg',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Blockchain', 'AWS'],
      results: ['1M+ downloads', 'Bank-grade security', '4.8 app store rating'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const categories = ['All', 'Web Development', 'Software Development', 'Data Analytics', 'Cybersecurity', 'DevOps', 'Mobile Development'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-blue text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Showcasing our expertise through successful projects and innovative solutions.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "gradient-blue text-white" : "text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg bg-white overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <CardContent className="p-6">
                  <div className="text-sm text-blue-600 mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Results:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex}>• {result}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's bring your ideas to life with our proven expertise and innovative solutions.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-blue-600 hover:text-blue-700">
              Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
