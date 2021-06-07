const solution = (absolutes: number[], signs: boolean[]): number =>
  absolutes.reduce(
    (acc, cur, index) => (signs[index] ? acc + cur : acc - cur),
    0,
  );

console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));

export {};
