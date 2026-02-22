import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
import { motion } from "motion/react";
import { Edit, Lock, CreditCard, Shield } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { supabase } from "../../lib/supabaseClient";

export function DonateSummary() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const amount = location.state?.amount || 50;
  const message = location.state?.message || "";
  const hideUsername = location.state?.hideUsername || false;

  const [processing, setProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState<string | null>(null);

  const handlePayNow = async () => {
    setProcessing(true);
    setPaymentError(null);
    setPaymentSuccess(null);
    try {
      const { data, error } = await supabase.functions.invoke("fiserv-payment", {
        body: {
          amount,
          currency: "USD",
          description: "Thanks for supporting HerLaunch.",
        },
      });

      setProcessing(false);

      if (error) {
        setPaymentError(error.message);
        return;
      }

      if (!data?.ok) {
        const messageText =
          typeof data?.data === "string"
            ? data.data
            : data?.data?.message || "Payment failed. Please try again.";
        setPaymentError(messageText);
        return;
      }

      const paymentUrl = data?.data?.paymentUrl || data?.data?.url;
      if (!paymentUrl) {
        setPaymentError("Payment link was not returned. Please try again.");
        return;
      }
      setPaymentSuccess("Redirecting to secure payment...");
      window.location.href = paymentUrl;
    } catch (err) {
      setProcessing(false);
      setPaymentError(
        err instanceof Error ? err.message : "Payment request failed. Please try again."
      );
    }
  };

  const handleBack = () => {
    navigate(`/donate/${id}/message`, { state: { amount } });
  };

  return (
    <div className="min-h-screen bg-[#F8F8F5] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Review Your Support</h1>
          <p className="text-gray-600 text-lg">
            Please review your donation details before completing the payment.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-8">
            {/* Step 1 - Complete */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg mb-2">
                1
              </div>
              <span className="text-sm font-medium text-gray-500 uppercase">Amount</span>
            </div>

            <div className="w-24 h-0.5 bg-orange-500" />

            {/* Step 2 - Complete */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg mb-2">
                2
              </div>
              <span className="text-sm font-medium text-gray-500 uppercase">Details</span>
            </div>

            <div className="w-24 h-0.5 bg-orange-500" />

            {/* Step 3 - Active */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg mb-2">
                3
              </div>
              <span className="text-sm font-semibold text-orange-500 uppercase">Summary</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="p-10 bg-white rounded-3xl shadow-xl border border-gray-200 mb-6">
            {/* Donation Amount Section */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase mb-1">
                    Donation Amount
                  </p>
                  <p className="text-5xl font-bold text-orange-500">${amount.toFixed(2)}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate(`/donate/${id}/amount`)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
              </div>
            </div>

            {/* Supporter Information Section */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-gray-600 uppercase">
                  Supporter Information
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate(`/donate/${id}/message`, { state: { amount } })}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="mb-4">
                  <p className="font-bold text-gray-900 text-lg">Sarah Jenkins</p>
                  <p className="text-gray-600">sarah.jenkins@example.com</p>
                </div>
              </div>
            </div>

            {/* Message Section */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-gray-600 uppercase">
                  Message to Lumiere Beauty
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate(`/donate/${id}/message`, { state: { amount } })}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 italic leading-relaxed">
                  "{message || "Supporting women entrepreneurs!"}"
                </p>
              </div>

              {hideUsername && (
                <p className="text-sm text-gray-500 mt-3 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Your name will remain anonymous on the public supporters list
                </p>
              )}
            </div>

            {/* Payment Button */}
            {paymentError && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-700 text-sm">
                {paymentError}
              </div>
            )}
            {paymentSuccess && (
              <div className="mb-4 p-3 rounded-lg bg-green-50 text-green-700 text-sm">
                {paymentSuccess}
              </div>
            )}

            <Button
              onClick={handlePayNow}
              disabled={processing}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-white py-7 rounded-full text-xl font-bold shadow-2xl mb-4 disabled:opacity-50"
            >
              <Lock className="w-5 h-5 mr-2" />
              {processing ? "Processing..." : `Pay $${amount.toFixed(2)} Now`}
            </Button>

            {/* Payment Icons */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-gray-600" />
              </div>
              <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
              </div>
              <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="4" y="8" width="16" height="8" rx="2" />
                </svg>
              </div>
            </div>

            {/* Security Info */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-6">
              <Shield className="w-4 h-4" />
              <span className="font-semibold">SECURE SSL ENCRYPTED PAYMENT</span>
            </div>

            {/* Back to Fundraiser Link */}
            <div className="text-center">
              <button
                onClick={handleBack}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                ← Back to Fundraiser
              </button>
            </div>
          </Card>

          {/* Footer Info */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">© 2024 HerLaunch.</span> Secured by Stripe.
            </p>
            <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
              <button className="hover:text-gray-900 transition-colors">Privacy Policy</button>
              <span>•</span>
              <button className="hover:text-gray-900 transition-colors">Terms of Service</button>
              <span>•</span>
              <button className="hover:text-gray-900 transition-colors">Help Center</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
