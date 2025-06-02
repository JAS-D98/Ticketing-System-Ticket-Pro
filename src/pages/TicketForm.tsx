import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form'; 
import { Paperclip, Send } from 'lucide-react';
import Button from '../components/Button';
import { fadeIn } from '../utils/motion';

const TicketForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [files, setFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);

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
    console.log('Ticket submitted:', { ...data, files });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
      setFiles([]);
    }, 3000);
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  if (submitted) {
    return (
      <motion.div {...fadeIn} className="max-w-2xl mx-auto">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-green-800 mb-2">Ticket Submitted Successfully!</h2>
          <p className="text-green-600 mb-4">Your ticket has been created and assigned ID: T-{Math.floor(Math.random() * 1000)}</p>
          <p className="text-sm text-green-600">You will receive an email confirmation shortly.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div {...fadeIn}>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Submit a Ticket</h1>
        <p className="text-gray-600 mb-8">Describe your issue and we'll get back to you as soon as possible.</p>
      </motion.div>

      <motion.form {...fadeIn} onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-sm border p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
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
          <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
          <input
            type="text"
            {...register('subject', { required: 'Subject is required' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Brief description of your issue"
          />
          {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            {...register('description', { required: 'Description is required' })}
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Please provide detailed information about your issue..."
          />
          {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Attachments</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
              accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
            />
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <Paperclip className="w-8 h-8 text-gray-400 mb-2" />
              <span className="text-sm text-gray-600">Click to upload files</span>
              <span className="text-xs text-gray-400 mt-1">PNG, JPG, PDF up to 10MB</span>
            </label>
          </div>
          {files.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Attached Files:</h4>
              <div className="space-y-2">
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                    <span className="text-sm text-gray-600">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end">
          <Button type="submit" className="px-6 py-2">
            <Send className="w-4 h-4 mr-2" />
            Submit Ticket
          </Button>
        </div>
      </motion.form>
    </div>
  );
};

export default TicketForm;