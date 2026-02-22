import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { DollarSign } from "lucide-react";

export function AddMyStory() {
  const [formData, setFormData] = useState({
    founderName: "",
    startupName: "",
    country: "",
    capitalRaised: "",
    fundingStage: "Pre-seed",
    story: "",
  });

  const [charCount, setCharCount] = useState(0);
  const maxChars = 1000;

  const handleStoryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= maxChars) {
      setFormData({ ...formData, story: text });
      setCharCount(text.length);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-teal-50 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-teal-700 mb-6">
            Share Your Journey with HerLaunch
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Your story inspires thousands of women founders. Help us grow our collective impact.
          </p>
        </motion.div>

        {/* Form Container - Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card
            className="p-10 rounded-3xl shadow-2xl backdrop-blur-xl bg-white/80"
            style={{
              border: "1px solid rgba(147, 51, 234, 0.3)",
              boxShadow: "0 0 40px rgba(147, 51, 234, 0.1), 0 20px 60px rgba(0, 0, 0, 0.15)",
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info - Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="founderName"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Founder Name
                  </label>
                  <input
                    id="founderName"
                    type="text"
                    value={formData.founderName}
                    onChange={(e) => setFormData({ ...formData, founderName: e.target.value })}
                    placeholder="Sarah Johnson"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors bg-white/70 backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="startupName"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Startup Name
                  </label>
                  <input
                    id="startupName"
                    type="text"
                    value={formData.startupName}
                    onChange={(e) => setFormData({ ...formData, startupName: e.target.value })}
                    placeholder="TechCo Innovations"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors bg-white/70 backdrop-blur-sm"
                  />
                </div>
              </div>

              {/* Geographic Data - Critical for Map */}
              <div>
                <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                  Country/Region
                  <span className="ml-2 text-xs text-purple-600 font-normal">
                    (Critical for Global Map)
                  </span>
                </label>
                <select
                  id="country"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors bg-white/70 backdrop-blur-sm appearance-none cursor-pointer hover:bg-purple-50 focus:bg-purple-50"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1rem center",
                    backgroundSize: "1.5em 1.5em",
                  }}
                >
                  <option value="">Select your country...</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Spain">Spain</option>
                  <option value="Italy">Italy</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Norway">Norway</option>
                  <option value="India">India</option>
                  <option value="China">China</option>
                  <option value="Japan">Japan</option>
                  <option value="South Korea">South Korea</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Australia">Australia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Kenya">Kenya</option>
                  <option value="UAE">United Arab Emirates</option>
                  <option value="Israel">Israel</option>
                </select>
              </div>

              {/* Funding Metrics - Critical for Waterfall */}
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="capitalRaised"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Total Capital Raised
                    <span className="ml-2 text-xs text-purple-600 font-normal">
                      (Critical for Funding Metrics)
                    </span>
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="capitalRaised"
                      type="number"
                      value={formData.capitalRaised}
                      onChange={(e) => setFormData({ ...formData, capitalRaised: e.target.value })}
                      placeholder="250000"
                      required
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors bg-white/70 backdrop-blur-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Funding Stage
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {["Pre-seed", "Seed", "Series A", "Series B", "Series C+"].map((stage) => (
                      <label
                        key={stage}
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="fundingStage"
                          value={stage}
                          checked={formData.fundingStage === stage}
                          onChange={(e) =>
                            setFormData({ ...formData, fundingStage: e.target.value })
                          }
                          className="w-4 h-4 text-purple-600 focus:ring-purple-500 focus:ring-2"
                        />
                        <span
                          className={`px-4 py-2 rounded-full border-2 transition-all ${
                            formData.fundingStage === stage
                              ? "border-purple-500 bg-purple-50 text-purple-700 font-semibold"
                              : "border-gray-200 text-gray-700 group-hover:border-purple-300 group-hover:bg-purple-50"
                          }`}
                        >
                          {stage}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* The Narrative */}
              <div>
                <label htmlFor="story" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Story
                </label>
                <div className="relative">
                  <textarea
                    id="story"
                    value={formData.story}
                    onChange={handleStoryChange}
                    placeholder="Tell us about your journey... What inspired you to start? What challenges have you overcome? What impact are you making?"
                    rows={8}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors resize-none bg-white/70 backdrop-blur-sm"
                  />
                  <div className="absolute bottom-3 right-3 text-sm text-gray-500">
                    <span className={charCount >= maxChars ? "text-red-500 font-semibold" : ""}>
                      {charCount}
                    </span>
                    /{maxChars}
                  </div>
                </div>
              </div>

              {/* Submission Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full py-6 text-lg font-bold rounded-xl shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl"
                  style={{
                    background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
                    boxShadow:
                      "0 10px 30px rgba(139, 92, 246, 0.4), 0 0 20px rgba(236, 72, 153, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 15px 40px rgba(139, 92, 246, 0.6), 0 0 30px rgba(236, 72, 153, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px rgba(139, 92, 246, 0.4), 0 0 20px rgba(236, 72, 153, 0.3)";
                  }}
                >
                  Submit Your Story
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-gray-600 mt-8"
        >
          By submitting your story, you agree to have it featured on our Global Reach map and inspire
          other women founders worldwide. 🌍✨
        </motion.p>
      </div>
    </div>
  );
}
