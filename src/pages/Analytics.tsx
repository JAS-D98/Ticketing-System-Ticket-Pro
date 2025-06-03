import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Clock, Users, Calendar, Filter } from 'lucide-react';
import { fadeIn } from '../utils/motion';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('tickets');

  const metrics = {
    tickets: {
      total: 1234,
      change: 12.5,
      data: [45, 52, 38, 67, 89, 76, 95]
    },
    resolution: {
      total: 4.2,
      change: -8.3,
      data: [5.2, 4.8, 4.5, 4.1, 3.9, 4.0, 4.2]
    },
    satisfaction: {
      total: 4.6,
      change: 5.2,
      data: [4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.6]
    },
    agents: {
      total: 12,
      change: 0,
      data: [12, 12, 11, 12, 12, 12, 12]
    }
  };

  const ticketsByCategory = [
    { name: 'Technical Support', value: 45, color: 'bg-blue-500' },
    { name: 'Billing', value: 25, color: 'bg-green-500' },
    { name: 'Feature Request', value: 15, color: 'bg-yellow-500' },
    { name: 'Bug Report', value: 10, color: 'bg-red-500' },
    { name: 'Account Issues', value: 5, color: 'bg-purple-500' }
  ];

  const agentPerformance = [
    { name: 'John Smith', tickets: 89, avgTime: '2.3h', satisfaction: 4.8 },
    { name: 'Sarah Wilson', tickets: 76, avgTime: '3.1h', satisfaction: 4.6 },
    { name: 'Mike Davis', tickets: 65, avgTime: '2.8h', satisfaction: 4.7 },
    { name: 'Lisa Chen', tickets: 54, avgTime: '2.5h', satisfaction: 4.9 }
  ];

  const timeRanges = [
    { value: '7d', label: 'Last 7 days' },
    { value: '30d', label: 'Last 30 days' },
    { value: '90d', label: 'Last 3 months' },
    { value: '1y', label: 'Last year' }
  ];

  return (
    <div className="space-y-6">
      <motion.div {...fadeIn} className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="mt-2 text-gray-600">Track performance and insights</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {timeRanges.map(range => (
              <option key={range.value} value={range.value}>{range.label}</option>
            ))}
          </select>
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { key: 'tickets', label: 'Total Tickets', icon: BarChart3, suffix: '' },
          { key: 'resolution', label: 'Avg Resolution Time', icon: Clock, suffix: 'h' },
          { key: 'satisfaction', label: 'Customer Satisfaction', icon: TrendingUp, suffix: '/5' },
          { key: 'agents', label: 'Active Agents', icon: Users, suffix: '' }
        ].map((metric, index) => {
          const data = metrics[metric.key];
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white p-6 rounded-lg shadow-sm border cursor-pointer transition-all ${
                selectedMetric === metric.key ? 'ring-2 ring-blue-500' : 'hover:shadow-md'
              }`}
              onClick={() => setSelectedMetric(metric.key)}
            >
              <div className="flex items-center justify-between mb-4">
                <Icon className="w-8 h-8 text-blue-600" />
                <span className={`text-sm font-medium ${
                  data.change > 0 ? 'text-green-600' : data.change < 0 ? 'text-red-600' : 'text-gray-500'
                }`}>
                  {data.change > 0 ? '+' : ''}{data.change}%
                </span>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {data.total}{metric.suffix}
                </p>
                <p className="text-sm text-gray-600">{metric.label}</p>
              </div>
              <div className="mt-4">
                <div className="flex items-end space-x-1 h-8">
                  {data.data.map((value, i) => (
                    <div
                      key={i}
                      className="bg-blue-100 rounded-sm flex-1"
                      style={{ height: `${(value / Math.max(...data.data)) * 100}%` }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tickets by Category */}
        <motion.div {...fadeIn} className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tickets by Category</h3>
          <div className="space-y-4">
            {ticketsByCategory.map((category, index) => (
              <div key={category.name} className="flex items-center">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">{category.name}</span>
                    <span className="text-sm text-gray-500">{category.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${category.value}%` }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                      className={`h-2 rounded-full ${category.color}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Agent Performance */}
        <motion.div {...fadeIn} className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Agent Performance</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 text-sm font-medium text-gray-500">Agent</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-500">Tickets</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-500">Avg Time</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-500">Rating</th>
                </tr>
              </thead>
              <tbody>
                {agentPerformance.map((agent, index) => (
                  <motion.tr
                    key={agent.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b last:border-b-0"
                  >
                    <td className="py-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                          <span className="text-xs font-medium text-gray-600">
                            {agent.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{agent.name}</span>
                      </div>
                    </td>
                    <td className="py-3 text-sm text-gray-600">{agent.tickets}</td>
                    <td className="py-3 text-sm text-gray-600">{agent.avgTime}</td>
                    <td className="py-3">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900 mr-1">{agent.satisfaction}</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <div
                              key={star}
                              className={`w-3 h-3 ${
                                star <= Math.floor(agent.satisfaction)
                                  ? 'text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            >
                              ★
                            </div>
                          ))}
                        </div>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* Trend Chart */}
      <motion.div {...fadeIn} className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Trend Analysis</h3>
          <div className="flex space-x-2">
            {['tickets', 'resolution', 'satisfaction'].map(metric => (
              <button
                key={metric}
                onClick={() => setSelectedMetric(metric)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  selectedMetric === metric
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {metric.charAt(0).toUpperCase() + metric.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="h-64 flex items-end justify-between space-x-2">
          {metrics[selectedMetric].data.map((value, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              animate={{ height: `${(value / Math.max(...metrics[selectedMetric].data)) * 100}%` }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-blue-500 rounded-t flex-1 min-h-[4px]"
            />
          ))}
        </div>
        <div className="flex justify-between mt-4 text-xs text-gray-500">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <span key={day}>{day}</span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Analytics;