#!/usr/bin/env python3

"""
    Module to create an async generator
"""

import asyncio
from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
        returns the list of results from the async_generator
    """
    result = []
    async for i in async_generator():
        result.append(i)
    return result
