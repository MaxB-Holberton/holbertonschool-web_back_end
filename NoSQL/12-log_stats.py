#!/usr/bin/env python3
"""
    module to search documents
"""


from pymongo import MongoClient


def total_logs(mongo_collection):
    """
        returns the total number of logs
    """
    res = mongo_collection.count_documents({})
    print(f"{res} logs")


def count_methods(mongo_collection):
    """
        returns the number of each method
    """
    method_list = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print("Methods:")
    for item in method_list:
        count = mongo_collection.count_documents({"method": item})
        print(f"\tmethod {item}: {count}")


def status_check(mongo_collection):
    """
        checks the status
    """
    status = mongo_collection.count_documents({"method": "GET",
                                               "path": "/status"})
    print(f"{status} status check")


if __name__ == "__main__":
    """
        the main function
    """
    client = MongoClient('mongodb://127.0.0.1:27017')
    mongo_collection = client.logs.nginx
    total_logs(mongo_collection)
    count_methods(mongo_collection)
    status_check(mongo_collection)
