import { useEffect } from 'react';
import Navigation from './components/Navigation';
import { BeamsBackgroundDemo } from './components/BeamsBackgroundDemo';
import BenefitsSection from './components/BenefitsSection';
import FeaturesSection from './components/FeaturesSection';
import ShowcaseSection from './components/ShowcaseSection';
import ServicesPageSection from './components/ServicesPageSection';
import TeamSection from './components/TeamSection';
import ScheduleCallSection from './components/ScheduleCallSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookDemoPage from './components/BookDemoPage';
import LeadGenerationPage from './components/LeadGenerationPage';
import AIVoiceChatAgentsPage from './components/AIVoiceChatAgentsPage';
import WorkflowAutomationsPage from './components/WorkflowAutomationsPage';
import SmartWebsitesPage from './components/SmartWebsitesPage';
import ServicesOverviewPage from './components/ServicesOverviewPage';
import TeamPage from './components/TeamPage';
import ContactPage from './components/ContactPage';
import ScheduleCallPage from './components/ScheduleCallPage';
import './App.css';

function App() {
  // Scroll to top when main app loads
  useEffect(() => {
    // Only scroll to top if we're on the main page (no hash)
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, []);

  // Check if we should show specific pages
  const showBookDemo = window.location.hash === '#book-demo' || window.location.pathname === '/book-demo';
  const showLeadGeneration = window.location.hash === '#lead-generation' || window.location.pathname === '/lead-generation';
  const showAIVoiceChat = window.location.hash === '#ai-voice-chat' || window.location.pathname === '/ai-voice-chat';
  const showWorkflowAutomations = window.location.hash === '#workflow-automations' || window.location.pathname === '/workflow-automations';
  const showSmartWebsites = window.location.hash === '#smart-websites' || window.location.pathname === '/smart-websites';
  const showServicesOverview = window.location.hash === '#services-overview' || window.location.pathname === '/services-overview';
  const showTeamPage = window.location.hash === '#team-page' || window.location.pathname === '/team-page';
  const showContactPage = window.location.hash === '#contact-page' || window.location.pathname === '/contact-page';
  const showScheduleCall = window.location.hash === '#schedule-call' || window.location.pathname === '/schedule-call';

  useEffect(() => {
    // Initialize smooth scrolling and intersection observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.section-animate');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Show Schedule Call page if requested
  if (showScheduleCall) {
    return <ScheduleCallPage />;
  }

  // Show Contact Page if requested
  if (showContactPage) {
    return <ContactPage />;
  }

  // Show Team Page if requested
  if (showTeamPage) {
    return <TeamPage />;
  }

  // Show Services Overview page if requested
  if (showServicesOverview) {
    return <ServicesOverviewPage />;
  }

  // Show Smart Websites page if requested
  if (showSmartWebsites) {
    return <SmartWebsitesPage />;
  }

  // Show Workflow Automations page if requested
  if (showWorkflowAutomations) {
    return <WorkflowAutomationsPage />;
  }

  // Show AI Voice & Chat Agents page if requested
  if (showAIVoiceChat) {
    return <AIVoiceChatAgentsPage />;
  }

  // Show Lead Generation page if requested
  if (showLeadGeneration) {
    return <LeadGenerationPage />;
  }

  // Show Book Demo page if requested
  if (showBookDemo) {
    return <BookDemoPage />;
  }

  return (
    <div className="w-full min-h-screen m-0 p-0" style={{ margin: 0, padding: 0 }}>
      <Navigation />
      <main className="w-full m-0 p-0">
        <BeamsBackgroundDemo />
        <BenefitsSection />
        <FeaturesSection />
        <ShowcaseSection />
        <ServicesPageSection />
        <TeamSection />
        <ScheduleCallSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;