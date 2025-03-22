import { 
    Search, UserPlus, ShieldAlert, Banknote, Activity, Database, Settings, 
    LineChart, User, Home, Plus, Bell, DollarSign 
  } from "lucide-react";
  import { useState } from "react";
  import { NeonIcon } from "./IconEnhancer";
  
  export default function AdminDashboard() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  
    // Mock data - replace with real API calls in a production system.
    const stats = [
      { title: "Total Users", value: "2,845", icon: UserPlus, change: "+12.3%" },
      { title: "Active Accounts", value: "15,492", icon: Banknote, change: "+4.1%" },
      { title: "Transactions (24h)", value: "$452M", icon: LineChart, change: "-2.8%" },
      { title: "Fraud Alerts", value: "23", icon: ShieldAlert, change: "+18.4%" },
    ];
  
    const users = [
      { id: 1, name: "Emmanuel Basikolo", email: "emmanuel@bank.mw", role: "Admin", status: "Active", lastLogin: "12h ago" },
      { id: 2, name: "Peter Banda", email: "peterbanda@gmail.com", role: "User", status: "Active", lastLogin: "1h ago" },
      { id: 3, name: "Aron Phiri", email: "aron23p@gmail.com", role: "User", status: "Blocked", lastLogin: "4 years ago" },
      { id: 4, name: "Joseph Moyo", email: "jmoyo@unima.ac.mw", role: "Manager", status: "Active", lastLogin: "1 minute ago" },
      { id: 5, name: "Jack Khonje", email: "jk@bank.mw", role: "CEO", status: "Active", lastLogin: "5 minutes ago" },
    ];
  
    const accounts = [
      { id: 1, number: "100023456", type: "Savings", balance: "K250,000", owner: "Emmanuel B.", status: "Active" },
      // Additional accounts can be added here
    ];
  
    const notifications = [
      { id: 1, message: "New loan application received", time: "5 minutes ago" },
      { id: 2, message: "System maintenance scheduled", time: "1 hour ago" },
      { id: 3, message: "Suspicious transaction flagged", time: "2 hours ago" },
    ];
  
    const loans = [
      { id: 1, applicant: "Sarah Johnson", amount: "K500,000", status: "Pending", submitted: "2 days ago" },
      { id: 2, applicant: "Mark Peterson", amount: "K1,200,000", status: "Approved", submitted: "1 day ago" },
    ];
  
    return (
      <div className="min-h-screen p-8 text-[var(--color-primary)] bg-[var(--color-bg-primary)]">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Database className="text-[var(--color-secondary)]" />
            Banking Admin Portal
          </h1>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-secondary)]/90">
              <Bell className="w-6 h-6" />
            </button>
            <NeonIcon icon={Home} color="var(--color-primary)" size={40} />
          </div>
        </header>
  
        {/* Quick Stats */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-[var(--color-neutral)] p-6 rounded-xl shadow-lg hover:shadow-2xl cursor-pointer transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-[var(--color-primary)]/70">{stat.title}</p>
                  <p className="text-2xl font-bold my-2">{stat.value}</p>
                  <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.change}
                  </span>
                </div>
                <NeonIcon icon={stat.icon} size={40} color="var(--color-primary)" />
              </div>
            </div>
          ))}
        </section>
  
        {/* Main Content Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Management */}
          <div className="lg:col-span-2 bg-[var(--color-neutral)] p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">User Management</h2>
              <div className="flex gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-[var(--color-primary)]/50 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="pl-10 pr-4 py-2 bg-[var(--color-primary)] text-[var(--color-neutral)] rounded-lg focus:outline-none"
                  />
                </div>
                <button className="flex items-center gap-1 bg-[var(--color-primary)]/60 text-[var(--color-neutral)] px-4 py-2 rounded-lg hover:bg-[var(--color-primary)] transition cursor-pointer">
                  <Plus className="w-4 h-4" />
                  New User
                </button>
              </div>
            </div>
  
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm border-b border-[var(--color-border)]">
                    <th className="pb-3">User</th>
                    <th className="pb-3">Role</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Last Login</th>
                    <th className="pb-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr 
                      key={user.id} 
                      className="border-b border-[var(--color-border)] hover:bg-[var(--color-bg-secondary)] transition"
                    >
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-[var(--color-bg-secondary)] p-2 rounded-full">
                            <User className="w-5 h-5 text-[var(--color-secondary)]" />
                          </div>
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-[var(--color-primary)]/70">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td>{user.role}</td>
                      <td>
                        <span className={`px-2 py-1 rounded-full text-sm ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {user.status}
                        </span>
                      </td>
                      <td>{user.lastLogin}</td>
                      <td>
                        <div className="flex gap-4">
                          <button className="text-[var(--color-primary)] hover:text-[var(--color-primary)]/80 transition cursor-pointer">
                            Add Account
                          </button>
                          <button className="text-red-400 hover:text-red-500 transition cursor-pointer">
                            Block
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
  
          {/* Fraud Detection & Loan Management */}
          <div className="space-y-6">
            <div className="bg-[var(--color-neutral)] p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold mb-6">Fraud Detection</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-[var(--color-bg-secondary)]">
                  <div>
                    <p className="font-medium">Suspicious Transaction</p>
                    <p className="text-sm">Account #100023456</p>
                  </div>
                  <span className="text-[var(--color-secondary)] text-sm">High Risk</span>
                </div>
                {/* Add more fraud alerts as needed */}
              </div>
            </div>
  
            <div className="bg-[var(--color-neutral)] p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold mb-6">Loan Management</h2>
              <div className="space-y-4">
                {loans.map((loan) => (
                  <div key={loan.id} className="flex items-center justify-between p-3 rounded-lg bg-[var(--color-bg-secondary)]">
                    <div>
                      <p className="font-medium">{loan.applicant}</p>
                      <p className="text-sm">Amount: {loan.amount}</p>
                    </div>
                    <span className={`text-sm ${loan.status === "Approved" ? 'text-green-500' : 'text-yellow-500'}`}>
                      {loan.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
  
        {/* Accounts Management */}
        <section className="mt-8 bg-[var(--color-neutral)] p-6 rounded-xl shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Account Management</h2>
            <div className="flex gap-4">
              <select className="bg-[var(--color-bg-secondary)] px-4 py-2 rounded-lg focus:outline-none">
                <option>All Accounts</option>
                <option>Active</option>
                <option>Dormant</option>
                <option>Frozen</option>
              </select>
              <button className="bg-[var(--color-primary)] text-[var(--color-neutral)] px-4 py-2 rounded-lg hover:bg-[var(--color-primary)]/80 transition">
                Create Account
              </button>
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {accounts.map((account) => (
              <div key={account.id} className="bg-[var(--color-bg-secondary)] p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-medium">{account.number}</p>
                    <p className="text-sm text-[var(--color-primary)]/70">{account.type}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${account.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {account.status}
                  </span>
                </div>
                <p className="text-2xl font-bold mb-4">{account.balance}</p>
                <div className="flex gap-2">
                  <button className="text-sm text-[var(--color-secondary)] hover:text-[var(--color-secondary)]/80 transition">
                    Freeze
                  </button>
                  <button className="text-sm text-[var(--color-primary)] hover:text-[var(--color-primary)]/70 transition">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        {/* System Health & Recent Activity */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* System Health */}
          <div className="bg-[var(--color-neutral)] p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">System Health</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-[var(--color-bg-secondary)] rounded-lg">
                <span>API Response Time</span>
                <span className="text-green-500">98ms</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[var(--color-bg-secondary)] rounded-lg">
                <span>Database Status</span>
                <span className="text-green-500">Online</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[var(--color-bg-secondary)] rounded-lg">
                <span>Last Backup</span>
                <span className="text-[var(--color-primary)]/70">2h ago</span>
              </div>
            </div>
          </div>
  
          {/* Recent Activity */}
          <div className="md:col-span-2 bg-[var(--color-neutral)] p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-4 p-3 bg-[var(--color-bg-secondary)] rounded-lg"
                >
                  <div className="bg-[var(--color-secondary)] p-2 rounded-full">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">User permissions updated</p>
                    <p className="text-sm text-[var(--color-primary)]/70">Admin • 30 minutes ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* User Modal Example */}
        {isUserModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-[var(--color-neutral)] p-8 rounded-xl w-full max-w-2xl">
              <h3 className="text-xl font-bold mb-6">User Details</h3>
              {/* Add user edit form here */}
              <div className="flex justify-end gap-4">
                <button className="px-4 py-2 border rounded-lg">Cancel</button>
                <button className="px-4 py-2 bg-[var(--color-secondary)] text-white rounded-lg">Save</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  