export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Postion outside range');
  }
  const buffer = new ArrayBuffer(length);
  const dataview = new DataView(buffer);
  dataview.setInt8(position, value);
  return dataview;
}
