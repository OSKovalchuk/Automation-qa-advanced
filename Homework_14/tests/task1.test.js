const fetchWithError = require("../src/task1");

describe("Task 1 - Error handling", () => {
  test("should return an error message when request fails", async () => {
    const result = await fetchWithError();
    expect(result).toBe("Request failed");
  });
});