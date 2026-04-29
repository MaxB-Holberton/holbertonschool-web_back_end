const getListStudentIds = (array) => {
  if (Array.isArray(array)) {
    const items = array.map((item) => item.id);
    return items;
  }
  return [];
};
export default getListStudentIds;
