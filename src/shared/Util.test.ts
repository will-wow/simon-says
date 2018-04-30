import * as Util from "./Util";

describe("Util", () => {
  describe("intersects", () => {
    it("finds an intersection", () => {
      expect(Util.intersects([1, 3], [3, 4, 1])).toBeTruthy();
    });

    it("finds when there isn't an intersection", () => {
      expect(Util.intersects([1, 3], [5, 4, 1])).toBeFalsy();
    });
  });

  describe("maxOf", () => {
    it("finds the max", () => {
      expect(Util.maxOf(Math.round)([1.1, 1.2, 1.7])).toBe(1.7);
    });
  });
});
