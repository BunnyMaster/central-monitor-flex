export function formatter(number) {
  const numbers = number.toString().split('').reverse();
  const segs = [];

  while (numbers.length) segs.push(numbers.splice(0, 3).join(''));

  return segs.join(',').split('').reverse().join('');
}

export default formatter;
