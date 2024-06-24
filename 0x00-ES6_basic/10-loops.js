export default function appendToEachArrayValue(array, appendString) {
  const n = [];
  for (const value of array) {
    n.push(appendString + value);
  }

  return n;
}
