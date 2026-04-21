export default function appendToEachArrayValue(array, appendString) {
  const newarray = [];
  for (const item of array) {
    newarray[array.indexOf(item)] = appendString + item;
  }

  return newarray;
}
