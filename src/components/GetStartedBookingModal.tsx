import React, { useState } from 'react';
import { X, CheckCircle2, Copy, ShieldCheck, Mail, Phone, User, Sparkles, Send } from 'lucide-react';

interface PricingOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: string;
}

export const PricingOrderModal: React.FC<PricingOrderModalProps> = ({
  isOpen,
  onClose,
  initialPackage = 'City Tour & Daily Chauffeur (AED 800/day)',
}) => {
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('Male');
  const [selectedPackage, setSelectedPackage] = useState(initialPackage);
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [virtualToken, setVirtualToken] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync initialPackage when modal opens with a specific selection
  React.useEffect(() => {
    if (initialPackage) {
      setSelectedPackage(initialPackage);
    }
  }, [initialPackage]);

  if (!isOpen) return null;

  const generateToken = () => {
    const randomHex1 = Math.floor(1000 + Math.random() * 9000);
    const randomHex2 = Math.floor(1000 + Math.random() * 9000);
    return `PD-${randomHex1}-${randomHex2}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newToken = generateToken();
      setVirtualToken(newToken);
      setIsSubmitting(false);
    }, 600);
  };

  const handleCopyToken = () => {
    if (virtualToken) {
      navigator.clipboard.writeText(virtualToken);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  const handleReset = () => {
    setVirtualToken(null);
    setFullName('');
    setEmail('');
    setContact('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 font-['DM_Sans',sans-serif] overflow-y-auto animate-in fade-in duration-300">

      {/* Neumorphic Dark Violet Container matching reference image */}
      <div className="relative w-full max-w-lg bg-[#15141e] border border-white/10 rounded-[2rem] p-6 sm:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(139,92,246,0.12)] text-white space-y-6 my-auto overflow-hidden">

        {/* Ambient Purple Background Glow */}
        <div className="absolute -top-24 -left-24 w-60 h-60 bg-purple-600/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-indigo-600/20 rounded-full blur-[80px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/60 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 transition-all cursor-pointer z-20"
          title="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!virtualToken ? (
          <>
            {/* Header matching reference: "Join us in a Snap" */}
            <div className="text-center space-y-2 relative z-10 pt-2">
              <span className="text-[11px] font-mono tracking-[0.25em] text-purple-400 font-bold uppercase block">
                VIP Package Reservation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Join us in a Snap
              </h2>
              <p className="text-xs text-white/60 max-w-xs mx-auto">
                Complete your details below to place your luxury chauffeur order.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10 pt-1">

              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-white/80 pl-1 block">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-[#1c1b28] text-white text-xs font-medium pl-10 pr-4 py-3.5 rounded-xl border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] focus:outline-none focus:border-purple-500/60 focus:bg-[#222030] transition-all"
                  />
                </div>
              </div>

              {/* Gender & Package Chosen Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                {/* Gender */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-white/80 pl-1 block">
                    Gender
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full bg-[#1c1b28] text-white text-xs font-medium px-3.5 py-3.5 rounded-xl border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] focus:outline-none focus:border-purple-500/60 transition-all cursor-pointer appearance-none"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>

                {/* Package Chosen */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-white/80 pl-1 block">
                    Package Chosen
                  </label>
                  <select
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    className="w-full bg-[#1c1b28] text-white text-xs font-medium px-3.5 py-3.5 rounded-xl border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] focus:outline-none focus:border-purple-500/60 transition-all cursor-pointer appearance-none truncate"
                  >
                    <option value="Airport Transfers & Single Trip (AED 250)">
                      Airport Transfer (AED 250)
                    </option>
                    <option value="City Tour & Daily Chauffeur (AED 800/day)">
                      City Tour & Daily (AED 800)
                    </option>
                    <option value="Executive Protection VIP Elite (AED 6,500/month)">
                      VIP Protection (AED 6,500/mo)
                    </option>
                  </select>
                </div>

              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-white/80 pl-1 block">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@site.com"
                    className="w-full bg-[#1c1b28] text-white text-xs font-medium pl-10 pr-4 py-3.5 rounded-xl border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] focus:outline-none focus:border-purple-500/60 focus:bg-[#222030] transition-all"
                  />
                </div>
              </div>

              {/* Contact / Phone */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-white/80 pl-1 block">
                  Contact / Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="tel"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="+971 50 123 4567"
                    className="w-full bg-[#1c1b28] text-white text-xs font-medium pl-10 pr-4 py-3.5 rounded-xl border border-white/10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] focus:outline-none focus:border-purple-500/60 focus:bg-[#222030] transition-all"
                  />
                </div>
              </div>

              {/* Submit Button styled as in reference image: "Begin Your Journey" in purple rounded pill button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm tracking-wide shadow-[0_10px_25px_rgba(147,51,234,0.4)] hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing Order...</span>
                  ) : (
                    <>
                      <span>Begin Your Journey</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </>
        ) : (
          /* SUCCESS TOKEN CONFIRMATION DISPLAY */
          <div className="text-center space-y-6 relative z-10 py-2 animate-in zoom-in-95 duration-200">

            <div className="w-14 h-14 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-300 flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">
                Order Submitted Successfully
              </span>
              <h2 className="text-2xl font-bold text-white">Your Virtual Token</h2>
              <p className="text-xs text-white/70 max-w-sm mx-auto">
                Thank you, <strong className="text-white">{fullName}</strong>! Your order has been dispatched.
              </p>
            </div>

            {/* Virtual Token Display Box */}
            <div className="bg-[#1e1c2b] border-2 border-purple-500/50 rounded-2xl p-5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 block">
                Official Reservation Token
              </span>

              <div className="flex items-center justify-center space-x-3 bg-black/40 border border-purple-500/30 rounded-xl py-3 px-4">
                <span className="font-mono text-xl sm:text-2xl font-extrabold text-purple-300 tracking-wider">
                  {virtualToken}
                </span>
                <button
                  onClick={handleCopyToken}
                  className="p-2 rounded-lg bg-purple-600/30 hover:bg-purple-600/50 border border-purple-400/40 text-purple-200 transition-all cursor-pointer"
                  title="Copy Token"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              {isCopied && (
                <span className="text-[11px] text-emerald-400 font-semibold block animate-in fade-in">
                  Token copied to clipboard!
                </span>
              )}
            </div>

            {/* Dispatch Confirmation Notes */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-left text-xs space-y-2">
              <div className="flex items-center space-x-2 text-white/80 font-medium">
                <Mail className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span>Virtual token sent to: <strong className="text-white">{email}</strong></span>
              </div>
              <div className="flex items-center space-x-2 text-white/80 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Order details forwarded to CEO: <strong className="text-white">dsetongo@yahoo.com</strong></span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-all cursor-pointer"
            >
              Done & Return to Site
            </button>

          </div>
        )}

      </div>

    </div>
  );
};
