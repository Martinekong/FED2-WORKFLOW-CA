import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("navigates to home page, then to venue page", async ({ page }) => {
    await page.getByRole("link", { name: "Home" }).click();
    await expect(page).toHaveURL(/\/$/);

    await page.waitForSelector("#venue-container");
    const venueContainer = page.locator("#venue-container");
    await expect(venueContainer).toBeVisible();

    const firstVenue = venueContainer.locator("a").first();
    await firstVenue.click();

    await expect(page).toHaveURL(/\/venue\/\?id=.+/);

    await expect(
      page.getByRole("heading", { name: /Venue details/i }),
    ).toBeVisible();
  });
});
