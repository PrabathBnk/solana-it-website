
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Heart, Zap, ArrowRight, CircleAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Careers = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Work-life balance with flexible hours and remote options'
    },
    {
      icon: Zap,
      title: 'Professional Growth',
      description: 'Continuous learning and career development opportunities'
    },
    {
      icon: Users,
      title: 'Great Team',
      description: 'Collaborative environment with talented professionals'
    }
  ];

  const openPositions = [
    // {
    //   title: 'Senior Full Stack Developer',
    //   department: 'Engineering',
    //   location: 'San Francisco, CA / Remote',
    //   type: 'Full-time',
    //   experience: '5+ years',
    //   description: 'Join our engineering team to build scalable web applications using modern technologies.',
    //   requirements: ['5+ years of experience with React and Node.js', 'Experience with cloud platforms (AWS/Azure)', 'Strong problem-solving skills'],
    //   responsibilities: ['Develop and maintain web applications', 'Collaborate with cross-functional teams', 'Mentor junior developers']
    // },
    // {
    //   title: 'Cybersecurity Specialist',
    //   department: 'Security',
    //   location: 'San Francisco, CA',
    //   type: 'Full-time',
    //   experience: '3+ years',
    //   description: 'Help protect our clients from cyber threats with cutting-edge security solutions.',
    //   requirements: ['3+ years in cybersecurity', 'Knowledge of security frameworks', 'Security certifications preferred'],
    //   responsibilities: ['Conduct security assessments', 'Implement security measures', 'Monitor security incidents']
    // },
    // {
    //   title: 'DevOps Engineer',
    //   department: 'Infrastructure',
    //   location: 'Remote',
    //   type: 'Full-time',
    //   experience: '4+ years',
    //   description: 'Automate and optimize our development and deployment processes.',
    //   requirements: ['Experience with CI/CD pipelines', 'Knowledge of containerization', 'Cloud infrastructure experience'],
    //   responsibilities: ['Manage cloud infrastructure', 'Automate deployment processes', 'Monitor system performance']
    // },
    // {
    //   title: 'UI/UX Designer',
    //   department: 'Design',
    //   location: 'San Francisco, CA / Remote',
    //   type: 'Full-time',
    //   experience: '3+ years',
    //   description: 'Create beautiful and intuitive user experiences for our clients.',
    //   requirements: ['3+ years of UI/UX design experience', 'Proficiency in design tools', 'Understanding of user-centered design'],
    //   responsibilities: ['Design user interfaces', 'Conduct user research', 'Create design systems']
    // },
    // {
    //   title: 'Project Manager',
    //   department: 'Operations',
    //   location: 'San Francisco, CA',
    //   type: 'Full-time',
    //   experience: '4+ years',
    //   description: 'Lead cross-functional teams to deliver projects on time and within budget.',
    //   requirements: ['PMP certification preferred', 'Experience with Agile methodologies', 'Strong communication skills'],
    //   responsibilities: ['Manage project timelines', 'Coordinate team activities', 'Communicate with stakeholders']
    // },
    // {
    //   title: 'Data Scientist',
    //   department: 'Analytics',
    //   location: 'Remote',
    //   type: 'Full-time',
    //   experience: '3+ years',
    //   description: 'Extract insights from data to drive business decisions and innovation.',
    //   requirements: ['3+ years in data science', 'Python/R programming skills', 'Machine learning experience'],
    //   responsibilities: ['Analyze complex datasets', 'Build predictive models', 'Present findings to stakeholders']
    // }
  ];

  const testimonials = [
    {
      quote: "Solana IT has provided me with incredible opportunities to grow both professionally and personally. The team is supportive and the work is challenging in the best way.",
      author: "Chanuka Jeewantha",
      position: "Senior Developer",
      years: "2 years at Solana IT"
    },
    {
      quote: "The company culture here is amazing. Everyone is passionate about technology and helping each other succeed. I couldn't ask for a better workplace.",
      author: "Thilina Oshan",
      position: "Font-end Developer",
      years: "2 years at TechFlow"
    },
    {
      quote: "I collaborated with talented engineers at Solana IT to bring creative ideas to life, prioritizing user experience and innovation in every thrilling project.",
      author: "Prabath Banuka",
      position: "UI/UX Designer",
      years: "2 years at Solana IT"
    }
    ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-blue text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Be part of a dynamic team that's shaping the future of technology and making a real impact.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where our team can thrive and do their best work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg bg-white text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting opportunities to grow your career with us.
            </p>
          </div>
          <div className="text-center text-gray-600 py-8 flex items-center justify-center">
            <CircleAlert className="h-6 w-6 mr-3" />
            <h3 className="font-medium text-lg inline-block align-middle">Currently, there are no open positions available.</h3>
          </div>
          {/* <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-2xl font-semibold text-gray-900">{position.title}</h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">{position.department}</span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{position.type}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Briefcase className="h-4 w-4" />
                          <span>{position.experience}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6">{position.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                          <ul className="text-gray-600 space-y-1">
                            {position.requirements.map((req, reqIndex) => (
                              <li key={reqIndex}>• {req}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Responsibilities:</h4>
                          <ul className="text-gray-600 space-y-1">
                            {position.responsibilities.map((resp, respIndex) => (
                              <li key={respIndex}>• {resp}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <Link to="/contact">
                        <Button className="w-full gradient-blue text-white mb-4">
                          Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                      <Button variant="outline" className="w-full text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div> */}
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Team Says</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our employees about their experience working at TechFlow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-blue-600">{testimonial.years}</div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't see the perfect role? We're always looking for talented individuals to join our team.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-blue-600 hover:text-blue-700">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Careers;
