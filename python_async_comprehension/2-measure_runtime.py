#!/usr/bin/env python3
"""
    Module to measure time of async functions
"""
import asyncio
from time import time


async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
        function to measure async function time
    """
    start_time = time()
    await asyncio.gather(async_comprehension(), async_comprehension(),
                         async_comprehension(), async_comprehension())
    end_time = time()
    return end_time - start_time
