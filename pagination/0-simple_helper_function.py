#!/usr/bin/env python3
"""
The basic pagination file
"""


def index_range(page, page_size):
    """
        returns a tuple of the start and end indexes
    """
    return (((page - 1) * page_size), ((page - 1) * page_size) + page_size)
