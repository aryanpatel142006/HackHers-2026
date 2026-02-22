import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { motion } from "motion/react";
import { ChevronLeft, Lock, ArrowRight } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

export function DonateAmount() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");

  const amounts = [5, 10, 15, 25, 50, 75, 100, 250];

  const handleContinue = () => {
    const finalAmount = selectedAmount === 0 ? parseFloat(customAmount) : selectedAmount;
    navigate(`/donate/${id}/message`, { state: { amount: finalAmount } });
  };

  return (
    <div className="min-h-screen bg-[#F8F8F5] py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back Link */}
        <Link
          to={`/organization/${id}`}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="font-medium">Back to Campaign</span>
        </Link>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-8">
            {/* Step 1 - Active */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg mb-2">
                1
              </div>
              <span className="text-sm font-semibold text-orange-500 uppercase">Amount</span>
            </div>

            <div className="w-24 h-0.5 bg-gray-300" />

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold text-lg mb-2">
                2
              </div>
              <span className="text-sm font-medium text-gray-500 uppercase">Message</span>
            </div>

            <div className="w-24 h-0.5 bg-gray-300" />

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold text-lg mb-2">
                3
              </div>
              <span className="text-sm font-medium text-gray-500 uppercase">Summary</span>
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
                Support Lumiere Beauty Collective
              </h1>
              <p className="text-gray-600 text-lg">
                Choose an amount to help fuel women-led innovation.
              </p>
            </div>

            {/* Amount Selection Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`py-6 px-6 rounded-2xl border-3 transition-all font-bold text-2xl ${
                    selectedAmount === amount
                      ? "border-orange-500 bg-orange-50 text-orange-600 shadow-lg scale-105"
                      : "border-gray-300 text-gray-900 hover:border-orange-300 hover:bg-orange-50"
                  }`}
                >
                  ${amount}
                </button>
              ))}

              {/* Custom Amount */}
              <button
                onClick={() => setSelectedAmount(0)}
                className={`py-6 px-6 rounded-2xl border-3 transition-all font-bold text-2xl ${
                  selectedAmount === 0
                    ? "border-orange-500 bg-orange-50 text-orange-600 shadow-lg scale-105"
                    : "border-gray-300 text-gray-900 hover:border-orange-300 hover:bg-orange-50"
                }`}
              >
                Custom
              </button>
            </div>

            {/* Custom Amount Input */}
            {selectedAmount === 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mb-6"
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Enter Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-xl font-bold">
                    $
                  </span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full pl-10 pr-4 py-4 border-2 border-gray-300 rounded-2xl focus:border-orange-500 focus:outline-none text-xl font-semibold"
                  />
                </div>
              </motion.div>
            )}

            {/* Continue Button */}
            <Button
              onClick={handleContinue}
              disabled={selectedAmount === 0 && !customAmount}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-white py-6 rounded-full text-lg font-bold shadow-xl mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            {/* Security Info */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Lock className="w-4 h-4" />
              <span>256-bit SSL Encryption</span>
            </div>

            {/* Cancel Link */}
            <div className="text-center mt-4">
              <Link
                to={`/organization/${id}`}
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
              >
                Cancel
              </Link>
            </div>
          </Card>

          {/* Footer Note */}
          <p className="text-center text-sm text-gray-600 mt-6">
            <span className="font-semibold">SECURE CHECKOUT POWERED BY HERLAUNCH</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
