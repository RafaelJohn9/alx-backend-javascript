/* eslint-disable no-continue */
export default function cleanSet(set, startString) {
  let resultString = '';
  let firstMatch = true;
  if (!set || !startString || typeof startString !== 'string' || !startString.length || set.size === 0) {
    return resultString;
  }
  for (const value of set) {
    if (value.length < startString.length) {
      continue;
    }
    if (value.startsWith(startString)) {
      if (!firstMatch) {
        resultString += '-';
      }
      resultString += value.slice(startString.length);
      firstMatch = false;
    }
  }

  return resultString;
}
