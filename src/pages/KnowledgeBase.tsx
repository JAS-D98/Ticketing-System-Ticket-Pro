import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen, ChevronRight, ThumbsUp, ThumbsDown, Eye, Clock, Tag } from 'lucide-react';
import { fadeIn } from '../utils/motion';

const KnowledgeBase = ({ public: isPublic = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = [
    { id: 'all', name: 'All Articles', count: 45 },
    { id: 'getting-started', name: 'Getting Started', count: 12 },
    { id: 'billing', name: 'Billing & Payments', count: 8 },
    { id: 'technical', name: 'Technical Support', count: 15 },
    { id: 'features', name: 'Features & Usage', count: 10 }
  ];

  const articles = [
    {
      id: 1,
      title: 'How to Submit Your First Ticket',
      category: 'getting-started',
      excerpt: 'Learn how to create and submit support tickets effectively.',
      content: 'To submit your first ticket, navigate to the ticket submission form and fill out all required fields including category, priority, and detailed description of your issue.',
      views: 1250,
      helpful: 45,
      notHelpful: 3,
      lastUpdated: '2024-01-15',
      tags: ['beginner', 'tickets', 'guide']
    },
    {
      id: 2,
      title: 'Understanding Ticket Priorities',
      category: 'getting-started',
      excerpt: 'Learn about different ticket priority levels and when to use them.',
      content: 'Ticket priorities help our support team understand the urgency of your request. Low priority for general questions, Medium for non-critical issues, High for business-impacting problems, and Urgent for system outages.',
      views: 890,
      helpful: 32,
      notHelpful: 2,
      lastUpdated: '2024-01-14',
      tags: ['priorities', 'tickets', 'workflow']
    },
    {
      id: 3,
      title: 'Payment Methods and Billing Cycles',
      category: 'billing',
      excerpt: 'Information about supported payment methods and billing options.',
      content: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers. Billing cycles can be monthly or yearly with discounts available for annual subscriptions.',
      views: 567,
      helpful: 28,
      notHelpful: 1,
      lastUpdated: '2024-01-13',
      tags: ['billing', 'payments', 'subscription']
    },
    {
      id: 4,
      title: 'API Integration Guide',
      category: 'technical',
      excerpt: 'Complete guide to integrating with our REST API.',
      content: 'Our REST API allows you to integrate TicketPro with your existing systems. Authentication is done via API keys, and all endpoints return JSON responses.',
      views: 2100,
      helpful: 67,
      notHelpful: 5,
      lastUpdated: '2024-01-12',
      tags: ['api', 'integration', 'developer']
    },
    {
      id: 5,
      title: 'Setting Up Automated Workflows',
      category: 'features',
      excerpt: 'Learn how to create automated rules for ticket management.',
      content: 'Automated workflows help streamline your support process by automatically assigning tickets, setting priorities, and sending notifications based on predefined rules.',
      views: 743,
      helpful: 41,
      notHelpful: 3,
      lastUpdated: '2024-01-11',
      tags: ['automation', 'workflows', 'efficiency']
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleVote = (articleId, type) => {
    console.log(`Voted ${type} for article ${articleId}`);
  };

  if (selectedArticle) {
    return (
      <div className={`${isPublic ? 'min-h-screen bg-gray-50 py-8' : ''}`}>
        <div className={`${isPublic ? 'max-w-4xl mx-auto px-4' : ''}`}>
          <motion.div {...fadeIn} className="bg-white rounded-lg shadow-sm border p-8">
            <button
              onClick={() => setSelectedArticle(null)}
              className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
            >
              ← Back to Articles
            </button>
            
            <div className="mb-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Eye className="w-4 h-4 mr-1" />
                {selectedArticle.views} views
                <Clock className="w-4 h-4 ml-4 mr-1" />
                Updated {selectedArticle.lastUpdated}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedArticle.title}</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedArticle.tags.map(tag => (
                  <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="prose max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">{selectedArticle.content}</p>
            </div>
            
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Was this article helpful?</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleVote(selectedArticle.id, 'helpful')}
                  className="flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  Yes ({selectedArticle.helpful})
                </button>
                <button
                  onClick={() => handleVote(selectedArticle.id, 'not-helpful')}
                  className="flex items-center px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors"
                >
                  <ThumbsDown className="w-4 h-4 mr-2" />
                  No ({selectedArticle.notHelpful})
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${isPublic ? 'min-h-screen bg-gray-50' : ''}`}>
      {isPublic && (
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold text-blue-600">TicketPro Help Center</h1>
          </div>
        </div>
      )}
      
      <div className={`${isPublic ? 'max-w-7xl mx-auto px-4 py-8' : 'space-y-6'}`}>
        {!isPublic && (
          <motion.div {...fadeIn}>
            <h1 className="text-3xl font-bold text-gray-900">Knowledge Base</h1>
            <p className="mt-2 text-gray-600">Search our comprehensive help documentation</p>
          </motion.div>
        )}

        {/* Search */}
        <motion.div {...fadeIn} className="bg-white rounded-lg shadow-sm border p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles, guides, and FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Categories */}
          <motion.div {...fadeIn} className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-400">{category.count}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Articles */}
          <motion.div {...fadeIn} className="lg:col-span-3">
            <div className="space-y-4">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 ml-2" />
                  </div>
                  
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {article.views} views
                      </div>
                      <div className="flex items-center">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {article.helpful} helpful
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {article.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {filteredArticles.length === 0 && (
                <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
                  <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-600">Try adjusting your search terms or browse different categories.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;