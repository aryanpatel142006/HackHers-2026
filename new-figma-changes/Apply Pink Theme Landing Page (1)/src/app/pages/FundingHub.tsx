import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Search, Heart } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

interface Organization {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  raised: number;
  goal: number;
  percentage: number;
  fundingType: string;
  isFavorite?: boolean;
}

const organizations: Organization[] = [
  {
    id: "lumiere-beauty",
    name: "Lumiere Beauty Collective",
    description: "Creating sustainable, inclusive skincare routines powered by ethically sourced botanicals.",
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    raised: 3250,
    goal: 5000,
    percentage: 65,
    fundingType: "Live Funding",
  },
  {
    id: "techbloom-labs",
    name: "TechBloom Labs",
    description: "Empowering minority women through low-code development education and mentorship.",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    raised: 0,
    goal: 10000,
    percentage: 0,
    fundingType: "Starting Soon",
  },
  {
    id: "vitality-wellness",
    name: "Vitality Wellness Hub",
    description: "Digital holistic health platform prioritizing mental wellness for postpartum wellness.",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    raised: 4850,
    goal: 7000,
    percentage: 42,
    fundingType: "Live Funding",
  },
  {
    id: "ecothread-collective",
    name: "EcoThread Collective",
    description: "Circular fashion brand using mushroom-based textiles for high-end bags.",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    raised: 8500,
    goal: 8500,
    percentage: 100,
    fundingType: "Fully Funded",
  },
  {
    id: "growthmind-academy",
    name: "GrowthMind Academy",
    description: "Reimagining financial literacy for young girls through gamified mobile learning experiences.",
    category: "Education",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    raised: 2100,
    goal: 5000,
    percentage: 42,
    fundingType: "Live Funding",
  },
  {
    id: "aura-yoga",
    name: "Aura Yoga Collective",
    description: "A luxury yoga and mindfulness studio network promoting mental health for corporate women.",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    raised: 5400,
    goal: 8000,
    percentage: 67,
    fundingType: "Live Funding",
  },
];

const categories = ["All", "Beauty", "Technology", "Wellness", "Sustainability", "Education", "Fashion"];

export function FundingHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Most Recent");

  const filteredOrgs = organizations.filter((org) => {
    const matchesSearch = org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         org.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || org.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#F8F8F5] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">
            Discover Impactful <span className="text-orange-500">Organizations</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with female-led organizations and communities driving change in beauty, technology, wellness, and more.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search organizations by name, category, or founder"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-orange-500 focus:outline-none text-gray-700"
            />
            <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900 hover:bg-gray-800 rounded-full px-8">
              Search
            </Button>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-3 mb-12 overflow-x-auto pb-2 justify-center flex-wrap"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Sort and Count */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Organizations</h2>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500 text-sm"
            >
              <option>Most Recent</option>
              <option>Most Funded</option>
              <option>Ending Soon</option>
            </select>
          </div>
        </div>

        {/* Organizations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredOrgs.map((org, index) => (
            <motion.div
              key={org.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link to={`/organization/${org.id}`}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl border border-gray-200 group">
                  {/* Organization Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-100 to-pink-100">
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className={`${
                        org.fundingType === "Live Funding"
                          ? "bg-red-500 text-white"
                          : org.fundingType === "Fully Funded"
                          ? "bg-green-500 text-white"
                          : "bg-gray-600 text-white"
                      } hover:opacity-90`}>
                        ● {org.fundingType}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 z-10">
                      <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                        <Heart className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                    <div className="w-full h-full flex items-center justify-center p-8">
                      <img
                        src={org.image}
                        alt={org.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Organization Details */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs uppercase">
                        {org.category}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                      {org.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {org.description}
                    </p>

                    {/* Progress */}
                    {org.fundingType !== "Starting Soon" && (
                      <div className="mb-4">
                        <div className="flex justify-between items-baseline mb-2">
                          <span className="text-2xl font-bold text-gray-900">
                            ${org.raised.toLocaleString()}
                          </span>
                          <span className="text-sm text-gray-500">
                            raised of ${org.goal.toLocaleString()} goal
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${org.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className={`h-full rounded-full ${
                              org.percentage === 100
                                ? "bg-green-500"
                                : org.percentage >= 50
                                ? "bg-orange-500"
                                : "bg-red-400"
                            }`}
                          />
                        </div>
                        <p className="text-right text-sm font-semibold text-gray-700 mt-1">
                          {org.percentage}% Reached
                        </p>
                      </div>
                    )}

                    {/* Call to Action */}
                    <div className="flex gap-2">
                      {org.fundingType === "Fully Funded" ? (
                        <Button
                          variant="outline"
                          className="flex-1 rounded-full border-green-500 text-green-700 hover:bg-green-50"
                        >
                          View Success
                        </Button>
                      ) : (
                        <>
                          <Button
                            variant="outline"
                            className="flex-1 rounded-full hover:bg-gray-50"
                          >
                            Learn More
                          </Button>
                          <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                            💝 Help & Support
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Load More Organizations</h3>
          <p className="text-gray-600 mb-6">Showing 6 of 142 organizations</p>
        </div>
      </div>
    </div>
  );
}
