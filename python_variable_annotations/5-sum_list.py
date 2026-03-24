#!/usr/bin/env python3
"""
    Module for adding a list of floats together
"""


from typing import List


def sum_list(input_list: List[float]) -> float:
    """
        Adds the list together and returns results
    """
    rtn = 0
    for i in input_list:
        rtn += i
    return rtn
