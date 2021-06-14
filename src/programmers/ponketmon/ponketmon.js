// const solution = (nums) =>
//   Array.from(new Set(nums)).length > nums.length / 2
//     ? nums.length / 2
//     : Array.from(new Set(nums)).length;
function solution(nums) {
  const combinationLength = Array.from(new Set(nums)).length;
  const limit = nums.length / 2;

  if (combinationLength > limit) {
    return limit;
  }

  return combinationLength;
}

export {};
