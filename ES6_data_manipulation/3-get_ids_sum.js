const getStudentIdsSum = (array) => array.reduce((sum, item) => sum + item.id, 0);

export default getStudentIdsSum;
