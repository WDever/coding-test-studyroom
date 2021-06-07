const solution = (absolutes, signs) =>
  absolutes.reduce(
    (acc, cur, index) => (signs[index] ? acc + cur : acc - cur),
    0,
  );
