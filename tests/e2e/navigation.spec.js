import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("navigates to the home page", async ({ page }) => {
    await page.getByRole("link", { name: "Home" }).click();
    await expect(page).toHaveURL(/\/$/);
  });

  test("waits for the venue list to load", async ({ page }) => {
    await page.waitForSelector("#venue-container");
    await expect(page.locator("#venue-container")).toBeVisible();
  });

  test("clicks the first venue", async ({ page }) => {
    await page.waitForSelector("#venue-container");
    const firstVenue = page.locator("#venue-container a").first();
    await firstVenue.click();

    await expect(page).toHaveURL(/\/venue\/\?id=.+/);
  });

  test('shows "venue details" in heading on details page', async ({ page }) => {
    await page.locator("#venue-container a").first().click();

    await expect(
      page.getByRole("heading", { name: /Venue details/i }),
    ).toBeVisible();
  });
});
