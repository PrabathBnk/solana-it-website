
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Monitor, Globe, Smartphone, Bot, BrainCircuit, ServerCog, AppWindow, CheckCircle, ArrowRight, Store } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Software Solutions",
      description: "Custom software solutions built with cutting-edge technologies.",
      features: ["Tailored functionality", "Scalable architecture", "Seamless integration", "User-friendly interfaces"],
      technologies: ["TypeScript", "JavaScript", "Python", "Node.js", "React"]
    },
    {
      icon: Monitor,
      title: "Desktop Application Development",
      description: "Creating robust desktop applications for various platforms.",
      features: ["Cross-platform compatibility", "High performance", "Offline functionality", "Custom UI/UX"],
      technologies: ["Electron", "TypeScript", "C#", ".NET", "Qt"]
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description: "Building secure and scalable web applications to enhance your online presence.",
      features: ["Responsive design", "Secure authentication", "Scalable backend", "Real-time updates"],
      technologies: ["TypeScript", "React", "Angular", "Node.js", "PostgreSQL"]
    },
    {
      icon: Smartphone,
      title: "Mobile Application Development",
      description: "Developing intuitive mobile applications for iOS and Android platforms.",
      features: ["Native performance", "Cross-platform support", "Push notifications", "Intuitive UX"],
      technologies: ["TypeScript", "React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      icon: Bot,
      title: "Chatbot Development",
      description: "Creating intelligent chatbots to enhance customer engagement and support.",
      features: ["Natural language processing", "24/7 availability", "Multi-platform integration", "Personalized responses"],
      technologies: ["TypeScript", "Dialogflow", "Rasa", "Node.js", "AWS Lex"]
    },
    {
      icon: BrainCircuit,
      title: "Machine Learning & AI",
      description: "Implementing AI solutions to automate processes and gain insights from data.",
      features: ["Predictive analytics", "Data-driven insights", "Automation", "Model optimization"],
      technologies: ["TypeScript", "TensorFlow", "PyTorch", "Scikit-learn", "Python"]
    },
    {
      icon: ServerCog,
      title: "ERP & CRM Systems",
      description: "Integrating and optimizing business processes and customer relationships with unified ERP and CRM solutions.",
      features: ["Process automation", "Centralized data", "Real-time reporting", "Modular design"],
      technologies: ["TypeScript", "Odoo", "SAP", "Oracle NetSuite", "PostgreSQL"]
    },
    {
      icon: AppWindow,
      title: "SaaS Solutions",
      description: "Delivering scalable cloud-based software accessible from anywhere.",
      features: ["Multi-tenant architecture", "Subscription management", "Cloud scalability", "Secure data storage"],
      technologies: ["TypeScript", "AWS", "Azure", "Node.js", "MongoDB"]
    },
    {
      icon: Store,
      title: "POS Systems",
      description: "Custom Point of Sale (POS) systems designed for seamless transactions and business management.",
      features: ["Real-time inventory tracking", "Multi-store management", "Integrated payment processing", "Sales analytics & reporting"],
      technologies: ["TypeScript", "React", "Node.js", "SQLite", "Electron"]
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
                Get a Free Consultation<ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600"
              >
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
