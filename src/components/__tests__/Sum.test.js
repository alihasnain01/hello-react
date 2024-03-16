import Sum from "../Sum";

test("sum function should calculate 2 num", () => {
  const result = Sum(2, 3);
  expect(result).toBe(5);
});
