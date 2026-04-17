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
        assert type(page_size) is int
        assert type(page) is int
        assert page > 0
        assert page_size > 0
        self.dataset()
        selected_range = self.index_range(page, page_size)
        return self.__dataset[selected_range[0]: selected_range[1]]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> List[List]:
        data = self.get_page(page, page_size)
        rtnDict = {}
        rtnDict['page_size'] = len(data)
        rtnDict['page'] = page
        rtnDict['data'] = data

        if (len(data) == 0):
            rtnDict['next_page'] = None
        else:
            rtnDict['next_page'] = page + 1

        if (page - 1 == 0):
            rtnDict['prev_page'] = None
        else:
            rtnDict['prev_page'] = page - 1

        rtnDict['total_pages'] = math.ceil(len(self.__dataset) / page_size)
        return rtnDict
