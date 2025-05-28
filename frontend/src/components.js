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
            <Link to="/" className="text-2xl font-bold text-gray-900">Brilliant</Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/courses" className="text-gray-700 hover:text-gray-900 transition-colors">Courses</Link>
            <a href="#today" className="text-gray-700 hover:text-gray-900 transition-colors">Today</a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors">Pricing</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900 transition-colors">
              Log in
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
              Get started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Animated Mathematical Icon Component
export const MathIcon = ({ type, className = "" }) => {
  const icons = {
    formula: (
      <div className={`relative ${className}`}>
        <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
            <path d="M2 17L12 22L22 17"/>
            <path d="M2 12L12 17L22 12"/>
          </svg>
        </div>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
      </div>
    ),
    graph: (
      <div className={`relative ${className}`}>
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-blue-500 rounded-full"></div>
        </div>
        <div className="absolute top-0 left-8 w-px h-6 bg-gray-300"></div>
        <div className="absolute top-6 left-8 w-6 h-px bg-gray-300"></div>
      </div>
    ),
    network: (
      <div className={`relative ${className}`}>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="w-8 h-px bg-gray-300"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <div className="w-8 h-px bg-gray-300"></div>
          <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
        </div>
      </div>
    )
  };

  return icons[type] || icons.formula;
};

// Hero Section Component
export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <MathIcon type="formula" className="absolute top-1/4 left-1/4 animate-float" />
        <MathIcon type="graph" className="absolute top-1/3 right-1/4 animate-float-delayed" />
        <MathIcon type="network" className="absolute bottom-1/3 left-1/3 animate-float" />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-purple-500 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-4 mb-6">
            <MathIcon type="formula" className="animate-bounce" />
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 leading-tight">
              Learn
            </h1>
            <MathIcon type="network" className="animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 leading-tight mb-6">
            by doing
          </h1>
        </div>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Interactive problem solving that's effective and fun.<br />
          Get smarter in 15 minutes a day.
        </p>
        
        <Link
          to="/courses"
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
        >
          Get started
        </Link>
      </div>
    </section>
  );
};

// Course Category Component
export const CourseCategory = ({ title, icon, color, image, link }) => {
  return (
    <Link to={link} className="group cursor-pointer">
      <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${color} p-6 h-48 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl`}>
        <div className="absolute inset-0 opacity-20">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <div className="w-12 h-12 mb-4 text-white">
            {icon}
          </div>
          <h3 className="text-white text-lg font-semibold">{title}</h3>
        </div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/10 rounded-tl-full"></div>
      </div>
    </Link>
  );
};

// Course Categories Grid
export const CourseCategoriesSection = () => {
  const categories = [
    {
      title: "Math",
      color: "from-blue-500 to-blue-600",
      image: "https://images.pexels.com/photos/159746/notebook-pen-pencil-education-159746.jpeg",
      link: "/courses/mathematical-thinking",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      )
    },
    {
      title: "Data Analysis",
      color: "from-orange-500 to-orange-600",
      image: "https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab",
      link: "/courses/data-analysis",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        </svg>
      )
    },
    {
      title: "Computer Science",
      color: "from-purple-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      link: "/courses/thinking-in-code",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M20,18C20.5,18 21,17.5 21,17V7C21,6.5 20.5,6 20,6H4C3.5,6 3,6.5 3,7V17C3,17.5 3.5,18 4,18H9V19H8V20H16V19H15V18H20M5,8H19V16H5V8Z"/>
        </svg>
      )
    },
    {
      title: "Programming & AI",
      color: "from-green-500 to-green-600",
      image: "https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg",
      link: "/courses/thinking-in-code",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z"/>
        </svg>
      )
    },
    {
      title: "Science & Engineering",
      color: "from-teal-500 to-teal-600",
      image: "https://images.unsplash.com/photo-1494173853739-c21f58b16055",
      link: "/courses",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M12,2A3,3 0 0,1 15,5V11C15,11.11 15,11.22 14.96,11.33L21,17.4V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V17.4L9.04,11.33C9,11.22 9,11.11 9,11V5A3,3 0 0,1 12,2M12,4A1,1 0 0,0 11,5V11H13V5A1,1 0 0,0 12,4Z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600">Build quantitative skills in</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <CourseCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Social Proof Section
export const SocialProofSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Join over 10 million learners worldwide
        </h2>
        
        <div className="flex items-center justify-center mb-8">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <span className="ml-3 text-gray-300">Over 50,000+ 5-star reviews</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
          <div className="text-center">
            <div className="text-2xl font-bold">The New York Times</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">The Atlantic</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">Apple</div>
            <div className="text-sm">Editor's Choice</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">Google</div>
            <div className="text-sm">Best of 2020</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Interactive Features Section
export const InteractiveFeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="relative w-full h-64">
                <img 
                  src="https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg" 
                  alt="Interactive Learning" 
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Geometric overlay */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 opacity-20">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#3B82F6" strokeWidth="2"/>
                <line x1="50" y1="10" x2="50" y2="50" stroke="#EF4444" strokeWidth="2"/>
                <line x1="10" y1="50" x2="50" y2="50" stroke="#EF4444" strokeWidth="2"/>
                <text x="65" y="35" className="text-xs fill-gray-600">r</text>
                <text x="25" y="45" className="text-xs fill-gray-600">y</text>
                <text x="25" y="85" className="text-xs fill-gray-600">45°</text>
              </svg>
            </div>
          </div>

          <div className="lg:pl-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Concepts<br />
              that click
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Interactive lessons make even complex ideas easy to grasp. 
              Instant, custom feedback accelerates your understanding.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Start learning
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  const links = {
    "Courses": ["Math", "Data", "Computer Science", "Programming", "Science"],
    "Resources": ["Daily Problems", "Lessons", "Community", "Help Center"],
    "About": ["Our Story", "Careers", "Press", "Privacy", "Terms"]
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Brilliant</h3>
            <p className="text-gray-400 mb-6">
              Learn by solving problems, one brilliant concept at a time.
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
          <p>&copy; 2024 Brilliant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};