import { describe, expect, it } from "vitest";
import { navigation, site } from "./site";

describe("site identity", () => {
  it("uses the approved brand name and tagline", () => {
    expect(site.name).toBe("PAKO Analytics");
    expect(site.tagline).toBe("Thoughtful software for real-world problems.");
  });

  it("provides one navigation entry for each required route", () => {
    expect(navigation.map(({ href }) => href)).toEqual([
      "/",
      "/about",
      "/products",
      "/portfolio",
      "/contact",
    ]);
  });
});
