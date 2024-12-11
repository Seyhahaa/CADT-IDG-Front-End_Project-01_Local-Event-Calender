import { test, expect } from '@playwright/test';

test.describe('User Navigation Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Mock user authentication
    await page.addInitScript(() => {
      window.localStorage.setItem('user', JSON.stringify({
        id: 2,
        name: 'Regular User',
        role: 'user'
      }));
    });
  });

  test('should navigate through user routes correctly', async ({ page }) => {
    // Visit user dashboard
    await page.goto('/user');
    await expect(page.url()).toContain('/user');
    await expect(page.locator('h1')).toContainText('Dashboard');

    // Navigate to Events page
    await page.getByText('Events').click();
    await expect(page.url()).toContain('/user/events');
    await expect(page.locator('h1')).toContainText('Events');

    // Navigate to Schedule page
    await page.getByText('Schedule').click();
    await expect(page.url()).toContain('/user/schedule');
    await expect(page.locator('h1')).toContainText('Schedule');

    // Navigate to Favorites page
    await page.getByText('Favorites').click();
    await expect(page.url()).toContain('/user/favorites');
    await expect(page.locator('h1')).toContainText('Favorites');

    // Navigate to Calendar page
    await page.getByText('Calendar').click();
    await expect(page.url()).toContain('/user/calendar');
    await expect(page.locator('h1')).toContainText('Calendar');
  });

  test('should navigate through user menu correctly', async ({ page }) => {
    await page.goto('/user');

    // Open user menu
    await page.getByTestId('user-menu-button').click();

    // Check profile links
    await expect(page.getByText('Your Profile')).toBeVisible();
    await expect(page.getByText('Settings')).toBeVisible();
    await expect(page.getByText('Admin Page')).toBeVisible();
    await expect(page.getByText('Sign out')).toBeVisible();

    // Navigate to profile
    await page.getByText('Your Profile').click();
    await expect(page.url()).toContain('/user/profile');
  });

  test('should handle user settings navigation correctly', async ({ page }) => {
    await page.goto('/user/settings');

    // Check settings navigation
    await page.getByText('Security').click();
    await expect(page.url()).toContain('/user/settings/security');

    await page.getByText('Notifications').click();
    await expect(page.url()).toContain('/user/settings/notifications');

    await page.getByText('Privacy').click();
    await expect(page.url()).toContain('/user/settings/privacy');
  });

  test('should handle become organizer flow', async ({ page }) => {
    await page.goto('/user');

    // Navigate to become organizer page
    await page.getByText('Become an Organizer').click();
    await expect(page.url()).toContain('/user/become-organizer');

    // Fill out the form (assuming these fields exist)
    await page.getByLabel('Organization Name').fill('Test Organization');
    await page.getByLabel('Description').fill('Test Description');
    await page.getByRole('button', { name: 'Submit' }).click();

    // Should redirect to organizer dashboard after approval
    await expect(page.url()).toContain('/user/organizer/dashboard');
  });

  test('should handle responsive navigation on mobile', async ({ page }) => {
    // Test mobile navigation
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/user');

    // Mobile menu should be hidden initially
    await expect(page.getByTestId('mobile-menu')).toBeHidden();

    // Open mobile menu
    await page.getByTestId('mobile-menu-button').click();
    await expect(page.getByTestId('mobile-menu')).toBeVisible();

    // Navigation should work in mobile menu
    await page.getByText('Events').click();
    await expect(page.url()).toContain('/user/events');
  });
});
