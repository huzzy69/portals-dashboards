import { 
  CreditCard, Lock, Shield, Check, ArrowLeft, Crown, Star, 
  Calendar, User, MapPin, Building, AlertCircle, Sparkles
} from 'lucide-react';
import { useState } from 'react';

interface PaymentPageProps {
  onNavigate: (page: string) => void;
  selectedPlan?: {
    name: string;
    price: string;
    period: string;
    savings?: string;
  };
}

export function PaymentPage({ onNavigate, selectedPlan }: PaymentPageProps) {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    email: '',
    country: '',
    zipCode: '',
  });
  const [processing, setProcessing] = useState(false);

  // Default plan if none selected
  const plan = selectedPlan || {
    name: 'Quarterly',
    price: '$69',
    period: '/3 months',
    savings: 'Save 20%',
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\s/g, '');
    value = value.replace(/(\d{4})/g, '$1 ').trim();
    setFormData(prev => ({ ...prev, cardNumber: value }));
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    setFormData(prev => ({ ...prev, expiry: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      // Navigate to VIP dashboard after successful payment
      onNavigate('vip-dashboard');
    }, 2000);
  };

  const features = [
    '98% AI Prediction Accuracy',
    'Unlimited VIP Predictions',
    'Priority Support 24/7',
    'Advanced Analytics Dashboard',
    'Real-time Notifications',
    'Cancel Anytime',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background orbs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative min-h-screen py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => onNavigate('vip')}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Plans</span>
          </button>

          {/* Header */}
          <div className="text-center mb-8 lg:mb-12">
            <div className="inline-flex items-center justify-center space-x-2 mb-4">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-purple-600 rounded-xl glow-orange">
                <Crown className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl lg:text-4xl text-white mb-2">
              Complete Your <span className="text-gradient-orange">VIP Upgrade</span>
            </h1>
            <p className="text-gray-400">Secure payment powered by industry-leading encryption</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Payment Method Selection */}
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                  <h2 className="text-xl text-white mb-4 flex items-center space-x-2">
                    <CreditCard className="w-5 h-5 text-orange-400" />
                    <span>Payment Method</span>
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        paymentMethod === 'card'
                          ? 'border-orange-500 bg-orange-500/10'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <CreditCard className={`w-6 h-6 mx-auto mb-2 ${
                        paymentMethod === 'card' ? 'text-orange-400' : 'text-gray-400'
                      }`} />
                      <div className={`text-sm ${
                        paymentMethod === 'card' ? 'text-white' : 'text-gray-400'
                      }`}>
                        Credit Card
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('paypal')}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        paymentMethod === 'paypal'
                          ? 'border-orange-500 bg-orange-500/10'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className={`w-6 h-6 mx-auto mb-2 flex items-center justify-center text-xl ${
                        paymentMethod === 'paypal' ? 'text-orange-400' : 'text-gray-400'
                      }`}>
                        P
                      </div>
                      <div className={`text-sm ${
                        paymentMethod === 'paypal' ? 'text-white' : 'text-gray-400'
                      }`}>
                        PayPal
                      </div>
                    </button>
                  </div>

                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      {/* Card Name */}
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">
                          Cardholder Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            required
                            className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                          />
                        </div>
                      </div>

                      {/* Card Number */}
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">
                          Card Number
                        </label>
                        <div className="relative">
                          <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleCardNumberChange}
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                            required
                            className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                          />
                        </div>
                      </div>

                      {/* Expiry & CVV */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-gray-300 mb-2">
                            Expiry Date
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              name="expiry"
                              value={formData.expiry}
                              onChange={handleExpiryChange}
                              placeholder="MM/YY"
                              maxLength={5}
                              required
                              className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm text-gray-300 mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            placeholder="123"
                            maxLength={3}
                            required
                            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === 'paypal' && (
                    <div className="py-8 text-center">
                      <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="text-3xl text-blue-400">P</div>
                      </div>
                      <p className="text-gray-400 mb-4">
                        You will be redirected to PayPal to complete your payment
                      </p>
                      <div className="text-sm text-gray-500">
                        Secure payment via PayPal
                      </div>
                    </div>
                  )}
                </div>

                {/* Billing Information */}
                {paymentMethod === 'card' && (
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                    <h2 className="text-xl text-white mb-4 flex items-center space-x-2">
                      <Building className="w-5 h-5 text-orange-400" />
                      <span>Billing Information</span>
                    </h2>

                    <div className="space-y-4">
                      {/* Email */}
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john.doe@example.com"
                          required
                          className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                        />
                      </div>

                      {/* Country & Zip */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-gray-300 mb-2">
                            Country
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <select
                              name="country"
                              value={formData.country}
                              onChange={handleInputChange}
                              required
                              className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all appearance-none"
                            >
                              <option value="">Select</option>
                              <option value="US">United States</option>
                              <option value="UK">United Kingdom</option>
                              <option value="CA">Canada</option>
                              <option value="AU">Australia</option>
                              <option value="DE">Germany</option>
                              <option value="FR">France</option>
                              <option value="ES">Spain</option>
                              <option value="IT">Italy</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm text-gray-300 mb-2">
                            ZIP / Postal Code
                          </label>
                          <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            placeholder="12345"
                            required
                            className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Security Notice */}
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-xl rounded-xl border border-green-500/30 p-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-green-400 mb-1">Secure Payment</p>
                      <p className="text-xs text-gray-400">
                        Your payment information is encrypted with 256-bit SSL encryption. We never store your card details.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={processing}
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-xl hover:from-orange-600 hover:to-purple-700 transition-all shadow-lg glow-orange flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {processing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5" />
                      <span>Complete Payment - {plan.price}</span>
                    </>
                  )}
                </button>

                {/* Trust Badges */}
                <div className="flex items-center justify-center space-x-6 text-gray-500 text-xs">
                  <div className="flex items-center space-x-1">
                    <Lock className="w-3 h-3" />
                    <span>SSL Secured</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Shield className="w-3 h-3" />
                    <span>PCI Compliant</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Check className="w-3 h-3" />
                    <span>Money-back Guarantee</span>
                  </div>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Plan Summary */}
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                  <h2 className="text-xl text-white mb-4">Order Summary</h2>
                  
                  <div className="bg-gradient-to-br from-orange-500/10 to-purple-600/10 border border-orange-500/30 rounded-xl p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Crown className="w-5 h-5 text-yellow-400" />
                        <span className="text-white">{plan.name} VIP</span>
                      </div>
                      {plan.savings && (
                        <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                          {plan.savings}
                        </span>
                      )}
                    </div>
                    <div className="flex items-end space-x-1">
                      <span className="text-3xl text-white">{plan.price}</span>
                      <span className="text-gray-400 text-sm mb-1">{plan.period}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Subtotal</span>
                      <span className="text-white">{plan.price}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Tax</span>
                      <span className="text-white">$0.00</span>
                    </div>
                    <div className="border-t border-white/10 pt-3">
                      <div className="flex items-center justify-between">
                        <span className="text-white">Total</span>
                        <span className="text-2xl text-white">{plan.price}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 flex items-start space-x-2">
                    <AlertCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-blue-400">
                      Billed {plan.period}. Cancel anytime before renewal.
                    </p>
                  </div>
                </div>

                {/* Features Included */}
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                  <h3 className="text-lg text-white mb-4 flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    <span>What's Included</span>
                  </h3>
                  <div className="space-y-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Money-back Guarantee */}
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-xl border border-green-500/30 p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-white">30-Day Money-Back Guarantee</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    Not satisfied? Get a full refund within 30 days, no questions asked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
