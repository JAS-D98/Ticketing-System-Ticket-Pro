// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Users, Plus, Edit, Trash2, Eye, Search, Filter, Mail, Shield, UserCheck, UserX, Download } from 'lucide-react';
// import Button from '../components/Button';
// import { fadeIn } from '../utils/motion';

// const UserManagement = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: 'John Smith', email: 'john@company.com', role: 'agent', status: 'active', lastLogin: '2024-01-15', tickets: 45, department: 'Technical' },
//     { id: 2, name: 'Sarah Wilson', email: 'sarah@company.com', role: 'agent', status: 'active', lastLogin: '2024-01-15', tickets: 32, department: 'Billing' },
//     { id: 3, name: 'Mike Davis', email: 'mike@company.com', role: 'admin', status: 'active', lastLogin: '2024-01-14', tickets: 0, department: 'Management' },
//     { id: 4, name: 'Lisa Chen', email: 'lisa@company.com', role: 'agent', status: 'inactive', lastLogin: '2024-01-10', tickets: 28, department: 'Technical' },
//     { id: 5, name: 'David Brown', email: 'david@company.com', role: 'supervisor', status: 'active', lastLogin: '2024-01-15', tickets: 15, department: 'Support' }
//   ]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [roleFilter, setRoleFilter] = useState('all');
//   const [statusFilter, setStatusFilter] = useState('all');
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [newUser, setNewUser] = useState({ name: '', email: '', role: 'agent', department: '', password: '' });

//   const departments = ['Technical', 'Billing', 'Support', 'Management', 'Sales'];
//   const roles = ['agent', 'supervisor', 'admin'];

//   const filteredUsers = users.filter(user => {
//     const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          user.email.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesRole = roleFilter === 'all' || user.role === roleFilter;
//     const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
//     return matchesSearch && matchesRole && matchesStatus;
//   });

//   const handleAddUser = () => {
//     const id = Math.max(...users.map(u => u.id)) + 1;
//     setUsers([...users, {
//       ...newUser,
//       id,
//       status: 'active',
//       lastLogin: 'Never',
//       tickets: 0
//     }]);
//     setNewUser({ name: '', email: '', role: 'agent', department: '', password: '' });
//     setShowAddModal(false);
//   };

//   const handleEditUser = () => {
//     setUsers(users.map(user => 
//       user.id === selectedUser.id ? selectedUser : user
//     ));
//     setShowEditModal(false);
//     setSelectedUser(null);
//   };

//   const handleDeleteUser = (userId) => {
//     setUsers(users.filter(user => user.id !== userId));
//   };

//   const handleToggleStatus = (userId) => {
//     setUsers(users.map(user => 
//       user.id === userId 
//         ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' }
//         : user
//     ));
//   };

//   const handleSelectUser = (userId) => {
//     setSelectedUsers(prev => 
//       prev.includes(userId)
//         ? prev.filter(id => id !== userId)
//         : [...prev, userId]
//     );
//   };

//   const handleSelectAll = () => {
//     setSelectedUsers(
//       selectedUsers.length === filteredUsers.length
//         ? []
//         : filteredUsers.map(user => user.id)
//     );
//   };

//   const getRoleColor = (role) => {
//     switch (role) {
//       case 'admin': return 'bg-purple-100 text-purple-800';
//       case 'supervisor': return 'bg-blue-100 text-blue-800';
//       case 'agent': return 'bg-green-100 text-green-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const getStatusColor = (status) => {
//     return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
//   };

//   return (
//     <div className="space-y-6">
//       <motion.div {...fadeIn} className="flex justify-between items-center">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
//           <p className="mt-2 text-gray-600">Manage team members and their permissions</p>
//         </div>
//         <div className="flex space-x-3">
//           <Button variant="outline">
//             <Download className="w-4 h-4 mr-2" />
//             Export
//           </Button>
//           <Button onClick={() => setShowAddModal(true)}>
//             <Plus className="w-4 h-4 mr-2" />
//             Add User
//           </Button>
//         </div>
//       </motion.div>

//       {/* Stats Cards */}
//       <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         {[
//           { label: 'Total Users', value: users.length, color: 'text-blue-600', icon: Users },
//           { label: 'Active Users', value: users.filter(u => u.status === 'active').length, color: 'text-green-600', icon: UserCheck },
//           { label: 'Inactive Users', value: users.filter(u => u.status === 'inactive').length, color: 'text-red-600', icon: UserX },
//           { label: 'Admins', value: users.filter(u => u.role === 'admin').length, color: 'text-purple-600', icon: Shield }
//         ].map((stat, index) => {
//           const Icon = stat.icon;
//           return (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
//               <div className="flex items-center">
//                 <div className={`p-3 rounded-lg ${stat.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
//                   <Icon className={`w-6 h-6 ${stat.color}`} />
//                 </div>
//                 <div className="ml-4">
//                   <p className="text-sm font-medium text-gray-600">{stat.label}</p>
//                   <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </motion.div>

//       {/* Filters */}
//       <motion.div {...fadeIn} className="bg-white rounded-lg shadow-sm border p-6">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//             <input
//               type="text"
//               placeholder="Search users..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//           <select
//             value={roleFilter}
//             onChange={(e) => setRoleFilter(e.target.value)}
//             className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           >
//             <option value="all">All Roles</option>
//             {roles.map(role => (
//               <option key={role} value={role}>{role.charAt(0).toUpperCase() + role.slice(1)}</option>
//             ))}
//           </select>
//           <select
//             value={statusFilter}
//             onChange={(e) => setStatusFilter(e.target.value)}
//             className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           >
//             <option value="all">All Status</option>
//             <option value="active">Active</option>
//             <option value="inactive">Inactive</option>
//           </select>
//           {selectedUsers.length > 0 && (
//             <Button variant="outline">
//               <Mail className="w-4 h-4 mr-2" />
//               Email Selected ({selectedUsers.length})
//             </Button>
//           )}
//         </div>
//       </motion.div>

//       {/* Users Table */}
//       <motion.div {...fadeIn} className="bg-white rounded-lg shadow-sm border overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left">
//                   <input
//                     type="checkbox"
//                     checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
//                     onChange={handleSelectAll}
//                     className="rounded"
//                   />
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tickets</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {filteredUsers.map((user) => (
//                 <tr key={user.id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4">
//                     <input
//                       type="checkbox"
//                       checked={selectedUsers.includes(user.id)}
//                       onChange={() => handleSelectUser(user.id)}
//                       className="rounded"
//                     />
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="flex items-center">
//                       <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
//                         <span className="text-sm font-bold text-white">
//                           {user.name.split(' ').map(n => n[0]).join('')}
//                         </span>
//                       </div>
//                       <div>
//                         <div className="text-sm font-medium text-gray-900">{user.name}</div>
//                         <div className="text-sm text-gray-500">{user.email}</div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4">
//                     <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(user.role)}`}>
//                       {user.role}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-900">{user.department}</td>
//                   <td className="px-6 py-4">
//                     <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(user.status)}`}>
//                       {user.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-900">{user.tickets}</td>
//                   <td className="px-6 py-4 text-sm text-gray-500">{user.lastLogin}</td>
//                   <td className="px-6 py-4">
//                     <div className="flex space-x-2">
//                       <button className="text-blue-600 hover:text-blue-900">
//                         <Eye className="w-4 h-4" />
//                       </button>
//                       <button 
//                         onClick={() => { setSelectedUser(user); setShowEditModal(true); }}
//                         className="text-green-600 hover:text-green-900"
//                       >
//                         <Edit className="w-4 h-4" />
//                       </button>
//                       <button 
//                         onClick={() => handleToggleStatus(user.id)}
//                         className={user.status === 'active' ? 'text-red-600 hover:text-red-900' : 'text-green-600 hover:text-green-900'}
//                       >
//                         {user.status === 'active' ? <UserX className="w-4 h-4" /> : <UserCheck className="w-4 h-4" />}
//                       </button>
//                       <button 
//                         onClick={() => handleDeleteUser(user.id)}
//                         className="text-red-600 hover:text-red-900"
//                       >
//                         <Trash2 className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </motion.div>

//       {/* Add User Modal */}
//       {showAddModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
//           >
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New User</h3>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//                 <input
//                   type="text"
//                   value={newUser.name}
//                   onChange={(e) => setNewUser({...newUser, name: e.target.value})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                 <input
//                   type="email"
//                   value={newUser.email}
//                   onChange={(e) => setNewUser({...newUser, email: e.target.value})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
//                 <select
//                   value={newUser.role}
//                   onChange={(e) => setNewUser({...newUser, role: e.target.value})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   {roles.map(role => (
//                     <option key={role} value={role}>{role.charAt(0).toUpperCase() + role.slice(1)}</option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
//                 <select
//                   value={newUser.department}
//                   onChange={(e) => setNewUser({...newUser, department: e.target.value})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   <option value="">Select Department</option>
//                   {departments.map(dept => (
//                     <option key={dept} value={dept}>{dept}</option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//                 <input
//                   type="password"
//                   value={newUser.password}
//                   onChange={(e) => setNewUser({...newUser, password: e.target.value})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end space-x-3 mt-6">
//               <Button variant="outline" onClick={() => setShowAddModal(false)}>Cancel</Button>
//               <Button onClick={handleAddUser}>Add User</Button>
//             </div>
//           </motion.div>
//         </div>
//       )}

//       {/* Edit User Modal */}
//       {showEditModal && selectedUser && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
//           >
//             <h3 className="text-lg font-semibold text-gray-900 mb-4">Edit User</h3>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//                 <input
//                   type="text"
//                   value={selectedUser.name}
//                   onChange={(e) => setSelectedUser({...selectedUser, name: e.target.value})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                 <input
//                   type="email"
//                   value={selectedUser.email}
//                   onChange={(e) => setSelectedUser({...selectedUser, email: e.target.value})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
//                 <select
//                   value={selectedUser.role}
//                   onChange={(e) => setSelectedUser({...selectedUser, role: e.target.value})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   {roles.map(role => (
//                     <option key={role} value={role}>{role.charAt(0).toUpperCase() + role.slice(1)}</option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
//                 <select
//                   value={selectedUser.department}
//                   onChange={(e) => setSelectedUser({...selectedUser, department: e.target.value})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   {departments.map(dept => (
//                     <option key={dept} value={dept}>{dept}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//             <div className="flex justify-end space-x-3 mt-6">
//               <Button variant="outline" onClick={() => setShowEditModal(false)}>Cancel</Button>
//               <Button onClick={handleEditUser}>Save Changes</Button>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserManagement;