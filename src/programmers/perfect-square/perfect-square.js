const solution = (w, h) => {
  const smallNum = w > h ? h : w;

  let greatestCommonFactor = 1;

  for (let i = 1; i <= smallNum; i += 1) {
    if (w % i === 0 && h % i === 0) {
      greatestCommonFactor = i;
    }
  }

  const destroyedSquareCount = w + h - greatestCommonFactor;

  return w * h - destroyedSquareCount;
};
