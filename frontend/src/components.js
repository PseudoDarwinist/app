import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Header Component
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">AI-Tutor</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/courses" className="text-gray-700 hover:text-gray-900 transition-colors">Courses</Link>
            <a href="#progress" className="text-gray-700 hover:text-gray-900 transition-colors">Progress</a>
            <a href="#practice" className="text-gray-700 hover:text-gray-900 transition-colors">Practice</a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
              <span>🔥</span>
              <span>3 day streak</span>
            </div>
            <button className="text-gray-700 hover:text-gray-900 transition-colors">
              Log in
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-4 py-2 rounded-lg transition-all transform hover:scale-105">
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Animated Code Icon Component
export const CodeIcon = ({ type, className = "" }) => {
  const icons = {
    swift: (
      <div className={`relative ${className}`}>
        <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.508 0c-.287 0-.573 0-.86.002-.102.001-.197.027-.29.068-.09.04-.172.092-.242.158-.07.066-.126.145-.165.234-.04.089-.063.186-.063.286 0 .3.002.6.002.9v21.3c0 .287 0 .573-.002.86-.001.102-.027.197-.068.29-.04.09-.092.172-.158.242-.066.07-.145.126-.234.165-.089.04-.186.063-.286.063-.3 0-.6-.002-.9-.002H1.5c-.287 0-.573 0-.86.002-.102.001-.197.027-.29.068-.09.04-.172.092-.242.158-.07.066-.126.145-.165.234-.04.089-.063.186-.063.286 0 .3.002.6.002.9v.6c0 .3-.002.6-.002.9 0 .1.023.197.063.286.039.089.095.168.165.234.07.066.152.118.242.158.093.041.188.067.29.068.287.002.573.002.86.002h21c.287 0 .573 0 .86-.002.102-.001.197-.027.29-.068.09-.04.172-.092.242-.158.07-.066.126-.145.165-.234.04-.089.063-.186.063-.286 0-.3-.002-.6-.002-.9v-.6c0-.3.002-.6.002-.9 0-.1-.023-.197-.063-.286-.039-.089-.095-.168-.165-.234-.07-.066-.152-.118-.242-.158-.093-.041-.188-.067-.29-.068-.287-.002-.573-.002-.86-.002H7.508z"/>
          </svg>
        </div>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
      </div>
    ),
    ui: (
      <div className={`relative ${className}`}>
        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
          </svg>
        </div>
      </div>
    ),
    component: (
      <div className={`relative ${className}`}>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <div className="w-8 h-px bg-gray-300"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="w-8 h-px bg-gray-300"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
      </div>
    )
  };

  return icons[type] || icons.swift;
};

// Hero Section Component
export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <CodeIcon type="swift" className="absolute top-1/4 left-1/4 animate-float" />
        <CodeIcon type="ui" className="absolute top-1/3 right-1/4 animate-float-delayed" />
        <CodeIcon type="component" className="absolute bottom-1/3 left-1/3 animate-float" />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-purple-500 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-4 mb-6">
            <CodeIcon type="swift" className="animate-bounce" />
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              Master
            </h1>
            <CodeIcon type="component" className="animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight mb-6">
            SwiftUI
          </h1>
        </div>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Your AI-powered tutor for mastering iOS development.<br />
          Learn SwiftUI through interactive lessons and build beautiful apps.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/courses"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
          >
            Start Learning SwiftUI
          </Link>
          <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
            View Progress
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">24</div>
            <div className="text-gray-600">Interactive Lessons</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">85</div>
            <div className="text-gray-600">Practice Problems</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600">100%</div>
            <div className="text-gray-600">iOS Focused</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Course Focus Section
export const CourseFocusSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Your SwiftUI Journey</h2>
          <p className="text-xl text-gray-600">Master iOS development with our comprehensive SwiftUI course</p>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Learning SwiftUI</h3>
              <p className="text-purple-100 mb-6">
                From basic views to advanced animations, learn everything you need to build stunning iOS apps with SwiftUI.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>SwiftUI Views & Layout Systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>State Management & Data Flow</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Animations & Interactions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span>Navigation & Lists</span>
                </div>
              </div>
              
              <Link
                to="/courses/learning-swiftui"
                className="inline-block mt-6 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Course
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <span>Text & Modifiers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <span>Stacks & Layout</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <span>Images & SF Symbols</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-400 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <span>Buttons & Interactions</span>
                  </div>
                  <div className="text-center mt-4">
                    <span className="text-purple-200">...and much more!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Daily Progress Section
export const DailyProgressSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Build your iOS<br />
              development skills
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Focused Learning Path</h3>
                  <p className="text-gray-300">Structured curriculum designed specifically for iOS development mastery</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Interactive Practice</h3>
                  <p className="text-gray-300">Hands-on coding exercises with real SwiftUI examples</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Build Real Apps</h3>
                  <p className="text-gray-300">Apply your knowledge by creating actual iOS applications</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">Your Progress</h3>
                <span className="text-orange-400 font-semibold">3 day streak 🔥</span>
              </div>
              
              <div className="grid grid-cols-7 gap-2">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                  <div key={`${day}-${index}`} className="text-center">
                    <div className="text-sm text-gray-400 mb-2">{day}</div>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      index < 3 ? 'bg-orange-500' : 'bg-gray-700'
                    }`}>
                      {index < 3 && <span className="text-sm">✓</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>SwiftUI Views</span>
                  <span>Progress: 45%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" style={{width: '45%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>State Management</span>
                  <span>Progress: 20%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" style={{width: '20%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  const links = {
    "Learning": ["SwiftUI Course", "Practice Problems", "Code Examples", "iOS Guides"],
    "Resources": ["Documentation", "Community", "Help Center", "Tutorials"],
    "About": ["AI-Tutor", "iOS Focus", "Privacy", "Terms"]
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-2xl font-bold">AI-Tutor</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your personal AI tutor for mastering iOS development with SwiftUI.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AI-Tutor. Master iOS development with SwiftUI.</p>
        </div>
      </div>
    </footer>
  );
};