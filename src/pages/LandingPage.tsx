import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Shield, Users, BarChart3, MessageSquare, Clock, Award, Globe, Headphones } from 'lucide-react';
import Button from '../components/Button';
import { fadeIn } from '../utils/motion';

const LandingPage = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Smart Ticket Management',
      description: 'Streamline support requests with intelligent routing, priority management, and automated workflows.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Gain insights into team performance, customer satisfaction, and resolution times with detailed reports.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enable seamless collaboration between agents with internal notes, ticket assignments, and real-time updates.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SSO, role-based access control, and compliance with industry standards.'
    },
    {
      icon: Clock,
      title: '24/7 AI Assistant',
      description: 'Reduce response times with our intelligent chatbot that handles common queries automatically.'
    },
    {
      icon: Globe,
      title: 'Multi-channel Support',
      description: 'Manage tickets from email, chat, phone, and social media in one unified platform.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Head of Customer Success',
      company: 'TechCorp Inc.',
      content: 'TicketPro transformed our support operations. Response times improved by 60% and customer satisfaction scores are at an all-time high.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'IT Director',
      company: 'Global Solutions',
      content: 'The analytics and reporting features give us incredible visibility into our support performance. Game-changer for our team.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Support Manager',
      company: 'StartupXYZ',
      content: 'Easy to implement and use. Our team was up and running in minutes, not days. The AI chatbot handles 40% of our inquiries.',
      rating: 5
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Customers' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '50%', label: 'Faster Resolution' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">TicketPro</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <Link to="/knowledge-public" className="text-gray-600 hover:text-gray-900 transition-colors">Help Center</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-600 hover:text-gray-900 transition-colors">Sign In</Link>
              <Link to="/submit-ticket">
                <Button>Get Support</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Enterprise-Grade
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Support Platform
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your customer support with AI-powered ticketing, advanced analytics, and seamless team collaboration. Trusted by 10,000+ businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/submit-ticket">
                <Button className="px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="px-8 py-4 text-lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to deliver
              <span className="block text-blue-600">exceptional support</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools your team needs to provide world-class customer support.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by industry leaders
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers have to say about their experience with TicketPro.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to transform your support?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using TicketPro to deliver exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/submit-ticket">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">TicketPro</span>
              </div>
              <p className="text-gray-400 mb-4">
                Enterprise-grade support platform trusted by businesses worldwide.
              </p>
              <div className="flex space-x-4">
                <Award className="w-6 h-6 text-gray-400" />
                <Shield className="w-6 h-6 text-gray-400" />
                <Globe className="w-6 h-6 text-gray-400" />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/knowledge-public" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/submit-ticket" className="hover:text-white transition-colors">Contact Support</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Status Page</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TicketPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;