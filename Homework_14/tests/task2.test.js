const axios = require("axios");
const fetchWithHeadersAndParams = require("../src/task2");

jest.mock("axios");

describe("Task 2 - Headers and params", () => {
  test("should call axios.get with correct headers and params", async () => {
    axios.get.mockResolvedValue({ data: [] });

    await fetchWithHeadersAndParams();

    expect(axios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts",
      {
        headers: {
          Authorization: "Bearer test123",
          "X-Custom-Header": "Hello"
        },
        params: {
          userId: 5,
          sort: "asc"
        }
      }
    );
  });
});
