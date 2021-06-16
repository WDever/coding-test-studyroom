const ranking: Record<number, number> = {
  6: 1,
  5: 2,
  4: 3,
  3: 4,
  2: 5,
};

function solution(lottos: number[], win_nums: number[]): number[] {
  const sortedLottos = lottos.sort((first, second) => first - second);

  const zeroLottos = sortedLottos.slice(0, sortedLottos.lastIndexOf(0) + 1);
  const restLottos = sortedLottos.slice(sortedLottos.lastIndexOf(0) + 1);

  const matchedNumberCount = restLottos.reduce((acc, cur) => {
    if (win_nums.includes(cur)) {
      return acc + 1;
    }

    return acc;
  }, 0);

  const answer = [
    ranking[matchedNumberCount + zeroLottos.length] || 6,
    ranking[matchedNumberCount] || 6,
  ];

  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));

export {};
