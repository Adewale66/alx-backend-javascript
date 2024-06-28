export default function cleanSet(set, startStr) {
  let res = '';
  set.forEach((element) => {
    if (element.startsWith(startStr) && startStr !== '') {
      const s = element.substring(startStr.length);
      if (res !== '') res += '-';
      res += s;
    }
  });
  return res;
}
