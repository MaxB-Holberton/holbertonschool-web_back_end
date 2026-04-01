#!/usr/bin/env python3
"""
	Module for a simple async sleep
"""

import random
import asyncio

async def wait_random(max_delay: int=10) -> float:
	"""
		the wait_random function
	"""
	rtn = random.uniform(0, max_delay)
	await asyncio.sleep(rtn)
	return rtn
