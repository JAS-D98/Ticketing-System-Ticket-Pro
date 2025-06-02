import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, UserCheck, Clock } from 'lucide-react';
import Button from './Button';

type Ticket = {
  id: string | number;
  subject: string;
  assignee?: string;
};

type TicketAssignmentProps = {
  ticket: Ticket;
  onAssign: (ticketId: string | number, agentName: string) => void;
  onClose: () => void;
};

const TicketAssignment: React.FC<TicketAssignmentProps> = ({ ticket, onAssign, onClose }) => {
  const [selectedAgent, setSelectedAgent] = useState(ticket.assignee || '');
  const [loading, setLoading] = useState(false);

  const agents = [
    { id: 1, name: 'John Smith', email: 'john@ticketpro.com', status: 'available', tickets: 5 },
    { id: 2, name: 'Sarah Wilson', email: 'sarah@ticketpro.com', status: 'busy', tickets: 8 },
    { id: 3, name: 'Mike Davis', email: 'mike@ticketpro.com', status: 'available', tickets: 3 },
    { id: 4, name: 'Lisa Chen', email: 'lisa@ticketpro.com', status: 'away', tickets: 6 }
  ];

  const handleAssign = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    onAssign(ticket.id, selectedAgent);
    setLoading(false);
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
      >
        <div className="flex items-center mb-4">
          <Users className="w-6 h-6 text-blue-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900">Assign Ticket</h3>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">Ticket: <span className="font-medium">{ticket.id}</span></p>
          <p className="text-sm text-gray-900">{ticket.subject}</p>
        </div>

        <div className="space-y-3 mb-6">
          <label className="block text-sm font-medium text-gray-700">Select Agent</label>
          {agents.map((agent) => (
            <div
              key={agent.id}
              className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                selectedAgent === agent.name
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedAgent(agent.name)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-700">
                        {agent.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{agent.name}</p>
                    <p className="text-xs text-gray-500">{agent.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 text-gray-400 mr-1" />
                    <span className="text-xs text-gray-500">{agent.tickets} tickets</span>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${
                    agent.status === 'available' ? 'bg-green-400' :
                    agent.status === 'busy' ? 'bg-yellow-400' : 'bg-gray-400'
                  }`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end space-x-3">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button
            onClick={handleAssign}
            disabled={!selectedAgent || loading}
          >
            {loading ? 'Assigning...' : 'Assign Ticket'}
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TicketAssignment;