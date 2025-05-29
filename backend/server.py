from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import base64
import asyncio
from dotenv import load_dotenv
from pathlib import Path
import sys

# Add the backend directory to the Python path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

# Use our fallback implementation instead of emergentintegrations
try:
    from emergentintegrations.llm.chat import LlmChat, UserMessage
    from emergentintegrations.llm.openai.image_generation import OpenAIImageGeneration
except ImportError:
    # Fallback to our local implementation
    from emergentintegrations_fallback import LlmChat, UserMessage, OpenAIImageGeneration

# Load environment variables from the backend directory
env_path = Path(__file__).parent / '.env'
load_dotenv(dotenv_path=env_path)

# Debug: Check if API key is loaded
openai_api_key = os.getenv("OPENAI_API_KEY")
if openai_api_key:
    print(f"✅ OpenAI API key loaded successfully (starts with: {openai_api_key[:10]}...)")
else:
    print("❌ No OpenAI API key found in environment variables")

app = FastAPI()

# CORS settings
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models for request/response
class VisualizationRequest(BaseModel):
    concept: str
    context: str = ""

class ImageGenerationRequest(BaseModel):
    prompt: str
    concept: str

class VisualizationResponse(BaseModel):
    analogy: str
    explanation: str
    visual_tips: list

class ImageResponse(BaseModel):
    image_data: str  # base64 encoded image data
    format: str = "png"  # image format
    concept: str

@app.get("/api/status")
async def read_status():
    return {"status": "API is running", "message": "AI Tutor Backend is operational"}

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "message": "SwiftUI learning platform backend is operational"}

@app.post("/api/generate-visualization", response_model=VisualizationResponse)
async def generate_visualization(request: VisualizationRequest):
    """Generate educational visualization tips and analogies using GPT-4o"""
    try:
        openai_key = os.getenv("OPENAI_API_KEY")
        print(f"Debug: API key check - {'Found' if openai_key else 'Not found'}")
        
        if not openai_key or openai_key == "your-openai-api-key-here":
            print("❌ No valid OpenAI API key configured")
            raise HTTPException(status_code=400, detail="OpenAI API key not configured. Please set OPENAI_API_KEY in your .env file.")
        
        # Try OpenAI API
        try:
            print(f"🤖 Attempting to generate AI response for concept: {request.concept}")
            
            # Create chat instance for concept explanation
            chat = LlmChat(
                api_key=openai_key,
                session_id=f"visualization_{request.concept}",
                system_message="You are an expert iOS/SwiftUI educator who creates memorable analogies and visual metaphors to help students understand complex programming concepts. Focus on simple, relatable comparisons that make abstract concepts concrete."
            ).with_model("openai", "gpt-4o")
            
            # Generate visualization content
            prompt = f"""
            Create an educational visualization for the SwiftUI concept: "{request.concept}"
            
            Context: {request.context}
            
            Please provide a JSON response with exactly these keys:
            - "analogy": A memorable analogy (like "HStack is like arranging cards side by side in your hand")
            - "explanation": A clear explanation of how the analogy relates to the concept
            - "visual_tips": An array of 3-5 visual tips to help students remember this concept
            
            Return only valid JSON, no additional text.
            """
            
            user_message = UserMessage(text=prompt)
            response = await chat.send_message(user_message)
            
            print(f"✅ Received response from OpenAI: {response[:100]}...")
            
            # Try to parse the JSON response
            import json
            try:
                parsed_response = json.loads(response)
                return VisualizationResponse(
                    analogy=parsed_response.get("analogy", f"Think of {request.concept} as a fundamental building block"),
                    explanation=parsed_response.get("explanation", f"The {request.concept} concept is essential for SwiftUI development"),
                    visual_tips=parsed_response.get("visual_tips", [f"Remember that {request.concept} is important for layout"])
                )
            except json.JSONDecodeError:
                print("⚠️ Failed to parse JSON response, using response as analogy")
                return VisualizationResponse(
                    analogy=f"AI Generated: {response[:200]}...",
                    explanation=f"The AI provided insights about {request.concept} for SwiftUI development",
                    visual_tips=[
                        f"🧠 AI Insight: {request.concept} follows predictable patterns",
                        "🔧 Each element serves a specific purpose in the layout",
                        "📐 Understanding the pattern helps predict behavior"
                    ]
                )
            
        except Exception as api_error:
            print(f"❌ OpenAI API Error: {str(api_error)}")
            raise HTTPException(status_code=500, detail=f"OpenAI API Error: {str(api_error)}")
        
    except Exception as e:
        print(f"❌ General Error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error generating visualization: {str(e)}")

@app.post("/api/generate-concept-image", response_model=ImageResponse)
async def generate_concept_image(request: ImageGenerationRequest):
    """Generate visual illustrations for SwiftUI concepts using GPT-4o Responses API"""
    try:
        openai_key = os.getenv("OPENAI_API_KEY")
        print(f"Debug: Image generation - API key check - {'Found' if openai_key else 'Not found'}")
        
        if not openai_key or openai_key == "your-openai-api-key-here":
            print("❌ No valid OpenAI API key configured for image generation")
            raise HTTPException(status_code=400, detail="OpenAI API key not configured. Please set OPENAI_API_KEY in your .env file.")
        
        try:
            print(f"🎨 Attempting to generate concept image for: {request.concept}")
            
            # Create enhanced prompt for SwiftUI concept visualization
            enhanced_prompt = f"""
            Create an educational diagram that illustrates the SwiftUI concept '{request.concept}'. 
            The image should be:
            - Clean and minimalist design
            - Educational and informative
            - Show the visual structure and layout
            - Include labels or annotations if helpful
            - Use a modern, developer-friendly aesthetic
            
            Additional context: {request.prompt}
            
            Make it suitable for a programming tutorial or documentation.
            """
            
            # Initialize image generation with OpenAI API key
            image_gen = OpenAIImageGeneration(openai_key)
            
            # Generate image using GPT-4o via Responses API
            images = await image_gen.generate_images(
                prompt=enhanced_prompt,
                model="gpt-4o",  # GPT-4o model for Responses API
                number_of_images=1
            )
            
            if images and len(images) > 0:
                # Convert bytes to base64 for response
                image_bytes = images[0]
                image_base64 = base64.b64encode(image_bytes).decode('utf-8')
                print(f"✅ Successfully generated concept image for '{request.concept}'")
                
                return ImageResponse(
                    image_data=image_base64,
                    format="png",
                    concept=request.concept
                )
            else:
                print(f"❌ No images returned from OpenAI")
                raise HTTPException(status_code=500, detail="No images were generated")
                
        except Exception as api_error:
            print(f"❌ OpenAI API error: {str(api_error)}")
            raise HTTPException(status_code=500, detail=f"Error generating image: {str(api_error)}")
            
    except HTTPException:
        raise
    except Exception as e:
        print(f"❌ Unexpected error in generate_concept_image: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Unexpected error: {str(e)}")

@app.post("/api/generate-developer-doodle")
async def generate_developer_doodle(request: dict):
    """Generate a developer-style whiteboard doodle for the given concept using GPT-4o Responses API"""
    try:
        concept = request.get("concept", "")
        context = request.get("context", "")
        
        if not concept:
            return {"success": False, "error": "Concept is required"}
        
        openai_key = os.getenv("OPENAI_API_KEY")
        if not openai_key or openai_key == "your-openai-api-key-here":
            return {"success": False, "error": "OpenAI API key not configured"}
        
        # Create a specific prompt for developer-style whiteboard drawings
        prompt = f"""Create a raw, hand-drawn developer whiteboard-style diagram for: {concept}

Context: {context}

Style requirements:
- Simple black ink on white background (like marker on whiteboard)
- Hand-drawn, sketchy style (not polished graphics)
- Include architectural components: boxes, arrows, connections
- Add developer annotations and notes in handwriting style
- Include system flow diagrams, data structures, or UI wireframes
- Use developer terminology and technical symbols
- Make it look like a software architect drew it quickly during planning
- Include labels, arrows showing data flow, and rough sketches of UI components

Focus on: system architecture, data flow, component relationships, user interactions, or technical concepts that a developer would sketch while thinking through the problem.

Make it educational and technical, showing how a developer thinks about building this concept from first principles."""
        
        try:
            print(f"🎨 Generating developer doodle for: {concept}")
            
            # Use our OpenAIImageGeneration class with Responses API (same as other endpoints)
            image_gen = OpenAIImageGeneration(openai_key)
            images = await image_gen.generate_images(
                prompt=prompt, 
                model="gpt-4o",  # GPT-4o model for Responses API
                number_of_images=1
            )
            
            if images and len(images) > 0:
                # Convert bytes to base64 for response
                image_bytes = images[0]
                image_base64 = base64.b64encode(image_bytes).decode('utf-8')
                print(f"✅ Successfully generated developer doodle for '{concept}'")
                return {
                    "success": True,
                    "image_base64": image_base64,
                    "prompt_used": prompt,
                    "concept": concept
                }
            else:
                return {"success": False, "error": "No image generated"}
                
        except Exception as api_error:
            print(f"❌ Error generating developer doodle: {str(api_error)}")
            return {"success": False, "error": f"Error generating doodle: {str(api_error)}"}
        
    except Exception as e:
        print(f"❌ Unexpected error in generate_developer_doodle: {str(e)}")
        return {"success": False, "error": f"Unexpected error: {str(e)}"}

@app.post("/api/generate-ui-mockup")
async def generate_ui_mockup(request: ImageGenerationRequest):
    """Generate UI mockup illustrations for SwiftUI layouts"""
    try:
        openai_key = os.getenv("OPENAI_API_KEY")
        if not openai_key or openai_key == "your-openai-api-key-here":
            raise HTTPException(status_code=400, detail="OpenAI API key not configured")
        
        image_gen = OpenAIImageGeneration(api_key=openai_key)
        
        # UI-specific prompt
        ui_prompt = f"""
        Create a clean iOS app interface mockup showing {request.concept} in action.
        
        Requirements:
        - Modern iOS design with SwiftUI elements
        - Clean, professional interface
        - Shows {request.concept} implementation clearly
        - Uses iOS design patterns and colors
        - Minimalist and educational focus
        
        Context: {request.prompt}
        """
        
        images = await image_gen.generate_images(
            prompt=ui_prompt,
            model="gpt-4o",  # GPT-4o model for Responses API
            number_of_images=1
        )
        
        if images and len(images) > 0:
            # Convert bytes to base64 for response
            image_bytes = images[0]
            image_base64 = base64.b64encode(image_bytes).decode('utf-8')
            return {"image_base64": image_base64, "concept": request.concept, "type": "ui_mockup"}
        else:
            raise HTTPException(status_code=500, detail="No UI mockup was generated")
            
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating UI mockup: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
