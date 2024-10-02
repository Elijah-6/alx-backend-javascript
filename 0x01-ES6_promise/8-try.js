export default function divideFunction(numerator, denominator) {
  let result = 0;
  try {
    if (denominator === 0) throw Error('cannot divide by 0');
    result = numerator / denominator;
  } catch (err) {
    console.log(err);
  }
  return result;
}
