// function solution(d, budget) {
//   let answer = 0;

//   const sortedD = d.sort((x, y) => x - y);

//   for (let i = 1; i <= d.length; i += 1) {
//     const sum = sortedD.slice(0, i).reduce((acc, cur) => acc + cur, 0);

//     if (sum <= budget && i > answer) {
//       answer = i;
//     }
//   }

//   return answer;
// }
function solution(d, budget) {
  let answer = 0;

  const sortedD = d.sort((x, y) => x - y);

  sortedD.reduce((acc, cur, index) => {
    const count = index + 1;
    const sum = acc + cur;

    if (sum <= budget && count > answer) {
      answer = index + 1;
    }

    return sum;
  }, 0);

  return answer;
}

export {};
