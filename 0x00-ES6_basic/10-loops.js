/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (const element of array) {
    array[i] = appendString + element;
    i++;
  }
  return array;
}
