export default function appendToEachArrayValue(array, appendString) {
    for (let item of array) {
        array[array.indexOf(item)] = appendString + item
    }

return array;
}
