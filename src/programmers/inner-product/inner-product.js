const solution = (firstArr, secondArr) =>
  firstArr.reduce((acc, cur, index) => acc + cur * secondArr[index], 0);

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
console.log(solution([-1, 0, 1], [1, 0, -1]));
