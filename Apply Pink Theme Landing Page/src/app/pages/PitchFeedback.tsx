import { Link } from "react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { LayoutGrid, Megaphone, Video, Eye, Smile, TrendingUp, Play, Settings, Maximize, Volume2, Save, VideoIcon } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export function PitchFeedback() {
  const [currentTime, setCurrentTime] = useState("01:12");
  const [duration] = useState("02:45");

  const metrics = [
    {
      icon: Eye,
      label: "Gaze Consistency",
      score: "High",
      scoreColor: "text-green-600",
      bgColor: "bg-green-50",
      feedback: "Great job maintaining eye contact. Try to occasionally shift your gaze naturally between different points to mimic an audience.",
    },
    {
      icon: Smile,
      label: "Expression Variety",
      score: "Medium",
      scoreColor: "text-orange-600",
      bgColor: "bg-orange-50",
      feedback: "Your tone is professional. Injecting a bit more enthusiasm during your 'Problem' slide can build stronger emotional resonance.",
    },
    {
      icon: TrendingUp,
      label: "Movement Steadiness",
      score: "High",
      scoreColor: "text-green-600",
      bgColor: "bg-green-50",
      feedback: "Excellent posture. Using open palm gestures when discussing growth will help emphasize your points more effectively.",
    },
  ];

  const coachingMoments = [
    {
      id: 1,
      timestamp: "00:15",
      title: "Energy dip",
      description: "Tone became slightly monotonous during the market analysis section.",
    },
    {
      id: 2,
      timestamp: "00:42",
      title: "Gaze shifted frequently",
      description: "You looked away from the camera while explaining the business model.",
    },
    {
      id: 3,
      timestamp: "01:55",
      title: "Strong closing",
      description: "Excellent use of hand gestures and smile to reinforce the call to action.",
    },
  ];

  const pastRecordings = [
    { id: 1, date: "Aug 12, 2023", duration: "2:45 Duration" },
    { id: 2, date: "Aug 10, 2023", duration: "3:10 Duration" },
    { id: 3, date: "Aug 05, 2023", duration: "2:51 Duration" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-full px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Pitch Feedback</h1>
              <p className="text-sm text-gray-600">
                Reviewing your performance for 'Series A Seed Round'
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="rounded-lg">
                <VideoIcon className="w-4 h-4 mr-2" />
                Record Again
              </Button>
              <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 rounded-lg">
                <Save className="w-4 h-4 mr-2" />
                Save Session
              </Button>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=100"
                  alt="Maya J."
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar + Main Content */}
      <div className="flex">
        <aside className="hidden md:block w-64 bg-white border-r border-gray-200 min-h-screen sticky top-[73px]">
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
                className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                <Megaphone className="w-5 h-5" />
                Campaigns
              </Link>
              <Link
                to="/demo-hub"
                className="flex items-center gap-3 px-4 py-3 bg-pink-50 text-pink-600 rounded-lg font-medium"
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Performance Metrics */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Performance Metrics</h2>

                  <div className="space-y-4">
                    {metrics.map((metric, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className={`p-5 rounded-2xl border-2 ${metric.bgColor} border-gray-200`}>
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                              <metric.icon className={`w-5 h-5 ${metric.scoreColor}`} />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-bold text-gray-900">{metric.label}</h3>
                            </div>
                            <Badge className={`${metric.scoreColor} bg-white border border-current`}>
                              {metric.score}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed">{metric.feedback}</p>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center Column - Video Player */}
              <div className="lg:col-span-2 space-y-6">
                {/* Video Player */}
                <Card className="overflow-hidden rounded-2xl shadow-lg bg-gray-900">
                  <div className="relative aspect-video bg-gray-900">
                    {/* Video Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                    </div>

                    {/* Video Controls Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="relative w-full h-1 bg-gray-600 rounded-full cursor-pointer group">
                          <div className="absolute h-full bg-gradient-to-r from-orange-500 to-pink-500 rounded-full w-[45%]" />
                          {/* Key Moments Markers */}
                          <div className="absolute top-0 w-2 h-2 bg-yellow-400 rounded-full" style={{ left: "15%" }} />
                          <div className="absolute top-0 w-2 h-2 bg-blue-400 rounded-full" style={{ left: "42%" }} />
                          <div className="absolute top-0 w-2 h-2 bg-yellow-400 rounded-full" style={{ left: "85%" }} />
                          {/* Playhead */}
                          <div
                            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"
                            style={{ left: "45%" }}
                          />
                        </div>
                      </div>

                      {/* Controls */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors">
                            <Play className="w-5 h-5 text-white ml-0.5" />
                          </button>
                          <span className="text-white text-sm font-mono">
                            {currentTime} / {duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="w-9 h-9 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors">
                            <Volume2 className="w-4 h-4 text-white" />
                          </button>
                          <button className="w-9 h-9 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors">
                            <Settings className="w-4 h-4 text-white" />
                          </button>
                          <button className="w-9 h-9 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors">
                            <Maximize className="w-4 h-4 text-white" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Key Coaching Moments */}
                <Card className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">Key Coaching Moments</h3>
                  </div>

                  <div className="space-y-3">
                    {coachingMoments.map((moment) => (
                      <motion.div
                        key={moment.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: moment.id * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                      >
                        <div className="flex-shrink-0">
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                            {moment.timestamp}
                          </Badge>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{moment.title}</h4>
                          <p className="text-sm text-gray-600">{moment.description}</p>
                        </div>
                        <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                          <Play className="w-4 h-4 text-gray-600 ml-0.5" />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </Card>

                {/* Past Recordings */}
                <Card className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">Past recordings</h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {pastRecordings.map((recording) => (
                      <div
                        key={recording.id}
                        className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center justify-center w-full h-24 bg-gray-200 rounded-lg mb-3">
                          <Play className="w-8 h-8 text-gray-600" />
                        </div>
                        <p className="font-semibold text-gray-900 text-sm mb-1">{recording.date}</p>
                        <p className="text-xs text-gray-500">{recording.duration}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Ethics & AI Disclaimer */}
                <div className="text-center py-6 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wider">
                    Ethics & AI Disclaimer
                  </h4>
                  <p className="text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    These insights are generated by an automated system designed for coaching support and delivery analysis. This data is provided to support your growth and is not a definitive judgment of your personal or professional capabilities. Your video data is encrypted and remains under your exclusive control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
