import React from 'react';
import './App.css';
import { 
  Header, 
  HeroSection, 
  CourseCategoriesSection, 
  SocialProofSection, 
  InteractiveFeaturesSection, 
  Footer 
} from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <CourseCategoriesSection />
      <SocialProofSection />
      <InteractiveFeaturesSection />
      <Footer />
    </div>
  );
}

export default App;