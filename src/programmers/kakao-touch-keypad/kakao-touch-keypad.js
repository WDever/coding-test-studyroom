function solution(numbers, hand) {
  let latestLeftHandLocation = 10;
  let latestRightHandLocation = 12;

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

export {};
