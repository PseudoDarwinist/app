import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getAllCourses, getCourse, getLesson } from './data/coursesData';

// Courses Page - Lists all available courses
export const CoursesPage = () => {
  const courses = getAllCourses();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Courses</h1>
          <p className="text-xl text-gray-600">Choose a course to begin your learning journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link key={course.id} to={`/courses/${course.id}`}>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Level {course.level}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-blue-600 font-semibold">{course.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        {course.lessons} Lessons
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        {course.practice} Practice
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
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
      <div className="min-h-screen flex items-center justify-center">
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link to="/courses" className="text-blue-600 hover:underline mb-4 inline-block">
            ← Back to courses
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h1>
              <p className="text-gray-600 mb-4">{course.description}</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Lessons</span>
                  <span className="font-semibold">{course.lessons}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Practice Problems</span>
                  <span className="font-semibold">{course.practice}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Level</span>
                  <span className="font-semibold">Level {course.level}</span>
                </div>
              </div>

              {/* Chapter Navigation */}
              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-3">Chapters</h3>
                <div className="space-y-2">
                  {course.chapters.map((chapter, index) => (
                    <button
                      key={chapter.id}
                      onClick={() => setActiveChapter(index)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        index === activeChapter 
                          ? 'bg-purple-100 text-purple-700 border-l-4 border-purple-500' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="font-medium">{chapter.title}</div>
                      <div className="text-sm text-gray-500">{chapter.lessons.length} lessons</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Learning Path */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{currentChapter.title}</h2>
                <p className="text-gray-600">Level {course.level}</p>
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
                <div className="mt-8 bg-gray-100 rounded-xl p-6 text-center max-w-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {currentChapter.lessons[0].title}
                  </h3>
                  <p className="text-gray-600 mb-4">{currentChapter.lessons[0].description}</p>
                  <button
                    onClick={() => handleLessonClick(currentChapter.lessons[0])}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Continue
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
  const [currentTab, setCurrentTab] = useState('theory');
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  if (!course || !lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Lesson not found</h1>
          <Link to={`/courses/${courseId}`} className="text-blue-600 hover:underline">
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

  const currentPracticeQuestion = lesson.content.practice[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <div className="mb-6">
          <Link to={`/courses/${courseId}`} className="text-blue-600 hover:underline mb-4 inline-block">
            ← Back to {course.title}
          </Link>
        </div>

        {/* Lesson Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{lesson.title}</h1>
          <p className="text-gray-600">{lesson.description}</p>
        </div>

        {/* Lesson Content */}
        <div className="bg-white rounded-xl shadow-lg">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setCurrentTab('theory')}
                className={`px-6 py-4 text-sm font-medium ${
                  currentTab === 'theory'
                    ? 'border-b-2 border-purple-500 text-purple-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Theory
              </button>
              <button
                onClick={() => setCurrentTab('practice')}
                className={`px-6 py-4 text-sm font-medium ${
                  currentTab === 'practice'
                    ? 'border-b-2 border-purple-500 text-purple-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Practice ({lesson.content.practice.length} questions)
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {currentTab === 'theory' && (
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: lesson.content.theory }}
              />
            )}

            {currentTab === 'practice' && currentPracticeQuestion && (
              <div>
                <div className="mb-4">
                  <span className="text-sm text-gray-500">
                    Question {currentQuestion + 1} of {lesson.content.practice.length}
                  </span>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {currentPracticeQuestion.question}
                  </h3>
                  
                  <div className="space-y-3">
                    {currentPracticeQuestion.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedAnswer(index)}
                        disabled={showResults}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                          selectedAnswer === index
                            ? showResults
                              ? index === currentPracticeQuestion.correct
                                ? 'border-green-500 bg-green-50'
                                : 'border-red-500 bg-red-50'
                              : 'border-purple-500 bg-purple-50'
                            : showResults && index === currentPracticeQuestion.correct
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center mr-3 text-sm font-semibold">
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span className="whitespace-pre-line">{option}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {showResults && (
                  <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Explanation:</h4>
                    <p className="text-blue-800">{currentPracticeQuestion.explanation}</p>
                  </div>
                )}

                <div className="flex space-x-4">
                  {!showResults ? (
                    <button
                      onClick={handleAnswerSubmit}
                      disabled={selectedAnswer === null}
                      className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                    >
                      Submit Answer
                    </button>
                  ) : (
                    <>
                      {currentQuestion < lesson.content.practice.length - 1 ? (
                        <button
                          onClick={handleNextQuestion}
                          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                        >
                          Next Question
                        </button>
                      ) : (
                        <Link
                          to={`/courses/${courseId}`}
                          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-block"
                        >
                          Complete Lesson
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