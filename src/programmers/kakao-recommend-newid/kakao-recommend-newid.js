function solution(new_id) {
  let answer = new_id
    .toLocaleLowerCase() // 1단계
    .replace(/[^a-z0-9._-]/gi, '') // 2단계
    .replace(/[.]{2,}/gi, '.') // 3단계
    .replace(/^[.]|[.]$/gi, ''); // 4단계

  // 5단계
  if (answer.length === 0) {
    answer = 'a';
  }

  // 6단계
  if (answer.length >= 16) {
    answer = answer.slice(0, 15).replace(/[.]$/gi, '');
  }

  // 7단계
  if (answer.length <= 2) {
    answer = answer.concat(answer[answer.length - 1].repeat(3 - answer.length));
  }

  return answer;
}

export {};
