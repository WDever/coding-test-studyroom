function solution(numbers: number[], hand: 'right' | 'left'): string {
  let latestLeftHandLocation: number = 10;
  let latestRightHandLocation: number = 12;

  const answer = numbers
    .map((num) => {
      const comparableNum = num !== 0 ? num : 11;

      if (comparableNum % 3 === 1) {
        latestLeftHandLocation = comparableNum;
        return 'L';
      }

      if (comparableNum % 3 === 0) {
        latestRightHandLocation = comparableNum;
        return 'R';
      }

      const distanceFromLeftHand =
        Math.floor(Math.abs(comparableNum - latestLeftHandLocation) / 3) +
        (Math.abs(comparableNum - latestLeftHandLocation) % 3);
      const distanceFromRightHand =
        Math.floor(Math.abs(comparableNum - latestRightHandLocation) / 3) +
        (Math.abs(comparableNum - latestRightHandLocation) % 3);

      if (distanceFromRightHand < distanceFromLeftHand) {
        latestRightHandLocation = comparableNum;
        return 'R';
      }

      if (distanceFromLeftHand < distanceFromRightHand) {
        latestLeftHandLocation = comparableNum;
        return 'L';
      }

      if (hand === 'left') {
        latestLeftHandLocation = comparableNum;
        return 'L';
      }

      latestRightHandLocation = comparableNum;
      return 'R';
    })
    .join('');

  return answer;
}

console.log(
  solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'),
  solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right') === 'LRLLLRLLRRL',
);
console.log(
  solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'),
  solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left') === 'LRLLRRLLLRR',
);
console.log(
  solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'),
  solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right') === 'LLRLLRLLRL',
);
