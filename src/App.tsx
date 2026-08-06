import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { PartnersAndBenefitsSection } from './components/PartnersAndBenefitsSection';
import { OurTeamSection } from './components/OurTeamSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { SocialLinksFooter } from './components/SocialLinksFooter';
import { NavModal } from './components/NavModal';
import { PricingOrderModal } from './components/PricingOrderModal';
import { BackgroundAnimation } from './components/BackgroundAnimation';
import { ActiveModal } from './types';

function App() {
  const [activeModal, setActiveModal] = useState<ActiveModal>('none');

  useEffect(() => {
    if (activeModal !== 'none') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeModal]);

  return (
    <>
      <BackgroundAnimation />
      <div className="relative z-10 min-h-screen text-white font-['DM_Sans',sans-serif] overflow-x-hidden">
        <Navbar onOpenModal={setActiveModal} />
        <HeroBanner onOpenModal={setActiveModal} />
        <PartnersAndBenefitsSection />
        <OurTeamSection />
        <TestimonialsSection />
        <ContactLocationSection />
        <SocialLinksFooter />

        <NavModal 
          modal={activeModal} 
          onClose={() => setActiveModal('none')} 
          onOpenBuild={() => setActiveModal('build-yours')} 
        />

        <PricingOrderModal 
          isOpen={activeModal === 'get-started'} 
          onClose={() => setActiveModal('none')} 
        />
      </div>
    </>
  );
}

export default App;