function solution(left, right) {
  let answer = 0;
  const numbers = [...Array(right + 1 - left).fill(left)].map(
    (value, index) => {
      const num = value + index;

      let sum = 0;

      for (let i = 0; i <= num; i += 1) {
        if (num % i === 0) {
          sum += 1;
        }
      }

      return {
        num,
        sum,
      };
    },
  );

  for (let i = 0; i < numbers.length; i += 1) {
    const target = numbers[i];
    if (target.sum % 2 === 0) {
      answer += target.num;
    }

    if (target.sum % 2 !== 0) {
      answer -= target.num;
    }
  }

  return answer;
}

export {};
