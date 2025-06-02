import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Book, ChevronRight, Star, Eye } from 'lucide-react';
import { fadeIn } from '../utils/motion';

const KnowledgeBase = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', count: 45 },
    { id: 'getting-started', name: 'Getting Started', count: 12 },
    { id: 'billing', name: 'Billing & Payments', count: 8 },
    { id: 'technical', name: 'Technical Issues', count: 15 },
    { id: 'account', name: 'Account Management', count: 10 }
  ];

  const articles = [
    {
      id: 1,
      title: 'How to reset your password',
      excerpt: 'Step-by-step guide to reset your account password safely and securely.',
      category: 'Account Management',
      views: 1234,
      rating: 4.8,
      updated: '2 days ago'
    },
    {
      id: 2,
      title: 'Understanding your billing cycle',
      excerpt: 'Learn about billing periods, payment methods, and how to manage your subscription.',
      category: 'Billing & Payments',
      views: 892,
      rating: 4.6,
      updated: '1 week ago'
    },
    {
      id: 3,
      title: 'Troubleshooting login issues',
      excerpt: 'Common solutions for login problems and authentication errors.',
      category: 'Technical Issues',
      views: 2156,
      rating: 4.9,
      updated: '3 days ago'
    },
    {
      id: 4,
      title: 'Getting started with your first project',
      excerpt: 'A comprehensive guide to help you set up and configure your first project.',
      category: 'Getting Started',
      views: 3421,
      rating: 4.7,
      updated: '1 day ago'
    }
  ];

  const popular = [
    'How to reset password',
    'Billing questions',
    'Account setup',
    'Technical support',
    'Feature requests'
  ];

  return (
    <div className="space-y-6">
      <motion.div {...fadeIn} className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Knowledge Base</h1>
        <p className="text-gray-600 mb-8">Find answers to common questions and learn how to use our platform</p>
        
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for articles, guides, and FAQs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="font-semibold text-gray-900 mb-4">Categories</h2>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`w-full text-left p-3 rounded-lg transition-colors flex items-center justify-between ${
                    category === cat.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className="text-sm text-gray-400">{cat.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Popular Searches */}
          <div className="bg-white rounded-xl shadow-sm border p-6 mt-6">
            <h2 className="font-semibold text-gray-900 mb-4">Popular Searches</h2>
            <div className="space-y-2">
              {popular.map((term, i) => (
                <button
                  key={i}
                  className="w-full text-left text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Articles */}
        <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="lg:col-span-3">
          <div className="space-y-4">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Book size={16} className="text-blue-600" />
                      <span className="text-sm text-blue-600">{article.category}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Eye size={14} />
                        <span>{article.views.toLocaleString()} views</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-yellow-400 fill-current" />
                        <span>{article.rating}</span>
                      </div>
                      <span>Updated {article.updated}</span>
                    </div>
                  </div>
                  <ChevronRight className="text-gray-400 ml-4" size={20} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default KnowledgeBase;