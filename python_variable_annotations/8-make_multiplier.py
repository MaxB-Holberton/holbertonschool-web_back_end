#!/usr/bin/env python3
"""
    Module for returning a value multiplied by itself
"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
        returns the multiplier function
    """
    return (lambda x: multiplier * x)
