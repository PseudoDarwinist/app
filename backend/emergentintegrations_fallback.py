"""
Fallback implementation for emergentintegrations functionality
"""
import openai
from typing import List, Optional
import asyncio
import base64
import io
try:
    import aiohttp
except ImportError:
    aiohttp = None
    print("Warning: aiohttp module not found. Some functionality may be limited.")


class UserMessage:
    def __init__(self, text: str):
        self.text = text


class LlmChat:
    def __init__(self, api_key: str, session_id: str, system_message: str):
        self.api_key = api_key
        self.session_id = session_id
        self.system_message = system_message
        
        # Only create client if we have a valid API key
        if api_key and api_key != "your-openai-api-key-here":
            self.client = openai.AsyncOpenAI(api_key=api_key)
        else:
            self.client = None
        self.model = "gpt-4"
    
    def with_model(self, provider: str, model: str):
        if provider == "openai":
            self.model = model
        return self
    
    async def send_message(self, user_message: UserMessage):
        if not self.client:
            raise Exception("400: OpenAI API key not configured")
            
        try:
            response = await self.client.chat.completions.create(
                model=self.model,
                messages=[
                    {"role": "system", "content": self.system_message},
                    {"role": "user", "content": user_message.text}
                ],
                max_tokens=1000,
                temperature=0.7
            )
            return response.choices[0].message.content
        except Exception as e:
            raise Exception(f"Error in LLM chat: {str(e)}")


class OpenAIImageGeneration:
    def __init__(self, api_key: str):
        self.api_key = api_key
        
        # Only create client if we have a valid API key
        if api_key and api_key != "your-openai-api-key-here":
            self.client = openai.AsyncOpenAI(api_key=api_key)
        else:
            self.client = None
    
    async def generate_images(self, prompt: str, model: str = "gpt-4o", number_of_images: int = 1) -> List[bytes]:
        if not self.client:
            raise Exception("400: OpenAI API key not configured")
            
        try:
            print(f"🔍 DEBUG: Starting image generation with Responses API using GPT-4o")
            print(f"🔍 DEBUG: Prompt: {prompt[:100]}...")
            
            # Use the Responses API with GPT-4o for image generation
            response = await self.client.responses.create(
                model="gpt-4o",
                input=prompt,
                tools=[{"type": "image_generation"}],
            )
            
            print(f"✅ DEBUG: OpenAI Responses API response received successfully")
            print(f"🔍 DEBUG: Response: {response}")
            
            # Extract image data from the response
            image_data = [
                output.result
                for output in response.output
                if output.type == "image_generation_call"
            ]
            
            if image_data:
                # The result is already base64 encoded, decode it to bytes
                image_base64 = image_data[0]
                image_bytes = base64.b64decode(image_base64)
                print(f"✅ DEBUG: Successfully generated image ({len(image_bytes)} bytes)")
                return [image_bytes]
            else:
                raise Exception("No image was generated in the response")
                        
        except Exception as e:
            print(f"❌ DEBUG: OpenAI Responses API error: {str(e)}")
            print(f"❌ DEBUG: Error type: {type(e)}")
            raise Exception(f"Error generating image with Responses API: {str(e)}") 