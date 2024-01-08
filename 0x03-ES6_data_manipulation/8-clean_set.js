export default function cleanSet(set, startString) {
  return Array.from(set)
    .filter((element) => element.startsWith(startString) && startString.length > 0)
    .map((element) => element.replace(startString, ''))
    .join('-');
}
