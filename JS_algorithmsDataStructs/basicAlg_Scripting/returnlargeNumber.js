function largestOfFour(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${typeof arr[i]}`);
  }
  // You can do this!
  return arr;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
