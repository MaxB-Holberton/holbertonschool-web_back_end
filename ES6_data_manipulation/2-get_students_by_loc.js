const getStudentsByLocation = (array, filter) => {
  const items = array.filter((item) => item.location === filter);
  return items;
};

export default getStudentsByLocation;
