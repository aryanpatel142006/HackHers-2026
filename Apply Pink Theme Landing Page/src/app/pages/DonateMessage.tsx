import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
import { motion } from "motion/react";
import { Heart, Rocket, Sparkles } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

export function DonateMessage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const amount = location.state?.amount || 50;

  const [selectedMessage, setSelectedMessage] = useState("");
  const [customMessage, setCustomMessage] = useState("");
  const [hideNameChecked, setHideNameChecked] = useState(false);

  const quickMessages = [
    { icon: Heart, text: "Supporting women entrepreneurs!" },
    { icon: Rocket, text: "To the moon! Keep building." },
    { icon: Sparkles, text: "Inspired by your mission!" },
  ];

  const handleContinue = () => {
    const finalMessage = selectedMessage === "custom" ? customMessage : selectedMessage;
    navigate(`/donate/${id}/summary`, {
      state: { amount, message: finalMessage, hideUsername: hideNameChecked },
    });
  };

  const handleBack = () => {
    navigate(`/donate/${id}/amount`);
  };

  return (
    <div className="min-h-screen bg-[#F8F8F5] py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-8">
            {/* Step 1 - Complete */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-400 text-white rounded-full flex items-center justify-center font-bold text-lg mb-2">
                1
              </div>
              <span className="text-sm font-medium text-gray-500 uppercase">Amount</span>
            </div>

            <div className="w-24 h-0.5 bg-orange-500" />

            {/* Step 2 - Active */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg mb-2">
                2
              </div>
              <span className="text-sm font-semibold text-orange-500 uppercase">Message</span>
            </div>

            <div className="w-24 h-0.5 bg-gray-300" />

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold text-lg mb-2">
                3
              </div>
              <span className="text-sm font-medium text-gray-500 uppercase">Payment</span>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="p-12 bg-white rounded-3xl shadow-xl border border-gray-200">
            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                Leave a word of encouragement
              </h1>
              <p className="text-gray-600 text-lg">
                Your message will be displayed on the fundraiser's recent activity feed.
              </p>
            </div>

            {/* Quick Message Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {quickMessages.map((msg, index) => {
                const Icon = msg.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedMessage(msg.text)}
                    className={`p-6 rounded-2xl border-3 transition-all text-center ${
                      selectedMessage === msg.text
                        ? "border-orange-500 bg-orange-50 shadow-lg scale-105"
                        : "border-gray-300 hover:border-orange-300 hover:bg-orange-50"
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 mx-auto mb-3 ${
                        selectedMessage === msg.text ? "text-orange-500" : "text-gray-600"
                      }`}
                    />
                    <p
                      className={`text-sm font-semibold ${
                        selectedMessage === msg.text ? "text-orange-600" : "text-gray-900"
                      }`}
                    >
                      {msg.text}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Custom Message Section */}
            <div className="mb-6">
              <button
                onClick={() => setSelectedMessage("custom")}
                className={`w-full text-left px-6 py-4 rounded-2xl border-3 transition-all font-semibold mb-4 ${
                  selectedMessage === "custom"
                    ? "border-orange-500 bg-orange-50 text-orange-600"
                    : "border-gray-300 text-gray-900 hover:border-orange-300"
                }`}
              >
                OR WRITE A CUSTOM MESSAGE
              </button>

              {selectedMessage === "custom" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                >
                  <textarea
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    placeholder="I'm so proud of what you're building with Lumiere Beauty Collective..."
                    rows={5}
                    className="w-full p-4 border-2 border-gray-300 rounded-2xl focus:border-orange-500 focus:outline-none resize-none"
                  />
                </motion.div>
              )}
            </div>

            {/* Hide Name Checkbox */}
            <div className="mb-8">
              <label className="flex items-center gap-3 cursor-pointer p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <input
                  type="checkbox"
                  checked={hideNameChecked}
                  onChange={(e) => setHideNameChecked(e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                />
                <span className="text-gray-700 font-medium">
                  Hide my name from the public supporters list
                </span>
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                onClick={handleBack}
                variant="outline"
                className="flex-1 py-6 rounded-full text-lg font-bold border-2"
              >
                Back
              </Button>
              <Button
                onClick={handleContinue}
                disabled={!selectedMessage || (selectedMessage === "custom" && !customMessage)}
                className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-white py-6 rounded-full text-lg font-bold shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue to Payment
              </Button>
            </div>
          </Card>

          {/* Donation Summary Footer */}
          <div className="mt-8 bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=100"
                    alt="Lumiere Beauty"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase">Donating To</p>
                  <p className="font-bold text-lg text-gray-900">Lumiere Beauty Collective</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600 uppercase">Amount</p>
                <p className="font-bold text-3xl text-orange-500">${amount.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
