import company1 from "../assets/company1.png";
import company2 from "../assets/company2.png";
import company3 from "../assets/company3.png";
import company4 from "../assets/company4.png";
import company5 from "../assets/company5.png";

export default function TrustedBySection() {
  return (
    <section className="py-16 bg-indigo-950 text-white">
      <div className="w-full flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-medium mb-8 text-center">
          Modern companies are using <span className="font-bold text-white">Verifier</span>
        </h2>

        {/* Logos Grid */}
        <div className="w-[90%] max-w-[1100px] flex justify-between items-center gap-6 flex-wrap">
          <img src={company1} alt="Sentry Ecom" className="h-10 md:h-12 opacity-90" />
          <img src={company2} alt="XLR Media" className="h-10 md:h-12 opacity-90" />
          <img src={company3} alt="Outreach Clerk" className="h-10 md:h-12 opacity-90" />
          <img src={company4} alt="OG" className="h-10 md:h-12 opacity-90" />
          <img src={company5} alt="ACEXMEDIA" className="h-10 md:h-12 opacity-90" />
        </div>
      </div>
    </section>
  );
}
