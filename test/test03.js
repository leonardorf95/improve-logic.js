const arr1 = [5, 6, 7];
const arr2 = [3, 6, 10];

const getPoinst = (arr1, arr2) => {
  let result = [];
  let count = 0;
  let count2 = 0;

  if (arr1.length !== arr2.length) {
    return null;
  }

  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    const element2 = arr2[i];

    if (element > element2) {
      count++;
    } else if (element2 > element) {
      count2++;
    }
  }

  result.push(count, count2);

  return result;
};

console.log(getPoinst(arr1, arr2));
