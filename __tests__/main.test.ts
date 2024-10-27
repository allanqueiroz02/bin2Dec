import { convertBinToDec } from "../typescript/main";

describe("Test main.js", () => {
  test("Should convert a binary value to decimal", () => {
    const result = convertBinToDec("1001");
    expect(result).toBe(9);
  });
});
