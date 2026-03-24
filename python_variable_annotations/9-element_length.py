#!/usr/bin/env python3
"""
    Module for returning a list of tuples
"""

from typing import List, Tuple, Sequence, Iterable


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
        stuff to return
    """
    return [(i, len(i)) for i in lst]
