import React from "react";

const Calltoaction = () => {
  return (
    <div className="bg-gradient-to-b from-[#0d0d1a] to-[#1a1a2e] text-center py-28 px-6 w-full min-h-screen flex flex-col justify-between">
      <div>
        <h2 className="text-white text-6xl font-bold">TrySee Verifier</h2>
        <h3 className="text-gray-300 text-4xl mt-3">in action</h3>
        <button className="mt-8 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-lg font-semibold py-3 px-10 rounded-lg shadow-md">
          Dive in!
        </button>
      </div>

      {/* Footer Section */}
      <div className="bg-[#0b0b16] w-full py-8 px-12 text-gray-400 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="flex items-center gap-3">
              <div className="text-blue-500 font-bold text-lg">✔ verifier</div>
            </div>
            <p>2024 Verifier. All rights reserved.</p>
            <p className="text-gray-500 text-xs text-center md:text-left">
              All trademarks, logos, and brand names are the property of their respective owners. <br />
              The use of these names, logos, and brands does not imply endorsement.
            </p>
          </div>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white">Terms and conditions</a>
            <a href="#" className="hover:text-white">Privacy policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calltoaction;
s