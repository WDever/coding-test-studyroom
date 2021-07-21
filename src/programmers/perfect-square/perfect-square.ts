const solution = (w: number, h: number): number => {
  const smallNum = w > h ? h : w;

  let greatestCommonFactor: number = 1;

  for (let i = 1; i <= smallNum; i += 1) {
    if (w % i === 0 && h % i === 0) {
      greatestCommonFactor = i;
    }
  }

  const destroyedSquareCount = w + h - greatestCommonFactor;

  return w * h - destroyedSquareCount;
};

console.log(solution(8, 12));
