import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Cloud, Code, Users, Star, CheckCircle, ChevronLeft, ChevronRight, Monitor, Globe, Smartphone, Bot, BrainCircuit, ServerCog, AppWindow } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";

const Home = () => {
  const heroSlides = [
    {
      title: "Innovating Tomorrow, Today",
      subtitle: "We specialize in cutting-edge IT solutions that drive business success and digital transformation.",
      image: "/images/heroslide-image-1.jpg",
      cta1: "Get a Free Consultation",
      cta2: "Learn More About Us"
    },
    {
      title: "Bring Your Ideals into Reality",
      subtitle: "Custom software development tailored to your unique business needs and challenges.",
      image: "/images/heroslide-image-2.jpg",
      cta1: "Get a Free Consultation",
      cta2: "View Our Services"
    },
    {
      title: "Tailored Solutions, Real Results",
      subtitle: "We design and deliver customized solutions that directly address your business goals and challenges.",
      image: "/images/heroslide-image-3.jpg",
      cta1: "Get a Free Consultation",
      cta2: "See Our Portfolio"
    }
  ];

  const services = [
    {
      icon: Code,
      title: 'Software Solutions',
      description: 'Custom software solutions built with cutting-edge technologies.',
      link: '/services'
    },
    {
      icon: Monitor,
      title: 'Desktop Application Development',
      description: 'Creating robust desktop applications for various platforms.',
      link: '/services'
    },
    {
      icon: Globe,
      title: 'Web Application Development',
      description: 'Building secure and scalable web applications to enhance your online presence.',
      link: '/services'
    },
    {
      icon: Smartphone,
      title: 'Mobile Application Development',
      description: 'Developing intuitive mobile applications for iOS and Android platforms.',
      link: '/services'
    },
    {
      icon: Bot,
      title: 'Chatbot Development',
      description: 'Creating intelligent chatbots to enhance customer engagement and support.',
      link: '/services'
    },
    {
      icon: BrainCircuit,
      title: 'Machine Learning & AI',
      description: 'Implementing AI solutions to automate processes and gain insights from data.',
      link: '/services'
    },
    {
      icon: ServerCog,
      title: 'Enterprise Resource Planning (ERP) Systems',
      description: 'Integrating business processes with ERP solutions for better efficiency.',
      link: '/services'
    },
    {
      icon: AppWindow,
      title: 'SaaS Solutions',
      description: 'Delivering scalable cloud-based software accessible from anywhere.',
      link: '/services'
    }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Built a scalable e-commerce solution serving 100K+ users daily.',
      tech: ['React', 'Node.js', 'AWS'],
      image: '/images/ecommerce-project.jpg'
    },
    {
      title: 'Healthcare Management System',
      description: 'Developed secure patient management system for healthcare providers.',
      tech: ['Vue.js', 'Python', 'PostgreSQL'],
      image: '/images/healthcare-project.jpg'
    },
    {
      title: 'Financial Dashboard',
      description: 'Created real-time analytics dashboard for financial institutions.',
      tech: ['Angular', 'TypeScript', 'Azure'],
      image: '/images/financial-dashboard-project.jpg'
    }
  ];

  const testimonials = [
    {
      quote: "TechFlow helped us reduce our IT costs by 30% with their tailored cloud solutions. Their expertise is unmatched.",
      author: "Sarah Johnson",
      position: "CTO",
      company: "InnovateCorp"
    },
    {
      quote: "The team delivered our project on time and exceeded our expectations. Highly recommend their services.",
      author: "Michael Chen",
      position: "CEO",
      company: "StartupLab"
    },
    {
      quote: "Outstanding cybersecurity implementation. We feel much more secure with their solutions in place.",
      author: "Emily Rodriguez",
      position: "IT Director",
      company: "SecureBank"
    },
    {
      quote: "Their cloud migration services were seamless and efficient. Highly professional team.",
      author: "John Doe",
      position: "Manager",
      company: "CloudTech"
    },
    {
      quote: "Exceptional service and support. They truly understand our business needs.",
      author: "Jane Smith",
      position: "Founder",
      company: "BizSolutions"
    }
  ];

  const stats = [
    { number: '20+', label: 'Projects Completed' },
    { number: '10+', label: 'Happy Clients' },
    { number: '2+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative overflow-hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="gradient-blue text-white py-20 px-4 min-h-[600px] flex items-center">
                  <div className="max-w-7xl mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                          {slide.title}
                        </h1>
                        <p
                          className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in-up" // Decreased font size
                          style={{ animationDelay: "0.2s" }}
                        >
                          {slide.subtitle}
                        </p>
                        <div
                          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
                          style={{ animationDelay: "0.4s" }}
                        >
                          <Link to="/contact">
                            <Button
                              size="lg"
                              variant="secondary"
                              className="text-blue-600 hover:text-blue-700"
                            >
                              {slide.cta1} <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </Link>
                          <Link
                            to={
                              index === 0
                                ? "/about"
                                : index === 1
                                ? "/services"
                                : "/portfolio"
                            }
                          >
                            <Button
                              size="lg"
                              variant="outline"
                              className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600"
                            >
                              {slide.cta2}
                            </Button>
                          </Link>
                        </div>
                      </div>
                        <div className="hidden lg:block">
                        <div className="w-full h-96 rounded-lg overflow-hidden flex items-center justify-center">
                          <img
                          src={slide.image}
                          alt={slide.title}
                          className="object-cover w-full h-full"
                          />
                        </div>
                        </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver comprehensive IT solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to={service.link}>
                    <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Driving Innovation Through Technology
              </h2>
                <p className="text-lg text-gray-600 mb-6">
                We bring businesses to the next level by providing effective IT solutions and secure client satisfaction with our supportive services.
                </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">2+ years of industry experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">20+ successful projects delivered</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">24/7 dedicated support</span>
                </div>
              </div>
              <Link to="/about">
                <Button className="gradient-blue text-white">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img 
                src="/images/about-image.png" 
                alt="Team collaboration" 
                className="rounded-lg "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our latest work and the technologies we've mastered.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg bg-white overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link to="/portfolio">
                    <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button className="gradient-blue text-white">
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </div>

          <Carousel className="w-full" opts={{ loop: true, align: "start" }} plugins={[Autoplay({ delay: 6000 })]}>
            <CarouselContent className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="flex-shrink-0 max-w-[400px]">
                    <Card className="border border-gray-200 shadow-xl bg-white p-6 mb-8 ms-2 me-2">
                    <CardContent className="p-0">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Innovate?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-blue-600 hover:text-blue-700">
                Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600">
                Explore Our Services
                </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends and insights in technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover-lift border-0 shadow-lg bg-white overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src="https://bluesoft.com/wp-content/uploads/2024/11/MicrosoftTeams-image.jpg"
                  alt="The Future of IT in 2025"
                  className="object-cover w-full h-full"
                />
                </div>
              <CardContent className="p-6">
                <div className="text-sm text-blue-600 mb-2">Technology Trends</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">The Future of IT in 2025</h3>
                <p className="text-gray-600 mb-4">Exploring emerging technologies and their impact on business transformation...</p>
                <Link to="/blog">
                  <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover-lift border-0 shadow-lg bg-white overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src="https://imageio.forbes.com/specials-images/imageserve/67dbb86536c541769a50adb5/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
                  alt="The Future of IT in 2025"
                  className="object-cover w-full h-full"
                />
                </div>
              <CardContent className="p-6">
                <div className="text-sm text-blue-600 mb-2">Cybersecurity</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Zero Trust Security Model</h3>
                <p className="text-gray-600 mb-4">Understanding the principles and implementation of zero trust architecture...</p>
                <Link to="/blog">
                  <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover-lift border-0 shadow-lg bg-white overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src="https://cdn.mos.cms.futurecdn.net/v2/t:0,l:0,cw:6499,ch:3656,q:80,w:6499/pL5rBKGq88cnoqgdJgCXGS.jpg"
                  alt="The Future of IT in 2025"
                  className="object-cover w-full h-full"
                />
                </div>
              <CardContent className="p-6">
                <div className="text-sm text-blue-600 mb-2">Cloud Computing</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Multi-Cloud Strategy Guide</h3>
                <p className="text-gray-600 mb-4">Best practices for implementing a successful multi-cloud strategy...</p>
                <Link to="/blog">
                  <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blog">
              <Button className="gradient-blue text-white">
                View All Articles <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
