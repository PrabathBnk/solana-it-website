import React from 'react';
import { Award, Users, Target, Heart, Linkedin, Twitter, Smile, Leaf, Gauge } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We continuously strive to push the boundaries of technology. Our focus is on providing creative and forward-thinking solutions that anticipate the needs of tomorrow.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in all our business practices. Transparency, honesty, and trustworthiness are the foundation of every relationship we build.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality in everything we do, from services to customer experiences. We believe in constant improvement and a relentless pursuit of perfection.'
    },
    {
      icon: Smile,
      title: 'Customer-Centricity',
      description: 'Our clients are at the heart of our operations. We prioritize their success by tailoring solutions to meet their unique needs and challenges, ensuring we exceed expectations at every step.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnerships. By fostering a collaborative environment, both internally and with our clients, we create stronger, more impactful solutions.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We are dedicated to promoting sustainable growth through environmentally responsible practices and by delivering solutions that enable long-term success for our clients and the world.'
    },
    {
      icon: Gauge,
      title: 'Agility',
      description: 'In an ever-changing digital landscape, we adapt quickly to new technologies, market trends, and challenges, ensuring that our solutions remain relevant and ahead of the curve.'
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
    { year: '2023', event: 'Company Launch' },
    { year: '2023', event: 'First Service Offering - Custom Software Development' },
    { year: '2023', event: 'Introduction of Cloud Solutions' },
    { year: '2024', event: 'Launch of AI & Machine Learning Solutions' },
    { year: '2024', event: 'First International Client Onboarded' },
    { year: '2025', event: 'Launch of SaaS Products' },
    { year: '2025', event: 'Strategic Partnerships & Collaborations' }
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
            About Solana IT
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Pioneering digital transformation through innovative technology solutions since 2023.
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
                  In the heart of the tech world, where innovation thrives and the future is shaped by technology, SolanaIT was born. It all started with a simple yet powerful idea-to empower businesses and individuals by providing cutting-edge IT solutions that are efficient, scalable, and future-proof.
                </p>
                <p>
                  At SolanaIT, we understand that the digital landscape is constantly evolving. That's why we are committed to delivering bespoke solutions tailored to meet the unique needs of each client. From software development and cloud services to cybersecurity and data analytics, we bring a combination of expertise, creativity, and passion to the table.
                </p>
                <p>
                  Our journey began with a team of visionary thinkers, driven by a shared purpose – to build a company that would not only lead the way in IT services but also inspire the next generation of technology. As a startup, we’ve faced challenges, but our drive to innovate and our dedication to delivering excellence have been the cornerstone of our success.
                </p>
                <p>
                  With the launch of SolanaIT, we aim to redefine the way businesses harness technology. We believe in creating meaningful, lasting relationships with our clients by being there at every step of their digital transformation journey.
                </p>
                <p>
                  Join us as we embark on this exciting chapter. Let SolanaIT be the trusted partner you need to unlock your true potential in this fast-paced digital world.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/about-page-image.png"
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
                  At SolanaIT, our mission is to deliver exceptional and innovative IT solutions that empower businesses to achieve their digital transformation goals. We are committed to providing reliable, secure, and scalable services, fostering lasting partnerships built on trust and collaboration. Through continuous learning, adaptability, and cutting-edge technology, we strive to help our clients navigate the complexities of the digital world and drive sustainable growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-600">
                  To become a global leader in providing innovative, reliable, and transformative IT solutions that empower businesses and individuals to thrive in an ever-evolving digital landscape. We aim to drive progress through cutting-edge technology, exceptional customer service, and sustainable growth, fostering a world where technology bridges gaps and creates limitless opportunities for all.
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

          <div className="flex flex-wrap justify-center items-stretch">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex-grow-0 flex-shrink-0 w-full md:w-1/2 lg:w-1/4 flex items-stretch justify-center mb-8"
              >
                <Card className="hover-lift border-0 shadow-lg bg-white text-center w-full mx-2 flex flex-col h-full">
                  <CardContent className="p-6 flex flex-col items-center flex-1">
                    <div className="w-16 h-16 gradient-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 pb-[10rem] bg-gray-50 ">
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
      {/* <section className="py-20 bg-white">
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
      </section> */}

      {/* Awards & Certifications */}
      {/* <section className="py-20 bg-gray-50">
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
      </section> */}
    </div>
  );
};

export default About;
