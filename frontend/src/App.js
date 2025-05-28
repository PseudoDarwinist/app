import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { 
  Header, 
  HeroSection, 
  CourseCategoriesSection, 
  SocialProofSection, 
  InteractiveFeaturesSection, 
  Footer 
} from './components';
import { CoursesPage, CoursePage, LessonPage } from './pages';

// Homepage Component
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CourseCategoriesSection />
      <SocialProofSection />
      <InteractiveFeaturesSection />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-white">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:courseId" element={<CoursePage />} />
            <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;