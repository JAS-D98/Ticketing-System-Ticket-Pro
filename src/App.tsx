import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import TicketForm from './pages/TicketForm';
import TicketList from './pages/TicketList';
import KnowledgeBase from './pages/KnowledgeBase';
import AdminPanel from './pages/AdminPanel';
import Analytics from './pages/Analytics';
import Login from './pages/Login';
import PublicTicketForm from './pages/PublicTicketForm';
import PricingPage from './pages/PricingPage';
import LandingPage from './pages/LandingPage';
import Chatbot from './components/Chatbot';
// import UserManagement from './pages/UserManagement';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/submit-ticket" element={<><PublicTicketForm /><Chatbot /></>} />
          <Route path="/knowledge-public" element={<><KnowledgeBase public={true} /><Chatbot /></>} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
              <Chatbot />
            </ProtectedRoute>
          } />
          <Route path="/tickets" element={
            <ProtectedRoute>
              <Layout>
                <TicketList />
              </Layout>
              <Chatbot />
            </ProtectedRoute>
          } />
          <Route path="/submit" element={
            <ProtectedRoute>
              <Layout>
                <TicketForm />
              </Layout>
              <Chatbot />
            </ProtectedRoute>
          } />
          <Route path="/knowledge" element={
            <ProtectedRoute>
              <Layout>
                <KnowledgeBase />
              </Layout>
              <Chatbot />
            </ProtectedRoute>
          } />
          <Route path="/analytics" element={
            <ProtectedRoute>
              <Layout>
                <Analytics />
              </Layout>
              <Chatbot />
            </ProtectedRoute>
          } />
          {/* <Route path="/users" element={
            <ProtectedRoute>
              <Layout>
                <UserManagement />
              </Layout>
              <Chatbot />
            </ProtectedRoute>
          } />
          <Route path="/billing" element={
            <ProtectedRoute>
              <Layout>
                <UserManagement />
              </Layout>
              <Chatbot />
            </ProtectedRoute>
          } /> */}
          <Route path="/admin" element={
            <ProtectedRoute requireAdmin={true}>
              <Layout>
                <AdminPanel />
              </Layout>
              <Chatbot />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;