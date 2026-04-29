const updateUniqueItems = (map) => {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    map.set(key, value === 1 ? 100 : value);
  });
};

export default updateUniqueItems;
