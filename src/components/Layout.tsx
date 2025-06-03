import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Ticket, MessageSquare, BookOpen, Settings, Home, BarChart3, LogOut, Bell, Search, User, Shield, Zap, Users, CreditCard } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const location = useLocation();
  const { user, logout, isAdmin } = useAuth();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home, badge: null },
    { name: 'Tickets', href: '/tickets', icon: Ticket, badge: '12' },
    { name: 'Submit Ticket', href: '/submit', icon: MessageSquare, badge: null },
    { name: 'Knowledge Base', href: '/knowledge', icon: BookOpen, badge: null },
    { name: 'Analytics', href: '/analytics', icon: BarChart3, badge: null },
    ...(isAdmin ? [
      { name: 'Admin Panel', href: '/admin', icon: Settings, badge: null },
      { name: 'User Management', href: '/admin/users', icon: Users, badge: null },
      { name: 'Billing', href: '/admin/billing', icon: CreditCard, badge: null }
    ] : [])
  ];

  const notifications = [
    { id: 1, title: 'New ticket assigned', message: 'T-001 has been assigned to you', time: '2 min ago', unread: true },
    { id: 2, title: 'Ticket resolved', message: 'T-002 has been marked as resolved', time: '1 hour ago', unread: true },
    { id: 3, title: 'System maintenance', message: 'Scheduled maintenance tonight at 2 AM', time: '3 hours ago', unread: false }
  ];

  const handleLogout = () => {
    logout();
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        className="fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl lg:hidden border-r border-gray-200"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">TicketPro</h1>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${
                  location.pathname === item.href
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 shadow-sm'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <div className="flex items-center">
                  <Icon className="w-5 h-5 mr-3" />
                  <span className="font-medium">{item.name}</span>
                </div>
                {item.badge && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">{item.badge}</span>
                )}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center p-3 bg-gray-50 rounded-xl mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold text-white">
                {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
              </span>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
              <div className="flex items-center">
                <Shield className="w-3 h-3 text-blue-500 mr-1" />
                <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
              </div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors"
          >
            <LogOut className="w-4 h-4 mr-3" />
            Sign Out
          </button>
        </div>
      </motion.div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200 shadow-sm">
          <div className="flex items-center px-6 py-6 border-b border-gray-200">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">TicketPro</h1>
          </div>
          <nav className="flex-1 p-4 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${
                    location.pathname === item.href
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 shadow-sm'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center">
                    <Icon className="w-5 h-5 mr-3" />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  {item.badge && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">{item.badge}</span>
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center p-3 bg-gray-50 rounded-xl mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-white">
                  {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
                </span>
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
                <div className="flex items-center">
                  <Shield className="w-3 h-3 text-blue-500 mr-1" />
                  <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
                </div>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-3 text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors"
            >
              <LogOut className="w-4 h-4 mr-3" />
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-72">
        {/* Top header */}
        <div className="sticky top-0 z-40 flex h-16 bg-white border-b border-gray-200 shadow-sm">
          <button
            onClick={() => setSidebarOpen(true)}
            className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex-1 flex items-center justify-between px-4 lg:px-8">
            <div className="flex-1 flex items-center">
              <div className="max-w-lg w-full lg:max-w-xs">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search tickets, users, articles..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  className="p-2 text-gray-400 hover:text-gray-500 relative"
                >
                  <Bell className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
                
                {notificationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                  >
                    <div className="p-4 border-b border-gray-200">
                      <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div key={notification.id} className={`p-4 border-b border-gray-100 hover:bg-gray-50 ${
                          notification.unread ? 'bg-blue-50' : ''
                        }`}>
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                              <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                            </div>
                            {notification.unread && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 mt-2"></div>
                            )}
                          </div>
                          <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-white">
                    {user?.name?.split(' ').map(n => n[0]).join('') || 'U'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <main className="p-4 lg:p-8">{children}</main>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-25 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {notificationsOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setNotificationsOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout;