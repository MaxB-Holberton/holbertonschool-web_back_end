#!/usr/bin/env python3
"""
    Module for adding a list of numbers together
"""


from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
        Adds the list together and returns results
    """
    rtn = 0
    for i in input_list:
        rtn += i
    return rtn
