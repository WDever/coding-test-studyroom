function solution(n, lost, reserve) {
  const copiedReserve = Array.from(reserve).filter(
    (studentNumber) => !lost.includes(studentNumber),
  );
  const copiedLost = Array.from(lost).filter(
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
