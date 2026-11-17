import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustedLogosAndStats } from './components/TrustedLogosAndStats';
import { ManagerBentoSection } from './components/ManagerBentoSection';
import { PlatformArcSection } from './components/PlatformArcSection';
import { WorkplaceRolesSection } from './components/WorkplaceRolesSection';
import { IntegrationsSection } from './components/IntegrationsSection';
import { StrategicToolsSection } from './components/StrategicToolsSection';
import { BottomCtaAndFooter } from './components/BottomCtaAndFooter';
import { DemoModal, IntegrationsModal, LoginModal } from './components/Modals';

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [integrationsOpen, setIntegrationsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#111827]">
      <Navbar
        onOpenDemo={() => setDemoOpen(true)}
        onOpenLogin={() => setLoginOpen(true)}
      />

      <main>
        <HeroSection onOpenDemo={() => setDemoOpen(true)} />
        <TrustedLogosAndStats />
        <ManagerBentoSection />
        <PlatformArcSection onOpenDemo={() => setDemoOpen(true)} />
        <WorkplaceRolesSection />
        <IntegrationsSection
          onOpenIntegrations={() => setIntegrationsOpen(true)}
        />
        <StrategicToolsSection />
      </main>

      <BottomCtaAndFooter onOpenDemo={() => setDemoOpen(true)} />

      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
      <IntegrationsModal
        isOpen={integrationsOpen}
        onClose={() => setIntegrationsOpen(false)}
      />
    </div>
  );
}
