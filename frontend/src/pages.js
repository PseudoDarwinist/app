import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getAllCourses, getCourse, getLesson } from './data/coursesData';

// Courses Page - Shows only the SwiftUI course
export const CoursesPage = () => {
  const courses = getAllCourses();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Master iOS Development
          </h1>
          <p className="text-xl text-gray-600">Your personalized SwiftUI learning journey starts here</p>
        </div>

        <div className="max-w-2xl mx-auto">
          {courses.map((course) => (
            <Link key={course.id} to={`/courses/${course.id}`}>
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:scale-105 mb-8">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Level {course.level} • {course.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-3xl font-bold text-white mb-2">{course.title}</h2>
                    <p className="text-white/90 text-lg">{course.description}</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{course.lessons}</div>
                      <div className="text-gray-600 text-sm">Interactive Lessons</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{course.practice}</div>
                      <div className="text-gray-600 text-sm">Practice Problems</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600">100%</div>
                      <div className="text-gray-600 text-sm">SwiftUI Focused</div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-4 text-center">
                    <span className="font-semibold text-lg">Start Your iOS Journey →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* Progress Indicator */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Learning Path</h3>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Completed</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-600">In Progress</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <span className="text-sm text-gray-600">Locked</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Learning Path Node Component
const LearningPathNode = ({ lesson, isCompleted, isActive, onClick, index }) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <button
        onClick={() => onClick(lesson)}
        className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
          isActive 
            ? 'bg-purple-600 shadow-xl' 
            : isCompleted 
            ? 'bg-green-500 shadow-lg' 
            : 'bg-purple-400 hover:bg-purple-500 shadow-md'
        }`}
      >
        {isCompleted ? (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        ) : (
          <span className="text-white font-bold text-lg">{index + 1}</span>
        )}
        
        {isActive && (
          <div className="absolute -inset-2 border-2 border-purple-300 rounded-full animate-pulse"></div>
        )}
      </button>
      
      <div className="mt-3 text-center max-w-24">
        <p className="text-sm font-medium text-gray-700 leading-tight">{lesson.title}</p>
      </div>
      
      {/* Connection line to next node */}
      <div className="w-px h-8 bg-gray-300 mt-4"></div>
    </div>
  );
};

// Individual Course Page with Learning Path
export const CoursePage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = getCourse(courseId);
  const [activeChapter, setActiveChapter] = useState(0);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h1>
          <Link to="/courses" className="text-blue-600 hover:underline">
            Back to courses
          </Link>
        </div>
      </div>
    );
  }

  const handleLessonClick = (lesson) => {
    navigate(`/courses/${courseId}/lessons/${lesson.id}`);
  };

  const currentChapter = course.chapters[activeChapter];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link to="/courses" className="text-purple-600 hover:text-purple-800 font-medium mb-4 inline-flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to AI-Tutor
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24 border border-purple-100">
              <div className="relative h-40 mb-6 rounded-xl overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {course.category}
                  </span>
                </div>
              </div>
              
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
                {course.title}
              </h1>
              <p className="text-gray-600 mb-6">{course.description}</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="text-gray-700 flex items-center">
                    <span className="text-purple-500 mr-2">📚</span>
                    Lessons
                  </span>
                  <span className="font-semibold text-purple-600">{course.lessons}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-gray-700 flex items-center">
                    <span className="text-blue-500 mr-2">⚡</span>
                    Practice Problems
                  </span>
                  <span className="font-semibold text-blue-600">{course.practice}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-gray-700 flex items-center">
                    <span className="text-green-500 mr-2">🎯</span>
                    Difficulty
                  </span>
                  <span className="font-semibold text-green-600">Level {course.level}</span>
                </div>
              </div>

              {/* Chapter Navigation */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">📖</span>
                  Course Chapters
                </h3>
                <div className="space-y-2">
                  {course.chapters.map((chapter, index) => (
                    <button
                      key={chapter.id}
                      onClick={() => setActiveChapter(index)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                        index === activeChapter 
                          ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg transform scale-105' 
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow-md'
                      }`}
                    >
                      <div className="font-medium">{chapter.title}</div>
                      <div className={`text-sm ${index === activeChapter ? 'text-purple-100' : 'text-gray-500'}`}>
                        {chapter.lessons.length} lessons
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Learning Path */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
              <div className="mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
                  {currentChapter.title}
                </h2>
                <p className="text-gray-600 flex items-center">
                  <span className="mr-2">🚀</span>
                  Level {course.level} • Interactive SwiftUI Lessons
                </p>
              </div>

              <div className="flex flex-col items-center py-8">
                {currentChapter.lessons.map((lesson, index) => (
                  <LearningPathNode
                    key={lesson.id}
                    lesson={lesson}
                    isCompleted={lesson.completed}
                    isActive={index === 0} // First lesson is active by default
                    onClick={handleLessonClick}
                    index={index}
                  />
                ))}
                
                {/* Continue Button */}
                <div className="mt-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 text-center max-w-md border border-purple-100">
                  <div className="mb-4">
                    <span className="text-4xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {currentChapter.lessons[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6">{currentChapter.lessons[0].description}</p>
                  <button
                    onClick={() => handleLessonClick(currentChapter.lessons[0])}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Start Learning →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Individual Lesson Page
export const LessonPage = () => {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();
  const course = getCourse(courseId);
  const lesson = getLesson(courseId, lessonId);
  const [currentTab, setCurrentTab] = useState('visualization');
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [generatingImage, setGeneratingImage] = useState(false);
  const [aiGeneratedImage, setAiGeneratedImage] = useState(null);
  const [generatingVisualization, setGeneratingVisualization] = useState(false);
  const [aiVisualization, setAiVisualization] = useState(null);

  if (!course || !lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Lesson not found</h1>
          <Link to={`/courses/${courseId}`} className="text-purple-600 hover:underline">
            Back to course
          </Link>
        </div>
      </div>
    );
  }

  const handleAnswerSubmit = () => {
    setShowResults(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < lesson.content.practice.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResults(false);
    }
  };

  const generateAIVisualization = async () => {
    setGeneratingVisualization(true);
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';
      const response = await fetch(`${backendUrl}/api/generate-visualization`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          concept: lesson.title,
          context: lesson.description
        }),
      });
      
      if (response.ok) {
        const data = await response.json();
        setAiVisualization(data);
      } else {
        console.error('Failed to generate AI visualization');
      }
    } catch (error) {
      console.error('Error generating AI visualization:', error);
    } finally {
      setGeneratingVisualization(false);
    }
  };

  const generateAIImage = async () => {
    setGeneratingImage(true);
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';
      const response = await fetch(`${backendUrl}/api/generate-concept-image`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          concept: lesson.title,
          prompt: `Create an educational diagram showing ${lesson.title} concept in SwiftUI. Make it clean, modern, and easy to understand for iOS developers.`
        }),
      });
      
      if (response.ok) {
        const data = await response.json();
        setAiGeneratedImage(data.image_base64);
      } else {
        console.error('Failed to generate AI image');
      }
    } catch (error) {
      console.error('Error generating AI image:', error);
    } finally {
      setGeneratingImage(false);
    }
  };

  const currentPracticeQuestion = lesson.content.practice[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Floating blob animations inspired by storybook.emergent.sh */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Large flowing gradient blob - pink/purple */}
        <div 
          className="absolute top-0 left-0 w-[800px] h-[600px] opacity-60 rounded-full filter blur-3xl"
          style={{
            background: 'linear-gradient(45deg, #f472b6, #a855f7, #6366f1)',
            clipPath: 'polygon(20% 0%, 80% 10%, 100% 50%, 85% 90%, 10% 85%)',
            animation: 'blob-float 20s ease-in-out infinite'
          }}
        ></div>

        {/* Medium flowing blob - blue/teal */}
        <div 
          className="absolute top-1/4 right-0 w-[600px] h-[400px] opacity-50 rounded-full filter blur-2xl"
          style={{
            background: 'linear-gradient(45deg, #60a5fa, #14b8a6, #10b981)',
            clipPath: 'polygon(30% 20%, 70% 0%, 90% 60%, 60% 100%, 0% 80%)',
            animation: 'blob-float-reverse 25s ease-in-out infinite'
          }}
        ></div>

        {/* Small accent blob - orange/yellow */}
        <div 
          className="absolute bottom-0 left-1/3 w-[400px] h-[300px] opacity-40 rounded-full filter blur-xl"
          style={{
            background: 'linear-gradient(45deg, #fbbf24, #f97316, #ef4444)',
            clipPath: 'polygon(40% 10%, 90% 30%, 80% 80%, 20% 90%, 10% 40%)',
            animation: 'blob-float-slow 18s ease-in-out infinite'
          }}
        ></div>

        {/* Additional flowing elements */}
        <div 
          className="absolute top-2/3 right-1/4 w-[300px] h-[300px] opacity-30 rounded-full filter blur-2xl"
          style={{
            background: 'linear-gradient(45deg, #a855f7, #ec4899, #f43f5e)',
            animation: 'blob-pulse 22s ease-in-out infinite'
          }}
        ></div>

        {/* Animated gradient overlay for extra magic */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-100/10 to-transparent opacity-20"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <div className="mb-6">
          <Link to={`/courses/${courseId}`} className="text-purple-600 hover:text-purple-800 font-medium mb-4 inline-flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to {course.title}
          </Link>
        </div>

        {/* Lesson Header */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-6 border border-purple-100">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">📱</span>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {lesson.title}
                  </h1>
                  <p className="text-gray-600 text-lg mt-1">{lesson.description}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">1</div>
                <div className="text-xs text-gray-500">Lesson</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{lesson.content.practice.length}</div>
                <div className="text-xs text-gray-500">Questions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Lesson Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-100 overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50">
            <nav className="flex">
              <button
                onClick={() => setCurrentTab('visualization')}
                className={`px-8 py-4 text-lg font-medium transition-all duration-300 ${
                  currentTab === 'visualization'
                    ? 'border-b-3 border-purple-500 text-purple-600 bg-white'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
                }`}
              >
                <span className="mr-2">🎨</span>
                Visualization
              </button>
              <button
                onClick={() => setCurrentTab('theory')}
                className={`px-8 py-4 text-lg font-medium transition-all duration-300 ${
                  currentTab === 'theory'
                    ? 'border-b-3 border-purple-500 text-purple-600 bg-white'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
                }`}
              >
                <span className="mr-2">📖</span>
                Theory & Examples
              </button>
              <button
                onClick={() => setCurrentTab('practice')}
                className={`px-8 py-4 text-lg font-medium transition-all duration-300 ${
                  currentTab === 'practice'
                    ? 'border-b-3 border-purple-500 text-purple-600 bg-white'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
                }`}
              >
                <span className="mr-2">⚡</span>
                Practice ({lesson.content.practice.length} questions)
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {currentTab === 'visualization' && lesson.content.visualization && (
              <div className="space-y-8">
                {/* Nifty Tip Section */}
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 border border-purple-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                      💡
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Nifty Visualization Tip</h3>
                      <p className="text-lg text-gray-800 font-medium mb-4">
                        {lesson.content.visualization.analogy}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        {lesson.content.visualization.explanation}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Visual Image */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Visual Reference</h4>
                  <div className="relative overflow-hidden rounded-xl">
                    <img 
                      src={lesson.content.visualization.image} 
                      alt={`Visual representation of ${lesson.title}`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>

                {/* Visual Tips */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Quick Visual Tips</h4>
                  <div className="grid gap-4">
                    {lesson.content.visualization.visualTips.map((tip, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 font-medium">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Visualization Generator */}
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 border border-indigo-200">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">🤖 AI-Powered Visualizations</h4>
                  <p className="text-gray-700 mb-6">Generate custom explanations and images using GPT-4o to help you visualize this concept even better!</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Generate Custom Explanation */}
                    <div className="bg-white rounded-xl p-6 border border-indigo-200">
                      <h5 className="font-bold text-lg mb-3">🧠 Generate Custom Explanation</h5>
                      <p className="text-gray-600 mb-4">Get a personalized analogy and explanation from AI</p>
                      <button
                        onClick={generateAIVisualization}
                        disabled={generatingVisualization}
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {generatingVisualization ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Generating...
                          </span>
                        ) : (
                          '✨ Generate Explanation'
                        )}
                      </button>
                    </div>

                    {/* Generate Custom Image */}
                    <div className="bg-white rounded-xl p-6 border border-indigo-200">
                      <h5 className="font-bold text-lg mb-3">🎨 Generate Concept Image</h5>
                      <p className="text-gray-600 mb-4">Create a visual diagram using DALL-E 3</p>
                      <button
                        onClick={generateAIImage}
                        disabled={generatingImage}
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {generatingImage ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Generating...
                          </span>
                        ) : (
                          '🎨 Generate Image'
                        )}
                      </button>
                    </div>
                  </div>

                  {/* AI Generated Content Display */}
                  {aiVisualization && (
                    <div className="mt-6 bg-white rounded-xl p-6 border border-green-200">
                      <h5 className="font-bold text-lg mb-3 text-green-800">🤖 AI Generated Explanation</h5>
                      <div className="space-y-4">
                        <div>
                          <h6 className="font-semibold text-gray-900 mb-2">Analogy:</h6>
                          <p className="text-gray-700 italic">"{aiVisualization.analogy}"</p>
                        </div>
                        <div>
                          <h6 className="font-semibold text-gray-900 mb-2">Explanation:</h6>
                          <p className="text-gray-700">{aiVisualization.explanation}</p>
                        </div>
                        <div>
                          <h6 className="font-semibold text-gray-900 mb-2">Visual Tips:</h6>
                          <ul className="list-disc list-inside space-y-1">
                            {aiVisualization.visual_tips.map((tip, index) => (
                              <li key={index} className="text-gray-700">{tip}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {aiGeneratedImage && (
                    <div className="mt-6 bg-white rounded-xl p-6 border border-blue-200">
                      <h5 className="font-bold text-lg mb-3 text-blue-800">🎨 AI Generated Image</h5>
                      <div className="relative overflow-hidden rounded-xl">
                        <img 
                          src={`data:image/png;base64,${aiGeneratedImage}`} 
                          alt={`AI generated visualization of ${lesson.title}`}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Continue to Theory */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">Ready to dive deeper?</h3>
                      <p className="text-purple-100">Learn the technical details and see code examples</p>
                    </div>
                    <button
                      onClick={() => setCurrentTab('theory')}
                      className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Explore Theory →
                    </button>
                  </div>
                </div>
              </div>
            )}
            {currentTab === 'theory' && (
              <div>
                <div className="prose prose-lg max-w-none prose-purple">
                  <div dangerouslySetInnerHTML={{ __html: lesson.content.theory }} />
                </div>
                
                <div className="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">Ready to practice?</h3>
                      <p className="text-purple-100">Test your knowledge with interactive questions</p>
                    </div>
                    <button
                      onClick={() => setCurrentTab('practice')}
                      className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Start Practice →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {currentTab === 'practice' && currentPracticeQuestion && (
              <div>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Question {currentQuestion + 1} of {lesson.content.practice.length}
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{width: `${((currentQuestion + 1) / lesson.content.practice.length) * 100}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-relaxed">
                    {currentPracticeQuestion.question}
                  </h3>
                  
                  <div className="space-y-4">
                    {currentPracticeQuestion.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedAnswer(index)}
                        disabled={showResults}
                        className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-102 ${
                          selectedAnswer === index
                            ? showResults
                              ? index === currentPracticeQuestion.correct
                                ? 'border-green-500 bg-green-50 shadow-lg'
                                : 'border-red-500 bg-red-50 shadow-lg'
                              : 'border-purple-500 bg-purple-50 shadow-lg'
                            : showResults && index === currentPracticeQuestion.correct
                            ? 'border-green-500 bg-green-50 shadow-lg'
                            : 'border-gray-200 hover:border-purple-300 hover:bg-purple-25 hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4 text-sm font-bold transition-colors ${
                            selectedAnswer === index
                              ? showResults
                                ? index === currentPracticeQuestion.correct
                                  ? 'border-green-500 bg-green-500 text-white'
                                  : 'border-red-500 bg-red-500 text-white'
                                : 'border-purple-500 bg-purple-500 text-white'
                              : showResults && index === currentPracticeQuestion.correct
                              ? 'border-green-500 bg-green-500 text-white'
                              : 'border-gray-400 text-gray-400'
                          }`}>
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span className="whitespace-pre-line text-lg">{option}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {showResults && (
                  <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">💡</span>
                      <div>
                        <h4 className="font-bold text-blue-900 mb-2 text-lg">Explanation:</h4>
                        <p className="text-blue-800 leading-relaxed">{currentPracticeQuestion.explanation}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex space-x-4">
                  {!showResults ? (
                    <button
                      onClick={handleAnswerSubmit}
                      disabled={selectedAnswer === null}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none"
                    >
                      Submit Answer
                    </button>
                  ) : (
                    <>
                      {currentQuestion < lesson.content.practice.length - 1 ? (
                        <button
                          onClick={handleNextQuestion}
                          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                        >
                          Next Question →
                        </button>
                      ) : (
                        <Link
                          to={`/courses/${courseId}`}
                          className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
                        >
                          🎉 Complete Lesson
                        </Link>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};