#!/usr/bin/env python3
"""
    module to update documents
"""


import pymongo


def update_topics(mongo_collection, name, topics):
    """
        Updates all topics in the provided name
    """
    mongo_collection.update_many({"name": name}, {"$set":{"topics": topics}})
