const solution = (N, stages) =>
  new Array(N)
    .fill(0)
    .map((_, index) => {
      const value = index + 1;
      const participants = stages.filter((stage) => stage >= value).length;
      const loser =
        participants - stages.filter((stage) => stage > value).length;

      return {
        value,
        failureRate: loser / participants,
      };
    })
    .sort((a, b) => b.failureRate - a.failureRate)
    .map((obj) => obj.value);

export {};
