function isPrime(num: number): boolean {
  if (num === 2) {
    return true;
  }

  if (num % 2 === 0 || num <= 1) {
    return false;
  }

  let result = false;

  let breakFor = false;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i += 1) {
    if (!breakFor && num % i === 0) {
      result = false;
      breakFor = true;
    }

    if (!breakFor && num % i !== 0) {
      result = true;
    }
  }

  return result;
}

function solution(nums: number[]): number {
  let answer = 0;

  const sortedNums = nums.sort();

  for (
    let firstIndex = 0;
    firstIndex < sortedNums.length - 2;
    firstIndex += 1
  ) {
    for (
      let secondIndex = firstIndex + 1;
      secondIndex < sortedNums.length - 1;
      secondIndex += 1
    ) {
      for (
        let thirdIndex = secondIndex + 1;
        thirdIndex < sortedNums.length;
        thirdIndex += 1
      ) {
        const sum =
          sortedNums[firstIndex] +
          sortedNums[secondIndex] +
          sortedNums[thirdIndex];

        if (isPrime(sum)) {
          // console.log(`number: ${sum}`);
          answer += 1;
        }
      }
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
console.log(solution([2, 4, 6, 8, 9]));

export {};
