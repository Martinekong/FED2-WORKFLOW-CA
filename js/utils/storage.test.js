import { describe, test, expect, beforeEach } from "vitest";
import { getUsername } from "./storage.js";

const userKey = "user";

describe("getUsername", () => {
  beforeEach(() => {
    const storage = {};

    global.localStorage = {
      setItem: (key, value) => (storage[key] = value),
      getItem: (key) => storage[key],
    };
  });

  test("returns the name from the user object in storage", () => {
    const mockUser = { name: "Test User" };
    localStorage.setItem(userKey, JSON.stringify(mockUser));

    const result = getUsername();
    expect(result).toBe("Test User");
  });

  test("returns null when no user exists in storage", () => {
    const result = getUsername();
    expect(result).toBeNull();
  });
});
