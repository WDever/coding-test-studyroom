function solution(n: number, lost: number[], reserve: number[]): number {
  const copiedReserve: number[] = Array.from(reserve).filter(
    (studentNumber) => !lost.includes(studentNumber),
  );
  const copiedLost: number[] = Array.from(lost).filter(
    (studentNumber) => !reserve.includes(studentNumber),
  );

  let answer = n - copiedLost.length;

  for (let i = 0; i < copiedLost.length; i += 1) {
    const reserveIndex = copiedReserve.findIndex(
      (studentNumber) => Math.abs(studentNumber - copiedLost[i]) <= 1,
    );

    if (reserveIndex !== -1) {
      copiedReserve.splice(reserveIndex, 1);
      answer += 1;
    }
  }

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [1, 2, 4], [2, 3, 5]));

export {};
