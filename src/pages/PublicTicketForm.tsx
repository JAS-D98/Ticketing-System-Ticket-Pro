import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Paperclip, Send, ArrowLeft, HelpCircle } from 'lucide-react';
import Button from '../components/Button';
import { fadeIn } from '../utils/motion';

const PublicTicketForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [files, setFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const categories = [
    'Technical Support',
    'Billing',
    'Feature Request',
    'Bug Report',
    'Account Issues',
    'General Inquiry'
  ];

  const priorities = [
    { value: 'low', label: 'Low', color: 'text-green-600' },
    { value: 'medium', label: 'Medium', color: 'text-yellow-600' },
    { value: 'high', label: 'High', color: 'text-red-600' },
    { value: 'urgent', label: 'Urgent', color: 'text-red-800' }
  ];

  const onSubmit = (data) => {
    const newTicketId = `T-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
    console.log('Public ticket submitted:', { ...data, files, ticketId: newTicketId });
    setTicketId(newTicketId);
    setSubmitted(true);
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const startOver = () => {
    setSubmitted(false);
    setTicketId('');
    reset();
    setFiles([]);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <motion.div {...fadeIn} className="max-w-md w-full">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ticket Submitted Successfully!</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-600 font-medium mb-2">Your Ticket ID:</p>
              <p className="text-2xl font-bold text-blue-800">{ticketId}</p>
            </div>
            <p className="text-gray-600 mb-6">Please save this ticket ID for future reference. You will receive an email confirmation shortly with tracking details.</p>
            <div className="space-y-3">
              <Button onClick={startOver} className="w-full">
                Submit Another Ticket
              </Button>
              <Link
                to="/knowledge"
                className="block w-full px-4 py-2 text-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                Browse Knowledge Base
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600 mr-8">TicketPro</h1>
              <nav className="hidden md:flex space-x-6">
                <Link to="/knowledge" className="text-gray-600 hover:text-gray-900 flex items-center">
                  <HelpCircle className="w-4 h-4 mr-1" />
                  Help Center
                </Link>
              </nav>
            </div>
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Staff Login
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto py-12 px-4">
        <motion.div {...fadeIn} className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Submit a Support Ticket</h1>
          <p className="text-gray-600">Describe your issue and our support team will get back to you as soon as possible.</p>
        </motion.div>

        <motion.form {...fadeIn} onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-sm border p-8 space-y-6">
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your full name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <input
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number (Optional)</label>
            <input
              type="tel"
              {...register('phone')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your phone number"
            />
          </div>

          {/* Ticket Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
              <select
                {...register('category', { required: 'Category is required' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a category</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Priority *</label>
              <select
                {...register('priority', { required: 'Priority is required' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select priority</option>
                {priorities.map(priority => (
                  <option key={priority.value} value={priority.value}>{priority.label}</option>
                ))}
              </select>
              {errors.priority && <p className="mt-1 text-sm text-red-600">{errors.priority.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
            <input
              type="text"
              {...register('subject', { required: 'Subject is required' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Brief description of your issue"
            />
            {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
            <textarea
              {...register('description', { required: 'Description is required' })}
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Please provide detailed information about your issue. Include any error messages, steps to reproduce the problem, and what you expected to happen."
            />
            {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Attachments</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
                accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.txt"
              />
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center cursor-pointer"
              >
                <Paperclip className="w-8 h-8 text-gray-400 mb-2" />
                <span className="text-sm text-gray-600 font-medium">Click to upload files</span>
                <span className="text-xs text-gray-400 mt-1">PNG, JPG, PDF, DOC up to 10MB each</span>
              </label>
            </div>
            {files.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Attached Files:</h4>
                <div className="space-y-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <span className="text-sm text-gray-600 truncate">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-red-500 hover:text-red-700 text-sm font-medium ml-2"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>What happens next?</strong> After submitting your ticket, you'll receive a confirmation email with your ticket ID. Our support team will review your request and respond within 24 hours.
            </p>
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="px-8 py-3">
              <Send className="w-4 h-4 mr-2" />
              Submit Ticket
            </Button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default PublicTicketForm;