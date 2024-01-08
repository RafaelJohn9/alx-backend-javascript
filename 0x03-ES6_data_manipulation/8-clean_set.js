function cleanSet(set, startString) {
  let resultString = '';
  let firstMatch = true;

  for (const value of set) {
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
