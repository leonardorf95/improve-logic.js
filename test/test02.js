const ratings = [2, 1, 3, [2, 1]];

const countDecreaseingRatings = (ratings) => {
  let count = 0;

  ratings.forEach((element) => {
    if (Array.isArray(element)) {
      element.forEach((element2) => {
        count++;
      });
    } else {
      console.log(count, element);
      count++;
    }
  });

  return count;
};

console.log(countDecreaseingRatings(ratings));
