import { describe, test, expect } from "vitest";
import { isActivePath } from "./userInterface.js";

describe("isActivePath", () => {
  test("returns true when current path matches href exactly", () => {
    expect(isActivePath("/contact", "/contact")).toBe(true);
  });

  test('returns true for root path ("/") when path is "/" or "/index.html"', () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  test("returns true when current path includes the href", () => {
    expect(isActivePath("/contact", "/about/contact")).toBe(true);
  });

  test("Returns false when paths don't match", () => {
    expect(isActivePath("/contact", "/about")).toBe(false);
  });
});
