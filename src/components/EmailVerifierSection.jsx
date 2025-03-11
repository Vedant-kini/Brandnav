import { Mail, Code, Shield } from "lucide-react";
import { useEffect, useRef } from "react";

export default function EmailVerifierSection() {
  const avatarRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (avatarRef.current) {
        const avatars = avatarRef.current.querySelectorAll('.avatar-dot');
        avatars.forEach((avatar) => {
          const randomOpacity = Math.random() * 0.5 + 0.5;
          avatar.style.opacity = randomOpacity;
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0A0E22] text-white py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-indigo-900/30 to-transparent opacity-70"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-900/10 blur-3xl"></div>
      
      {/* Star connector in the middle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center rotate-45">
          <div className="w-14 h-[1px] bg-blue-400/30"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center -rotate-45">
          <div className="w-14 h-[1px] bg-blue-400/30"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center rotate-90">
          <div className="w-14 h-[1px] bg-blue-400/30"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center rotate-0">
          <div className="w-14 h-[1px] bg-blue-400/30"></div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            World's most accurate email <br className="hidden md:block" />
            verifier and validator online
          </h1>
          <p className="text-gray-300 text-lg">
            Clean and validate your email addresses in just one click
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column - Bulk Email Verifier */}
          <div className="text-left">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="text-blue-400" size={22} />
              <h2 className="text-xl font-semibold">Bulk email verifier</h2>
            </div>

            <p className="text-lg mb-3">Verify your email lists effortlessly</p>
            <p className="text-gray-400 mb-6">
              Use the bulk email verifier to improve email deliverability
              and sender reputation.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex-shrink-0 mt-1"></div>
                <span>Remove wrong emails</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex-shrink-0 mt-1"></div>
                <span>Avoid spam traps</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex-shrink-0 mt-1"></div>
                <span>Reduce bounces</span>
              </li>
            </ul>

            <button className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 py-3 px-8 rounded-md text-white text-lg font-medium tracking-wide">
              Dive In!
            </button>
          </div>

          {/* Right Column - Stats Card */}
          <div className="bg-[#131A35] p-6 rounded-2xl border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.15)] relative overflow-hidden backdrop-blur-sm">
            <div className="relative z-10">
              <div className="mb-4">
                <h3 className="text-gray-300 font-medium">Total Leads</h3>
                <div className="flex items-end gap-2">
                  <p className="text-3xl font-bold">5,689</p>
                  <p className="text-xs text-gray-400 mb-1">+10% from last week</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-green-400 to-green-500"></div>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-green-400">70% Deliverable</span>
                  </div>
                </div>
              </div>

              {/* Email List Table */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between py-2 border-b border-gray-700/50">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-orange-400 flex items-center justify-center text-xs font-medium">M</div>
                    <span className="text-sm">Maria Hill</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs text-gray-400">Deliverable</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between py-2 border-b border-gray-700/50">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center text-xs font-medium">S</div>
                    <span className="text-sm">Steve Porter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs text-gray-400">Deliverable</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between py-2 border-b border-gray-700/50">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center text-xs font-medium">E</div>
                    <span className="text-sm">Emma Grant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-xs text-gray-400">Non-deliverable</span>
                  </div>
                </div>
              </div>

              {/* Bottom Avatars */}
              <div className="flex" ref={avatarRef}>
                <div className="flex -space-x-2">
                  {['bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-purple-400', 'bg-red-400'].map((color, i) => (
                    <div key={i} className={`w-7 h-7 rounded-full ${color} avatar-dot transition-opacity duration-1000 flex items-center justify-center text-xs`}>
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div className="w-7 h-7 rounded-full bg-gray-700 ml-1 flex items-center justify-center text-xs">
                  +9
                </div>
              </div>
            </div>
            
            {/* Card background glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mt-20">
          {/* Left Column - Code Snippet */}
          <div className="bg-[#131A35] p-6 pt-10 rounded-2xl border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.15)] relative">
            {/* Language Icons */}
            <div className="absolute -top-6 left-6 flex space-x-3">
              <div className="w-12 h-12 bg-[#F7DF1E] text-black font-bold text-sm flex items-center justify-center rounded-full shadow-lg">
                JS
              </div>
              <div className="w-12 h-12 bg-[#3776AB] text-white font-bold text-sm flex items-center justify-center rounded-full shadow-lg">
                PY
              </div>
              <div className="w-12 h-12 bg-[#777BB4] text-white font-bold text-sm flex items-center justify-center rounded-full shadow-lg">
                PHP
              </div>
            </div>

            {/* Code Snippet */}
            <div className="bg-[#0D1125] rounded-lg p-4 overflow-x-auto">
            <pre>
  <code>
    {'fetch('}
    <span className="text-green-300">'https://api.example.com'</span>
    {')\n  '}
    <span className="text-white">.</span>
    <span className="text-yellow-300">then</span>
    <span className="text-white">(</span>
    <span className="text-orange-300">response</span>
    <span className="text-white"> =&gt; </span>  {/* Escape => */}
    <span className="text-orange-300">response</span>
    <span className="text-white">.json())</span>
    {'\n  '}
    <span className="text-white">.</span>
    <span className="text-yellow-300">then</span>
    <span className="text-white">(</span>
    <span className="text-orange-300">data</span>
    <span className="text-white"> =&gt; </span>  {/* Escape => */}
    <span className="text-blue-300">console</span>
    <span className="text-white">.</span>
    <span className="text-yellow-300">log</span>
    <span className="text-white">(</span>
    <span className="text-orange-300">data</span>
    <span className="text-white">));</span>
  </code>
</pre>

            </div>
          </div>

          {/* Right Column - Email API */}
          <div className="text-left">
            <div className="flex items-center gap-3 mb-4">
              <Code className="text-blue-400" size={22} />
              <h2 className="text-xl font-semibold">Email Verification API</h2>
            </div>

            <p className="text-lg mb-3">Prevent inaccurate data with real-time email validation</p>
            <p className="text-gray-400 mb-6">
              Guard your system against inaccurate data by instantly 
              filtering out invalid addresses.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex-shrink-0 mt-1"></div>
                <span>Elegant and secure HTTPS-based RESTful API, with JSON response format</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex-shrink-0 mt-1"></div>
                <span>Verification filters for every your database entry</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex-shrink-0 mt-1"></div>
                <span>Integrate the Verifier's real-time API into your website's registration process</span>
              </li>
            </ul>

            <button className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 py-3 px-8 rounded-md text-white text-lg font-medium tracking-wide">
              Dive In!
            </button>
          </div>
        </div>
      </div>
      
      {/* Border effect */}
      <div className="absolute inset-0 border border-blue-500/30 pointer-events-none"></div>
    </section>
  );
}