#!/usr/bin/env python3
"""
    module to list all documents
"""


import pymongo


def list_all(mongo_collection):
    """
        Function to list all documents
    """
    return list(mongo_collection.find())
