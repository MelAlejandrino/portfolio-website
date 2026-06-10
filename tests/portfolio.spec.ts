import { test, expect } from "@playwright/test";

test("portfolio page loads", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Mel Alejandrino/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Mel Alejandrino"
  );
});

test("hero section has contact links", async ({ page }) => {
  await page.goto("/");

  const nav = page.getByRole("navigation", { name: "Contact links" });
  await expect(nav.getByRole("link", { name: /github/i })).toBeVisible();
  await expect(nav.getByRole("link", { name: /linkedin/i })).toBeVisible();
  await expect(nav.getByRole("link", { name: /email/i })).toBeVisible();
});

test("experience section renders", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Web Developer" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Syntactics Inc. website" })
  ).toBeVisible();
});

test("projects section has accordions", async ({ page }) => {
  await page.goto("/");

  const clientWork = page.locator("summary", { hasText: "Client work" });
  const personal = page.locator("summary", {
    hasText: "Personal projects",
  });
  await expect(clientWork).toBeVisible();
  await expect(personal).toBeVisible();
});
