import React from 'react';
import HeroSection from './components/Herosection.jsx';
import TrustedBySection from './components/Trustedby.jsx';
import HowItWorks from './components/Howitworks.jsx';
import EmailVerifierSection from './components/EmailVerifierSection.jsx';
import Features from './components/Features.jsx';
import PricingComponent from './components/Pricingcomponent.jsx';
import Verifier from './components/Verifier.jsx';
import FAQ from './components/FAQ.jsx';
import CallToAction from './components/Calltoaction.jsx';
function App() {
  return (
    <div>
      <HeroSection />
      <TrustedBySection/>
      <HowItWorks/>
      <EmailVerifierSection/>
      <Features/>
      <PricingComponent/>
      <Verifier/>
      <FAQ/>
      <CallToAction/>
    </div>
  );
}

export default App;