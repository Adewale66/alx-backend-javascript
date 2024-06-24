export default function iterateThroughObject(reportWithIterator) {
  const report = reportWithIterator();
  const result = [];
  for (const item of report) {
    result.push(item);
  }
  return result;
}
