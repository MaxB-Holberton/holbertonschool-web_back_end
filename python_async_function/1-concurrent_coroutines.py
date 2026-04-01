#!/usr/bin/env python3
"""
    module to show concurrent async tasks
"""

import random
import asyncio
from typing import List


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
        creates a list of async tasks
    """
    async_tasks = []
    for i in range(n):
        async_tasks.append(asyncio.create_task(wait_random(max_delay)))

    return await asyncio.gather(*async_tasks)
