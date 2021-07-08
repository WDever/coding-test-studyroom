const solution = (N: number, stages: number[]): number[] =>
  new Array(N)
    .fill(0)
    .map((_, index) => {
      const value = index + 1;
      const participants = stages.filter((stage) => stage >= value).length;
      const loser =
        participants - stages.filter((stage) => stage > value).length;

      return {
        value,
        failureRate: loser / participants,
      };
    })
    .sort((a, b) => b.failureRate - a.failureRate)
    .map((obj) => obj.value);

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));

export {};
