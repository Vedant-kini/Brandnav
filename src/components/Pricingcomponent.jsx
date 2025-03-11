import { useState } from "react";

const Pricingcomponent = () => {
  const [emailCount, setEmailCount] = useState(2000);
  const pricePerMonth = (emailCount / 1000) * 9; // Example pricing formula

  return (
    <section className="bg-[#0A0E22] text-white w-full flex flex-col items-center py-16">
      {/* Header */}
      <div className="max-w-[1020px] w-full text-center">
        <h2 className="text-3xl font-bold">Choose the right plan for you</h2>
        <p className="text-gray-400 mt-2">With great power comes great plans</p>
      </div>

      {/* Pricing Container */}
      <div className="max-w-[1020px] w-full flex flex-col md:flex-row justify-between mt-10">
        {/* Monthly Plan Box */}
        <div className="bg-[#12162E] p-6 rounded-lg shadow-md w-[48%] flex flex-col items-center">
          <div className="flex items-center gap-4 text-gray-400">
            <span className="text-white">Monthly</span>
            <input type="checkbox" className="toggle-checkbox" />
            <span>Pay-as-you-go</span>
          </div>

          <p className="mt-4">How many emails do you have?</p>
          <input 
            type="number" 
            value={emailCount} 
            onChange={(e) => setEmailCount(Number(e.target.value))}
            className="bg-white text-black text-center py-2 px-4 rounded-md mt-2"
          />

          {/* Slider */}
          <input
            type="range"
            min="2000"
            max="1000000"
            step="1000"
            value={emailCount}
            onChange={(e) => setEmailCount(Number(e.target.value))}
            className="w-full mt-4"
          />

          {/* Price */}
          <h3 className="text-2xl font-bold mt-4">${pricePerMonth.toFixed(2)} <span className="text-gray-400">USD/month</span></h3>

          <button className="mt-4 bg-blue-500 px-6 py-2 rounded-lg text-white">Buy this now</button>
        </div>

        {/* Pricing Table */}
        <div className="bg-[#12162E] p-6 rounded-lg shadow-md w-[48%]">
          <h3 className="text-lg font-bold text-center">Monthly rates</h3>
          <div className="mt-4">
            {[
              { emails: "from 2,000/mo", price: "0.009 USD" },
              { emails: "from 5,000/mo", price: "0.008 USD" },
              { emails: "from 10,000/mo", price: "0.0075 USD" },
              { emails: "from 25,000/mo", price: "0.007 USD" },
              { emails: "from 50,000/mo", price: "0.007 USD" },
              { emails: "from 100,000/mo", price: "0.0039 USD" },
              { emails: "from 250,000/mo", price: "0.0035 USD" },
              { emails: "from 500,000/mo", price: "0.0033 USD" },
              { emails: "from 1,000,000/mo", price: "0.0025 USD" },
            ].map((item, index) => (
              <div key={index} className="flex justify-between px-4 py-2 border-b border-gray-700">
                <span className="text-gray-400">{item.emails}</span>
                <span className="text-white">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricingcomponent;
