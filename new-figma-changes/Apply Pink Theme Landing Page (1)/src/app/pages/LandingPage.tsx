import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Rocket, Heart, DollarSign, Users, HandshakeIcon, Gift, Target, TrendingUp, Zap, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";

const momentumSteps = [
  {
    id: 1,
    icon: Target,
    title: "Launch Campaign",
    description: "Set your funding goal and share your vision with our global community",
    color: "from-pink-500 to-pink-600",
    delay: 0.2,
  },
  {
    id: 2,
    icon: Users,
    title: "Build Community",
    description: "Connect with mentors, investors, and supporters who believe in your mission",
    color: "from-purple-500 to-purple-600",
    delay: 0.4,
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Gain Traction",
    description: "Watch your momentum grow as backers rally behind your startup",
    color: "from-teal-500 to-teal-600",
    delay: 0.6,
  },
  {
    id: 4,
    icon: Zap,
    title: "Scale & Succeed",
    description: "Achieve your goals and join successful women founders worldwide",
    color: "from-orange-500 to-orange-600",
    delay: 0.8,
  },
];

export function LandingPage() {
  const [selectedAmount, setSelectedAmount] = useState(25);

  return (
    <div className="w-full bg-[#FFF5F7]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="pt-12"
            >
              <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8">
                Discover the<br />
                future of<br />
                female-led{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B8A] to-[#FF8BA0]">
                  innovation.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-md">
                Launch your vision and raise funds with a community that believes in women founders.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-xl">
                <div className="relative flex items-center bg-white rounded-full shadow-lg border border-gray-200 overflow-hidden">
                  <Search className="absolute left-5 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Find founders and organizations..."
                    className="flex-1 pl-14 pr-4 py-4 border-0 focus-visible:ring-0 text-base placeholder:text-gray-400"
                  />
                  <Button 
                    size="lg" 
                    className="rounded-full m-1 px-8 bg-gradient-to-r from-[#FF6B8A] to-[#FF8BA0] hover:opacity-90 text-white"
                  >
                    Find Founders
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Floating Cards */}
            <div className="relative h-[500px] hidden lg:block">
              {/* Emma Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute top-0 right-20"
              >
                <Card className="p-4 bg-white shadow-lg rounded-2xl w-52">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-sm">Emma</div>
                      <div className="text-xs text-muted-foreground">is fundraising for</div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Kate Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute top-32 right-0"
              >
                <Card className="p-4 bg-[#C8F5E8] shadow-lg rounded-2xl w-52">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-sm">Kate</div>
                      <div className="text-xs text-gray-700">is fundraising for</div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Olivia Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute top-64 right-16"
              >
                <Card className="p-4 bg-[#C8E5F5] shadow-lg rounded-2xl w-52">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-sm">Olivia</div>
                      <div className="text-xs text-gray-700">is fundraising for</div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Support Options Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-0 right-8"
              >
                <Card className="p-6 bg-white shadow-xl rounded-2xl w-72">
                  <div className="text-sm font-semibold mb-4">Support Options</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span>Monthly donations available</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span>Tax-deductible options</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Decorative circles - Added more bubbles */}
        <div className="absolute top-20 left-10 w-12 h-12 bg-pink-300/30 rounded-full"></div>
        <div className="absolute bottom-40 left-32 w-8 h-8 bg-teal-300/30 rounded-full"></div>
        <div className="absolute top-60 right-1/4 w-6 h-6 bg-blue-300/30 rounded-full"></div>
        <div className="absolute top-10 right-20 w-10 h-10 bg-purple-300/25 rounded-full"></div>
        <div className="absolute bottom-20 right-40 w-14 h-14 bg-orange-300/20 rounded-full"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-pink-200/20 rounded-full"></div>
        <div className="absolute bottom-1/4 left-10 w-7 h-7 bg-teal-200/35 rounded-full"></div>
        <div className="absolute top-1/4 right-1/3 w-9 h-9 bg-blue-200/30 rounded-full"></div>
        <div className="absolute bottom-10 left-1/2 w-11 h-11 bg-purple-200/25 rounded-full"></div>
        <div className="absolute top-40 left-20 w-5 h-5 bg-orange-200/40 rounded-full"></div>
      </section>

      {/* Support Options Bar */}
      <section className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <Rocket className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <div className="font-semibold text-sm">3 WAYS TO SUPPORT</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="font-semibold text-sm">CHOOSE YOUR OWN PRICE</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <Gift className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <div className="font-semibold text-sm">NO FUNDRAISER GOALS MET</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Launch in 3 Steps Section */}
      <section className="py-20 px-4 bg-[#FFF5F7]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Launch Your Fundraiser in 3 Steps
            </h2>
            <p className="text-muted-foreground text-lg">
              Simple, fast, and designed for women founders
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-8 h-full bg-white hover:shadow-xl transition-shadow rounded-3xl">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-6 rotate-3">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Launch Your Campaign</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Set up your fundraising page in minutes with our intuitive tools. Share your vision, set your goal, and tell your story.
                </p>
              </Card>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 h-full bg-white hover:shadow-xl transition-shadow rounded-3xl">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mb-6 -rotate-3">
                  <HandshakeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Share & Connect</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Leverage our community of supporters and investors. Share your campaign across social media and reach the right people.
                </p>
              </Card>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-8 h-full bg-white hover:shadow-xl transition-shadow rounded-3xl">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 rotate-2">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Receive Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get funded quickly with flexible withdrawal options. Access mentorship and resources to help you succeed.
                </p>
              </Card>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="rounded-full px-8 bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90"
            >
              Start Now →
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Closing the Capital Gap for Women Founders
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-6xl md:text-7xl font-bold mb-4 text-[#1a0a0e]">63%</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                of women-led startups are underfunded
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-6xl md:text-7xl font-bold mb-4 text-[#1a0a0e]">2.7%</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                of all VC funding goes to women
              </p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-6xl md:text-7xl font-bold mb-4 text-[#1a0a0e]">2014</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Last year a woman founded unicorn received majority VC funding
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Launch Momentum - Vertical Scroll Section */}
      <section className="py-32 px-4 bg-[#FFF5F7] relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              The Launch Momentum
            </h2>
            <p className="text-xl text-muted-foreground">
              Your journey from idea to success
            </p>
          </motion.div>

          {/* Vertical Timeline with Glowing Liquid Path */}
          <div className="relative">
            {/* Electric Violet Glowing Liquid Path */}
            <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-2 hidden md:block">
              {/* Main Path */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-600 via-violet-500 to-fuchsia-600 rounded-full"></div>
              
              {/* Inner Glow */}
              <div 
                className="absolute inset-0 bg-gradient-to-b from-purple-400 via-violet-400 to-fuchsia-400 rounded-full blur-sm"
                style={{
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.6)',
                }}
              ></div>
              
              {/* Outer Glow */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: '0 0 60px rgba(139, 92, 246, 0.4), 0 0 100px rgba(139, 92, 246, 0.2)',
                }}
              ></div>

              {/* Animated Flowing Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent rounded-full"
                animate={{
                  y: ['-100%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              ></motion.div>
            </div>

            {/* Timeline Steps */}
            <div className="space-y-32">
              {momentumSteps.map((step, index) => {
                const Icon = step.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: step.delay }}
                    className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-16' : 'md:pl-16'}`}>
                      <Card className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition-all border-2 border-purple-100">
                        <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </Card>
                    </div>

                    {/* Center Node on Path */}
                    <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: step.delay + 0.2, type: "spring" }}
                        className="relative"
                      >
                        {/* Outer Pulsing Ring */}
                        <motion.div
                          className={`absolute inset-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-gradient-to-br ${step.color} opacity-30`}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.1, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        ></motion.div>
                        
                        {/* Main Node */}
                        <div 
                          className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg relative z-10`}
                          style={{
                            boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)',
                          }}
                        >
                          <div className="w-6 h-6 bg-white rounded-full"></div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Mobile Icon */}
                    <div className="md:hidden mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg mx-auto`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-32"
          >
            <Button 
              size="lg" 
              className="rounded-full px-12 py-6 text-lg bg-gradient-to-r from-purple-600 via-violet-500 to-fuchsia-600 hover:opacity-90 shadow-xl"
              style={{
                boxShadow: '0 0 40px rgba(139, 92, 246, 0.4)',
              }}
            >
              Start Your Momentum →
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Meet HerLaunch Section */}
      <section className="py-20 px-4 bg-[#FFF5F7]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet HerLaunch</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              HerLaunch was created to bridge the funding gap for women entrepreneurs. We believe that diverse leadership drives innovation, and we're committed to providing the tools, community, and resources women founders need to succeed.
            </p>
          </motion.div>

          {/* Team Photos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { name: "Sarah Chen", role: "Co-Founder & CEO" },
              { name: "Maria Rodriguez", role: "Co-Founder & CTO" },
              { name: "Amara Williams", role: "Head of Community" },
              { name: "Lisa Park", role: "Chief Strategy Officer" },
            ].map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-pink-100 via-purple-100 to-teal-100 flex items-center justify-center">
                    <Users className="w-16 h-16 text-gray-400" />
                  </div>
                </div>
                <h4 className="font-semibold text-sm mb-1">{person.name}</h4>
                <p className="text-xs text-muted-foreground">{person.role}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <blockquote className="text-2xl md:text-3xl font-serif italic leading-relaxed text-[#1a0a0e]">
              "Our mission is to ensure that every brilliant idea has the capital it deserves, starting with supporting women who dare to build."
            </blockquote>
            <p className="mt-6 text-sm text-muted-foreground">— The HerLaunch Team</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#FF6B8A] to-[#A855F7] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Launch Your Vision?
            </h2>
            <p className="text-xl mb-8 text-pink-100">
              Join thousands of women founders who are changing the world
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 rounded-full px-10"
            >
              Start Your Fundraiser Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}