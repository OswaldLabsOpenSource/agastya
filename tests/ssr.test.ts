/** @jest-environment node */
import Agastya from "../src/index";

test("can be imported and constructed without a browser window", () => {
  expect(typeof Agastya).toBe("function");
  expect(() => new Agastya("API_KEY")).not.toThrow();
});

test("browser actions reject cleanly during server-side rendering", async () => {
  const agastya = new Agastya("API_KEY");

  await expect(agastya.open()).rejects.toThrow("browser environment");
});
