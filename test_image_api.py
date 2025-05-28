import os
import sys
sys.path.append('backend')

# Explicitly set empty API key
os.environ['OPENAI_API_KEY'] = ''

from server import generate_concept_image
from server import ImageGenerationRequest

async def test():
    request = ImageGenerationRequest(concept="VStack", prompt="Educational diagram")
    try:
        result = await generate_concept_image(request)
        print("Success: Generated image with concept:", result.concept)
    except Exception as e:
        print("Error:", str(e))
        import traceback
        traceback.print_exc()

import asyncio
asyncio.run(test()) 