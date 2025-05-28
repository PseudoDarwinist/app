# AI-Tutor: SwiftUI Learning Platform

A full-stack AI-powered learning platform for mastering iOS development with SwiftUI. Features intelligent tutoring, visual learning aids, and interactive practice exercises.

## 🚀 Quick Start

Your AI-Tutor app is now **running locally**!

- **Frontend**: http://localhost:3000 
- **Backend API**: http://localhost:8001
- **API Status**: http://localhost:8001/api/status

## 🏗️ Project Structure

```
app/
├── backend/              # FastAPI backend server
│   ├── server.py        # Main API server
│   ├── emergentintegrations_fallback.py  # Fallback AI implementations
│   └── requirements.txt # Python dependencies
├── frontend/            # React frontend application
│   ├── src/
│   │   ├── App.js      # Main React app
│   │   ├── components.js # UI components
│   │   ├── pages.js    # Application pages
│   │   └── index.js    # Entry point
│   ├── package.json    # Node.js dependencies
│   └── .env           # Environment variables
└── venv/               # Python virtual environment
```

## ✅ Current Status

### ✅ Working Features
- ✅ **Backend FastAPI server** running on port 8001
- ✅ **React frontend** running on port 3000
- ✅ **API endpoints** responding correctly
- ✅ **Cross-Origin Resource Sharing (CORS)** configured
- ✅ **Error handling** with fallback responses
- ✅ **Beautiful UI** with gradient animations
- ✅ **Component structure** for courses and lessons
- ✅ **Fixed React key warnings** - no more duplicate key errors

### ⚠️ Known Issues Fixed
- ✅ Fixed duplicate React keys (`T` and `S` in progress calendar)
- ✅ Added `REACT_APP_BACKEND_URL=http://localhost:8001` environment variable
- ✅ Resolved missing backend URL configuration

### 🔧 Remaining Setup (Optional)
The app works without these, but for full AI features:

- **OpenAI API Key**: Add to `backend/.env` for AI-powered visualizations and image generation
- **WebSocket warnings**: These are from React dev server and don't affect functionality

## 🎯 Features

### 🧠 AI-Powered Learning
- **Smart Analogies**: AI generates memorable comparisons for complex concepts
- **Visual Learning**: Educational diagrams and illustrations  
- **Concept Explanations**: Detailed breakdowns of SwiftUI components

### 📱 Interactive Practice
- **Hands-on Exercises**: Practice SwiftUI concepts with real code
- **Progress Tracking**: Visual progress indicators and streaks
- **Interactive Lessons**: Step-by-step learning modules

### 🎨 Modern UI/UX
- **Beautiful Design**: Gradient animations and modern interface
- **Responsive Layout**: Works on desktop and mobile
- **Smooth Transitions**: Polished user experience

## 🔑 Environment Setup (Optional)

To enable full AI features, create `backend/.env`:

```bash
# Copy the example file
cp backend/.env.example backend/.env

# Edit with your OpenAI API key
OPENAI_API_KEY=your-actual-openai-api-key-here
```

## 🛠️ Development Commands

### Backend (FastAPI)
```bash
# Activate virtual environment  
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run development server
cd backend
python server.py
```

### Frontend (React)
```bash
# Install dependencies
cd frontend
npm install

# Start development server
npm start
```

### Both Services
```bash
# Backend runs on: http://localhost:8001
# Frontend runs on: http://localhost:3000
```

## 📡 API Endpoints

### Status Check
```bash
GET http://localhost:8001/api/status
```

### Generate AI Visualization  
```bash
POST http://localhost:8001/api/generate-visualization
Content-Type: application/json

{
  "concept": "VStack",
  "context": "SwiftUI layout container"
}
```

### Generate Concept Images
```bash
POST http://localhost:8001/api/generate-concept-image
Content-Type: application/json

{
  "concept": "HStack",
  "prompt": "Educational diagram showing HStack layout"
}
```

## 🚨 Troubleshooting

### WebSocket Warnings
The WebSocket connection warnings in the browser console are from React's development server trying to connect for hot reloading. They don't affect the app functionality.

### Missing OpenAI API Key
The app works without an OpenAI API key - it will use beautiful fallback responses for educational content.

### Port Conflicts
If ports 3000 or 8001 are busy:
```bash
# Kill processes on those ports
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill
lsof -i :8001 | grep LISTEN | awk '{print $2}' | xargs kill
```

## 🎓 Usage

1. **Visit** http://localhost:3000 to see the beautiful AI-Tutor interface
2. **Browse Courses** - Explore the SwiftUI learning path
3. **Practice Concepts** - Interactive lessons with visualizations
4. **Track Progress** - See your learning streaks and achievements

## 🏆 Success!

Your AI-Tutor app is successfully running! The application features:

- ✨ **Modern React frontend** with beautiful UI
- 🚀 **Fast FastAPI backend** with AI integrations  
- 🎨 **Interactive learning** modules and practice exercises
- 🧠 **Smart fallbacks** for AI features when API keys aren't configured
- 📱 **Mobile-responsive** design

**Next Steps**: Add your OpenAI API key to unlock full AI-powered features, or continue learning with the comprehensive fallback content already available!
