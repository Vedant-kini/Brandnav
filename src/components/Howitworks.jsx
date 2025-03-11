import image0 from "../assets/image0.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";

export default function HowItWorks() {
  const steps = [
    {
      icon: image0,
      title: "Upload",
      description: "Upload your email lists in .csv format",
    },
    {
      icon: image1,
      title: "Verify",
      description: "Let Verifier perform, ensuring email validity",
    },
    {
      icon: image2,
      title: "Download",
      description: "Download your clean and verified email list",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-950 to-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">How it works</h2>
        <p className="text-center text-gray-300 mb-12">
          It's super easy to verify your email addresses with Verifier.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <button className="bg-indigo-100 p-0 rounded-2xl mb-6 shadow-md flex items-center justify-center w-24 h-24 overflow-hidden transition-transform transform hover:scale-105">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </button>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300 max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}