function solution(s: string): number {
  const convertedString = s
    .replace(/zero/gi, '0')
    .replace(/one/gi, '1')
    .replace(/two/gi, '2')
    .replace(/three/gi, '3')
    .replace(/four/gi, '4')
    .replace(/five/gi, '5')
    .replace(/six/gi, '6')
    .replace(/seven/gi, '7')
    .replace(/eight/gi, '8')
    .replace(/nine/gi, '9');

  return Number(convertedString);
}

console.log(solution('one4seveneight'));
console.log(solution('23four5six7'));
console.log(solution('2three45sixseven'));
console.log(solution('123'));
console.log(solution('1zerotwozero3'));

export {};
