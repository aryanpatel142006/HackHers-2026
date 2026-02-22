import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import worldMapImage from "figma:asset/1c9208c94de23c7a48060f401738e879e228a278.png";

interface Story {
  id: number;
  name: string;
  location: string;
  headline: string;
  testimonial: string;
  metric: string;
  image: string;
  x: number; // percentage position on map
  y: number; // percentage position on map
  continent: string;
}

const stories: Story[] = [
  {
    id: 1,
    name: "Sarah Chen",
    location: "San Francisco, USA",
    headline: "Raised $850K!",
    testimonial: "HerLaunch connected me with the right investors who understood my vision for sustainable beauty.",
    metric: "$850K Seed Funding",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    x: 15,
    y: 32,
    continent: "North America",
  },
  {
    id: 2,
    name: "Emma Rodriguez",
    location: "Madrid, Spain",
    headline: "5K+ Users Reached!",
    testimonial: "The community support was incredible. Found mentors who guided every step of my journey.",
    metric: "5,000+ Active Users",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    x: 48,
    y: 28,
    continent: "Europe",
  },
  {
    id: 3,
    name: "Priya Sharma",
    location: "Mumbai, India",
    headline: "Raised $2M ARR!",
    testimonial: "From idea to launch in 6 months. The pitch deck tools and coaching were game-changing.",
    metric: "$2M Annual Revenue",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    x: 68,
    y: 38,
    continent: "Asia",
  },
  {
    id: 4,
    name: "Amara Okafor",
    location: "Lagos, Nigeria",
    headline: "Raised $1.2M!",
    testimonial: "HerLaunch gave me access to resources I never thought possible in Africa. True empowerment.",
    metric: "$1.2M Funding Secured",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    x: 49,
    y: 50,
    continent: "Africa",
  },
  {
    id: 5,
    name: "Lisa Park",
    location: "Seoul, South Korea",
    headline: "Scaled to 15 Countries!",
    testimonial: "Started local, now we're international. The network opened doors globally and changed everything.",
    metric: "15 Countries Expansion",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    x: 78,
    y: 32,
    continent: "Asia",
  },
  {
    id: 6,
    name: "Isabella Costa",
    location: "São Paulo, Brazil",
    headline: "Raised $600K!",
    testimonial: "The mentorship program connected me with industry experts who accelerated our growth trajectory.",
    metric: "$600K Series A",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    x: 27,
    y: 65,
    continent: "South America",
  },
  {
    id: 7,
    name: "Sophie Martin",
    location: "Sydney, Australia",
    headline: "Raised $5M!",
    testimonial: "Found investors who believe in women-led climate tech. A dream come true for our planet.",
    metric: "$5M Series A Closed",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    x: 85,
    y: 72,
    continent: "Australia",
  },
  {
    id: 8,
    name: "Maya Johnson",
    location: "Toronto, Canada",
    headline: "Built $3M Business!",
    testimonial: "The funding readiness tools helped me prepare for investor meetings. Now we're thriving!",
    metric: "$3M Revenue Built",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    x: 18,
    y: 25,
    continent: "North America",
  },
  {
    id: 9,
    name: "Yuki Tanaka",
    location: "Tokyo, Japan",
    headline: "Raised $1.8M!",
    testimonial: "Breaking barriers in tech. HerLaunch showed me that women founders can lead innovation.",
    metric: "$1.8M Seed Round",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    x: 82,
    y: 30,
    continent: "Asia",
  },
  {
    id: 10,
    name: "Fatima Al-Said",
    location: "Dubai, UAE",
    headline: "Scaled to 10M Users!",
    testimonial: "From startup to scale-up. The global community gave us wings to fly higher than imagined.",
    metric: "10M+ Users Globally",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    x: 56,
    y: 38,
    continent: "Middle East",
  },
];

export function GlobalReach() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [hoveredStory, setHoveredStory] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-teal-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-600 to-teal-500 bg-clip-text text-transparent">
            Global Success Stories
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Women entrepreneurs are changing the world. Discover inspiring stories from our global community of founders making an impact across every continent.
          </p>
        </motion.div>

        {/* Interactive Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-full max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border-2 border-white/50"
        >
          {/* World Map with Overlay */}
          <div className="relative w-full aspect-[2/1]">
            {/* Colorful World Map Background */}
            <img
              src={worldMapImage}
              alt="World Map"
              className="w-full h-full object-contain"
            />

            {/* Interactive Hotspot Overlay */}
            <svg
              viewBox="0 0 1000 500"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Hotspot Glow Gradient */}
                <radialGradient id="glowGradient">
                  <stop offset="0%" stopColor="#C026D3" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#A855F7" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
                </radialGradient>

                {/* Connector Line Gradient */}
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#EC4899" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#F472B6" stopOpacity="0.4" />
                </linearGradient>

                {/* Glow Filter */}
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Interactive Success Nodes (Hotspots) */}
              {stories.map((story) => {
                const isActive = selectedStory?.id === story.id || hoveredStory === story.id;
                
                return (
                  <g key={story.id}>
                    {/* Outer Pulsing Glow - Layer 1 */}
                    <motion.circle
                      cx={story.x * 10}
                      cy={story.y * 5}
                      r={isActive ? 35 : 28}
                      fill="url(#glowGradient)"
                      opacity={isActive ? 0.5 : 0.3}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: isActive ? [0.5, 0.2, 0.5] : [0.3, 0.1, 0.3],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    
                    {/* Middle Glow Layer - Layer 2 */}
                    <motion.circle
                      cx={story.x * 10}
                      cy={story.y * 5}
                      r={isActive ? 22 : 18}
                      fill="url(#glowGradient)"
                      opacity={0.65}
                      animate={{
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.4,
                      }}
                    />
                    
                    {/* Main Hotspot Node - Layer 3 */}
                    <motion.circle
                      cx={story.x * 10}
                      cy={story.y * 5}
                      r={isActive ? 15 : 12}
                      fill="#C026D3"
                      stroke="#E879F9"
                      strokeWidth={isActive ? 4 : 3}
                      style={{
                        filter: "drop-shadow(0px 0px 20px rgba(192, 38, 211, 0.9))",
                        cursor: "pointer",
                      }}
                      whileHover={{ scale: 1.4 }}
                      onClick={() => setSelectedStory(story)}
                      onMouseEnter={() => setHoveredStory(story.id)}
                      onMouseLeave={() => setHoveredStory(null)}
                      animate={isActive ? {
                        scale: [1, 1.2, 1],
                      } : {}}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                      }}
                    />
                    
                    {/* Inner Bright Core - Layer 4 */}
                    <circle
                      cx={story.x * 10}
                      cy={story.y * 5}
                      r={5}
                      fill="white"
                      opacity={0.95}
                      style={{ pointerEvents: "none" }}
                    />
                  </g>
                );
              })}

              {/* Curved Glowing Connector Line */}
              {selectedStory && (
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  exit={{ pathLength: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  d={`M ${selectedStory.x * 10} ${selectedStory.y * 5} Q ${selectedStory.x * 10 + 70} ${selectedStory.y * 5 - 60} ${selectedStory.x * 10 + 140} ${selectedStory.y * 5 - 40}`}
                  stroke="url(#lineGradient)"
                  strokeWidth="4"
                  fill="none"
                  filter="url(#glow)"
                />
              )}
            </svg>

            {/* Floating Story Cards */}
            <AnimatePresence>
              {selectedStory && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.7, y: 30 }}
                  transition={{ type: "spring", damping: 22, stiffness: 300 }}
                  className="absolute z-30"
                  style={{
                    left: `${selectedStory.x}%`,
                    top: `${selectedStory.y}%`,
                    transform: "translate(150px, -100px)",
                  }}
                >
                  <Card
                    className="w-96 bg-white/98 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden"
                    style={{
                      border: "4px solid #EC4899",
                      boxShadow: "0 0 40px rgba(236, 72, 153, 0.6), 0 0 80px rgba(236, 72, 153, 0.4), 0 20px 60px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <div className="p-8">
                      {/* Close Button */}
                      <button
                        onClick={() => setSelectedStory(null)}
                        className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-40"
                      >
                        <X className="w-4 h-4 text-gray-600" />
                      </button>

                      {/* Avatar and Info */}
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="w-16 h-16 rounded-full overflow-hidden border-4 border-pink-400"
                          style={{
                            boxShadow: "0 0 25px rgba(236, 72, 153, 0.5)",
                          }}
                        >
                          <img
                            src={selectedStory.image}
                            alt={selectedStory.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-gray-900">
                            {selectedStory.name}
                          </h3>
                          <p className="text-sm text-gray-600">{selectedStory.location}</p>
                          <p className="text-xs text-purple-600 font-semibold mt-1 uppercase tracking-wide">
                            {selectedStory.continent}
                          </p>
                        </div>
                      </div>

                      {/* Bold Headline */}
                      <div className="mb-6">
                        <div className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent mb-3">
                          {selectedStory.headline}
                        </div>
                        <p className="text-base text-gray-800 leading-relaxed italic">
                          "{selectedStory.testimonial}"
                        </p>
                      </div>

                      {/* Metric Badge */}
                      <div className="mb-6">
                        <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
                          <span className="text-sm font-bold text-purple-700">
                            🎯 {selectedStory.metric}
                          </span>
                        </div>
                      </div>

                      {/* Read More Button */}
                      <div className="flex justify-end">
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 rounded-full px-8 shadow-lg"
                        >
                          READ FULL STORY
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </div>
                    </div>

                    {/* Decorative Glows */}
                    <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-pink-500 opacity-25 blur-3xl rounded-full pointer-events-none" />
                    <div className="absolute -top-12 -left-12 w-40 h-40 bg-purple-500 opacity-20 blur-3xl rounded-full pointer-events-none" />
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16 space-y-6"
        >
          <p className="text-gray-700 text-lg font-medium">
            ✨ Click on the pulsing purple nodes to discover inspiring success stories from around the world
          </p>
          
          {/* Legend */}
          <div className="flex justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
              <span className="text-sm text-gray-600">North America</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-600"></div>
              <span className="text-sm text-gray-600">South America</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-pink-400"></div>
              <span className="text-sm text-gray-600">Europe</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span className="text-sm text-gray-600">Africa</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
              <span className="text-sm text-gray-600">Asia</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600">Australia</span>
            </div>
          </div>
        </motion.div>

        {/* Global Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
              $18.5M+
            </div>
            <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">Total Raised</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent mb-2">
              3,847
            </div>
            <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">Women Founders</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-teal-500 to-orange-500 bg-clip-text text-transparent mb-2">
              82+
            </div>
            <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-2">
              96%
            </div>
            <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">Success Rate</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to share your success story?
          </h3>
          <Link to="/add-my-story">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 rounded-full px-10 py-6 text-lg shadow-xl"
            >
              Join Our Global Community
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}