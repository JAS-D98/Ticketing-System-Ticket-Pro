import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <motion.div {...fadeIn} className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">TicketPro</h1>
          <p className="text-gray-600">Professional Support Ticketing System</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg border p-8">
          {children}
        </div>
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>&copy; 2024 TicketPro. All rights reserved.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthLayout;