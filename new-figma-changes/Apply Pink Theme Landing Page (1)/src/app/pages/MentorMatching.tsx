import { useState } from "react";
import { motion } from "motion/react";
import { Briefcase, Users, Award } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

interface Mentor {
  id: number;
  name: string;
  title: string;
  company: string;
  image: string;
  expertise: string[];
  compatibility: number;
  experience: string;
  mentees: number;
  bio: string;
  achievements: string[];
}

const mentors: Mentor[] = [
  {
    id: 1,
    name: "Dr. Lisa Chen",
    title: "Chief Technology Officer",
    company: "InnovateTech",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    expertise: ["SaaS", "AI/ML", "Product Strategy"],
    compatibility: 94,
    experience: "15y exp",
    mentees: 28,
    bio: "Former VP at Google, now helping women founders build transformative tech products",
    achievements: ["3 successful exits", "Forbes 40 Under 40", "TEDx Speaker"],
  },
  {
    id: 2,
    name: "Amara Williams",
    title: "Founder & CEO",
    company: "FinTech Solutions",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    expertise: ["FinTech", "Fundraising", "Scaling"],
    compatibility: 89,
    experience: "12y exp",
    mentees: 35,
    bio: "Built a $50M ARR fintech company from scratch, passionate about financial inclusion",
    achievements: ["Raised $25M Series B", "Inc. 500 Fastest Growing"],
  },
  {
    id: 3,
    name: "Sarah Martinez",
    title: "Head of Innovation",
    company: "Global Ventures",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    expertise: ["Venture Capital", "Market Entry", "Growth"],
    compatibility: 87,
    experience: "10y exp",
    mentees: 42,
    bio: "Angel investor and advisor specializing in early-stage startups and go-to-market strategy",
    achievements: ["20+ portfolio companies", "Female Founders Fund LP"],
  },
  {
    id: 4,
    name: "Dr. Priya Patel",
    title: "Director of Product",
    company: "HealthTech Inc",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    expertise: ["HealthTech", "Product Management", "UX"],
    compatibility: 82,
    experience: "8y exp",
    mentees: 19,
    bio: "Product leader with deep expertise in healthcare technology and user-centered design",
    achievements: ["2 patents", "Product of the Year Award"],
  },
];

export function MentorMatching() {
  const [selectedMentor, setSelectedMentor] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-lavender-50 to-purple-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Your Perfect Launch Partners
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Connect with experienced mentors who understand your journey and can guide you to success
          </p>
        </motion.div>

        {/* Mentor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                {/* Card Content - No gradient bar */}
                <div className="p-8">
                  {/* Top Section - Avatar and Info */}
                  <div className="flex items-start gap-6 mb-6">
                    {/* Avatar with Badge */}
                    <div className="relative flex-shrink-0">
                      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gray-100">
                        <img
                          src={mentor.image}
                          alt={mentor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Compatibility Badge */}
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-lg shadow-lg">
                        {mentor.compatibility}%
                      </div>
                    </div>

                    {/* Name and Title */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {mentor.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">{mentor.title}</p>
                      <p className="text-sm font-semibold text-pink-600">
                        {mentor.company}
                      </p>

                      {/* Experience and Mentees */}
                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center gap-1 text-gray-600">
                          <Briefcase className="w-4 h-4" />
                          <span className="text-sm">{mentor.experience}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">{mentor.mentees} mentees</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-700 mb-6 leading-relaxed">{mentor.bio}</p>

                  {/* Expertise Tags */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-3">Expertise:</p>
                    <div className="flex flex-wrap gap-2">
                      {mentor.expertise.map((skill, idx) => (
                        <Badge
                          key={idx}
                          className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-3 py-1"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-3">Achievements:</p>
                    <ul className="space-y-2">
                      {mentor.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <Award className="w-4 h-4 text-pink-500 flex-shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Compatibility Score */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700">
                        Compatibility Score
                      </span>
                      <span className="text-sm font-bold text-fuchsia-600">
                        {mentor.compatibility}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full transition-all duration-500"
                        style={{ width: `${mentor.compatibility}%` }}
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      className="bg-gradient-to-r from-fuchsia-600 to-pink-500 hover:opacity-90 text-white font-semibold py-6"
                      onClick={() => setSelectedMentor(mentor.id)}
                    >
                      Request Connection
                    </Button>
                    <Button
                      variant="outline"
                      className="border-2 border-gray-300 hover:bg-gray-50 font-semibold py-6"
                    >
                      View Roadmap
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Success Message */}
        {selectedMentor && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6 text-center"
          >
            <p className="text-lg font-semibold text-purple-700">
              ✨ Connection request sent! We'll notify you when your mentor responds.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
