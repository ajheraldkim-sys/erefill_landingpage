import React, { useState } from 'react';
import Navbar from './components/Navbar';
import WaterBackground from './components/WaterBackground';
import Hero from './components/Hero';
import LiveStatsBar from './components/LiveStatsBar';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import InteractiveAppShowcase from './components/InteractiveAppShowcase';
import UserRolesSection from './components/UserRolesSection';
import DownloadSection from './components/DownloadSection';
import FaqSection from './components/FaqSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';
import InstallModal from './components/InstallModal';
import DownloadToast from './components/DownloadToast';
import { triggerWaterConfetti } from './utils/confetti';
import { EREFILL_CONFIG } from './data/config';

export default function App() {
  const [installModalOpen, setInstallModalOpen] = useState(false);
  const [toast, setToast] = useState({
    visible: false,
    title: '',
    message: ''
  });

  const showToast = (message, title = "Download Initiated") => {
    setToast({
      visible: true,
      title,
      message
    });
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, 5000);
  };

  const handleDownloadClick = () => {
    triggerWaterConfetti();
    showToast(
      `Downloading eRefill APK (${EREFILL_CONFIG.version}, ${EREFILL_CONFIG.fileSize}). Check your notification panel or Downloads folder.`,
      "Download Started"
    );
  };

  return (
    <div className="min-h-screen bg-surface-page text-navy-800 font-sans selection:bg-brand selection:text-white relative">
      {/* Ambient Animated Water Background */}
      <WaterBackground />

      {/* Main Navigation */}
      <Navbar onDownloadClick={handleDownloadClick} />

      {/* Main Content Landmark */}
      <main id="main-content" className="relative z-10">
        {/* 1. Hero Section */}
        <Hero 
          onDownloadClick={handleDownloadClick} 
          onOpenInstallModal={() => setInstallModalOpen(true)} 
        />

        {/* Live Trust & Capability Stats Bar */}
        <LiveStatsBar />

        {/* 2. What is eRefill? */}
        <AboutSection onDownloadClick={handleDownloadClick} />

        {/* 3. Key Features */}
        <FeaturesSection />

        {/* 4. How eRefill Works */}
        <HowItWorksSection />

        {/* 6. Screenshots / Interactive App Preview */}
        <InteractiveAppShowcase onDownloadClick={handleDownloadClick} />

        {/* 7. User Roles */}
        <UserRolesSection onDownloadClick={handleDownloadClick} />

        {/* 5. Dedicated APK Download Section */}
        <DownloadSection 
          onDownloadClick={handleDownloadClick} 
          onOpenInstallModal={() => setInstallModalOpen(true)}
          onShowToast={(msg) => showToast(msg, "Action Complete")}
        />

        {/* 8. Frequently Asked Questions (FAQ) */}
        <FaqSection />

        {/* 9. Final CTA */}
        <FinalCtaSection onDownloadClick={handleDownloadClick} />
      </main>

      {/* Footer */}
      <Footer 
        onOpenInstallModal={() => setInstallModalOpen(true)} 
        onDownloadClick={handleDownloadClick} 
      />

      {/* Installation Guide Modal */}
      <InstallModal 
        isOpen={installModalOpen} 
        onClose={() => setInstallModalOpen(false)}
        onDownloadClick={handleDownloadClick} 
      />

      {/* Download Alert Toast */}
      <DownloadToast 
        toast={toast} 
        onClose={() => setToast(prev => ({ ...prev, visible: false }))} 
      />
    </div>
  );
}

