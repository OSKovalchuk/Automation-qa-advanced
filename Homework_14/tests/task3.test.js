const axios = require("axios");
const makeRequest = require("../src/task3");

jest.mock("axios");

describe("Task 3 - Mocking Axios", () => {
  test("should return data on successful request", async () => {
    axios.get.mockResolvedValue({ data: { message: "Success" } });

    const result = await makeRequest();

    expect(result).toEqual({ message: "Success" });
  });

  test("should handle failed request", async () => {
    axios.get.mockRejectedValue(new Error("Network error"));

    const result = await makeRequest();

    expect(result).toBe("Request failed");
  });
});
