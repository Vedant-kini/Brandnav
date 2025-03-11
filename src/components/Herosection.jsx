import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function HeroSection() {
  const [email, setEmail] = useState("");

  return (
    <section className="w-screen min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

      {/* ✅ Verifier Icon & Text moved to Top-Left */}
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <CheckCircle className="h-6 w-6 text-blue-400" />
        <span className="text-blue-400 font-medium text-lg">verifier</span>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-3xl px-6 text-center">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Email Checker
          <br />
          <span className="text-gray-300">and Verifier</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg text-gray-300 mb-8">
          Reduce bounce rate and improve your email marketing performance with our verifier.
        </p>

        {/* Input & Button Section */}
        <div className="flex items-center justify-center bg-white/10 px-4 py-2 rounded-full shadow-md w-full max-w-lg mx-auto backdrop-blur-md">
          <input
            type="email"
            placeholder="Enter an email to verify"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent text-white text-lg px-4 py-3 outline-none placeholder-gray-300"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg">
            Verify
          </button>
        </div>
      </div>
    </section>
  );
}
