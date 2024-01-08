export default function cleanSet(set, startString) {
  let newString = '';
  let firstString = true;

  if (startString.length === 0 || set.size === 0) {
    return newString;
  }
  for (const string of set) {
    if (string.slice(0, startString.length) === startString) {
      if (!firstString) {
        newString += '-';
      }
      newString += string.slice(startString.length);
      firstString = false;
    }
  }
  return newString;
}
