function isPrime(num: number): boolean {
  if (num === 2) {
    return true;
  }

  if (num % 2 === 0 || num <= 1) {
    return false;
  }

  let result = false;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i += 1) {
    console.log(`start : ${result}`);
    if (num % i === 0) {
      result = false;
      console.log(`first IF : ${result}`);
      break;
    }

    if (num % i !== 0) {
      result = true;
      console.log(`second IF : ${result}`);
    }

    console.log(`end : ${result}`);
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

// export {};
