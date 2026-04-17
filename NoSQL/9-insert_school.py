#!/usr/bin/env python3
"""
    module to insert a new document
"""


import pymongo


def insert_school(mongo_collection, **kwargs):
    """
        Function to insert a new document
    """
    return mongo_collection.insert(kwargs)
