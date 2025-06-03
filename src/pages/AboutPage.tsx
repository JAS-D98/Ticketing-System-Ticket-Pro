import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Users, Target, Heart, Award, Globe, Shield, TrendingUp, Mail, Linkedin, Twitter } from 'lucide-react';
import Button from '../components/Button';
import { fadeIn } from '../utils/motion';

const AboutPage = () => {
  const stats = [
    { number: '10,000+', label: 'Happy Customers', icon: Users },
    { number: '50M+', label: 'Tickets Processed', icon: Target },
    { number: '99.9%', label: 'Uptime SLA', icon: Shield },
    { number: '150+', label: 'Countries Served', icon: Globe }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every decision we make is guided by what\'s best for our customers and their success.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'We maintain the highest standards of security and privacy to protect your data.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'We constantly evolve our platform to stay ahead of industry trends and needs.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'We believe great support comes from empowered teams working together seamlessly.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-founder',
      bio: 'Former VP of Customer Success at TechCorp. 15+ years in customer support and SaaS.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@ticketpro.com'
      }
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-founder',
      bio: 'Former Lead Engineer at Microsoft. Expert in scalable systems and AI/ML technologies.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@ticketpro.com'
      }
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Product',
      bio: 'Product leader with 12+ years experience building customer-centric software solutions.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@ticketpro.com'
      }
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      bio: 'Engineering leader focused on building reliable, scalable infrastructure for global customers.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@ticketpro.com'
      }
    }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Started with a vision to revolutionize customer support through intelligent automation.'
    },
    {
      year: '2020',
      title: 'First 1,000 Customers',
      description: 'Reached our first major milestone and launched our mobile application.'
    },
    {
      year: '2021',
      title: 'AI Integration',
      description: 'Introduced our AI-powered chatbot and automated ticket routing system.'
    },
    {
      year: '2022',
      title: 'Global Expansion',
      description: 'Expanded to serve customers in over 50 countries with multi-language support.'
    },
    {
      year: '2023',
      title: 'Enterprise Focus',
      description: 'Launched enterprise-grade features including SSO, advanced analytics, and custom workflows.'
    },
    {
      year: '2024',
      title: '10,000+ Customers',
      description: 'Celebrating our growth to over 10,000 happy customers worldwide.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">TicketPro</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
              <Link to="/login" className="text-gray-600 hover:text-gray-900 transition-colors">Sign In</Link>
              <Link to="/submit-ticket">
                <Button>Get Support</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              We're building the future of
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                customer support
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Founded in 2019, TicketPro has grown from a simple idea to a comprehensive platform trusted by over 10,000 businesses worldwide. Our mission is to make exceptional customer support accessible to every organization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To democratize exceptional customer support by providing intelligent, scalable, and user-friendly tools that empower teams to deliver outstanding customer experiences.
              </p>
              <p className="text-lg text-gray-600">
                We believe that every customer interaction is an opportunity to build trust, solve problems, and create lasting relationships. Our platform is designed to make those interactions as smooth and effective as possible.
              </p>
            </motion.div>
            <motion.div {...fadeIn} className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
                <Target className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-blue-100">
                  To be the world's most trusted customer support platform, enabling businesses of all sizes to deliver support experiences that customers love and remember.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do, from product development to customer relationships.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-2xl"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders from top technology companies, united by a passion for exceptional customer experiences.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From startup to industry leader - here's how we've grown and evolved over the years.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to join our journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you're looking for a career opportunity or want to transform your customer support, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                View Open Positions
              </Button>
              <Link to="/submit-ticket">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                  Contact Us
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
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Features</Link></li>
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
                <li><span className="text-white">About</span></li>
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

export default AboutPage;