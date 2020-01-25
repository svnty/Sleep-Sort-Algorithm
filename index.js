async function sleepSort(arr) => {
  const sorted = [];
  const neg = [];
  const pos = [];
  arr.forEach((element) => {
    if (element < 0) {
      neg.push(element *= -1);
    } else {
      pos.push(element);
    }
  });
  await Promise.all(
    pos.map((n) => new Promise((resolve) => {
      setTimeout(() => {
        resolve(sorted.push(n));
      }, n);
    }))
  );
  await Promise.all(
    neg.map((n) => new Promise((resolve) => {
      setTimeout(() => {
        resolve(sorted.unshift(n *= -1));
      }, n);
    }))
  );
  return sorted;
};

sleepSort([4, -1, -2, 5, 1, 4, 5, 9, 3, 2, 1, -9]).then(console.log);
