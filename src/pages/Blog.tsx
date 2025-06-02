
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Blog = () => {
  const featuredPost = {
    title: 'The Future of IT in 2025: Emerging Technologies and Trends',
    excerpt: 'Explore the cutting-edge technologies that will reshape the IT landscape in 2025, from AI and machine learning to quantum computing and beyond.',
    author: 'Sarah Johnson',
    date: 'January 15, 2025',
    category: 'Technology Trends',
    image: '/placeholder.svg',
    readTime: '8 min read'
  };

  const blogPosts = [
    {
      title: 'Zero Trust Security Model: Implementation Guide',
      excerpt: 'Learn how to implement a zero trust security architecture to protect your organization from modern cyber threats.',
      author: 'Michael Chen',
      date: 'January 10, 2025',
      category: 'Cybersecurity',
      image: '/placeholder.svg',
      readTime: '6 min read'
    },
    {
      title: 'Multi-Cloud Strategy: Best Practices for 2025',
      excerpt: 'Discover the benefits and challenges of multi-cloud deployment and how to create an effective strategy.',
      author: 'Emily Rodriguez',
      date: 'January 8, 2025',
      category: 'Cloud Computing',
      image: '/placeholder.svg',
      readTime: '5 min read'
    },
    {
      title: 'DevOps Automation: Tools and Techniques',
      excerpt: 'Streamline your development workflow with the latest DevOps automation tools and best practices.',
      author: 'David Kim',
      date: 'January 5, 2025',
      category: 'DevOps',
      image: '/placeholder.svg',
      readTime: '7 min read'
    },
    {
      title: 'AI in Software Development: Transforming the Industry',
      excerpt: 'How artificial intelligence is revolutionizing software development processes and improving code quality.',
      author: 'Lisa Wang',
      date: 'January 3, 2025',
      category: 'Artificial Intelligence',
      image: '/placeholder.svg',
      readTime: '9 min read'
    },
    {
      title: 'Database Security: Protecting Your Most Valuable Asset',
      excerpt: 'Essential strategies for securing your databases against evolving threats and compliance requirements.',
      author: 'Robert Taylor',
      date: 'December 30, 2024',
      category: 'Database Security',
      image: '/placeholder.svg',
      readTime: '6 min read'
    },
    {
      title: 'Microservices Architecture: When and How to Implement',
      excerpt: 'Understanding the benefits and challenges of microservices and when they make sense for your project.',
      author: 'Jennifer Lee',
      date: 'December 28, 2024',
      category: 'Software Architecture',
      image: '/placeholder.svg',
      readTime: '8 min read'
    },
    {
      title: 'Blockchain Beyond Cryptocurrency: Real-World Applications',
      excerpt: 'Exploring practical blockchain applications in supply chain, healthcare, and enterprise solutions.',
      author: 'Alex Thompson',
      date: 'December 25, 2024',
      category: 'Blockchain',
      image: '/placeholder.svg',
      readTime: '7 min read'
    },
    {
      title: 'Performance Optimization for Web Applications',
      excerpt: 'Proven techniques to improve your web application performance and user experience.',
      author: 'Maria Garcia',
      date: 'December 22, 2024',
      category: 'Web Development',
      image: '/placeholder.svg',
      readTime: '5 min read'
    },
    {
      title: 'IT Leadership in the Digital Age',
      excerpt: 'Essential skills and strategies for leading IT teams in an increasingly digital business environment.',
      author: 'James Wilson',
      date: 'December 20, 2024',
      category: 'Leadership',
      image: '/placeholder.svg',
      readTime: '6 min read'
    }
  ];

  const categories = ['All', 'Technology Trends', 'Cybersecurity', 'Cloud Computing', 'DevOps', 'Artificial Intelligence', 'Database Security', 'Software Architecture', 'Blockchain', 'Web Development', 'Leadership'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-blue text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Tech Insights & Blog
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Stay updated with the latest trends, insights, and best practices in technology.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>

          <Card className="hover-lift border-0 shadow-xl bg-white overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto bg-gradient-to-r from-purple-400 to-blue-500"></div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="text-sm text-blue-600 mb-2">{featuredPost.category}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center space-x-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Button className="gradient-blue text-white w-fit">
                  Read More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "gradient-blue text-white" : "text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg bg-white overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                <CardContent className="p-6">
                  <div className="text-sm text-blue-600 mb-2">{post.category}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{post.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <Button variant="outline" className="w-full text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 gradient-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter to get the latest tech insights and industry trends delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white text-gray-900"
            />
            <Button variant="secondary" className="text-blue-600 hover:text-blue-700">
              Subscribe <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
