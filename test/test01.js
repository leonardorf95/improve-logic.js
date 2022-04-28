const logs = ['9 7 50', '22 7 20', '33 7 50', '22 7 30', '1 1 2', '9 10 50'];

const threshold = 3;

Object.filter = (mainObject, filterFunction) => {
  return Object.keys(mainObject)
    .filter((ObjectKey) => {
      return filterFunction(mainObject[ObjectKey]);
    })
    .reduce((result, ObjectKey) => {
      result[ObjectKey] = mainObject[ObjectKey];
      return result;
    }, {});
};

const processLogs = (logs, threshold) => {
  let result = [];
  let temp = [];

  logs.map((log) => {
    const item = log.split(' ');

    const filterDuplicates = item.filter((element, position) => {
      return item.indexOf(element) === position;
    });

    temp.push(filterDuplicates);
  });

  const arrays = temp.flat();

  const lastObject = arrays.reduce(
    (prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev),
    []
  );

  const findResult = Object.filter(lastObject, (last) => {
    return last >= threshold;
  });

  return Object.keys(findResult);
};

console.log(processLogs(logs, threshold));
