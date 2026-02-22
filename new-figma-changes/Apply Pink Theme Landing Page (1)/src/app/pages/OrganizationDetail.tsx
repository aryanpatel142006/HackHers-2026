import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { Heart, Share2, ChevronLeft } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export function OrganizationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock organization data
  const organization = {
    id: id || "lumiere-beauty",
    name: "Lumiere Beauty Collective",
    category: "Beauty",
    description: "Creating sustainable, inclusive skincare routines powered by ethically sourced botanicals.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    raised: 3250,
    goal: 5000,
    percentage: 65,
    supporters: 84,
    mission: '"To redefine the standard of clean beauty by providing luxury skincare that is ethically sourced, sustainable, and inclusive for every woman\'s journey."',
    products: [
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    ],
    journey: `Growing up in a household of strong women over the first line of defense, I learned not just the power of botanicals. Lumiere Beauty Collective was born from a realization that the beauty market offers overpriced content or color-blind aesthetics but rarely environmental ethics.

After spending a decade in the chemical industry, I knew there was a better way—a way to marry scientific precision with the raw, potent power of nature. This fundraiser will allow us to scale our production and market our first line of color-blind sustainable serums globally.`,
    recentSupporters: [
      {
        id: 1,
        name: "Sarah Jenkins",
        date: "2 days ago",
        amount: 25,
        message: "Love what you're doing for sustainability in the beauty space. Can't wait to see the new collection!",
      },
      {
        id: 2,
        name: "Elena Rodriguez",
        date: "5 days ago",
        amount: 50,
        message: "Incredible mission. The industry needs more founders like you. Keep rising! 🌟",
      },
      {
        id: 3,
        name: "Anonymous",
        date: "1 week ago",
        amount: 100,
        message: "Supporting female-led innovation! 💜",
      },
    ],
  };

  const handleDonateClick = () => {
    navigate(`/donate/${organization.id}/amount`);
  };

  return (
    <div className="min-h-screen bg-[#F8F8F5]">
      {/* Back Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/funding-hub"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium">Back to Organizations</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100">
                {organization.category}
              </Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {organization.name}
              </h1>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="overflow-hidden rounded-3xl shadow-lg">
                <div className="relative h-96 bg-gradient-to-br from-orange-100 to-pink-100">
                  <img
                    src={organization.image}
                    alt={organization.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </motion.div>

            {/* Our Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 bg-white rounded-2xl shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  {organization.mission}
                </p>
              </Card>
            </motion.div>

            {/* Our Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-8 bg-white rounded-2xl shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Products</h2>
                <div className="grid grid-cols-3 gap-4">
                  {organization.products.map((product, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-orange-50 to-pink-50"
                    >
                      <img
                        src={product}
                        alt={`Product ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* The Founder's Journey */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-8 bg-white rounded-2xl shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Founder's Journey</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {organization.journey}
                </p>
              </Card>
            </motion.div>

            {/* Recent Supporters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="p-8 bg-white rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Recent Supporters</h2>
                  <span className="text-sm text-gray-600">{organization.supporters}+</span>
                </div>

                <div className="space-y-4">
                  {organization.recentSupporters.map((supporter) => (
                    <div
                      key={supporter.id}
                      className="flex gap-4 pb-4 border-b border-gray-100 last:border-0"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {supporter.name[0]}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-gray-900">{supporter.name}</span>
                          <span className="text-sm text-gray-500">{supporter.date}</span>
                        </div>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100 mb-2">
                          ${supporter.amount} DONATION
                        </Badge>
                        <p className="text-sm text-gray-600 italic">"{supporter.message}"</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <button className="text-orange-500 font-semibold hover:underline">
                    View all supporters →
                  </button>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar - Donation Card */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="sticky top-24"
            >
              <Card className="p-6 bg-white rounded-2xl shadow-xl border-2 border-gray-200">
                {/* Progress */}
                <div className="mb-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-3xl font-bold text-gray-900">
                      ${organization.raised.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-600">
                      raised of ${organization.goal.toLocaleString()} goal
                    </span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${organization.percentage}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-orange-500 to-red-400 rounded-full"
                    />
                  </div>
                  <p className="text-sm font-semibold text-orange-600">
                    {organization.percentage}% Reached
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {organization.supporters} supporters
                  </p>
                </div>

                {/* Donation Amounts */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 uppercase mb-3">
                    Choose an Amount
                  </h3>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {[10, 25, 50].map((amount) => (
                      <button
                        key={amount}
                        className="py-3 px-4 border-2 border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors font-bold text-gray-900"
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[100, 500, "Other"].map((amount) => (
                      <button
                        key={amount}
                        className="py-3 px-4 border-2 border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors font-bold text-gray-900"
                      >
                        {typeof amount === "number" ? `$${amount}` : amount}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Donate Button */}
                <Button
                  onClick={handleDonateClick}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-white py-6 rounded-full text-lg font-bold shadow-lg mb-4"
                >
                  Donate Now
                </Button>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`flex-1 py-3 rounded-full border-2 transition-colors flex items-center justify-center gap-2 ${
                      isFavorite
                        ? "border-red-500 bg-red-50 text-red-600"
                        : "border-gray-300 hover:border-red-500 hover:bg-red-50"
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
                    Favorite
                  </button>
                  <button className="flex-1 py-3 rounded-full border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share
                  </button>
                </div>
              </Card>

              {/* Help & Support Badge */}
              <div className="mt-6 text-center">
                <button className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors shadow-lg">
                  💝 Help & Support
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
