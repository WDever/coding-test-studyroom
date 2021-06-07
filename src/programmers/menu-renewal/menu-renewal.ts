function solution(orders: string[], course: number[]): string[] {
  const splittedOrders = orders.map((order) => order.split(''));

  console.log(splittedOrders);

  return [];
}

solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]);

export {};
