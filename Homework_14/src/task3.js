const axios = require("axios");

async function makeRequest() {
  try {
    const response = await axios.get("/mock-endpoint");
    return response.data;
  } catch (err) {
    return "Request failed";
  }
}

module.exports = makeRequest;
