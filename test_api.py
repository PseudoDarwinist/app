import os
import sys
sys.path.append('backend')

os.environ['OPENAI_API_KEY'] = ''

from server import generate_visualization
from server import VisualizationRequest

async def test():
    request = VisualizationRequest(concept="VStack", context="SwiftUI layout")
    try:
        result = await generate_visualization(request)
        print("Success:", result)
    except Exception as e:
        print("Error:", str(e))

import asyncio
asyncio.run(test()) 