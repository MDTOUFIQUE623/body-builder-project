import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { Classes } from './components/home/Classes';
import { Trainers } from './components/home/Trainers';
import { Pricing } from './components/home/Pricing';
import { Footer } from './components/layout/Footer';
import { MembershipForm } from './components/forms/MembershipForm';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('basic');

  const handleJoinNow = (plan?: string) => {
    if (plan) setSelectedPlan(plan);
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar onJoinNow={() => handleJoinNow()} />
      <Hero onGetStarted={() => handleJoinNow()} />
      <Classes />
      <Trainers />
      <Pricing onChoosePlan={handleJoinNow} />
      <Footer />
      <MembershipForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        defaultPlan={selectedPlan}
      />
    </div>
  );
}

export default App;