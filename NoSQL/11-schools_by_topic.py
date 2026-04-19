#!/usr/bin/env python3
"""
    module to search documents
"""


import pymongo


def schools_by_topic(mongo_collection, topic):
    """
        finds all topics in the provided name
    """
    return mongo_collection.find({"topics": topic})
