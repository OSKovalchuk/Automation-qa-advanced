const axios = require("axios");

async function fetchWithError() {
  try {
    await axios.get("https://this-url-does-not-exist.abc"); 
  } catch (err) {
    return "Request failed"; 
  }
}

module.exports = fetchWithError;
