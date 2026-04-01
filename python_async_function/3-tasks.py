#!/usr/bin/env python
"""
    Module to return an asyncio.task
"""


import asyncio
import random

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int = 10) -> asyncio.Task:
    """
        function returns an asyncio.Task
    """
    return asyncio.create_task(wait_random(max_delay))
