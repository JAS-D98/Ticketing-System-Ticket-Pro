import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, X, Star, Zap, Shield, Users, BarChart3, MessageSquare, Clock, Globe, Headphones, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import { fadeIn } from '../utils/motion';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small teams getting started',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        { name: 'Up to 3 agents', included: true },
        { name: '1,000 tickets/month', included: true },
        { name: 'Email support', included: true },
        { name: 'Basic reporting', included: true },
        { name: 'Knowledge base', included: true },
        { name: 'Mobile app', included: true },
        { name: 'API access', included: false },
        { name: 'Custom branding', included: false },
        { name: 'Advanced analytics', included: false },
        { name: 'Priority support', included: false },
        { name: 'SSO integration', included: false },
        { name: 'Custom workflows', included: false }
      ],
      popular: false,
      color: 'border-gray-200'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Best for growing support teams',
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: [
        { name: 'Up to 10 agents', included: true },
        { name: '5,000 tickets/month', included: true },
        { name: 'Email & chat support', included: true },
        { name: 'Advanced reporting', included: true },
        { name: 'Knowledge base', included: true },
        { name: 'Mobile app', included: true },
        { name: 'API access', included: true },
        { name: 'Custom branding', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Priority support', included: true },
        { name: 'SSO integration', included: false },
        { name: 'Custom workflows', included: false }
      ],
      popular: true,
      color: 'border-blue-500 ring-2 ring-blue-500'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations with advanced needs',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        { name: 'Unlimited agents', included: true },
        { name: 'Unlimited tickets', included: true },
        { name: '24/7 phone support', included: true },
        { name: 'Custom reporting', included: true },
        { name: 'Knowledge base', included: true },
        { name: 'Mobile app', included: true },
        { name: 'API access', included: true },
        { name: 'Custom branding', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Priority support', included: true },
        { name: 'SSO integration', included: true },
        { name: 'Custom workflows', included: true }
      ],
      popular: false,
      color: 'border-purple-500'
    }
  ];

  const addOns = [
    {
      name: 'AI Chatbot Pro',
      description: 'Advanced AI with custom training',
      price: 49,
      icon: MessageSquare
    },
    {
      name: 'Advanced Analytics',
      description: 'Custom dashboards and reports',
      price: 29,
      icon: BarChart3
    },
    {
      name: 'Multi-language Support',
      description: 'Support for 50+ languages',
      price: 19,
      icon: Globe
    },
    {
      name: 'White Label Solution',
      description: 'Complete branding customization',
      price: 99,
      icon: Star
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
    },
    {
      question: 'What happens if I exceed my ticket limit?',
      answer: 'We\'ll notify you when you\'re approaching your limit. You can either upgrade your plan or purchase additional ticket packs as needed.'
    },
    {
      question: 'Do you offer custom enterprise solutions?',
      answer: 'Yes, we offer custom solutions for large enterprises with specific requirements. Contact our sales team for a personalized quote.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to get started.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide email support for Starter, email & chat for Professional, and 24/7 phone support for Enterprise customers.'
    }
  ];

  const getPrice = (plan) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan) => {
    if (billingCycle === 'yearly') {
      const monthlyCost = plan.monthlyPrice * 12;
      const yearlyCost = plan.yearlyPrice;
      const savings = Math.round(((monthlyCost - yearlyCost) / monthlyCost) * 100);
      return savings;
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
              <Link to="/login" className="text-gray-600 hover:text-gray-900 transition-colors">Sign In</Link>
              <Link to="/submit-ticket">
                <Button>Get Support</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div {...fadeIn} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose the perfect plan for your
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              support team
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start with a 14-day free trial. No credit card required. Scale as you grow with flexible pricing options.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                billingCycle === 'yearly' ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Yearly
              <span className="ml-1 text-green-600 text-sm font-medium">(Save up to 20%)</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-sm border-2 ${plan.color} p-8 relative ${
                plan.popular ? 'transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">${getPrice(plan)}</span>
                  <span className="text-gray-600">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                  {getSavings(plan) > 0 && (
                    <div className="text-green-600 text-sm font-medium mt-1">
                      Save {getSavings(plan)}% annually
                    </div>
                  )}
                </div>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                      : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  Start Free Trial
                </Button>
              </div>
              
              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0" />
                    )}
                    <span className={`text-sm ${
                      feature.included ? 'text-gray-700' : 'text-gray-400'
                    }`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div {...fadeIn} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Add-ons</h2>
            <p className="text-xl text-gray-600">Extend your platform with additional capabilities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => {
              const Icon = addon.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{addon.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">${addon.price}</span>
                    <span className="text-gray-500 text-sm">/month</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Enterprise CTA */}
        <motion.div {...fadeIn} className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white mb-16">
          <h2 className="text-3xl font-bold mb-4">Need a custom solution?</h2>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Our enterprise team can create a tailored solution that fits your specific requirements and scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              Contact Sales
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Schedule Demo
            </Button>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div {...fadeIn} className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our pricing</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-4"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div {...fadeIn} className="text-center">
          <p className="text-gray-600 mb-6">Trusted by 10,000+ businesses worldwide</p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <Shield className="w-8 h-8 text-gray-400" />
            <span className="text-sm text-gray-500">SOC 2 Compliant</span>
            <Globe className="w-8 h-8 text-gray-400" />
            <span className="text-sm text-gray-500">99.9% Uptime SLA</span>
            <Headphones className="w-8 h-8 text-gray-400" />
            <span className="text-sm text-gray-500">24/7 Support</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;