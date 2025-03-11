import { Shield, Mail, X, Zap, Server, CheckCheck, AlertCircle, Clock, Globe } from 'lucide-react';

const features = [
  { icon: Shield, title: "Disposable email detection", description: "Automatically identify and block disposable email addresses to keep your database clean" },
  { icon: X, title: "Hard bounce prevention", description: "Identify emails that will hard bounce before you send to them and avoid delivery problems" },
  { icon: CheckCheck, title: "Soft bounce prediction", description: "Predict which emails will soft bounce to maintain optimal deliverability" },
  { icon: Mail, title: "Email verification API", description: "Integrate our email verification software to remove inaccurate data" },
  { icon: Globe, title: "Catch-all email detection", description: "Detect and remove catch-all domains to assess your email risk" },
  { icon: Zap, title: "MX record validation", description: "Validate email authenticity through advanced MX record checks" },
  { icon: AlertCircle, title: "SMTP provider identification", description: "Automatically identify the email provider for targeted outreach" },
  { icon: Server, title: "Email syntax validation", description: "Syntax check ensures only RFC-compliant emails remain" },
  { icon: Clock, title: "Email domain validation", description: "Confirm that email domains are valid and capable of receiving mail" },
  { icon: Shield, title: "SMTP verification", description: "Evaluate and analyze email deliverability for valuable insights" },
  { icon: X, title: "Anti-greylisting technology", description: "Trust verification for accurate email verification with anti-greylisting tech" },
  { icon: Zap, title: "Real-time results", description: "Track the real-time results of your email verification process on the list" }
];

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-[#12162E] p-5 rounded-lg shadow-md flex flex-col items-start text-left">
    <Icon size={32} className="text-blue-400" />
    <h3 className="mt-3 text-lg font-semibold">{title}</h3>
    <p className="text-gray-400 text-sm mt-1">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="bg-[#0A0E22] text-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-start gap-10">
        
        {/* Left Section (Title + Button at the Top) */}
        <div className="md:w-1/3 flex flex-col items-start">
          <h2 className="text-4xl font-bold leading-tight">Rock solid email verification</h2>
          <p className="text-gray-400 mt-3">Clean, optimize, and supercharge your email lists.</p>
          <button className="mt-5 bg-blue-500 px-6 py-2 rounded-lg text-white">Dive in!</button>
        </div>

        {/* Right Section (Features Grid) */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
