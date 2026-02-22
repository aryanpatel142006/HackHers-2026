import { Link } from "react-router";
import { motion } from "motion/react";
import { LayoutGrid, Megaphone, Video, Eye, Edit, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export function Campaigns() {
  const activeCampaigns = [
    {
      id: 1,
      title: "Glow: Clean Beauty for All",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      raised: 84240,
      goal: 120000,
      percentage: 70,
      daysRemaining: 14,
      status: "ACTIVE",
    },
    {
      id: 2,
      title: "Empower Tech Hub Expansion",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      raised: 12500,
      goal: 50000,
      percentage: 25,
      daysRemaining: 23,
      status: "ACTIVE",
    },
  ];

  const pastCampaigns = [
    {
      id: 3,
      title: "Glow Beta Prototype Fund",
      finalTotal: 45000,
      status: "ENDED",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
    {
      id: 4,
      title: "Sustainable Packaging Initiative",
      finalTotal: 28920,
      status: "ENDED",
      image: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
    {
      id: 5,
      title: "Women Founders Mixer 2023",
      finalTotal: 12400,
      status: "ARCHIVED",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="flex">
        <aside className="hidden md:block w-64 bg-white border-r border-gray-200 min-h-screen sticky top-0">
          <div className="p-6">
            <nav className="space-y-2">
              <Link
                to="/dashboard"
                className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                <LayoutGrid className="w-5 h-5" />
                Dashboard
              </Link>
              <Link
                to="/campaigns"
                className="flex items-center gap-3 px-4 py-3 bg-pink-50 text-pink-600 rounded-lg font-medium"
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
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Campaigns</h1>
                <p className="text-gray-600">Manage and track your funding initiatives.</p>
              </div>
              <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 rounded-lg px-6">
                Start New Campaign
              </Button>
            </div>

            {/* Active Campaigns */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Active Campaigns</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-lg">
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-lg">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeCampaigns.map((campaign, index) => (
                  <motion.div
                    key={campaign.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all bg-white border border-gray-200">
                      {/* Campaign Image */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={campaign.image}
                          alt={campaign.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-green-500 text-white hover:bg-green-500">
                            ● {campaign.status}
                          </Badge>
                        </div>
                      </div>

                      {/* Campaign Details */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{campaign.title}</h3>
                        <p className="text-sm text-gray-500 mb-4">
                          {campaign.daysRemaining} days remaining
                        </p>

                        {/* Progress */}
                        <div className="mb-4">
                          <div className="flex justify-between items-baseline mb-2">
                            <span className="text-2xl font-bold text-gray-900">
                              ${campaign.raised.toLocaleString()}
                            </span>
                            <span className="text-sm text-gray-500">
                              raised of ${campaign.goal.toLocaleString()}
                            </span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${campaign.percentage}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"
                            />
                          </div>
                          <p className="text-right text-sm font-semibold text-gray-700 mt-1">
                            {campaign.percentage}%
                          </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <Button
                            variant="outline"
                            className="flex-1 rounded-lg"
                            size="sm"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                          <Button
                            variant="outline"
                            className="flex-1 rounded-lg"
                            size="sm"
                          >
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </Button>
                          <Button
                            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 rounded-lg"
                            size="sm"
                          >
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Past Campaigns */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Past Campaigns</h2>
                <Button variant="link" className="text-gray-600">
                  Sort by: Newest
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pastCampaigns.map((campaign, index) => (
                  <motion.div
                    key={campaign.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all bg-white border border-gray-200">
                      {/* Campaign Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={campaign.image}
                          alt={campaign.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge
                            className={`${
                              campaign.status === "ENDED"
                                ? "bg-gray-600"
                                : "bg-gray-400"
                            } text-white hover:bg-gray-600`}
                          >
                            {campaign.status}
                          </Badge>
                        </div>
                      </div>

                      {/* Campaign Details */}
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">
                          {campaign.title}
                        </h3>

                        <div className="mb-4">
                          <p className="text-sm text-gray-600 mb-1">Final Total</p>
                          <p className="text-2xl font-bold text-gray-900">
                            ${campaign.finalTotal.toLocaleString()}
                          </p>
                        </div>

                        {/* Action Button */}
                        <Button variant="outline" className="w-full rounded-lg" size="sm">
                          View Details
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
