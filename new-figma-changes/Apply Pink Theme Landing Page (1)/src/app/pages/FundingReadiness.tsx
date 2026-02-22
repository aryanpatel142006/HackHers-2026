import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle, Circle, Target, TrendingUp, DollarSign, Users } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  points: number;
}

const launchTasks: Task[] = [
  { id: 1, title: "Business Plan", description: "Complete your business plan", completed: true, points: 15 },
  { id: 2, title: "Financial Projections", description: "Create 3-year projections", completed: true, points: 20 },
  { id: 3, title: "Pitch Deck", description: "Design your investor pitch", completed: true, points: 15 },
  { id: 4, title: "Legal Structure", description: "Register your company", completed: false, points: 10 },
  { id: 5, title: "Market Research", description: "Validate your target market", completed: false, points: 15 },
  { id: 6, title: "Team Building", description: "Assemble your core team", completed: false, points: 10 },
  { id: 7, title: "Product MVP", description: "Build minimum viable product", completed: false, points: 15 },
];

export function FundingReadiness() {
  const [tasks, setTasks] = useState<Task[]>(launchTasks);
  const [fundingGoal] = useState(50000);
  const [currentFunding] = useState(32500);

  const completedPoints = tasks.filter(t => t.completed).reduce((sum, t) => sum + t.points, 0);
  const totalPoints = tasks.reduce((sum, t) => sum + t.points, 0);
  const readinessScore = Math.round((completedPoints / totalPoints) * 100);
  const fundingProgress = (currentFunding / fundingGoal) * 100;

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Funding Readiness Hub</h1>
          <p className="text-muted-foreground">Track your progress and get ready to secure funding</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side - Launch Tasks */}
          <div className="lg:col-span-2 space-y-6">
            {/* Readiness Score */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-8 bg-gradient-to-br from-white to-purple-50/50 backdrop-blur-xl border-purple-200/50">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Readiness Score</h3>
                    <p className="text-sm text-muted-foreground">Complete tasks to increase your score</p>
                  </div>
                  <div className="relative w-32 h-32">
                    {/* Circular Progress */}
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-purple-100"
                      />
                      <motion.circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="url(#scoreGradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 56}`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 56 }}
                        animate={{
                          strokeDashoffset: 2 * Math.PI * 56 * (1 - readinessScore / 100),
                        }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={{
                          filter: `drop-shadow(0 0 ${readinessScore > 70 ? '12px' : '8px'} rgba(168, 85, 247, ${readinessScore / 100}))`,
                        }}
                      />
                      <defs>
                        <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#A855F7" />
                          <stop offset="50%" stopColor="#FF6B8A" />
                          <stop offset="100%" stopColor="#5DDEC4" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">{readinessScore}</div>
                        <div className="text-xs text-muted-foreground">/ 100</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>{tasks.filter(t => t.completed).length} Completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Circle className="w-4 h-4 text-muted-foreground" />
                    <span>{tasks.filter(t => !t.completed).length} Remaining</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Tasks Checklist */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Launch Tasks</h3>
              {tasks.map((task, index) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card
                    className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
                      task.completed
                        ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200'
                        : 'bg-white hover:bg-purple-50/50'
                    }`}
                    onClick={() => toggleTask(task.id)}
                  >
                    <div className="flex items-start gap-4">
                      {/* Progress Ring */}
                      <div className="relative w-12 h-12 flex-shrink-0">
                        <svg className="w-12 h-12 transform -rotate-90">
                          <circle
                            cx="24"
                            cy="24"
                            r="20"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="none"
                            className={task.completed ? "text-green-200" : "text-purple-100"}
                          />
                          {task.completed && (
                            <motion.circle
                              cx="24"
                              cy="24"
                              r="20"
                              stroke="currentColor"
                              strokeWidth="3"
                              fill="none"
                              strokeLinecap="round"
                              className="text-green-500"
                              initial={{ strokeDasharray: `${2 * Math.PI * 20}`, strokeDashoffset: 2 * Math.PI * 20 }}
                              animate={{ strokeDashoffset: 0 }}
                              transition={{ duration: 0.5 }}
                            />
                          )}
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          {task.completed ? (
                            <CheckCircle className="w-6 h-6 text-green-500" />
                          ) : (
                            <Circle className="w-6 h-6 text-purple-300" />
                          )}
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <h4 className={`font-semibold ${task.completed ? 'text-green-900' : ''}`}>
                            {task.title}
                          </h4>
                          <span className="text-sm font-medium text-primary">+{task.points} pts</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{task.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - GoFundMe Dashboard */}
          <div className="space-y-6">
            {/* Funding Thermometer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6 bg-gradient-to-br from-white via-purple-50/30 to-teal-50/30 backdrop-blur-xl border-purple-200/50 relative overflow-hidden">
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-purple-100/40 backdrop-blur-sm"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <Target className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">GoFundMe Dashboard</h3>
                  </div>

                  {/* Funding Thermometer */}
                  <div className="mb-8">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Raised</span>
                      <span className="text-sm font-medium">${currentFunding.toLocaleString()}</span>
                    </div>

                    <div className="relative h-64 w-16 mx-auto bg-white/50 rounded-full border-4 border-white shadow-lg overflow-hidden">
                      <motion.div
                        className="absolute bottom-0 w-full bg-gradient-to-t from-purple-600 via-primary to-teal-400"
                        initial={{ height: 0 }}
                        animate={{ height: `${fundingProgress}%` }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/30"></div>
                      </motion.div>

                      {/* Thermometer bulb */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-purple-600 to-primary rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                        <DollarSign className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <div className="text-center mt-6">
                      <div className="text-3xl font-bold text-primary mb-1">
                        {Math.round(fundingProgress)}%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Goal: ${fundingGoal.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <Progress value={fundingProgress} className="mb-4" />

                  <Button className="w-full" size="lg">
                    View Campaign Details
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-gradient-to-br from-purple-100/50 to-white backdrop-blur-xl border-purple-200/50">
                <TrendingUp className="w-8 h-8 text-purple-600 mb-2" />
                <div className="text-2xl font-bold">247</div>
                <div className="text-xs text-muted-foreground">Backers</div>
              </Card>

              <Card className="p-4 bg-gradient-to-br from-teal-100/50 to-white backdrop-blur-xl border-teal-200/50">
                <Users className="w-8 h-8 text-teal-600 mb-2" />
                <div className="text-2xl font-bold">1.2K</div>
                <div className="text-xs text-muted-foreground">Shares</div>
              </Card>
            </div>

            {/* Tips Card */}
            <Card className="p-6 bg-gradient-to-br from-pink-100/50 to-white backdrop-blur-xl border-pink-200/50">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <span className="text-2xl">💡</span>
                Funding Tips
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Update your campaign weekly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Share your story on social media</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Thank your backers personally</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
