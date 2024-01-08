export default function hasValuesFromArray(set, array) {
  const arraySet = new Set(array);
  for (const element of arraySet) {
    if (!set.has(element)) {
      return false;
    }
  }
  return true;
}
