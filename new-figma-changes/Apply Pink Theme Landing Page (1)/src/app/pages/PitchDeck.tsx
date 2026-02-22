import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Send, CheckCircle, Circle, FileText, Lightbulb } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { ScrollArea } from "../components/ui/scroll-area";

interface Slide {
  id: number;
  title: string;
  thumbnail: string;
}

interface Message {
  id: number;
  role: "user" | "ai";
  content: string;
  timestamp: Date;
}

interface ChecklistItem {
  id: number;
  text: string;
  completed: boolean;
}

const slides: Slide[] = [
  { id: 1, title: "Cover", thumbnail: "📊" },
  { id: 2, title: "Problem", thumbnail: "❗" },
  { id: 3, title: "Solution", thumbnail: "💡" },
  { id: 4, title: "Market Size", thumbnail: "📈" },
  { id: 5, title: "Business Model", thumbnail: "💰" },
  { id: 6, title: "Traction", thumbnail: "🚀" },
  { id: 7, title: "Team", thumbnail: "👥" },
  { id: 8, title: "Financials", thumbnail: "💵" },
  { id: 9, title: "Ask", thumbnail: "🎯" },
];

const initialMessages: Message[] = [
  {
    id: 1,
    role: "ai",
    content: "Hello! I'm your AI investor advisor. I can help you prepare for investor questions, validate your business idea, and refine your pitch. What would you like to discuss?",
    timestamp: new Date(),
  },
];

const initialChecklist: ChecklistItem[] = [
  { id: 1, text: "Define unique value proposition", completed: false },
  { id: 2, text: "Identify target market size", completed: false },
  { id: 3, text: "Calculate unit economics", completed: false },
  { id: 4, text: "Outline go-to-market strategy", completed: false },
  { id: 5, text: "Prepare financial projections", completed: false },
];

export function PitchDeck() {
  const [selectedSlide, setSelectedSlide] = useState(1);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [checklist, setChecklist] = useState<ChecklistItem[]>(initialChecklist);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue("");
    setIsAiThinking(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "That's a great question! When addressing market size, investors typically want to see TAM, SAM, and SOM. Have you calculated these metrics?",
        "For your business model, consider highlighting your revenue streams and pricing strategy. What's your primary monetization method?",
        "Investors love to see traction. Can you share your key metrics like user growth, revenue, or partnerships?",
        "Your unique value proposition should be crystal clear. What makes your solution 10x better than existing alternatives?",
        "When discussing financials, focus on your path to profitability. What's your burn rate and runway?",
      ];

      const aiMessage: Message = {
        id: messages.length + 2,
        role: "ai",
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsAiThinking(false);

      // Randomly complete a checklist item
      setChecklist(prev => {
        const incomplete = prev.filter(item => !item.completed);
        if (incomplete.length > 0 && Math.random() > 0.5) {
          const itemToComplete = incomplete[Math.floor(Math.random() * incomplete.length)];
          return prev.map(item =>
            item.id === itemToComplete.id ? { ...item, completed: true } : item
          );
        }
        return prev;
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-50 to-purple-50">
      <div className="max-w-[1800px] mx-auto p-6">
        <div className="grid lg:grid-cols-2 gap-6 h-[calc(100vh-8rem)]">
          {/* Left Side - Pitch Deck Canvas */}
          <div className="border border-gray-200 rounded-2xl bg-white shadow-lg p-6 overflow-auto">
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Pitch Deck Canvas</h2>
                </div>
                <Button className="gap-2 bg-gradient-to-r from-primary to-purple-500">
                  <Sparkles className="w-4 h-4" />
                  AI Generate
                </Button>
              </div>

              {/* Slide Thumbnails */}
              <div className="mb-6">
                <div className="grid grid-cols-3 gap-4 pb-4 max-h-[300px] overflow-y-auto">
                  {slides.map((slide) => (
                    <motion.div
                      key={slide.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedSlide(slide.id)}
                      className={`cursor-pointer rounded-lg border-2 transition-all ${
                        selectedSlide === slide.id
                          ? "border-primary shadow-lg shadow-primary/20"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 rounded-t-lg flex items-center justify-center">
                        <span className="text-4xl">{slide.thumbnail}</span>
                      </div>
                      <div className="p-2 bg-white rounded-b-lg">
                        <div className="text-xs font-medium text-center">{slide.title}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Main Slide Preview */}
              <Card className="flex-1 bg-gradient-to-br from-white to-pink-50/50 flex items-center justify-center relative overflow-hidden min-h-[300px]">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100/20 via-purple-100/20 to-pink-100/20"></div>
                <div className="relative z-10 text-center p-8">
                  <motion.div
                    key={selectedSlide}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-4"
                  >
                    <div className="text-7xl mb-6">
                      {slides.find(s => s.id === selectedSlide)?.thumbnail}
                    </div>
                    <h3 className="text-3xl font-bold">
                      {slides.find(s => s.id === selectedSlide)?.title}
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Click the AI Generate button to create content for this slide
                    </p>
                  </motion.div>
                </div>

                {/* Magic AI Icon */}
                <motion.div
                  className="absolute top-4 right-4"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Sparkles className="w-8 h-8 text-purple-500 opacity-50" />
                </motion.div>
              </Card>
            </div>
          </div>

          {/* Right Side - Split into Chat and Checklist */}
          <div className="flex flex-col gap-6 overflow-hidden">
            {/* Chat Interface */}
            <div className="flex-1 bg-gradient-to-br from-[#1a0520] to-[#2d0a3d] rounded-2xl text-white p-6 flex flex-col shadow-lg overflow-hidden">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h2 className="text-xl font-bold">Investor Q&A Assistant</h2>
              </div>

              {/* Messages */}
              <div className="flex-1 mb-4 pr-4 overflow-y-auto">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.role === "user"
                            ? "bg-gradient-to-r from-primary to-purple-600 text-white"
                            : "bg-purple-900/50 border border-purple-700/50 backdrop-blur-sm"
                        }`}
                      >
                        {message.role === "ai" && (
                          <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="w-4 h-4 text-purple-400" />
                            <span className="text-xs text-purple-300">AI Assistant</span>
                          </div>
                        )}
                        <p className="text-sm leading-relaxed">{message.content}</p>
                      </div>
                    </motion.div>
                  ))}

                  {isAiThinking && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-purple-900/50 border border-purple-700/50 backdrop-blur-sm rounded-2xl px-4 py-3">
                        <div className="flex items-center gap-2">
                          <motion.div
                            className="w-8 h-8 rounded-full border-2 border-purple-500 border-t-transparent"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          ></motion.div>
                          <span className="text-sm text-purple-300">AI is thinking...</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Ask about fundraising, pitch strategy..."
                  className="flex-1 bg-purple-900/30 border-purple-700/50 text-white placeholder:text-purple-300"
                />
                <Button onClick={handleSendMessage} size="icon" disabled={isAiThinking}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Validation Checklist */}
            <div className="bg-gradient-to-br from-pink-100/80 to-purple-100/80 backdrop-blur-sm p-6 border border-gray-200 rounded-2xl shadow-lg max-h-[400px] overflow-y-auto">
              <div className="flex items-center gap-2 mb-6">
                <Lightbulb className="w-5 h-5 text-purple-600" />
                <h3 className="font-bold text-sm">Idea Validation</h3>
              </div>

              <div className="space-y-3">
                {checklist.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-start gap-3 p-3 rounded-lg transition-all ${
                      item.completed
                        ? "bg-green-100 border border-green-300"
                        : "bg-white/50 border border-purple-200"
                    }`}
                  >
                    {item.completed ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      </motion.div>
                    ) : (
                      <Circle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    )}
                    <span className={`text-xs leading-relaxed ${item.completed ? "line-through text-green-700" : "text-foreground"}`}>
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-white/80 rounded-lg border border-purple-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">
                    {checklist.filter(item => item.completed).length}/{checklist.length}
                  </div>
                  <div className="text-xs text-muted-foreground">Items Completed</div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-300/50">
                <p className="text-xs text-purple-700">
                  💡 <strong>Tip:</strong> Chat with the AI to automatically complete validation items
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}