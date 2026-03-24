#!/usr/bin/env python3
"""
    Module for creating a tuple with str & (int or float)
"""

from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
        returns the tuple
    """
    return (k, v ** 2)
