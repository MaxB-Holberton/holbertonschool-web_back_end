#!/usr/bin/env python3
"""
	module to list all documents
"""


def list_all(mongo_collection):
	"""
		Function to list all documents
	"""
    docs = list(mongo_collection.find())
    return docs
