#!/usr/bin/env python
"""
	Module to return an asyncio.task
"""

import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random

async def task_wait_n(n:int, max_delay:int = 10) -> List[float]:
	async_tasks = []
	for i in range(n):
		async_tasks.append(task_wait_random(max_delay))

	return await asyncio.gather(*async_tasks)
