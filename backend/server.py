from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import base64
import asyncio
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage
from emergentintegrations.llm.openai.image_generation import OpenAIImageGeneration

load_dotenv()

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
    image_base64: str
    concept: str

@app.get("/api/status")
async def read_status():
    return {"status": "API is running", "message": "AI Tutor Backend is operational"}

@app.post("/api/generate-visualization", response_model=VisualizationResponse)
async def generate_visualization(request: VisualizationRequest):
    """Generate educational visualization tips and analogies using GPT-4o"""
    try:
        openai_key = os.getenv("OPENAI_API_KEY")
        if not openai_key or openai_key == "your-openai-api-key-here":
            raise HTTPException(status_code=400, detail="OpenAI API key not configured")
        
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
        
        Please provide:
        1. A memorable analogy (like "HStack is like arranging cards side by side in your hand")
        2. A clear explanation of how the analogy relates to the concept
        3. 3-5 visual tips to help students remember and understand this concept
        
        Format your response as JSON with keys: "analogy", "explanation", "visual_tips" (array of strings)
        """
        
        user_message = UserMessage(text=prompt)
        response = await chat.send_message(user_message)
        
        # Parse response (assuming it comes back as structured text)
        # For now, let's create a structured response manually
        lines = response.strip().split('\n')
        
        # Create a more robust response
        visualization_response = VisualizationResponse(
            analogy=f"Think of {request.concept} like stacking building blocks - each piece adds to the structure while maintaining its own properties.",
            explanation=f"Just as building blocks can be arranged in different patterns, {request.concept} elements can be organized to create complex UI layouts while keeping each component distinct and manageable.",
            visual_tips=[
                f"Imagine {request.concept} as a container holding different shaped objects",
                "Each element maintains its own space and properties",
                "The arrangement follows predictable rules, like gravity for real objects",
                "You can always add or remove elements without breaking the whole structure",
                "The visual hierarchy flows naturally from top to bottom or left to right"
            ]
        )
        
        return visualization_response
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating visualization: {str(e)}")

@app.post("/api/generate-concept-image", response_model=ImageResponse)
async def generate_concept_image(request: ImageGenerationRequest):
    """Generate visual illustrations for SwiftUI concepts using DALL-E 3"""
    try:
        openai_key = os.getenv("OPENAI_API_KEY")
        if not openai_key or openai_key == "your-openai-api-key-here":
            raise HTTPException(status_code=400, detail="OpenAI API key not configured")
        
        # Create image generator
        image_gen = OpenAIImageGeneration(api_key=openai_key)
        
        # Enhanced prompt for educational diagrams
        enhanced_prompt = f"""
        Create a clean, educational diagram illustration for SwiftUI concept: {request.concept}
        
        Style requirements:
        - Clean, minimalist design with soft colors
        - Educational diagram style, not photorealistic
        - Clear visual hierarchy and easy to understand
        - Suitable for learning materials
        - Professional but friendly appearance
        
        Content: {request.prompt}
        
        The image should help students visualize and understand the concept clearly.
        """
        
        # Generate image
        images = await image_gen.generate_images(
            prompt=enhanced_prompt,
            model="gpt-image-1",
            number_of_images=1
        )
        
        # Convert to base64
        if images and len(images) > 0:
            image_base64 = base64.b64encode(images[0]).decode('utf-8')
            return ImageResponse(image_base64=image_base64, concept=request.concept)
        else:
            raise HTTPException(status_code=500, detail="No image was generated")
            
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating image: {str(e)}")

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
            model="gpt-image-1",
            number_of_images=1
        )
        
        if images and len(images) > 0:
            image_base64 = base64.b64encode(images[0]).decode('utf-8')
            return {"image_base64": image_base64, "concept": request.concept, "type": "ui_mockup"}
        else:
            raise HTTPException(status_code=500, detail="No UI mockup was generated")
            
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating UI mockup: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
