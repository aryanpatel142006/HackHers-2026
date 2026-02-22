import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Search, Filter, Trophy, DollarSign, Users, Clock, Tag } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";

interface Opportunity {
  id: number;
  title: string;
  organizer: string;
  prize: string;
  deadline: Date;
  category: string;
  discount?: number;
  equityFree: boolean;
  womenOnly: boolean;
  description: string;
  applicants: number;
}

const opportunities: Opportunity[] = [
  {
    id: 1,
    title: "Women in Tech Accelerator",
    organizer: "TechStars",
    prize: "$120,000",
    deadline: new Date("2026-03-15"),
    category: "Accelerator",
    discount: 25,
    equityFree: false,
    womenOnly: true,
    description: "3-month intensive program with mentorship and funding",
    applicants: 156,
  },
  {
    id: 2,
    title: "Female Founders Grant",
    organizer: "SheEO",
    prize: "$50,000",
    deadline: new Date("2026-03-01"),
    category: "Grant",
    equityFree: true,
    womenOnly: true,
    description: "Equity-free grant for women-led startups in sustainability",
    applicants: 243,
  },
  {
    id: 3,
    title: "Startup Pitch Competition",
    organizer: "Innovation Hub",
    prize: "$75,000",
    deadline: new Date("2026-04-20"),
    category: "Competition",
    discount: 15,
    equityFree: true,
    womenOnly: false,
    description: "Pitch your idea to leading VCs and angel investors",
    applicants: 89,
  },
  {
    id: 4,
    title: "HerVenture Fund",
    organizer: "Women's Capital",
    prize: "$200,000",
    deadline: new Date("2026-02-28"),
    category: "Investment",
    discount: 30,
    equityFree: false,
    womenOnly: true,
    description: "Seed investment for women entrepreneurs in tech",
    applicants: 312,
  },
  {
    id: 5,
    title: "Social Impact Challenge",
    organizer: "Global Good",
    prize: "$30,000",
    deadline: new Date("2026-05-10"),
    category: "Competition",
    equityFree: true,
    womenOnly: false,
    description: "For startups solving social and environmental challenges",
    applicants: 127,
  },
  {
    id: 6,
    title: "FinTech Women Leaders",
    organizer: "FinTech Association",
    prize: "$100,000",
    deadline: new Date("2026-03-30"),
    category: "Accelerator",
    discount: 20,
    equityFree: false,
    womenOnly: true,
    description: "6-month program for women in financial technology",
    applicants: 198,
  },
];

export function Opportunities() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [filteredOpportunities, setFilteredOpportunities] = useState(opportunities);

  const filters = [
    { id: "equity-free", label: "Equity-Free", key: "equityFree" },
    { id: "under-50k", label: "Under $50k", key: "under50k" },
    { id: "women-only", label: "Women-Only", key: "womenOnly" },
  ];

  const toggleFilter = (filterId: string) => {
    setSelectedFilters(prev =>
      prev.includes(filterId)
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId]
    );
  };

  useEffect(() => {
    let filtered = opportunities;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(opp =>
        opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filters
    if (selectedFilters.includes("equity-free")) {
      filtered = filtered.filter(opp => opp.equityFree);
    }
    if (selectedFilters.includes("under-50k")) {
      filtered = filtered.filter(opp => {
        const amount = parseInt(opp.prize.replace(/[^0-9]/g, ""));
        return amount < 50000;
      });
    }
    if (selectedFilters.includes("women-only")) {
      filtered = filtered.filter(opp => opp.womenOnly);
    }

    setFilteredOpportunities(filtered);
  }, [searchQuery, selectedFilters]);

  const calculateDaysLeft = (deadline: Date) => {
    const now = new Date();
    const diff = deadline.getTime() - now.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Pitch Opportunities</h1>
          <p className="text-muted-foreground">Discover funding opportunities, competitions, and accelerators</p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="p-6 bg-white/80 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search opportunities..."
                  className="pl-10"
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-muted-foreground" />
                {filters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={selectedFilters.includes(filter.id) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleFilter(filter.id)}
                    className="text-xs"
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Active Filters */}
            {selectedFilters.length > 0 && (
              <div className="flex items-center gap-2 mt-4 pt-4 border-t">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {selectedFilters.map((filterId) => {
                  const filter = filters.find(f => f.id === filterId);
                  return (
                    <Badge key={filterId} variant="secondary" className="gap-1">
                      {filter?.label}
                      <button
                        onClick={() => toggleFilter(filterId)}
                        className="ml-1 hover:text-destructive"
                      >
                        ×
                      </button>
                    </Badge>
                  );
                })}
              </div>
            )}
          </Card>
        </motion.div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredOpportunities.length} of {opportunities.length} opportunities
          </p>
        </div>

        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOpportunities.map((opp, index) => {
            const daysLeft = calculateDaysLeft(opp.deadline);
            const isUrgent = daysLeft <= 7;

            return (
              <motion.div
                key={opp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-white hover:shadow-xl transition-shadow border-2 border-transparent hover:border-primary/20 overflow-hidden">
                  {/* Header with gradient */}
                  <div className="h-2 bg-gradient-to-r from-primary via-purple-500 to-pink-500"></div>

                  <div className="p-6">
                    {/* Title and Organizer */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-lg leading-tight">{opp.title}</h3>
                        <Trophy className="w-5 h-5 text-primary flex-shrink-0 ml-2" />
                      </div>
                      <p className="text-sm text-muted-foreground">{opp.organizer}</p>
                    </div>

                    {/* Prize Amount */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1 text-2xl font-bold text-primary">
                        <DollarSign className="w-6 h-6" />
                        <span>{opp.prize.replace("$", "")}</span>
                      </div>
                      {opp.discount && (
                        <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white border-0">
                          <Tag className="w-3 h-3 mr-1" />
                          {opp.discount}% Member Discount
                        </Badge>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {opp.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="text-xs">
                        {opp.category}
                      </Badge>
                      {opp.equityFree && (
                        <Badge variant="secondary" className="text-xs bg-green-100 text-green-700 border-green-300">
                          Equity-Free
                        </Badge>
                      )}
                      {opp.womenOnly && (
                        <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700 border-purple-300">
                          Women-Only
                        </Badge>
                      )}
                    </div>

                    {/* Days Left Countdown */}
                    <div className={`flex items-center gap-2 mb-4 p-3 rounded-lg ${
                      isUrgent ? "bg-gradient-to-r from-coral-500/20 to-orange-500/20 border border-coral-500/30" : "bg-purple-50"
                    }`}>
                      <Clock className={`w-5 h-5 ${isUrgent ? "text-coral-600" : "text-purple-600"}`} />
                      <div>
                        <div className={`font-bold ${isUrgent ? "text-coral-600" : "text-purple-600"}`}>
                          {daysLeft} Days Left
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Deadline: {opp.deadline.toLocaleDateString()}
                        </div>
                      </div>
                    </div>

                    {/* Applicants */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Users className="w-4 h-4" />
                      <span>{opp.applicants} applicants</span>
                    </div>

                    {/* Action Button */}
                    <Button className="w-full" variant={isUrgent ? "default" : "outline"}>
                      {isUrgent ? "Apply Now - Urgent!" : "Learn More"}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredOpportunities.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No opportunities found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
