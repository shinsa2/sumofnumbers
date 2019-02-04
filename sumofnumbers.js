const testNums = [1, 2, 3, 4];

function sumFor(data) {
  let total = 0;
  for (const items of data) {
    total += items;
  }
  return total;
}

console.log(sumFor(testNums));

function sumWhile(data) {
  let total = 0;
  let counter = 0;
  while (counter < data.length) {
    total += data[counter];
    counter++;
  }
  return total;
}

console.log(sumWhile(testNums));

function sumRecursion(data) {
  if (data.length === 0) {
    return 0;
  }
  return data[0] + sumRecursion(data.slice(1, data.length));
}

console.log(sumRecursion(testNums));

function sumTheSimpleWay(data) {
  return _.reduce(data, (memo, number) => memo + number, 0);
}

console.log(sumTheSimpleWay(testNums));
