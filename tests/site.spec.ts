import { expect, test } from "@playwright/test";

test("homepage shows the PAKO identity and DrillCanvas alpha status", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page).toHaveTitle("PAKO Analytics");
  await expect(
    page.getByRole("heading", {
      name: "Thoughtful software for real-world problems.",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Explore Our Products" }),
  ).toHaveAttribute("href", "/products");
  await expect(page.getByText("Closed alpha")).toBeVisible();
});

test("every required route renders", async ({ page }) => {
  for (const [path, heading] of [
    ["/about", "Independent by design."],
    ["/products", "Software in progress."],
    ["/portfolio", "Selected work."],
    ["/contact", "Get in touch."],
  ]) {
    await page.goto(path);
    await expect(page.getByRole("heading", { name: heading })).toBeVisible();
  }
});

test("mobile navigation opens and closes accessibly", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const toggle = page.getByRole("button", { name: "Open navigation" });
  const navigation = page.getByRole("navigation", {
    name: "Primary navigation",
  });

  await expect(toggle).toBeVisible();
  await expect(navigation).toBeHidden();
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await expect(navigation).toBeVisible();
  await page.getByRole("link", { name: "Products", exact: true }).click();
  await expect(page).toHaveURL("/products");
  await expect(
    page.getByRole("navigation", { name: "Primary navigation" }),
  ).toBeHidden();
});
