import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { PartnersAndBenefitsSection } from './components/PartnersAndBenefitsSection';
import { OurTeamSection } from './components/OurTeamSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { SocialLinksFooter } from './components/SocialLinksFooter';
import { ModelConfiguratorModal } from './components/ModelConfiguratorModal';
import { ExploreModelsModal } from './components/ExploreModelsModal';
import { GetStartedBookingModal as GetStartedModal } from './components/GetStartedBookingModal';
import { NavModal } from './components/NavModal';
import { ActiveModal } from './types';

export default function App() {
  const [activeModal, setActiveModal] = useState<ActiveModal>('none');

  const handleOpenModal = (modal: ActiveModal) => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal('none');
  };

  return (
    <div className="min-h-screen bg-black text-white font-['DM_Sans',sans-serif] selection:bg-white selection:text-black flex flex-col antialiased">
      {/* Top Navbar */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <HeroBanner onOpenModal={handleOpenModal} />
        <PartnersAndBenefitsSection />
        <OurTeamSection />
        <TestimonialsSection />
        <ContactLocationSection />
        <SocialLinksFooter onGoHome={() => handleOpenModal('none')} />
      </main>

      {/* Interactive Modals */}
      <ModelConfiguratorModal
        isOpen={activeModal === 'build-yours'}
        onClose={handleCloseModal}
      />

      <ExploreModelsModal
        isOpen={activeModal === 'explore-models'}
        onClose={handleCloseModal}
        onSelectBuild={() => setActiveModal('build-yours')}
      />

      <GetStartedModal
        isOpen={activeModal === 'get-started'}
        onClose={handleCloseModal}
      />

      <NavModal
        modal={activeModal}
        onClose={handleCloseModal}
        onOpenBuild={() => setActiveModal('build-yours')}
      />
    </div>
  );
}

