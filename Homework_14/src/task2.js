const axios = require("axios");

async function fetchWithHeadersAndParams() {
  return axios.get("https://jsonplaceholder.typicode.com/posts", {
    headers: {
      Authorization: "Bearer test123",
      "X-Custom-Header": "Hello"
    },
    params: {
      userId: 5,
      sort: "asc"
    }
  });
}

module.exports = fetchWithHeadersAndParams;
