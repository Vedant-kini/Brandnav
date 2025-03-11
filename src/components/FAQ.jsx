import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const faqs = [
    {
      question: "How is the Verifier different from other email verifier tools?",
      answer: `BrandNav Verifier stands out for several reasons:\n\n
             Accuracy: Advanced algorithms ensure precise email verification.\n
             Efficiency:Fast processing for large email lists, saving you time.\n
             User-Friendly: Easy-to-use interface makes verification hassle-free.\n
             Data Security: Your information is handled with the utmost security.\n
             Support: Responsive customer support to assist you at any step.\n\n
             Don’t just take our word for it! Check out our G2 reviews, we’re rated 4.8/5 by users.`
    },
    {
      question: "What does it mean when an email address is valid?",
      answer: "A valid email address means it is active, deliverable, and not flagged as spam. It belongs to a real user and can receive messages."
    },
    {
      question: "What does it mean when an email address is unknown?",
      answer: "An unknown email address means the verifier couldn’t determine whether it’s valid or invalid due to server issues or restrictions."
    },
    {
      question: "What does it mean when an email address is invalid?",
      answer: "An invalid email address does not exist or is improperly formatted. Messages sent to it will bounce back as undeliverable."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0d0d1a] py-20 px-10 w-full">
      <h2 className="text-white text-5xl font-semibold mb-12">
        Frequently Asked Questions
      </h2>
      <div className="w-full max-w-[1000px]">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-6">
            <button
              className="w-full flex justify-between items-center bg-[#191929] p-6 rounded-2xl text-white text-lg font-medium focus:outline-none shadow-lg"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? (
                <FaChevronUp className="text-white" />
              ) : (
                <FaChevronDown className="text-white" />
              )}
            </button>
            {openIndex === index && (
              <div className="bg-[#29293a] p-6 text-white text-md rounded-2xl mt-2 shadow-md">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
