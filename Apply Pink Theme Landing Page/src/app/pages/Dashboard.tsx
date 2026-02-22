import { Link } from "react-router";
import { motion } from "motion/react";
import { DollarSign, Users, TrendingUp, Calendar, LayoutGrid, Megaphone, Video, MoreVertical } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export function Dashboard() {
  const stats = [
    {
      icon: DollarSign,
      label: "Total Raised",
      value: "$84,240.50",
      change: "+12%",
      changeType: "positive",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: Users,
      label: "Total Supporters",
      value: "1,482",
      change: "+24 today",
      changeType: "positive",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: TrendingUp,
      label: "Growth Rate",
      value: "18.4%",
      change: "Aug - Sep",
      changeType: "neutral",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: Calendar,
      label: "Days Left",
      value: "14 Days",
      change: "EXPIRING",
      changeType: "warning",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  const recentContributions = [
    {
      id: 1,
      name: "Sarah Miller",
      email: "sarah@example.com",
      amount: 250.0,
      status: "COMPLETED",
      initials: "SM",
      color: "bg-purple-500",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane@example.com",
      amount: 75.0,
      status: "COMPLETED",
      initials: "JD",
      color: "bg-pink-500",
    },
    {
      id: 3,
      name: "Emily Chen",
      email: "emily@example.com",
      amount: 150.0,
      status: "COMPLETED",
      initials: "EC",
      color: "bg-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="flex">
        <aside className="hidden md:block w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6 sticky top-20">{/* sticky applied to inner div with top-20 to account for header */}
            <nav className="space-y-2">
              <Link
                to="/dashboard"
                className="flex items-center gap-3 px-4 py-3 bg-pink-50 text-pink-600 rounded-lg font-medium"
              >
                <LayoutGrid className="w-5 h-5" />
                Dashboard
              </Link>
              <Link
                to="/campaigns"
                className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                <Megaphone className="w-5 h-5" />
                Campaigns
              </Link>
              <Link
                to="/demo-hub"
                className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                <Video className="w-5 h-5" />
                Demo Hub
              </Link>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Founder Dashboard</h1>
                <p className="text-gray-600">
                  Welcome back, Maya. Your campaign is trending upwards.
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="rounded-lg">
                  Share Campaign
                </Button>
                <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 rounded-lg">
                  Event Mode
                </Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                        <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                      </div>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded ${
                          stat.changeType === "positive"
                            ? "text-green-700 bg-green-100"
                            : stat.changeType === "warning"
                            ? "text-orange-700 bg-orange-100"
                            : "text-gray-600 bg-gray-100"
                        }`}
                      >
                        {stat.change}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Funding Velocity Chart */}
              <Card className="lg:col-span-2 p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">Funding Velocity</h2>
                    <p className="text-sm text-gray-600">Track your fundraising momentum</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Last 30 Days
                  </Badge>
                </div>

                {/* Simple Bar Chart */}
                <div className="flex items-end justify-between h-64 gap-2">
                  {[20, 25, 18, 30, 22, 28, 35, 25, 40, 38, 42, 50, 45, 55, 62, 58, 68, 75, 70, 85, 92].map(
                    (height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: index * 0.05, duration: 0.5 }}
                        className={`flex-1 rounded-t-lg ${
                          index >= 18
                            ? "bg-gradient-to-t from-orange-500 to-pink-500"
                            : index >= 15
                            ? "bg-pink-300"
                            : "bg-gray-200"
                        }`}
                      />
                    )
                  )}
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-4">
                  <span>OCT 01</span>
                  <span>OCT 10</span>
                  <span>OCT 20</span>
                  <span>OCT 30</span>
                </div>
              </Card>

              {/* Live Event Mode Card */}
              <Card className="p-6 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl shadow-lg text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-sm font-semibold">LIVE EVENT MODE</span>
                  </div>

                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4">
                    <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <div className="w-16 h-16 bg-orange-200 rounded-lg" />
                    </div>
                    <p className="text-center text-sm">SCAN TO GIVE</p>
                  </div>

                  <div className="text-center mb-2">
                    <p className="text-sm mb-1">Event Raised</p>
                    <p className="text-4xl font-bold">$4,850.00</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs opacity-90">FUNDING: 35% THIS EVENING</p>
                  </div>
                </div>

                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              </Card>
            </div>

            {/* Recent Contributions & Goal Progress */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
              {/* Recent Contributions */}
              <Card className="lg:col-span-2 p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Recent Contributions</h2>
                  <Button variant="link" className="text-orange-500 font-semibold">
                    View All
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4 text-xs font-semibold text-gray-500 uppercase pb-2 border-b">
                    <div>Supporter</div>
                    <div>Status</div>
                    <div>Amount</div>
                    <div>Action</div>
                  </div>

                  {recentContributions.map((contribution) => (
                    <div
                      key={contribution.id}
                      className="grid grid-cols-4 gap-4 items-center py-3 hover:bg-gray-50 rounded-lg px-2 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 ${contribution.color} rounded-full flex items-center justify-center text-white font-semibold text-sm`}
                        >
                          {contribution.initials}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{contribution.name}</p>
                          <p className="text-xs text-gray-500">{contribution.email}</p>
                        </div>
                      </div>
                      <div>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                          {contribution.status}
                        </Badge>
                      </div>
                      <div className="font-bold text-gray-900">${contribution.amount.toFixed(2)}</div>
                      <div>
                        <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                          <MoreVertical className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Goal Progress */}
              <Card className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
                <h2 className="text-lg font-bold text-gray-900 mb-6">Goal Progress</h2>

                <div className="mb-8">
                  <div className="flex justify-between items-baseline mb-3">
                    <span className="text-3xl font-bold text-gray-900">$84,200</span>
                    <span className="text-sm text-gray-500">of $120k</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "70%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=100"
                      alt="Maya Jenkins"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-900">Maya Jenkins</p>
                      <p className="text-xs text-gray-600">Founder @ Glow</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">AI Insights</h3>
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5" />
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold">Peak Giving Window:</span> Tuesday-Thursday,
                          5pm-8pm EST
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5" />
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold">Recommendation:</span> Share story post to
                          boost reach by 15%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}