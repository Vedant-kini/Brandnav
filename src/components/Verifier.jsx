import { FaUsers, FaBriefcase, FaLaptop, FaLink } from "react-icons/fa";
import { BiMicrophone } from "react-icons/bi";

const Verifier = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[750px] bg-[#0d0d1a] p-16">
      <h2 className="text-white text-4xl font-semibold mb-12">
        Who is using Verifier?
      </h2>

      {/* Main Container - Full Width & More Height */}
      <div className="border border-blue-400 p-16 rounded-lg w-full max-w-[95%] mx-auto">
        <div className="grid grid-cols-3 gap-10">
          {/* Left Column */}
          <div className="flex flex-col gap-10">
            <div className="bg-[#101020] p-8 rounded-lg flex flex-col justify-center items-center w-full h-[190px]">
              <FaUsers className="text-4xl text-white mb-3" />
              <p className="text-white text-center text-lg">
                Sales and marketing teams
              </p>
            </div>
            <div className="bg-[#101020] p-8 rounded-lg flex flex-col justify-center items-center w-full h-[190px]">
              <FaLaptop className="text-4xl text-white mb-3" />
              <p className="text-white text-center text-lg">
                Software & IT companies
              </p>
            </div>
          </div>

          {/* Center Column - Taller Card */}
          <div className="bg-[#151525] p-10 rounded-lg flex flex-col justify-center items-center w-full h-[380px]">
            <p className="text-white font-semibold text-xl text-center">
              Irreplaceable tool for businesses
            </p>
            <FaBriefcase className="text-5xl text-white mt-6" />
            <p className="text-white mt-4 text-lg">Service providers</p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-10">
            <div className="bg-[#101020] p-8 rounded-lg flex flex-col justify-center items-center w-full h-[190px]">
              <BiMicrophone className="text-4xl text-white mb-3" />
              <p className="text-white text-center text-lg">Recruiters</p>
            </div>
            <div className="bg-[#101020] p-8 rounded-lg flex flex-col justify-center items-center w-full h-[190px]">
              <FaLink className="text-4xl text-white mb-3" />
              <p className="text-white text-center text-lg">Backlinks outreach</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-10 rounded-lg shadow-md text-lg">
            Dive in!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verifier;
