const ranking = {
  6: 1,
  5: 2,
  4: 3,
  3: 4,
  2: 5,
};

function solution(lottos, win_nums) {
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

export {};
