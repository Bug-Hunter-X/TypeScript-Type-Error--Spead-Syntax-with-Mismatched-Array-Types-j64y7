function combine(arr1: number[], arr2: number[]): number[] {
  const combinedArr = [...arr1, ...arr2.filter(item => typeof item === 'number')];
  return combinedArr;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, "6"]; // Incorrect type

const combined = combine(arr1, arr2);
console.log(combined); // Output: [1, 2, 3, 4, 5]