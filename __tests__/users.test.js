const request = require("supertest");
const { app } = require("../index");

describe("User Service", () => {
  test("GET /health возвращает статус ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });

  test("POST /api/users без полей возвращает 400", async () => {
    const res = await request(app).post("/api/users").send({});
    expect(res.statusCode).toBe(400);
  });
});
