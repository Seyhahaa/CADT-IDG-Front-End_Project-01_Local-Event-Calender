import { test, expect } from '@playwright/test';

test.describe('Navigation Tests', () => {
    test.beforeEach(async ({ page }) => {
        // Mock user authentication
        await page.addInitScript(() => {
            window.localStorage.setItem(
                'user',
                JSON.stringify({
                    id: 1,
                    name: 'Test User',
                    role: 'admin',
                })
            );
        });
    });

    test.only('should navigate through admin routes correctly', async ({ page }) => {
        // Visit admin dashboard
        await page.goto('/admin');
        await expect(page.url()).toContain('/admin');
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

        // Navigate to Users page
        await page.getByRole('link', { name: 'Users' }).click();
        await expect(page.url()).toContain('/admin/users');
        await expect(page.getByRole('heading', { name: 'Users Management' })).toBeVisible();

        // Navigate to Events page
        await page.getByRole('link', { name: 'Events' }).click();
        await expect(page.url()).toContain('/admin/events');
        await expect(page.getByRole('heading', { name: 'Events' })).toBeVisible();

        // Navigate to Categories page
        await page.getByRole('link', { name: 'Categories' }).click();
        await expect(page.url()).toContain('/admin/categories');
        await expect(page.getByRole('heading', { name: 'Categories' })).toBeVisible();
    });

    test('should navigate through user navigation menu correctly', async ({ page }) => {
        await page.goto('/admin');

        // Open user menu
        await page.getByTestId('user-menu-button').click();

        // Check profile links
        await expect(page.getByText('Your Profile')).toBeVisible();
        await expect(page.getByText('Settings')).toBeVisible();
        await expect(page.getByText('User Page')).toBeVisible();
        await expect(page.getByText('Sign out')).toBeVisible();

        // Navigate to profile
        await page.getByText('Your Profile').click();
        await expect(page.url()).toContain('/admin/profile');
    });

    test('should handle settings navigation correctly', async ({ page }) => {
        await page.goto('/admin/settings');

        // Check settings navigation
        await page.getByText('Security').click();
        await expect(page.url()).toContain('/admin/settings/security');

        await page.getByText('Notifications').click();
        await expect(page.url()).toContain('/admin/settings/notifications');

        await page.getByText('Privacy').click();
        await expect(page.url()).toContain('/admin/settings/privacy');
    });

    test('should handle sign out correctly', async ({ page }) => {
        await page.goto('/admin');

        // Open user menu and click sign out
        await page.getByTestId('user-menu-button').click();
        await page.getByText('Sign out').click();

        // Should redirect to login page
        await expect(page.url()).toContain('/login');

        // Local storage should be cleared
        const userStorage = await page.evaluate(() => window.localStorage.getItem('user'));
        expect(userStorage).toBeNull();
    });

    test('should handle responsive navigation', async ({ page }) => {
        // Test mobile navigation
        await page.setViewportSize({ width: 375, height: 667 });
        await page.goto('/admin');

        // Mobile menu should be hidden initially
        await expect(page.getByTestId('mobile-menu')).toBeHidden();

        // Open mobile menu
        await page.getByTestId('mobile-menu-button').click();
        await expect(page.getByTestId('mobile-menu')).toBeVisible();

        // Navigation should work in mobile menu
        await page.getByText('Users').click();
        await expect(page.url()).toContain('/admin/users');
    });
});
