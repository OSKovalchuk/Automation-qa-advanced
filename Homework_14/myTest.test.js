const axios = require("axios");
const env = require("../env.json"); 

describe("JSONPlaceholder API simple tests", () => {

  test("GET users", async () => {
    const res = await axios.get(`${env.baseUrl}/users`);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.data)).toBe(true);
  });

  test("POST new user", async () => {
    const body = {
      name: "Test User",
      email: "testuser@example.com"
    };

    const res = await axios.post(`${env.baseUrl}/users`, body);

    expect(res.status).toBe(201);
    expect(res.data).toHaveProperty("id");
    expect(res.data.name).toBe(body.name);
  });

  test("PUT update user", async () => {
    const body = {
      name: "Updated User",
      email: "updated@example.com"
    };

    const res = await axios.put(`${env.baseUrl}/users/1`, body);

    expect(res.status).toBe(200);
    expect(res.data.name).toBe(body.name);
  });

  test("DELETE user", async () => {
    const res = await axios.delete(`${env.baseUrl}/users/1`);

    expect(res.status).toBe(200); 
  });

  test("GET single user", async () => {
    const res = await axios.get(`${env.baseUrl}/users/1`);

    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty("id");
    expect(res.data.id).toBe(1);
  });

});
