import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Overview from './components/Overview';
import Tracks from './components/Tracks';
import Syllabus from './components/Syllabus';
import Steps from './components/Steps';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onRegisterClick={openModal} />
      <Hero onRegisterClick={openModal} />
      <Timeline />
      <Overview />
      <Tracks />
      <Syllabus />
      <Steps />
      <FAQ />
      <CTA onRegisterClick={openModal} />
      <Footer />
      <RegistrationModal open={modalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
