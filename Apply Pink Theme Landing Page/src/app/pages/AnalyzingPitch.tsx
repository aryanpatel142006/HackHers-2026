import { useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { LayoutGrid, Megaphone, Video, Check, Loader } from "lucide-react";
import { Card } from "../components/ui/card";
import { Link } from "react-router";

export function AnalyzingPitch() {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate analyzing process and redirect to feedback after 5 seconds
    const timer = setTimeout(() => {
      navigate("/pitch-feedback");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const steps = [
    { id: 1, label: "Uploading video", sublabel: "Complete", status: "complete" },
    {
      id: 2,
      label: "Processing signals",
      sublabel: "Analyzing body language & tone...",
      status: "active",
    },
    { id: 3, label: "Generating coaching tips", sublabel: "", status: "pending" },
    { id: 4, label: "Finalizing report", sublabel: "", status: "pending" },
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
        <main className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-2xl w-full">
            <Card className="p-12 bg-white rounded-3xl shadow-xl border border-gray-200">
              {/* Analyzing Icon */}
              <div className="flex justify-center mb-8">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-24 h-24 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center"
                >
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Title */}
              <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
                Analyzing your pitch...
              </h1>
              <p className="text-center text-gray-600 mb-12 text-lg">
                Our AI is generating feedback on delivery signals and engagement metrics.
              </p>

              {/* Progress Steps */}
              <div className="space-y-4 mb-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.3 }}
                    className={`flex items-center gap-4 p-4 rounded-xl ${
                      step.status === "active"
                        ? "bg-orange-50"
                        : step.status === "complete"
                        ? "bg-green-50"
                        : "bg-gray-50"
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        step.status === "complete"
                          ? "bg-green-500"
                          : step.status === "active"
                          ? "bg-orange-500"
                          : "bg-gray-300"
                      }`}
                    >
                      {step.status === "complete" ? (
                        <Check className="w-5 h-5 text-white" />
                      ) : step.status === "active" ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Loader className="w-5 h-5 text-white" />
                        </motion.div>
                      ) : (
                        <span className="text-white font-bold">{step.id}</span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <p
                        className={`font-semibold ${
                          step.status === "active"
                            ? "text-orange-900"
                            : step.status === "complete"
                            ? "text-green-900"
                            : "text-gray-500"
                        }`}
                      >
                        {step.label}
                      </p>
                      {step.sublabel && (
                        <p
                          className={`text-sm ${
                            step.status === "active"
                              ? "text-orange-700"
                              : step.status === "complete"
                              ? "text-green-700"
                              : "text-gray-400"
                          }`}
                        >
                          {step.sublabel}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer Note */}
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm1 12H7V7h2v5zm0-6H7V4h2v2z" />
                </svg>
                <p>This may take up to a minute</p>
              </div>

              {/* View Results Button (appears after delay) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="mt-8 text-center"
              >
                <button
                  onClick={() => navigate("/pitch-feedback")}
                  className="text-orange-600 font-semibold hover:underline"
                >
                  View Results →
                </button>
              </motion.div>
            </Card>

            {/* Disclaimer */}
            <p className="text-center text-sm text-gray-500 mt-6">
              This feedback is coaching support, not a judgment. You control what you save.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
