import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { LayoutGrid, Megaphone, Video, Upload, Mic, Pause, Video as VideoIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export function DemoHub() {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState("05:00");

  const checklist = [
    { id: 1, label: "Good Lighting", sublabel: "Face is evenly lit with no harsh shadows", completed: true },
    { id: 2, label: "Camera at Eye Level", sublabel: "Maintain eye contact with your prospect", completed: true },
    { id: 3, label: "Quiet Environment", sublabel: "Minimal background noise and echoes", completed: true },
    { id: 4, label: "Stable Internet", sublabel: "Strong Wi-Fi quality is good for 4k videos", completed: true },
  ];

  const pastRecordings = [
    { id: 1, date: "Nov 14, 2023", time: "08:45 AM", duration: "4M 53S" },
    { id: 2, date: "Oct 28, 2023", time: "03:15 PM", duration: "3M 22S" },
  ];

  const handleFinishAnalyze = () => {
    navigate("/analyzing-pitch");
  };

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

          {/* User Profile */}
          <div className="absolute bottom-8 left-6 right-6">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=100"
                alt="Maya Jenkins"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-sm text-gray-900">Maya Jenkins</p>
                <p className="text-xs text-gray-600">Founder @ Glow</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Pitch Demo Hub</h1>
              <p className="text-gray-600">
                Perfect your presentation. Record a 5-minute concise demo of your product or service to share with potential investors.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-4 mb-8">
              <Button
                variant="outline"
                className="bg-white rounded-full px-6 border-2 border-orange-500 text-orange-500 font-semibold"
              >
                Record Solo
              </Button>
              <Button variant="outline" className="rounded-full px-6">
                Upload Slides + Demo
              </Button>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Upload/Recording Area */}
              <div className="lg:col-span-2 space-y-6">
                {/* Upload Deck Card */}
                <Card className="p-8 bg-white rounded-2xl shadow-sm border border-gray-200">
                  <div className="flex items-center justify-center flex-col py-12 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                      <Upload className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Drop your pitch deck here</h3>
                    <p className="text-sm text-gray-500 mb-4">Supports PDF or PPTX (Max: 25MB)</p>
                    <Button variant="outline" className="rounded-lg">
                      Choose Files
                    </Button>
                  </div>
                </Card>

                {/* Slides Preview */}
                <Card className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <Button variant="ghost" size="icon">
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <span className="text-sm text-gray-600">Slide 1 of 15</span>
                    <Button variant="ghost" size="icon">
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Slide Preview */}
                  <div className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-3 opacity-30">
                        <svg viewBox="0 0 100 100" fill="none">
                          <path d="M20 40 L50 20 L80 40 L50 60 Z" fill="#10b981" />
                          <path d="M20 50 L50 70 L80 50 L50 30 Z" fill="#059669" opacity="0.7" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-500">Upload slides to preview</p>
                    </div>
                  </div>

                  {/* Progress Dots */}
                  <div className="flex justify-center gap-2">
                    <div className="w-12 h-1 bg-orange-500 rounded-full" />
                    <div className="w-12 h-1 bg-gray-300 rounded-full" />
                    <div className="w-12 h-1 bg-gray-300 rounded-full" />
                  </div>
                </Card>

                {/* Past Recordings */}
                <Card className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <VideoIcon className="w-5 h-5 text-orange-500" />
                    <h3 className="font-bold text-gray-900">Past Recordings</h3>
                  </div>

                  <div className="space-y-3">
                    {pastRecordings.map((recording) => (
                      <div
                        key={recording.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                            <VideoIcon className="w-5 h-5 text-orange-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{recording.date}</p>
                            <p className="text-xs text-gray-500">
                              {recording.time} • {recording.duration}
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="text-orange-500 border-orange-500">
                          View →
                        </Button>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Right Column - Video Recording & Checklist */}
              <div className="space-y-6">
                {/* Video Recording Card */}
                <Card className="overflow-hidden rounded-2xl shadow-lg bg-white border border-gray-200">
                  {/* Video Preview */}
                  <div className="relative bg-gradient-to-br from-orange-100 to-pink-100 aspect-[4/5]">
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {isRecording ? "RECORDING" : "READY"}
                    </div>
                    <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-mono">
                      {recordingTime}
                    </div>

                    {/* Avatar/Person Placeholder */}
                    <div className="absolute inset-0 flex items-end justify-center pb-8">
                      <div className="w-full max-w-sm">
                        <img
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                          alt="Recording preview"
                          className="w-full rounded-t-3xl"
                        />
                      </div>
                    </div>

                    {/* Recording Controls */}
                    <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 border-0"
                      >
                        <Pause className="w-5 h-5 text-white" />
                      </Button>
                      <Button
                        size="icon"
                        className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600"
                        onClick={() => setIsRecording(!isRecording)}
                      >
                        <div className="w-6 h-6 bg-white rounded-full" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 border-0"
                      >
                        <Mic className="w-5 h-5 text-white" />
                      </Button>
                    </div>
                  </div>

                  {/* Finish & Analyze Button */}
                  <div className="p-4">
                    <Button
                      onClick={handleFinishAnalyze}
                      className="w-full bg-white border-2 border-gray-300 text-gray-900 hover:bg-gray-50 rounded-full font-semibold"
                    >
                      Finish & Analyze
                    </Button>
                  </div>
                </Card>

                {/* Live Coaching Toggle */}
                <Card className="p-4 bg-white rounded-2xl shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                        <VideoIcon className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Live Coaching</p>
                        <p className="text-xs text-gray-500">Coach me live & capture</p>
                      </div>
                    </div>
                    <div className="relative">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500" />
                    </div>
                  </div>
                </Card>

                {/* Recording Checklist */}
                <Card className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-orange-600" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M3 2h10a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1zm0 1v10h10V3H3zm2 2h6v1H5V5zm0 2h6v1H5V7zm0 2h4v1H5V9z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900">Recording Checklist</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Ensure you're ready for the best pitch quality
                  </p>

                  <div className="space-y-3">
                    {checklist.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                            item.completed ? "bg-green-500" : "bg-gray-300"
                          }`}
                        >
                          {item.completed && (
                            <svg
                              className="w-3 h-3 text-white"
                              viewBox="0 0 12 12"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M2 6l3 3 5-6" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-gray-900">{item.label}</p>
                          <p className="text-xs text-gray-500">{item.sublabel}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <p className="text-sm text-orange-900">
                      <span className="font-semibold">Pro Tip:</span> Take a deep breath and smile at the start. Cha! A warm tone encourages engagement!
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
