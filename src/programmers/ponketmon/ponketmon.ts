function solution(nums: number[]): number {
  const combinationLength = Array.from(new Set(nums)).length;
  const limit = nums.length / 2;

  if (combinationLength > limit) {
    return limit;
  }

  return combinationLength;
}

// const solution = (nums: number[]): number =>
//   Array.from(new Set(nums)).length > nums.length / 2
//     ? nums.length / 2
//     : Array.from(new Set(nums)).length;

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));

export {};
