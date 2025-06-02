
import React from 'react';
import { Award, Users, Target, Heart, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions that drive technological advancement.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We build trust through transparent communication, ethical practices, and reliable service delivery.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork, both internally and with our clients, to achieve exceptional results.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every project, maintaining the highest standards of quality and performance.'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      position: 'CEO & Founder',
      bio: 'With 15+ years in tech leadership, Sarah founded TechFlow with a vision to democratize enterprise-grade technology solutions.',
      image: '/placeholder.svg',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Michael Rodriguez',
      position: 'CTO',
      bio: 'Former Google engineer with expertise in scalable architectures and cloud computing. Leads our technical innovation efforts.',
      image: '/placeholder.svg',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Emily Johnson',
      position: 'Head of Cybersecurity',
      bio: 'Certified security expert with a track record of protecting Fortune 500 companies from cyber threats.',
      image: '/placeholder.svg',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'David Kim',
      position: 'Lead Developer',
      bio: 'Full-stack developer passionate about creating elegant solutions to complex problems. Advocates for clean, maintainable code.',
      image: '/placeholder.svg',
      social: { linkedin: '#', twitter: '#' }
    }
  ];

  const milestones = [
    { year: '2014', event: 'TechFlow founded with a vision to innovate IT solutions' },
    { year: '2016', event: 'Reached 50 successful project deliveries' },
    { year: '2018', event: 'Expanded team to 25+ professionals' },
    { year: '2020', event: 'Achieved ISO 27001 certification for security' },
    { year: '2022', event: 'Crossed 500 projects milestone' },
    { year: '2024', event: 'Launched AI-powered consulting services' }
  ];

  const awards = [
    { title: 'Best IT Consulting Firm 2023', organization: 'Tech Excellence Awards' },
    { title: 'Innovation in Cloud Solutions', organization: 'Cloud Computing Association' },
    { title: 'Cybersecurity Excellence Award', organization: 'Security Industry Association' },
    { title: 'Top Employer in Tech', organization: 'Workplace Excellence Institute' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-blue text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            About TechFlow
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Pioneering digital transformation through innovative technology solutions since 2014.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  TechFlow was born from a simple yet powerful vision: to make enterprise-grade technology 
                  accessible to businesses of all sizes. Founded in 2014 by a team of passionate technologists, 
                  we've grown from a small startup to a trusted partner for companies worldwide.
                </p>
                <p>
                  Our journey began when our founders recognized the gap between cutting-edge technology 
                  and practical business applications. Today, we bridge that gap by delivering solutions 
                  that are not only technically excellent but also aligned with real business needs.
                </p>
                <p>
                  With over a decade of experience and 500+ successful projects, we continue to push 
                  the boundaries of what's possible in technology, always with our clients' success at heart.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="TechFlow office" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg bg-white p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600">
                  To empower businesses through innovative technology solutions that drive growth, 
                  efficiency, and competitive advantage. We are committed to delivering excellence 
                  in every project while fostering long-term partnerships with our clients.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-600">
                  To be the global leader in technology innovation, creating a future where 
                  businesses can leverage technology seamlessly to achieve their goals. We envision 
                  a world where technology serves as a catalyst for positive change and growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide every decision we make and every solution we deliver.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg bg-white text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth and evolution.</p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-20 h-20 gradient-blue rounded-full flex items-center justify-center text-white font-bold">
                  {milestone.year}
                </div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow">
                  <p className="text-lg text-gray-800">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate professionals behind our success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg bg-white text-center overflow-hidden">
                <div className="h-64 bg-gradient-to-b from-blue-400 to-blue-600"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={member.social.twitter} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition for our commitment to excellence and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white p-6">
                <CardContent className="p-0 flex items-center space-x-4">
                  <div className="w-16 h-16 gradient-blue rounded-full flex items-center justify-center">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{award.title}</h3>
                    <p className="text-gray-600">{award.organization}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
