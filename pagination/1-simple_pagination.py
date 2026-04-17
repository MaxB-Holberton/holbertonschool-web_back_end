#!/usr/bin/env python3
"""
    module for hypermedia pagination
"""


import csv
import math
from typing import List


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def index_range(self, page, page_size):
        """
            returns a tuple of the start and end indexes
        """
        return (((page - 1) * page_size), ((page - 1) * page_size) + page_size)

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
            function to get the page
        """
        assert type(page_size) is int
        assert type(page) is int
        assert page > 0
        assert page_size > 0
        self.dataset()
        rng = self.index_range(page, page_size)
        datalen = len(self.__dataset)

        if rng[0] > datalen or rng[1] > datalen:
            return []

        return self.__dataset[rng[0]: rng[1]]
